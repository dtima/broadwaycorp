# Dynamic Error Resolution Guide for PushNchat Development

This document provides a systematic approach for AI agents to identify, analyze, and resolve errors that may occur during the implementation of the PushNchat platform.

## Error Resolution Framework

When encountering errors during development of PushNchat features, follow this structured approach to efficiently diagnose and resolve them:

## 1. Error Classification

First, identify the category of error you're dealing with:

| Error Category | Description | Common Signs |
|----------------|-------------|-------------|
| **Compilation Errors** | Errors that prevent code from compiling | TypeScript errors, syntax errors, build failures |
| **Runtime Errors** | Errors that occur during execution | JavaScript exceptions, React render errors, white screens |
| **Network Errors** | Issues with API calls or resources | Failed fetch requests, 4xx/5xx responses, timeout errors |
| **Authentication Errors** | Issues with authentication flows | Invalid tokens, unauthorized errors, session issues |
| **Rendering Errors** | Problems with UI display | Layout issues, component errors, hydration errors |
| **State Management Errors** | Issues with application state | Inconsistent UI states, unexpected behavior, race conditions |
| **Performance Issues** | Problems with application performance | Slow rendering, memory leaks, excessive re-renders |
| **Package Dependencies** | Issues with npm packages | Version conflicts, missing dependencies, broken imports |

## 2. Error Information Gathering

For each error, collect the following information:

### Compilation/Build Errors
- Full error message and stack trace
- File and line number where the error occurs
- Recent code changes that might have triggered the error
- Related package dependencies and versions

### Runtime Errors
- Error message and stack trace
- Browser console logs
- Component tree at time of error
- Steps to reproduce the error
- Network activity at time of error

### Network Errors
- Request URL and method
- Request payload and headers
- Response status code and body
- Network timing information
- Any CORS or security-related messages

## 3. Technology-Specific Error Patterns

### Next.js Common Errors

#### Hydration Errors
```
Error: Hydration failed because the initial UI does not match what was rendered on the server.
```

**Investigation Steps:**
1. Check for components that render differently on server vs. client
2. Look for usage of browser-only APIs without proper guards
3. Verify that no components depend on random values or time-dependent results
4. Check for proper handling of user-specific content

**Resolution Strategies:**
- Wrap browser-only code in `useEffect` hooks
- Use `suppressHydrationWarning` for intentional mismatches
- Implement `dynamic` imports with `{ ssr: false }` for client-only components
- Use the `useClient` directive appropriately in the App Router

#### Route Resolution Errors
```
Error: A route has been added without a Page. Pages are required for the route to function correctly.
```

**Investigation Steps:**
1. Check route file structure in app/ or pages/ directory
2. Verify exports from page files (default export is required)
3. Look for syntax errors in route files

**Resolution Strategies:**
- Ensure proper file naming conventions in the pages directory
- Add required default exports to page files
- Check dynamic route segment syntax

### React Query Errors

#### Stale Data Issues
```
Warning: Can't perform a React state update on an unmounted component.
```

**Investigation Steps:**
1. Check query configuration for proper caching settings
2. Verify cleanup on component unmount
3. Look for race conditions in mutation handlers

**Resolution Strategies:**
- Add appropriate `staleTime` and `cacheTime` settings
- Implement proper cancellation with `useEffect` cleanup
- Use `{ enabled: false }` for conditional queries

#### Query Key Issues
```
Error: No QueryClient set, use QueryClientProvider to set one
```

**Investigation Steps:**
1. Check for proper QueryClientProvider setup
2. Verify query key structure and consistency
3. Look for missing query client configuration

**Resolution Strategies:**
- Ensure QueryClientProvider wraps the application
- Implement consistent query key factories
- Check for proper initialization of query client

### Firebase Authentication Errors

#### Configuration Errors
```
Firebase: Error (auth/configuration-not-found).
```

**Investigation Steps:**
1. Check Firebase initialization code
2. Verify environment variables for Firebase config
3. Confirm Firebase project settings in console

**Resolution Strategies:**
- Verify API keys and project IDs in environment variables
- Check that the Firebase app is initialized before use
- Ensure the authentication service is enabled in Firebase console

#### Token Errors
```
Firebase: Error (auth/id-token-expired).
```

**Investigation Steps:**
1. Check token refresh logic
2. Verify token expiration handling
3. Look for issues in authentication state persistence

**Resolution Strategies:**
- Implement proper token refresh mechanisms
- Add error handling for expired tokens
- Use the appropriate persistence level for authentication state

### NextAuth.js Errors

#### Session Errors
```
Error: Unable to get session data. Please check your session configuration.
```

**Investigation Steps:**
1. Check NextAuth.js configuration
2. Verify session strategy and settings
3. Look for issues with custom providers

**Resolution Strategies:**
- Review NextAuth.js configuration options
- Ensure proper adapter setup for databases
- Check session cookie settings
- Verify custom provider implementation

#### Provider Errors
```
Error: Provider configuration is required. Please add a configuration object to the provider.
```

**Investigation Steps:**
1. Check provider configuration in NextAuth.js setup
2. Verify environment variables for provider credentials
3. Confirm provider API is working correctly

**Resolution Strategies:**
- Add proper configuration for each provider
- Verify client IDs and secrets in environment variables
- Check for provider API changes or deprecations

### Tailwind CSS Errors

#### Missing Styles
```
Warning: Class "xyz" does not exist in your project's Tailwind CSS configuration.
```

**Investigation Steps:**
1. Check for proper Tailwind configuration
2. Verify class names for typos
3. Look for custom class definitions

**Resolution Strategies:**
- Update tailwind.config.js with proper content paths
- Check for proper Tailwind directives in CSS
- Verify PurgeCSS settings are not too aggressive

## 4. African Market-Specific Considerations

When resolving errors, consider these factors specific to the African market context:

### Network Resilience
- Test fixes under simulated low bandwidth conditions (2G/3G)
- Implement offline-first approaches for critical features
- Add retry logic with exponential backoff for network requests

### Device Compatibility
- Test on low-end device profiles (1GB RAM, older browsers)
- Ensure JavaScript polyfills for older browsers
- Optimize bundle size for limited storage devices

### Image and Media Handling
- Add fallbacks for failed image loads
- Implement progressive image loading
- Optimize media assets for bandwidth conservation

## 5. Error Resolution Decision Tree

Use this decision tree to guide your error resolution approach:

```
1. Is the error consistent and reproducible?
   ├── YES → Proceed to systematic debugging
   └── NO → Implement logging to capture intermittent issues
       
2. Is it a build/compilation error?
   ├── YES → Focus on syntax, types, and dependencies
   └── NO → Continue to runtime analysis
   
3. Does the error occur only in production?
   ├── YES → Check for environment-specific issues
   └── NO → Check for development-specific configuration
   
4. Is it related to an external service/API?
   ├── YES → Verify service status and implement fallbacks
   └── NO → Focus on internal code issues
   
5. Does the error affect critical user flows?
   ├── YES → Prioritize immediate fixes with fallbacks
   └── NO → Document for systematic resolution
```

## 6. Implementation Strategy

Follow these steps to implement error fixes:

1. **Isolate the Problem**
   - Create a minimal reproduction case
   - Test the issue in isolation if possible
   - Identify the specific component or function causing the error

2. **Research Standard Solutions**
   - Check official documentation for the related technology
   - Search for known issues in GitHub issues or Stack Overflow
   - Review the PushNchat documentation for precedents

3. **Implement the Fix**
   - Start with the least invasive solution
   - Make focused changes to address the specific error
   - Add appropriate error handling for similar cases
   - Include comments explaining the fix for future reference

4. **Verify the Solution**
   - Test the fix thoroughly in different conditions
   - Verify that no new issues are introduced
   - Test for edge cases and boundary conditions
   - Check for performance implications

5. **Document the Resolution**
   - Update code comments with explanation
   - If applicable, update project documentation
   - Record the solution for similar future issues

## 7. Common PushNchat-Specific Error Scenarios and Solutions

### NextAuth.js + Firebase Integration Issues

**Error**: `"Error in auth token verification"`

**Cause**: Mismatch between token formats or verification logic between Firebase and NextAuth.js.

**Solution**:
```typescript
// In [...nextauth]/route.ts
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import admin from "@/lib/firebaseAdmin";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Firebase",
      credentials: {
        idToken: { label: "ID Token", type: "text" }
      },
      async authorize(credentials) {
        try {
          // Verify Firebase ID token
          const decoded = await admin.auth().verifyIdToken(credentials.idToken);
          
          // Return user in NextAuth.js expected format
          return {
            id: decoded.uid,
            email: decoded.email,
            name: decoded.name,
            image: decoded.picture
          };
        } catch (error) {
          console.error("Token verification error:", error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    // Add proper token and session callbacks
    async jwt({ token, user }) {
      if (user) {
        token.uid = user.id;
        // Add any custom claims here
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.uid as string;
      }
      return session;
    }
  }
};
```

### Listings Data Fetching Issues

**Error**: `"TypeError: Cannot read properties of undefined (reading 'data')"`

**Cause**: Race condition in data fetching or improper handling of loading states.

**Solution**:
```tsx
// In ListingsGrid.tsx
import { useQuery } from "@tanstack/react-query";
import { fetchListings } from "@/lib/api";
import ListingSkeleton from "@/components/ListingSkeleton";
import ErrorDisplay from "@/components/ErrorDisplay";

export default function ListingsGrid() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["listings"],
    queryFn: fetchListings,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
    retryDelay: (attempt) => Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000),
  });
  
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <ListingSkeleton key={i} />
        ))}
      </div>
    );
  }
  
  if (isError) {
    return (
      <ErrorDisplay 
        message="Unable to load listings"
        error={error}
        retryAction={() => refetch()}
      />
    );
  }
  
  if (!data || data.length === 0) {
    return <div className="p-4 text-center">No listings found</div>;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map(listing => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
```

## 8. Learning from Errors

After resolving each error:

1. **Document the Root Cause**
   - Identify the fundamental issue that led to the error
   - Analyze why existing error handling didn't catch it

2. **Implement Preventative Measures**
   - Add validation to prevent similar errors
   - Implement defensive coding patterns
   - Add appropriate error boundaries or fallbacks

3. **Share Knowledge**
   - Update team documentation with the solution
   - Add comments to code explaining the issue and fix
   - Consider adding automated tests to prevent regression

## Using This Error Resolution Guide

1. When encountering errors, start by classifying the error type
2. Gather comprehensive information about the error
3. Use the technology-specific guidance to identify likely causes
4. Apply the appropriate resolution strategy
5. Test thoroughly in conditions similar to African markets
6. Document the solution for future reference

By following this systematic approach to error resolution, AI agents can more efficiently solve problems during PushNchat development, especially considering the unique requirements of the African market context. 