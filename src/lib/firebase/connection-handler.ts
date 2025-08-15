/**
 * Firebase Connection Handler
 * 
 * Provides robust connection handling, retry logic, and network error recovery
 * for Firebase authentication and Firestore operations.
 */

import { FirebaseError } from 'firebase/app';
import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';

export interface ConnectionConfig {
  maxRetries: number;
  retryDelay: number;
  timeoutMs: number;
}

export const DEFAULT_CONNECTION_CONFIG: ConnectionConfig = {
  maxRetries: 3,
  retryDelay: 1000,
  timeoutMs: 10000,
};

export class FirebaseConnectionError extends Error {
  constructor(
    message: string,
    public readonly originalError?: Error,
    public readonly code?: string
  ) {
    super(message);
    this.name = 'FirebaseConnectionError';
  }
}

/**
 * Check if the current environment has network connectivity
 */
export function checkNetworkConnectivity(): boolean {
  if (typeof navigator === 'undefined') {
    // Server-side, assume connected
    return true;
  }
  
  return navigator.onLine;
}

/**
 * Wait for network connectivity to be restored
 */
export function waitForNetworkConnectivity(timeoutMs: number = 30000): Promise<boolean> {
  return new Promise((resolve) => {
    if (checkNetworkConnectivity()) {
      resolve(true);
      return;
    }

    const timeout = setTimeout(() => {
      window.removeEventListener('online', onOnline);
      resolve(false);
    }, timeoutMs);

    const onOnline = () => {
      clearTimeout(timeout);
      window.removeEventListener('online', onOnline);
      resolve(true);
    };

    window.addEventListener('online', onOnline);
  });
}

/**
 * Check if an error is network-related
 */
export function isNetworkError(error: any): boolean {
  if (!error) return false;

  const networkCodes = [
    'auth/network-request-failed',
    'auth/timeout',
    'auth/internal-error',
    'auth/web-storage-unsupported',
    'firestore/unavailable',
    'storage/retry-limit-exceeded',
  ];

  const networkMessages = [
    'network',
    'timeout',
    'connection',
    'fetch',
    'cors',
    'failed to fetch',
    'load failed',
    'network error',
    'connection refused',
    'connection timed out',
  ];

  return (
    networkCodes.includes(error.code) ||
    networkMessages.some(msg => 
      error.message?.toLowerCase().includes(msg) ||
      error.toString?.()?.toLowerCase().includes(msg)
    ) ||
    error.name === 'NetworkError' ||
    error.name === 'TypeError' && error.message?.includes('fetch')
  );
}

/**
 * Sleep for a specified duration
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Retry a Firebase operation with exponential backoff
 */
export async function retryFirebaseOperation<T>(
  operation: () => Promise<T>,
  config: Partial<ConnectionConfig> = {}
): Promise<T> {
  const { maxRetries, retryDelay, timeoutMs } = { ...DEFAULT_CONNECTION_CONFIG, ...config };
  
  let lastError: Error | null = null;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      // Check network connectivity before attempting
      if (!checkNetworkConnectivity()) {
        throw new FirebaseConnectionError(
          'No network connectivity detected',
          undefined,
          'auth/network-request-failed'
        );
      }

      // Create a timeout promise
      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => {
          reject(new FirebaseConnectionError(
            `Operation timed out after ${timeoutMs}ms`,
            undefined,
            'auth/timeout'
          ));
        }, timeoutMs);
      });

      // Race the operation against the timeout
      const result = await Promise.race([
        operation(),
        timeoutPromise
      ]);

      return result;
    } catch (error: any) {
      lastError = error;
      
      // If it's not a network error, don't retry
      if (!isNetworkError(error)) {
        throw error;
      }

      // If this was the last attempt, throw the error
      if (attempt === maxRetries) {
        throw new FirebaseConnectionError(
          `Firebase operation failed after ${maxRetries + 1} attempts`,
          error,
          error.code
        );
      }

      // Wait for network connectivity if offline
      if (!checkNetworkConnectivity()) {
        const networkRestored = await waitForNetworkConnectivity(10000);
        if (!networkRestored) {
          throw new FirebaseConnectionError(
            'Network connectivity could not be restored',
            error,
            'auth/network-request-failed'
          );
        }
      }

      // Exponential backoff delay
      const delay = retryDelay * Math.pow(2, attempt);
      await sleep(delay);
    }
  }

  throw lastError || new FirebaseConnectionError('Unknown error occurred');
}

/**
 * Enhanced Firebase Auth operations with retry logic
 */
export class EnhancedFirebaseAuth {
  constructor(
    private auth: Auth,
    private config: Partial<ConnectionConfig> = {}
  ) {}

  async signInWithEmailAndPassword(email: string, password: string) {
    const { signInWithEmailAndPassword } = await import('firebase/auth');
    
    return retryFirebaseOperation(
      () => signInWithEmailAndPassword(this.auth, email, password),
      this.config
    );
  }

  async signOut() {
    const { signOut } = await import('firebase/auth');
    
    return retryFirebaseOperation(
      () => signOut(this.auth),
      this.config
    );
  }

  async sendPasswordResetEmail(email: string) {
    const { sendPasswordResetEmail } = await import('firebase/auth');
    
    return retryFirebaseOperation(
      () => sendPasswordResetEmail(this.auth, email),
      this.config
    );
  }
}

/**
 * Enhanced Firestore operations with retry logic
 */
export class EnhancedFirestore {
  constructor(
    private db: Firestore,
    private config: Partial<ConnectionConfig> = {}
  ) {}

  async getDoc(docRef: any) {
    const { getDoc } = await import('firebase/firestore');
    
    return retryFirebaseOperation(
      () => getDoc(docRef),
      this.config
    );
  }

  async setDoc(docRef: any, data: any, options?: any) {
    const { setDoc } = await import('firebase/firestore');
    
    return retryFirebaseOperation(
      () => setDoc(docRef, data, options),
      this.config
    );
  }

  async updateDoc(docRef: any, data: any) {
    const { updateDoc } = await import('firebase/firestore');
    
    return retryFirebaseOperation(
      () => updateDoc(docRef, data),
      this.config
    );
  }

  async deleteDoc(docRef: any) {
    const { deleteDoc } = await import('firebase/firestore');
    
    return retryFirebaseOperation(
      () => deleteDoc(docRef),
      this.config
    );
  }

  async getDocs(query: any) {
    const { getDocs } = await import('firebase/firestore');
    
    return retryFirebaseOperation(
      () => getDocs(query),
      this.config
    );
  }
}

/**
 * Create enhanced Firebase instances with connection handling
 */
export function createEnhancedAuth(auth: Auth, config?: Partial<ConnectionConfig>) {
  return new EnhancedFirebaseAuth(auth, config);
}

export function createEnhancedFirestore(db: Firestore, config?: Partial<ConnectionConfig>) {
  return new EnhancedFirestore(db, config);
}

/**
 * Network status monitoring
 */
export class NetworkStatusMonitor {
  private listeners: Array<(online: boolean) => void> = [];
  private isOnline: boolean = true;

  constructor() {
    if (typeof window !== 'undefined') {
      this.isOnline = navigator.onLine;
      window.addEventListener('online', this.handleOnline);
      window.addEventListener('offline', this.handleOffline);
    }
  }

  private handleOnline = () => {
    this.isOnline = true;
    this.notifyListeners(true);
  };

  private handleOffline = () => {
    this.isOnline = false;
    this.notifyListeners(false);
  };

  private notifyListeners(online: boolean) {
    this.listeners.forEach(listener => {
      try {
        listener(online);
      } catch (error) {
        console.error('Error in network status listener:', error);
      }
    });
  }

  onStatusChange(listener: (online: boolean) => void) {
    this.listeners.push(listener);
    
    // Return unsubscribe function
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  getStatus(): boolean {
    return this.isOnline;
  }

  destroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('online', this.handleOnline);
      window.removeEventListener('offline', this.handleOffline);
    }
    this.listeners = [];
  }
}

// Global network status monitor instance
export const networkMonitor = new NetworkStatusMonitor();
