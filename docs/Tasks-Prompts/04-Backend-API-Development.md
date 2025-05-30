# Backend Task: PushNchat RESTful API Development

## Role Assignment
- **Primary**: Backend Developer
- **Support**: CTO

## Objective
Design and implement a comprehensive set of RESTful API endpoints for PushNchat's core features using Fastify on Node.js, ensuring secure, well-documented, and performant interfaces for the frontend and mobile clients.

## Context
PushNchat's backend services need to provide robust APIs for Listings, BizConnect, SME Hub, and Authentication. These APIs must be optimized for mobile-first access and low-bandwidth environments common in African markets. They should follow REST best practices with appropriate security, validation, and error handling.

## Deliverables
1. Complete API implementation for all core modules
2. API documentation with OpenAPI/Swagger
3. Request/response validation schemas using Zod
4. Authentication and authorization middleware
5. Rate limiting and security controls
6. Error handling and standardized response formats
7. Unit and integration tests for all endpoints
8. Performance optimization strategies

## Technical Requirements
- Use Fastify with TypeScript for all API implementations
- Implement API versioning (/api/v1/...)
- Create standardized response formats across all endpoints
- Use bearer token authentication with JWT
- Implement role-based authorization
- Create appropriate middleware for common functions
- Use Zod for request/response validation
- Implement proper error handling and status codes
- Design for acceptable performance in low-bandwidth scenarios

## Core API Modules

### Authentication API
- POST /api/v1/auth/signup - User registration
- POST /api/v1/auth/signin - User authentication
- POST /api/v1/auth/refresh - Token refresh
- POST /api/v1/auth/signout - User logout
- POST /api/v1/auth/password-reset - Password reset
- POST /api/v1/auth/verify-email - Email verification

### User & Profiles API
- GET /api/v1/users/me - Current user profile
- GET /api/v1/users/:id - User profile by ID
- PUT /api/v1/users/me - Update current user
- GET /api/v1/users/me/notifications - User notifications
- PUT /api/v1/users/me/preferences - Update preferences

### Listings API
- GET /api/v1/listings - List all listings with filters
- POST /api/v1/listings - Create new listing
- GET /api/v1/listings/:id - Get listing details
- PUT /api/v1/listings/:id - Update listing
- DELETE /api/v1/listings/:id - Delete listing
- POST /api/v1/listings/:id/media - Upload media to listing
- GET /api/v1/listings/nearby - Get geo-proximate listings
- GET /api/v1/listings/categories - Get listing categories

### BizConnect API
- GET /api/v1/connections - List user connections
- POST /api/v1/connections - Create connection request
- GET /api/v1/connections/:id - Get connection details
- PATCH /api/v1/connections/:id/status - Update connection status
- GET /api/v1/connections/suggestions - Get connection suggestions
- GET /api/v1/connections/markets - Get available markets

### SME Hub API
- GET /api/v1/campaigns - List funding campaigns
- POST /api/v1/campaigns - Create campaign
- GET /api/v1/campaigns/:id - Get campaign details
- PUT /api/v1/campaigns/:id - Update campaign
- POST /api/v1/campaigns/:id/contributions - Make contribution
- GET /api/v1/partners - List verified partners
- GET /api/v1/partners/categories - Get partner categories
- POST /api/v1/partners/application - Apply as partner

## Key Considerations
- Design for optimal performance in variable network conditions
- Implement appropriate caching headers
- Ensure comprehensive input validation for security
- Create detailed error responses for client troubleshooting
- Design clear pagination strategies for list endpoints
- Implement intelligent filtering and search capabilities
- Ensure proper security controls and data protection
- Create clean separation between authentication and API logic

## Expected Outcome
A comprehensive, secure, and well-documented API that enables all core PushNchat features, supports the frontend requirements, and performs efficiently in the target markets. The API should follow best practices for REST design, security, and error handling while providing a solid foundation for mobile and web clients. 