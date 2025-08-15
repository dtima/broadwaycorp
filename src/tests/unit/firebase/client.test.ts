import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Mock Firebase modules
vi.mock('firebase/app', () => ({
  initializeApp: vi.fn(),
  getApps: vi.fn(),
}));

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(),
  connectAuthEmulator: vi.fn(),
}));

vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(),
  connectFirestoreEmulator: vi.fn(),
}));

vi.mock('firebase/storage', () => ({
  getStorage: vi.fn(),
}));

// Mock console.error to test error handling
const mockConsoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

describe('Firebase Client Configuration', () => {
  const originalEnv = process.env;
  
  beforeEach(() => {
    vi.clearAllMocks();
    process.env = { ...originalEnv };
    
    // Reset modules to ensure fresh imports
    vi.resetModules();
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.resetAllMocks();
  });

  describe('getFirebaseApp', () => {
    it('should initialize Firebase app with correct configuration', async () => {
      // Set up environment variables
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY = 'test-api-key';
      process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = 'test-project.firebaseapp.com';
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID = 'test-project';
      process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = 'test-project.appspot.com';
      process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = '123456789';
      process.env.NEXT_PUBLIC_FIREBASE_APP_ID = '1:123456789:web:abcdef';
      process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID = 'G-XXXXXXXXXX';

      const mockApp = { name: 'test-app' };
      (getApps as any).mockReturnValue([]);
      (initializeApp as any).mockReturnValue(mockApp);

      // Import after setting env vars
      const { getFirebaseApp } = await import('@/lib/firebase/client');
      
      const app = getFirebaseApp();

      expect(initializeApp).toHaveBeenCalledWith({
        apiKey: 'test-api-key',
        authDomain: 'test-project.firebaseapp.com',
        projectId: 'test-project',
        storageBucket: 'test-project.appspot.com',
        messagingSenderId: '123456789',
        appId: '1:123456789:web:abcdef',
        measurementId: 'G-XXXXXXXXXX',
      });

      expect(app).toBe(mockApp);
    });

    it('should reuse existing Firebase app if already initialized', async () => {
      const existingApp = { name: 'existing-app' };
      (getApps as any).mockReturnValue([existingApp]);

      const { getFirebaseApp } = await import('@/lib/firebase/client');
      
      const app = getFirebaseApp();

      expect(initializeApp).not.toHaveBeenCalled();
      expect(app).toBe(existingApp);
    });

    it('should log error when Firebase environment variables are missing', async () => {
      // Clear Firebase env vars
      delete process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
      
      const mockApp = { name: 'test-app' };
      (getApps as any).mockReturnValue([]);
      (initializeApp as any).mockReturnValue(mockApp);

      const { getFirebaseApp } = await import('@/lib/firebase/client');
      
      getFirebaseApp();

      expect(mockConsoleError).toHaveBeenCalledWith(
        'Missing Firebase env vars. Check .env.local for NEXT_PUBLIC_FIREBASE_* values and restart dev server.'
      );
    });
  });

  describe('firebaseAuth', () => {
    it('should return Firebase Auth instance', async () => {
      const mockApp = { name: 'test-app' };
      const mockAuth = { app: mockApp };
      
      (getApps as any).mockReturnValue([mockApp]);
      (getAuth as any).mockReturnValue(mockAuth);

      const { firebaseAuth } = await import('@/lib/firebase/client');
      
      const auth = firebaseAuth();

      expect(getAuth).toHaveBeenCalledWith(mockApp);
      expect(auth).toBe(mockAuth);
    });

    it('should connect to auth emulator in development with emulator enabled', async () => {
      process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS = 'true';
      vi.stubEnv('NODE_ENV', 'development');

      const mockApp = { name: 'test-app' };
      const mockAuth = { app: mockApp, _canInitEmulator: true };
      
      (getApps as any).mockReturnValue([mockApp]);
      (getAuth as any).mockReturnValue(mockAuth);

      const { firebaseAuth } = await import('@/lib/firebase/client');
      
      firebaseAuth();

      expect(connectAuthEmulator).toHaveBeenCalledWith(mockAuth, 'http://127.0.0.1:9099');
    });

    it('should not connect to auth emulator in production', async () => {
      process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS = 'true';
      vi.stubEnv('NODE_ENV', 'production');

      const mockApp = { name: 'test-app' };
      const mockAuth = { app: mockApp };
      
      (getApps as any).mockReturnValue([mockApp]);
      (getAuth as any).mockReturnValue(mockAuth);

      const { firebaseAuth } = await import('@/lib/firebase/client');
      
      firebaseAuth();

      expect(connectAuthEmulator).not.toHaveBeenCalled();
    });

    it('should handle emulator connection errors gracefully', async () => {
      process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS = 'true';
      vi.stubEnv('NODE_ENV', 'development');

      const mockApp = { name: 'test-app' };
      const mockAuth = { app: mockApp, _canInitEmulator: false };
      
      (getApps as any).mockReturnValue([mockApp]);
      (getAuth as any).mockReturnValue(mockAuth);
      (connectAuthEmulator as any).mockImplementation(() => {
        throw new Error('Emulator connection failed');
      });

      const { firebaseAuth } = await import('@/lib/firebase/client');
      
      // Should not throw error
      expect(() => firebaseAuth()).not.toThrow();
    });
  });

  describe('firestore', () => {
    it('should return Firestore instance', async () => {
      const mockApp = { name: 'test-app' };
      const mockFirestore = { app: mockApp };
      
      (getApps as any).mockReturnValue([mockApp]);
      (getFirestore as any).mockReturnValue(mockFirestore);

      const { firestore } = await import('@/lib/firebase/client');
      
      const db = firestore();

      expect(getFirestore).toHaveBeenCalledWith(mockApp);
      expect(db).toBe(mockFirestore);
    });

    it('should connect to Firestore emulator in development', async () => {
      process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS = 'true';
      vi.stubEnv('NODE_ENV', 'development');

      const mockApp = { name: 'test-app' };
      const mockFirestore = { app: mockApp, _delegate: { _terminated: false } };
      
      (getApps as any).mockReturnValue([mockApp]);
      (getFirestore as any).mockReturnValue(mockFirestore);

      const { firestore } = await import('@/lib/firebase/client');
      
      firestore();

      expect(connectFirestoreEmulator).toHaveBeenCalledWith(mockFirestore, '127.0.0.1', 8080);
    });
  });

  describe('storage', () => {
    it('should return Firebase Storage instance', async () => {
      const mockApp = { name: 'test-app' };
      const mockStorage = { app: mockApp };
      
      (getApps as any).mockReturnValue([mockApp]);
      (getStorage as any).mockReturnValue(mockStorage);

      const { storage } = await import('@/lib/firebase/client');
      
      const storageInstance = storage();

      expect(getStorage).toHaveBeenCalledWith(mockApp);
      expect(storageInstance).toBe(mockStorage);
    });
  });

  describe('Network Connectivity Issues', () => {
    it('should handle network connectivity problems gracefully', async () => {
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY = 'test-api-key';
      process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = 'test-project.firebaseapp.com';
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID = 'test-project';

      const mockApp = { name: 'test-app' };
      (getApps as any).mockReturnValue([]);
      (initializeApp as any).mockReturnValue(mockApp);

      const { getFirebaseApp } = await import('@/lib/firebase/client');
      
      // Should not throw even if Firebase services are unreachable
      expect(() => getFirebaseApp()).not.toThrow();
    });

    it('should provide helpful error message for missing configuration', async () => {
      // Clear all Firebase env vars to simulate missing configuration
      delete process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
      delete process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
      delete process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

      const mockApp = { name: 'test-app' };
      (getApps as any).mockReturnValue([]);
      (initializeApp as any).mockReturnValue(mockApp);

      const { getFirebaseApp } = await import('@/lib/firebase/client');
      
      getFirebaseApp();

      expect(mockConsoleError).toHaveBeenCalledWith(
        expect.stringContaining('Missing Firebase env vars')
      );
    });
  });

  describe('Environment Configuration', () => {
    it('should handle partial environment variable configuration', async () => {
      // Set only some Firebase env vars
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY = 'test-api-key';
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID = 'test-project';
      // Missing other required vars

      const mockApp = { name: 'test-app' };
      (getApps as any).mockReturnValue([]);
      (initializeApp as any).mockReturnValue(mockApp);

      const { getFirebaseApp } = await import('@/lib/firebase/client');
      
      const app = getFirebaseApp();

      expect(initializeApp).toHaveBeenCalledWith({
        apiKey: 'test-api-key',
        authDomain: undefined,
        projectId: 'test-project',
        storageBucket: undefined,
        messagingSenderId: undefined,
        appId: undefined,
        measurementId: undefined,
      });

      expect(app).toBe(mockApp);
    });

    it('should handle empty string environment variables', async () => {
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY = '';
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID = 'test-project';

      const mockApp = { name: 'test-app' };
      (getApps as any).mockReturnValue([]);
      (initializeApp as any).mockReturnValue(mockApp);

      const { getFirebaseApp } = await import('@/lib/firebase/client');
      
      getFirebaseApp();

      expect(mockConsoleError).toHaveBeenCalledWith(
        expect.stringContaining('Missing Firebase env vars')
      );
    });
  });
});
