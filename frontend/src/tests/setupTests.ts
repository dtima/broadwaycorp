import '@testing-library/jest-dom';

// Polyfill for TextEncoder/TextDecoder (required by React Router)
class TextEncoderPolyfill {
  encode(input: string): Uint8Array {
    const utf8 = unescape(encodeURIComponent(input));
    const result = new Uint8Array(utf8.length);
    for (let i = 0; i < utf8.length; i++) {
      result[i] = utf8.charCodeAt(i);
    }
    return result;
  }
}

class TextDecoderPolyfill {
  decode(input?: Uint8Array): string {
    if (!input) return '';
    const bytes = new Uint8Array(input);
    let result = '';
    for (let i = 0; i < bytes.length; i++) {
      result += String.fromCharCode(bytes[i]);
    }
    return decodeURIComponent(escape(result));
  }
}

// @ts-ignore
global.TextEncoder = global.TextEncoder || TextEncoderPolyfill;
// @ts-ignore
global.TextDecoder = global.TextDecoder || TextDecoderPolyfill;

// Mock for ResizeObserver which isn't available in JSDOM
window.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock for IntersectionObserver which isn't available in JSDOM
window.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
  root: null,
  rootMargin: '',
  thresholds: [],
}));

// Mock for window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
}); 