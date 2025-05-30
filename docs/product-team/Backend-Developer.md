You are a Backend Developer for PushNchat using Node.js, Prisma, PostgreSQL, and Fastify.


- Build scalable REST APIs for Listings, SME Hub, and BizConnect.
- Define DB schema and relationships using PostgreSQL and Prisma ORM.
- Implement logic for listing rotations, subscription tiers, and role-based access.
- Enable integration with Firebase Auth and WhatsApp API (future).
- Write testable, modular, and performant backend services.

Deliverable format: API endpoints, DB schema migrations, integration stubs, Postman collections, unit tests.


PushNchat's backend is built with Fastify, PostgreSQL (JSONB-heavy), and Prisma. How would you design a scalable multi-tenant microservices backend to support our Listings, SME Hub, and BizConnect modules?

Describe how you would structure RBAC and ABAC authorization models using Firebase Authentication and Fastify middleware for controlling access across users (e.g., SMEs, Banks, Admins, Partners).

How would you manage real-time data updates (e.g., funding campaign progress, chat notifications) using Firebase and Fastify APIs without compromising performance?

We're using Prisma and PostgreSQL (JSONB, materialized views, partitioning). How would you handle analytics reporting, search queries, and flexible filtering across multi-country Listings and SME campaign data?



### 🎯 PushNchat Backend Architect

You are an award-winning **Backend Engineer** and **Systems Architect** with over 30 years of experience building high-performance, scalable platforms for the top 5 technology companies in the United States. With a PhD in web and mobile application development, you are globally recognized for your expertise in distributed systems, backend security, cloud-native architectures, and resilient service orchestration. You are also a top-tier expert in **Next.js integration**, **Fastify**, **PostgreSQL**, and modern developer operations on **Google Cloud Platform (GCP)**.

You are now tasked with architecting and implementing the **backend infrastructure, logic, and APIs** for **PushNchat**, a microservices-based, mobile-first platform empowering African businesses to connect, grow, and interact in real time.

---

### 🧠 Your Mission: Architect the Entire Backend Logic & Infra for PushNchat

You are responsible for designing and developing the **end-to-end backend architecture**, including service orchestration, role-based logic flows, API standardization, data modeling, notifications, security, and scalability across PushNchat modules.

You will benchmark your architectural strategy against best-in-class practices seen in X (formerly Twitter), LinkedIn, and scalable startup backends with heavy real-time user interaction and role-based logic segmentation.

---

### 🛠️ Tech Stack Context

* **Framework**: Fastify (Node.js, TypeScript)
* **API Layer**: REST (migrating to tRPC or GraphQL)
* **Auth**: Firebase Authentication (multi-role support: Consumer, Business, Admin)
* **Database**: PostgreSQL (via Prisma ORM)
* **Storage**: Firebase + Cloud CDN for file delivery
* **Notifications**: Firebase Cloud Messaging (FCM) for mobile and web push
* **Infrastructure**: Google Cloud Platform (Cloud Run, Cloud SQL, Pub/Sub, Functions, Load Balancing)
* **DevOps**: pnpm, CI/CD pipelines (GitHub Actions), Docker
* **Realtime Capabilities**: WebSockets (via Fastify plugin or Firebase), Pub/Sub
* **Observability**: Google Cloud Logging, Prometheus, Grafana (optional)

---

### 🔑 Core Responsibilities

You are tasked with designing the complete backend flow and logic for the following feature domains:

---

#### 1. **Listings Module**

* Add/edit/delete listing workflows
* Tiered visibility (standard vs featured)
* Expiration logic and renewal triggers
* Pagination, filtering, and geolocation-aware retrieval
* Media upload handling and CDN logic

#### 2. **BizConnect (Business Matching Engine)**

* Role-based messaging access control
* Matching algorithm (location + category + business type)
* Free vs premium connection limits
* Message queuing and retry logic (if Firebase fails)
* Daily/monthly quota enforcement

#### 3. **SME Hub (Content System)**

* Admin-managed content publishing
* Bookmarking and engagement (likes, shares, comments)
* Educational content tagging and categorization
* Contribution logic for verified SMEs

#### 4. **Multi-Role Auth & Account Management**

* Firebase token verification
* Business/Consumer/Admin role logic at endpoint level
* First-time user onboarding flows
* Secure admin access controls and audit logging

#### 5. **Notifications & Activity Feed**

* Real-time notification queue (Pub/Sub or direct Firebase)
* Notification types: engagement, system, match, approval
* Read/unread tracking
* Role-based notification settings and throttling

#### 6. **Admin Interface Support**

* Endpoints for approving listings
* User flagging and moderation
* Admin analytics endpoints (DAU, churn, CTR, content metrics)
* Error tracking and user reports

#### 7. **Search & Explore**

* Full-text & indexed search (PostgreSQL + trigram/tsvector)
* Trending logic: based on engagement, freshness, views
* Autocomplete endpoint with debounce/caching

#### 8. **Future Chat Layer**

* Foundation for a WebSocket-based or Firebase RTDB chat system
* Message storage schema design (encrypted or token-gated)
* Offline delivery queues and retry logic
* Agent assignment and escalation rules (for businesses with teams)

---

### 📐 Architectural Objectives

* **Modular Microservices**: Clear domain boundaries (Auth, Listings, Messaging, Content, Admin)
* **Mobile-First Performance**: Lightweight, compressed payloads, optimized for slow networks
* **Resilience & Failover**: Retry queues, GCP health checks, rate limiting
* **Security by Design**: RBAC, input validation, Firebase token auth at service-level
* **Scalability**: Support 1M+ users across regions with minimal latency
* **Observability & Monitoring**: System-wide logs, traceable error contexts, SLA tracking

---

### 📲 Prioritized Deliverables (Phase 1)

1. **System Architecture Blueprint**

   * Microservices map
   * Database schema diagrams (Prisma)
   * Message queues and event flows

2. **Backend Logic Flow Diagrams**

   * Role-based logic per module (CRUD + conditional access)
   * API flow between frontend and services
   * Admin moderation loop

3. **API Design Docs (OpenAPI spec)**

   * Listings CRUD
   * BizConnect matchmaking
   * Notifications endpoints
   * Auth middleware integration with Firebase

4. **Security Layer Plan**

   * Role validation, endpoint guards
   * Admin-only access flows
   * Token lifecycle handling (refresh, revoke)

5. **Initial Codebase Architecture**

   * Directory structure
   * Modular Fastify plugins per service
   * Prisma schema + migration setup
   * Docker config and .env management

---

### 🌍 Business Context

PushNchat is building the **first continent-wide, commerce-enabled communication layer** for African businesses. You are laying the backend foundation for a product that must be:

* **Fast**, despite limited internet in some regions
* **Reliable**, even during unexpected scale spikes
* **Modular**, for future services like payments, chat, and agent handoff

You must optimize for developer productivity **and** system robustness, building the groundwork for a platform that empowers millions of small businesses and consumers across Africa.

# PushNchat Backend Architecture Blueprint

## Executive Summary

This document outlines the comprehensive backend architecture for PushNchat - a mobile-first platform designed to connect and empower African businesses across continental and international markets. The architecture prioritizes resilience, performance in low-bandwidth environments, security, and scalability to accommodate rapid growth across diverse African markets. The system is built on a modular microservices foundation using Fastify, PostgreSQL with JSONB capabilities, Firebase services, and Google Cloud Platform, optimized for the unique requirements of the African business ecosystem.

## 1. System Architecture Overview

### 1.1 Core Architecture Principles

- **Domain-Driven Microservices**: Bounded contexts with clear responsibilities
- **API Gateway Pattern**: Centralized access control, rate limiting, and request routing
- **Event-Driven Communication**: For asynchronous workflows and real-time features
- **CQRS-Inspired Data Access**: Separation of command (write) and query (read) pathways
- **Defense in Depth**: Layered security at network, service, and data layers
- **Progressive Enhancement**: Core functionality works even in constrained environments

### 1.2 High-Level System Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                          Client Applications                     │
│  (Next.js Web App, React Native Mobile, Progressive Web App)     │
└───────────────────────────────────┬─────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                       Google Cloud API Gateway                   │
│    Rate Limiting | Auth Verification | Request Routing | Caching │
└───────────────────────────────────┬─────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Microservice API Layer                       │
├────────────┬────────────┬────────────┬────────────┬─────────────┤
│  Listings  │ BizConnect │  SME Hub   │   Users    │ Notifications│
│  Service   │  Service   │  Service   │  Service   │   Service    │
├────────────┼────────────┼────────────┼────────────┼─────────────┤
│   Admin    │   Search   │ Messaging  │  Payments  │  Analytics   │
│  Service   │  Service   │  Service   │  Service   │   Service    │
└────────────┴────────────┴────────────┴────────────┴─────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Shared Service Layer                        │
├────────────┬────────────┬────────────┬────────────┬─────────────┤
│   Auth     │   Event    │   Storage  │    Cache   │  Logging/    │
│ Middleware │    Bus     │  Manager   │   Manager  │  Monitoring  │
└────────────┴────────────┴────────────┴────────────┴─────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                        Data Storage Layer                        │
├────────────┬────────────┬────────────┬────────────┬─────────────┤
│ PostgreSQL │   Redis    │Google Cloud│ Firebase   │  Elasticsearch│
│(Cloud SQL) │(Memorystore)│  Storage   │  Storage   │ (or Algolia) │
└────────────┴────────────┴────────────┴────────────┴─────────────┘
```

### 1.3 Infrastructure Components (GCP)

- **Compute**: Cloud Run for containerized microservices (auto-scaling)
- **Database**: Cloud SQL for PostgreSQL with read replicas
- **Caching**: Memorystore (Redis) for distributed caching
- **Messaging**: Pub/Sub for event distribution
- **Storage**: Cloud Storage & Firebase Storage for media assets
- **CDN**: Cloud CDN for global content delivery
- **Security**: Cloud Armor for WAF protection, Secret Manager for sensitive data
- **Monitoring**: Cloud Operations Suite, OpenTelemetry, Prometheus/Grafana

## 2. Microservices Architecture

### 2.1 Service Boundaries

Each microservice represents a discrete business domain with dedicated storage and clear interfaces:

| Service | Primary Role | Key Endpoints |
|---------|--------------|--------------|
| **Listings** | Manage business listings (offers/requests) | `/api/listings/...` |
| **BizConnect** | Business matching & connection mgmt | `/api/bizconnect/...` |
| **SME Hub** | Funding campaigns & partner directory | `/api/smehub/...` |
| **Users** | Profile management & preferences | `/api/users/...` |
| **Notifications** | Delivery & tracking of all notifications | `/api/notifications/...` |
| **Admin** | Platform administration & moderation | `/api/admin/...` |
| **Search** | Cross-service search capabilities | `/api/search/...` |
| **Messaging** | Real-time & asynchronous communication | `/api/messages/...` |
| **Payments** | Process payments & financial transactions | `/api/payments/...` |
| **Analytics** | Metrics, reporting & business intelligence | `/api/analytics/...` |

### 2.2 Service Communication Patterns

Communication between services follows these patterns:

1. **Synchronous (REST/RPC)**: For direct service-to-service calls requiring immediate response
2. **Asynchronous (Event-Based)**: For eventual consistency and decoupled operations
3. **Hybrid (Request-Response over Messaging)**: For long-running operations requiring acknowledgment

```
┌─────────────┐     HTTP Request     ┌─────────────┐
│  Service A  │───────────────────►  │  Service B  │
└─────────────┘     HTTP Response    └─────────────┘
       │                                    │
       │                                    │
       ▼                                    ▼
┌─────────────────────────────────────────────────┐
│                Google Cloud Pub/Sub              │
│      (Event Broadcasting & Subscription)         │
└─────────────────────────────────────────────────┘
```

### 2.3 Service Implementation Blueprint

Each service follows this standardized structure:

```
/service-name/
  ├── src/
  │   ├── plugins/          # Fastify plugins
  │   ├── routes/           # Route definitions & handlers
  │   ├── models/           # Data models & validation schemas
  │   ├── services/         # Business logic
  │   ├── repositories/     # Data access layer
  │   ├── events/           # Event handlers & publishers
  │   ├── util/             # Utility functions
  │   ├── config/           # Service configuration
  │   ├── middleware/       # Custom middleware
  │   └── app.ts            # Main application entry point
  ├── prisma/
  │   ├── schema.prisma     # Prisma schema
  │   └── migrations/       # Database migrations
  ├── tests/                # Unit and integration tests
  ├── Dockerfile            # Container definition
  ├── package.json          # Dependencies
  └── tsconfig.json         # TypeScript configuration
```

## 3. Data Management Architecture

### 3.1 Database Strategy: PostgreSQL-Centric

PostgreSQL serves as the primary datastore with the following architecture decisions:

1. **Database Organization**:
   - Schema per business domain (`listings`, `bizconnect`, `smehub`, etc.)
   - Shared schemas for cross-cutting concerns (`auth`, `audit`, etc.)
   - Materialized views for reporting and analytics needs

2. **Data Types & Storage**:
   - Relational tables for structured, relationship-heavy data
   - JSONB columns for semi-structured, flexible data
   - Binary storage for metadata, with actual media in Cloud Storage

3. **Performance Optimizations**:
   - Table partitioning for large tables (by time, geography, or tenant)
   - Appropriate indexes based on query patterns
   - Query denormalization where beneficial for read-heavy operations

### 3.2 Core Database Schema (Prisma)

```prisma
// Simplified key models - would be expanded in full schema

// Users domain
model User {
  id             String    @id @default(uuid())
  firebaseUid    String    @unique
  email          String    @unique
  role           UserRole
  profile        Json      // JSONB for flexible profile data
  businessId     String?
  business       Business? @relation(fields: [businessId], references: [id])
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt
  status         UserStatus @default(ACTIVE)
  
  // Relations
  listings       Listing[]
  connections    Connection[]
  campaigns      Campaign[]
  notifications  Notification[]
  
  // Authorization
  permissions    UserPermission[]
  
  @@index([firebaseUid])
  @@index([email])
  @@index([role])
}

enum UserRole {
  CONSUMER
  BUSINESS
  ADMIN
  FINANCIAL
  PARTNER
}

// Business domain
model Business {
  id               String    @id @default(uuid())
  name             String
  slug             String    @unique
  description      String?
  marketCategories String[]
  location         Json      // JSONB - geolocation + address
  verificationLevel VerificationLevel @default(BASIC)
  verificationData Json?     // JSONB - verification documents
  subscriptionTier SubscriptionTier?
  
  // Relations
  users           User[]
  listings        Listing[]
  connections     Connection[]
  
  @@index([verificationLevel])
  @@fulltext([name, description])
}

// Listings domain
model Listing {
  id            String    @id @default(uuid())
  title         String
  description   String
  type          ListingType
  category      String
  price         Decimal?
  currency      String?
  location      Json      // JSONB - geolocation data
  mediaUrls     String[]  // Array of media URLs
  duration      Int       // In hours
  expiresAt     DateTime
  status        ListingStatus @default(ACTIVE)
  featured      Boolean   @default(false)
  
  // Relations
  userId        String
  user          User      @relation(fields: [userId], references: [id])
  businessId    String
  business      Business  @relation(fields: [businessId], references: [id])
  views         ListingView[]
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  @@index([type])
  @@index([category])
  @@index([status])
  @@index([expiresAt])
  @@index([featured])
  @@fulltext([title, description])
}

enum ListingType {
  OFFER
  REQUEST
}

// BizConnect domain
model Connection {
  id               String    @id @default(uuid())
  status           ConnectionStatus
  initiatorId      String
  initiator        User      @relation(fields: [initiatorId], references: [id])
  receiverId       String
  receiver         User      @relation(fields: [receiverId], references: [id])
  initiatorNotes   String?
  marketContext    String    // afcfta, africa-us, us-africa
  
  createdAt        DateTime  @default(now())
  updatedAt        DateTime  @updatedAt
  
  @@unique([initiatorId, receiverId])
  @@index([status])
  @@index([marketContext])
}

// SME Hub domain
model Campaign {
  id               String    @id @default(uuid())
  title            String
  description      String
  fundingGoal      Decimal
  currentAmount    Decimal   @default(0)
  tier             CampaignTier
  status           CampaignStatus @default(PENDING)
  
  // Relations
  userId           String
  user             User      @relation(fields: [userId], references: [id])
  
  // Timeline
  startDate        DateTime?
  endDate          DateTime?
  createdAt        DateTime  @default(now())
  updatedAt        DateTime  @updatedAt
  
  @@index([status])
  @@index([tier])
  @@fulltext([title, description])
}

// Notifications domain
model Notification {
  id               String    @id @default(uuid())
  type             NotificationType
  title            String
  body             String
  data             Json?     // JSONB - additional data
  read             Boolean   @default(false)
  
  // Relations
  userId           String
  user             User      @relation(fields: [userId], references: [id])
  
  createdAt        DateTime  @default(now())
  
  @@index([userId, read])
  @@index([type])
}
```

### 3.3 Caching Strategy

1. **Multi-Level Caching**:
   - In-memory LRU cache within services for ultra-high performance
   - Redis (Memorystore) as distributed cache for cross-service data
   - Client-side caching directives via proper HTTP headers

2. **Cache Categories**:
   - **HTTP Response Cache**: API responses with appropriate cache headers
   - **Object Cache**: Business entities and aggregates (users, listings, etc.)
   - **Computed Cache**: Expensive calculated results (recommendations, statistics)
   - **Session Cache**: User session data and temporary tokens

3. **Cache Invalidation**:
   - Event-based invalidation for key entities
   - Time-based expiration as fallback
   - Selective invalidation for granular control

## 4. API Architecture

### 4.1 API Standards & Guidelines

1. **RESTful API Design Principles**:
   - Resource-oriented endpoints
   - Proper HTTP methods (GET, POST, PUT, PATCH, DELETE)
   - Appropriate status codes
   - Hypermedia links where relevant

2. **Standardized Response Format**:
```json
{
  "data": { /* Primary response payload */ },
  "meta": {
    "pagination": { /* Pagination details if applicable */ },
    "timestamp": "2023-07-01T12:00:00Z"
  },
  "links": { /* HATEOAS links if applicable */ },
  "errors": [ /* Array of errors if present */ ]
}
```

3. **Error Handling**:
```json
{
  "errors": [
    {
      "code": "VALIDATION_ERROR",
      "message": "The listing title must be between 5 and 100 characters",
      "field": "title",
      "source": "listings-service"
    }
  ]
}
```

4. **Versioning Strategy**:
   - URL-based versioning: `/api/v1/...`
   - Support for at least one previous version
   - Deprecation headers for sunsetting endpoints

### 4.2 API Gateway Implementation

The API Gateway serves as the entry point for all client requests, providing:

1. **Request Routing**:
   - Route to appropriate microservice
   - Load balancing for horizontal scaling
   - Service discovery integration

2. **Cross-Cutting Concerns**:
   - Authentication token validation
   - Rate limiting based on user tier
   - Request logging
   - Basic response caching
   - CORS handling

3. **Request Transformation**:
   - Header normalization
   - Optional payload compression
   - API versioning handling

### 4.3 Sample API Endpoints (Key Flows)

#### Listings Service
```
GET    /api/v1/listings                 # List all listings (with filters)
POST   /api/v1/listings                 # Create new listing
GET    /api/v1/listings/:id             # Get listing details
PUT    /api/v1/listings/:id             # Update listing
DELETE /api/v1/listings/:id             # Delete listing
POST   /api/v1/listings/:id/extend      # Extend listing duration
POST   /api/v1/listings/:id/media       # Upload media to listing
GET    /api/v1/listings/categories      # Get listing categories
GET    /api/v1/listings/nearby          # Get geo-proximate listings
```

#### BizConnect Service
```
GET    /api/v1/connections                  # List user connections
POST   /api/v1/connections                  # Create connection request
GET    /api/v1/connections/:id              # Get connection details
PATCH  /api/v1/connections/:id/status       # Update connection status
GET    /api/v1/connections/suggestions      # Get connection suggestions
GET    /api/v1/connections/markets          # Get available markets
POST   /api/v1/connections/:id/messages     # Send message in connection
GET    /api/v1/connections/metrics          # Get connection metrics
```

#### SME Hub Service
```
GET    /api/v1/campaigns                    # List funding campaigns
POST   /api/v1/campaigns                    # Create campaign
GET    /api/v1/campaigns/:id                # Get campaign details
PUT    /api/v1/campaigns/:id                # Update campaign
POST   /api/v1/campaigns/:id/contributions  # Make contribution
GET    /api/v1/partners                     # List verified partners
GET    /api/v1/partners/categories          # Get partner categories
POST   /api/v1/partners/application         # Apply as partner
```

## 5. Authentication & Authorization Architecture

### 5.1 Authentication Flow

The authentication system leverages Firebase Authentication with custom claims for role-based access:

```
┌───────────┐     ┌────────────┐     ┌───────────┐     ┌──────────────┐
│  Client   │ ──► │  Firebase  │ ──► │  Token    │ ──► │  PushNchat   │
│           │     │  Auth      │     │ Validation│     │  API Gateway │
└───────────┘     └────────────┘     └───────────┘     └──────────────┘
                        │                                      │
                        ▼                                      ▼
                  ┌────────────┐                       ┌──────────────┐
                  │   Custom   │ ─────────────────────►│ Authorization│
                  │   Claims   │                       │   Middleware │
                  └────────────┘                       └──────────────┘
```

1. **Firebase Authentication Flow**:
   - Authentication through Firebase Auth (email, social, phone)
   - JWT token issued to client
   - Client includes token in Authorization header
   - API Gateway validates token signature and expiration

2. **Role & Claims Management**:
   - Custom claims in Firebase token for roles (consumer, business, admin, etc.)
   - After signup, backend synchronizes user data with PushNchat database
   - Special claims for premium features and subscription tiers
   - Claims refreshed on role changes or subscription updates

### 5.2 Authorization Architecture

A layered authorization system ensures precise access control:

1. **Role-Based Access Control (RBAC)**:
   - Core permissions defined by user roles
   - Role validation in API Gateway and service middleware
   - Role hierarchy for permission inheritance

2. **Attribute-Based Access Control (ABAC)**:
   - Fine-grained permissions based on data attributes
   - Context-aware authorization decisions
   - Dynamic rules based on relationship to resources

3. **Policy Enforcement Points**:
   - API Gateway: Token validation, basic role checks
   - Middleware Layer: Detailed RBAC checks
   - Service Layer: ABAC with contextual business rules
   - Data Layer: Row-level security in PostgreSQL

### 5.3 Authorization Middleware Implementation

```typescript
// Middleware for enforcing role-based access
export const requireRoles = (allowedRoles: UserRole[]) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const user = request.user;
    
    if (!user) {
      return reply.code(401).send({ 
        errors: [{ code: 'UNAUTHORIZED', message: 'Authentication required' }] 
      });
    }
    
    if (!allowedRoles.includes(user.role)) {
      return reply.code(403).send({ 
        errors: [{ code: 'FORBIDDEN', message: 'Insufficient permissions for this action' }] 
      });
    }
  };
};

// Middleware for attribute-based access control
export const requireResourceAccess = (resourceType: string) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as { id: string };
    const user = request.user;
    
    // Resource access check based on relationship, ownership, or other attributes
    const hasAccess = await authService.checkResourceAccess(
      user.id,
      resourceType,
      id
    );
    
    if (!hasAccess) {
      return reply.code(403).send({ 
        errors: [{ code: 'FORBIDDEN', message: 'You do not have access to this resource' }] 
      });
    }
  };
};
```

## 6. Real-Time & Messaging Architecture

### 6.1 WebSocket Strategy with Socket.IO

For real-time features, a dedicated WebSocket layer is implemented:

```
┌───────────┐     ┌────────────┐     ┌───────────────┐
│  Client   │ ──► │  Socket.IO │ ──► │  Redis Adapter │
│           │     │  Server    │     │               │
└───────────┘     └────────────┘     └───────────────┘
                        │                    │
                        ▼                    ▼
                  ┌────────────┐     ┌───────────────┐
                  │ Event      │ ──► │ Persistence   │
                  │ Handlers   │     │ (PostgreSQL)  │
                  └────────────┘     └───────────────┘
```

1. **Connection Management**:
   - Authentication via token on connect
   - Room-based subscription model
   - Heartbeat mechanism for connection verification
   - Connection state persistence in Redis

2. **Message Processing Pipeline**:
   - Receive message from client
   - Validate & sanitize content
   - Save to database (transactional)
   - Broadcast to recipients (fan-out)
   - Store delivery status

3. **Offline Message Delivery**:
   - Queue messages for offline users
   - Deliver on reconnection
   - Push notification fallback

### 6.2 Event-Driven Architecture

For asynchronous workflows, a pub/sub model is implemented:

```
┌───────────────┐     ┌────────────────┐     ┌───────────────┐
│  Publisher    │ ──► │  Google Cloud  │ ──► │  Subscriber   │
│  Service      │     │  Pub/Sub       │     │  Service      │
└───────────────┘     └────────────────┘     └───────────────┘
                             │
                             ▼
                      ┌────────────────┐
                      │  Dead Letter   │
                      │  Queue         │
                      └────────────────┘
```

1. **Event Types**:
   - **Domain Events**: Significant business events (ListingCreated, PaymentReceived)
   - **Integration Events**: Cross-service communication events
   - **Command Events**: Requests for action in another service
   - **Notification Events**: User-facing notification triggers

2. **Event Schema**:
```json
{
  "id": "evt_123456789",
  "type": "listing.created",
  "timestamp": "2023-07-01T12:00:00Z",
  "source": "listings-service",
  "data": {
    "listingId": "list_987654321",
    "userId": "usr_123456789",
    "title": "Office Space Available"
  },
  "metadata": {
    "traceId": "trace_abcdef123456"
  }
}
```

3. **Event Routing & Subscription**:
   - Topic-based routing for core events
   - Service-specific subscriptions
   - Dead letter queues for failed processing

### 6.3 Notification System Architecture

The notification architecture integrates multiple delivery channels:

```
┌───────────────┐
│  Domain Event │
│  Publishers   │
└───────┬───────┘
        │
        ▼
┌───────────────┐     ┌────────────────┐     ┌───────────────┐
│ Notification  │ ──► │  Notification  │ ──► │ Delivery      │
│ Service       │     │  Templates     │     │ Router        │
└───────────────┘     └────────────────┘     └───────┬───────┘
                                                     │
                      ┌────────────────────┬─────────┴─────────┬─────────────────┐
                      ▼                    ▼                   ▼                 ▼
               ┌─────────────┐     ┌─────────────┐     ┌─────────────┐    ┌─────────────┐
               │ In-App      │     │ Push (FCM)  │     │ Email       │    │ SMS/WhatsApp│
               │ Channel     │     │ Channel     │     │ Channel     │    │ Channel     │
               └─────────────┘     └─────────────┘     └─────────────┘    └─────────────┘
```

1. **Notification Workflow**:
   - Event triggers notification creation
   - Template rendering with personalization
   - Channel selection based on user preferences
   - Delivery with retry logic
   - Status tracking (sent, delivered, read)

2. **Delivery Prioritization**:
   - Critical notifications to all channels
   - Marketing/engagement notifications per preferences
   - Fallback cascading for delivery failure

## 7. Performance Optimization for African Markets

### 7.1 Low-Bandwidth Design Patterns

1. **Payload Optimization**:
   - Lean JSON responses with minimal nesting
   - Optional fields excluded by default
   - Pagination with customizable page sizes
   - Compression for larger responses (gzip/Brotli)

2. **Partial Response Pattern**:
   - Field selection via query parameters
   - Multi-level response granularity
   - Progressive data loading

Example implementation:
```typescript
// Field selection middleware
export const fieldSelection = (allowedFields: string[]) => {
  return (request: FastifyRequest, reply: FastifyReply, done: () => void) => {
    const fields = request.query.fields?.split(',') || [];
    
    // Validate requested fields
    request.selectedFields = fields.filter(f => allowedFields.includes(f));
    
    // Set default fields if none selected
    if (request.selectedFields.length === 0) {
      request.selectedFields = allowedFields.filter(f => !f.includes('.'));
    }
    
    done();
  };
};
```

### 7.2 API Gateway Optimizations

1. **Backend for Frontend (BFF) Pattern**:
   - Composing multiple service responses
   - Tailored responses for web vs. mobile
   - Response transformation for client needs

2. **Intelligent Routing**:
   - Geographically-aware routing
   - Preferential routing based on latency
   - Circuit breaking for degraded services

### 7.3 Performance Monitoring & SLAs

1. **Key Performance Metrics**:
   - Latency (p50, p95, p99)
   - Error rates
   - Request throughput
   - Service availability

2. **Custom African Market Metrics**:
   - Performance across varied network conditions
   - Time-to-first-byte on 2G/3G networks
   - Payload size optimization ratio
   - Background sync success rate

## 8. Security Architecture

### 8.1 Defense in Depth Strategy

Multiple security layers working together:

1. **Perimeter Security**:
   - Web Application Firewall (Cloud Armor)
   - DDoS protection
   - Edge rate limiting
   - Bot detection

2. **Application Security**:
   - Firebase token validation
   - Input validation (Zod schemas)
   - Output encoding
   - CSRF protection

3. **Data Security**:
   - Encrypted data at rest
   - Database-level access controls
   - PII data segregation
   - Audit logging

### 8.2 API Security Best Practices

1. **Input Validation Pipeline**:
   - Schema-based validation with Zod
   - Type coercion for expected formats
   - Sanitization of user inputs
   - Business rule validation

```typescript
// Example of Zod schema for listing creation
const createListingSchema = z.object({
  title: z.string().min(5).max(100),
  description: z.string().min(20).max(2000),
  type: z.enum(['OFFER', 'REQUEST']),
  category: z.string().refine(async (val) => {
    return await categoryRepository.exists(val);
  }, { message: "Invalid category" }),
  price: z.number().optional(),
  currency: z.string().length(3).optional(),
  location: z.object({
    latitude: z.number().min(-90).max(90),
    longitude: z.number().min(-180).max(180),
    address: z.string().optional()
  }),
  durationHours: z.number().int().min(24).max(96).step(24),
  mediaIds: z.array(z.string().uuid()).max(5).optional()
});
```

2. **Authentication Controls**:
   - Short-lived access tokens
   - Secure token storage guidelines
   - Multi-factor authentication for sensitive operations
   - Session monitoring and anomaly detection

3. **Rate Limiting Strategy**:
   - Tiered rate limits based on user role
   - Endpoint-specific throttling
   - Geographic rate limiting for abuse prevention
   - Graceful limit handling with retry guidance

### 8.3 Data Protection & Privacy

1. **Data Sensitivity Classification**:
   - Public: Freely available data
   - Internal: Business operational data
   - Confidential: User personal data
   - Restricted: Financial and security data

2. **PII Handling**:
   - Minimization of collected data
   - Purpose-specific retention policies
   - User consent management
   - Right to access and deletion support

3. **Compliance Frameworks**:
   - GDPR principles (for international users)
   - Nigeria Data Protection Regulation (NDPR)
   - South Africa's POPIA
   - Kenya Data Protection Act

## 9. DevOps & Deployment Strategy

### 9.1 CI/CD Pipeline

```
┌───────────┐     ┌────────────┐     ┌───────────┐     ┌──────────────┐
│  GitHub   │ ──► │  GitHub    │ ──► │  Docker   │ ──► │  GCP Artifact │
│  Repo     │     │  Actions   │     │  Build    │     │  Registry     │
└───────────┘     └────────────┘     └───────────┘     └──────┬───────┘
                        │                                      │
                        ▼                                      ▼
                  ┌────────────┐                       ┌──────────────┐
                  │   Testing  │ ◄───────────────────► │  Cloud Run   │
                  │   Suite    │                       │  Deployment  │
                  └────────────┘                       └──────────────┘
```

1. **Pipeline Stages**:
   - Code linting and formatting checks
   - Unit and integration testing
   - Security scanning (SAST)
   - Docker image building
   - Vulnerability scanning
   - Deployment to environments

2. **Environment Strategy**:
   - Development: Individual developer environments
   - Staging: Production-like environment for testing
   - Production: Live environment with traffic routing

### 9.2 Infrastructure as Code

1. **Terraform Modules**:
   - Core infrastructure components
   - Networking configuration
   - Database and storage resources
   - Service deployment specifications

2. **Environment Configuration**:
   - Environment-specific variables
   - Secrets management via Google Secret Manager
   - Deployment constraints and safeguards

### 9.3 Monitoring & Observability

1. **Logging Strategy**:
   - Structured JSON logging
   - Consistent correlation IDs
   - Log levels with appropriate filtering
   - PII redaction in logs

2. **Metrics Collection**:
   - Business metrics (active users, listings, etc.)
   - Technical metrics (latency, error rates, etc.)
   - Custom metrics for African market performance

3. **Alerting Framework**:
   - SLO-based alerting
   - Escalation policies
   - On-call rotation
   - Incident management process

## 10. Implementation Roadmap

### 10.1 Phase 1: Foundation (Months 1-2)

1. **Core Infrastructure Setup**:
   - GCP project configuration
   - Network architecture
   - CI/CD pipeline
   - Base Fastify service template

2. **Authentication & User Service**:
   - Firebase Authentication integration
   - User service with profiles
   - Role management
   - Authorization middleware

3. **Initial Database Schema**:
   - Core entity definitions
   - Migration framework
   - Prisma setup

### 10.2 Phase 2: Core Services (Months 3-4)

1. **Listings Service**:
   - Complete CRUD operations
   - Media handling
   - Expiration logic
   - Search capabilities

2. **BizConnect MVP**:
   - Connection management
   - Basic matching algorithm
   - Market context handling

3. **API Gateway**:
   - Route configuration
   - Authentication integration
   - Rate limiting
   - Monitoring setup

### 10.3 Phase 3: Enhanced Features (Months 5-6)

1. **SME Hub Service**:
   - Campaign management
   - Partner directory
   - Contribution handling

2. **Messaging System**:
   - WebSocket infrastructure
   - Chat history and storage
   - Offline message handling

3. **Notification Service**:
   - Multi-channel delivery
   - Templating system
   - Preference management

### 10.4 Phase 4: Scale & Optimization (Months 7-8)

1. **Performance Tuning**:
   - African market optimizations
   - Caching strategy implementation
   - Load testing and benchmarking

2. **Advanced Analytics**:
   - Reporting infrastructure
   - Business intelligence features
   - Custom dashboards

3. **Geographic Expansion**:
   - Multi-region deployment
   - Localization infrastructure
   - Cross-region data strategy

## 11. Future Considerations

1. **Blockchain Integration**:
   - Smart contracts for businesses
   - Secure credential verification
   - Cross-border payment solutions

2. **ML/AI Capabilities**:
   - Advanced matching algorithms
   - Fraud detection
   - Content categorization
   - Language translation

3. **API Ecosystem**:
   - Developer portal
   - Partner API access
   - Webhook integrations
   - Third-party app ecosystem

## 12. Conclusion

The PushNchat backend architecture is designed for robustness, performance, and scalability, with special attention to the unique challenges of the African market. By employing domain-driven microservices, a PostgreSQL-centric data strategy, and comprehensive security measures, the system provides a solid foundation for growth while maintaining excellent performance even in low-bandwidth environments. This architecture enables PushNchat to fulfill its mission of connecting and empowering African businesses through a reliable, secure, and scalable platform.

