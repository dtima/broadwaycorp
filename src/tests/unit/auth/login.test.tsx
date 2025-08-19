import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useRouter, useParams } from 'next/navigation';
import { signInWithEmailAndPassword, setPersistence } from 'firebase/auth';
import { createSession } from '@/app/(auth)/[locale]/actions/sign-in';
import AdminSignInPage from '@/app/(auth)/[locale]/admin/sign-in/page';

// Mock Next.js navigation
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
  useParams: vi.fn(),
}));

// Mock Firebase auth
vi.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: vi.fn(),
  setPersistence: vi.fn(),
  browserLocalPersistence: {},
  browserSessionPersistence: {},
}));

// Mock Firebase client
vi.mock('@/lib/firebase/client', () => ({
  firebaseAuth: vi.fn(() => ({})),
}));

// Mock server action
vi.mock('@/app/(auth)/[locale]/actions/sign-in', () => ({
  createSession: vi.fn(),
}));

// Mock localStorage
const mockLocalStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

// Mock navigator.onLine
Object.defineProperty(navigator, 'onLine', {
  writable: true,
  value: true,
});

describe('AdminSignInPage', () => {
  const mockPush = vi.fn();
  const mockRouter = { push: mockPush };
  const mockParams = { locale: 'en' };

  beforeEach(() => {
    vi.clearAllMocks();
    (useRouter as any).mockReturnValue(mockRouter);
    (useParams as any).mockReturnValue(mockParams);
    mockLocalStorage.getItem.mockReturnValue(null);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('Component Rendering', () => {
    it('should render login form with all required fields', () => {
      render(<AdminSignInPage />);

      expect(screen.getByText('Admin sign in')).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
      expect(screen.getByLabelText(/remember me/i)).toBeInTheDocument();
    });

    it('should render forgot password link', () => {
      render(<AdminSignInPage />);

      const forgotPasswordLink = screen.getByText(/forgot password/i);
      expect(forgotPasswordLink).toBeInTheDocument();
      expect(forgotPasswordLink.closest('a')).toHaveAttribute('href', '/en/admin/forgot-password');
    });

    it('should pre-fill email from localStorage if available', () => {
      const savedEmail = 'test@broadway-corp.com';
      mockLocalStorage.getItem.mockReturnValue(savedEmail);

      render(<AdminSignInPage />);

      const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
      expect(emailInput.value).toBe(savedEmail);
    });
  });

  describe('Form Validation and Interaction', () => {
    it('should update email and password fields on input', async () => {
      render(<AdminSignInPage />);

      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/password/i);

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });

      expect((emailInput as HTMLInputElement).value).toBe('test@example.com');
      expect((passwordInput as HTMLInputElement).value).toBe('password123');
    });

    it('should toggle password visibility', () => {
      render(<AdminSignInPage />);

      const passwordInput = screen.getByLabelText(/password/i);
      const toggleButton = screen.getByRole('button', { name: /show password/i });

      expect(passwordInput).toHaveAttribute('type', 'password');

      fireEvent.click(toggleButton);
      expect(passwordInput).toHaveAttribute('type', 'text');

      fireEvent.click(toggleButton);
      expect(passwordInput).toHaveAttribute('type', 'password');
    });

    it('should toggle remember me checkbox', () => {
      render(<AdminSignInPage />);

      const rememberCheckbox = screen.getByLabelText(/remember me/i) as HTMLInputElement;

      expect(rememberCheckbox.checked).toBe(false);

      fireEvent.click(rememberCheckbox);
      expect(rememberCheckbox.checked).toBe(true);
    });
  });

  describe('Authentication Flow', () => {
    it('should handle successful login with remember me enabled', async () => {
      const mockUser = { getIdToken: vi.fn().mockResolvedValue('mock-id-token') };
      const mockCredential = { user: mockUser };

      (signInWithEmailAndPassword as any).mockResolvedValue(mockCredential);
      (setPersistence as any).mockResolvedValue(undefined);
      (createSession as any).mockResolvedValue({ ok: true });

      render(<AdminSignInPage />);

      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/password/i);
      const rememberCheckbox = screen.getByLabelText(/remember me/i);
      const submitButton = screen.getByRole('button', { name: /sign in/i });

      fireEvent.change(emailInput, { target: { value: 'test@broadway-corp.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.click(rememberCheckbox);
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
          {},
          'test@broadway-corp.com',
          'password123'
        );
        expect(setPersistence).toHaveBeenCalled();
        expect(createSession).toHaveBeenCalledWith('mock-id-token', 'en');
        expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
          'admin:lastEmail',
          'test@broadway-corp.com'
        );
        expect(mockPush).toHaveBeenCalledWith('/en/admin');
      });
    });

    it('should handle successful login without remember me', async () => {
      const mockUser = { getIdToken: vi.fn().mockResolvedValue('mock-id-token') };
      const mockCredential = { user: mockUser };

      (signInWithEmailAndPassword as any).mockResolvedValue(mockCredential);
      (setPersistence as any).mockResolvedValue(undefined);
      (createSession as any).mockResolvedValue({ ok: true });

      render(<AdminSignInPage />);

      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/password/i);
      const submitButton = screen.getByRole('button', { name: /sign in/i });

      fireEvent.change(emailInput, { target: { value: 'test@broadway-corp.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockLocalStorage.removeItem).toHaveBeenCalledWith('admin:lastEmail');
        expect(mockPush).toHaveBeenCalledWith('/en/admin');
      });
    });
  });

  describe('Error Handling', () => {
    it('should display network error when offline', async () => {
      Object.defineProperty(navigator, 'onLine', { value: false });

      render(<AdminSignInPage />);

      const submitButton = screen.getByRole('button', { name: /sign in/i });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/network error.*check your connection/i)).toBeInTheDocument();
      });
    });

    it('should display network error for auth/network-request-failed', async () => {
      const networkError = new Error('Network failed');
      (networkError as any).code = 'auth/network-request-failed';

      (signInWithEmailAndPassword as any).mockRejectedValue(networkError);

      render(<AdminSignInPage />);

      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/password/i);
      const submitButton = screen.getByRole('button', { name: /sign in/i });

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/network error.*check your connection/i)).toBeInTheDocument();
      });
    });

    it('should display invalid credentials error', async () => {
      const authError = new Error('Invalid credentials');
      (authError as any).code = 'auth/invalid-credential';

      (signInWithEmailAndPassword as any).mockRejectedValue(authError);

      render(<AdminSignInPage />);

      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/password/i);
      const submitButton = screen.getByRole('button', { name: /sign in/i });

      fireEvent.change(emailInput, { target: { value: 'wrong@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/invalid email or password/i)).toBeInTheDocument();
      });
    });

    it('should display too many requests error', async () => {
      const rateLimitError = new Error('Too many requests');
      (rateLimitError as any).code = 'auth/too-many-requests';

      (signInWithEmailAndPassword as any).mockRejectedValue(rateLimitError);

      render(<AdminSignInPage />);

      const submitButton = screen.getByRole('button', { name: /sign in/i });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/too many attempts.*please wait/i)).toBeInTheDocument();
      });
    });

    it('should display generic error for unknown errors', async () => {
      const unknownError = new Error('Unknown error');
      (signInWithEmailAndPassword as any).mockRejectedValue(unknownError);

      render(<AdminSignInPage />);

      const submitButton = screen.getByRole('button', { name: /sign in/i });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/unable to sign in.*please try again/i)).toBeInTheDocument();
      });
    });
  });

  describe('Loading States', () => {
    it('should show loading state during submission', async () => {
      (signInWithEmailAndPassword as any).mockImplementation(
        () => new Promise((resolve) => setTimeout(resolve, 1000))
      );

      render(<AdminSignInPage />);

      const submitButton = screen.getByRole('button', { name: /sign in/i });
      fireEvent.click(submitButton);

      expect(submitButton).toBeDisabled();
      expect(screen.getByText(/signing in/i)).toBeInTheDocument();
    });

    it('should clear error state on new submission', async () => {
      const authError = new Error('Invalid credentials');
      (authError as any).code = 'auth/invalid-credential';

      (signInWithEmailAndPassword as any).mockRejectedValueOnce(authError);

      render(<AdminSignInPage />);

      const submitButton = screen.getByRole('button', { name: /sign in/i });

      // First submission with error
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/invalid email or password/i)).toBeInTheDocument();
      });

      // Second submission should clear error
      (signInWithEmailAndPassword as any).mockImplementation(
        () => new Promise((resolve) => setTimeout(resolve, 100))
      );

      fireEvent.click(submitButton);

      expect(screen.queryByText(/invalid email or password/i)).not.toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper form labels and ARIA attributes', () => {
      render(<AdminSignInPage />);

      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/password/i);
      const submitButton = screen.getByRole('button', { name: /sign in/i });

      expect(emailInput).toHaveAttribute('type', 'email');
      expect(emailInput).toHaveAttribute('autoComplete', 'email');
      expect(emailInput).toBeRequired();

      expect(passwordInput).toHaveAttribute('type', 'password');
      expect(passwordInput).toHaveAttribute('autoComplete', 'current-password');
      expect(passwordInput).toBeRequired();

      expect(submitButton).toHaveAttribute('type', 'submit');
    });

    it('should associate error messages with form fields', async () => {
      const authError = new Error('Invalid credentials');
      (authError as any).code = 'auth/invalid-credential';

      (signInWithEmailAndPassword as any).mockRejectedValue(authError);

      render(<AdminSignInPage />);

      const submitButton = screen.getByRole('button', { name: /sign in/i });
      fireEvent.click(submitButton);

      await waitFor(() => {
        const errorMessage = screen.getByText(/invalid email or password/i);
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveAttribute('role', 'alert');
      });
    });
  });
});
