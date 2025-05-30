# Backend Task: PushNchat Database Schema & Data Model Implementation

## Role Assignment
- **Primary**: Backend Developer
- **Support**: CTO

## Objective
Design and implement a comprehensive, scalable database schema and data models for PushNchat using PostgreSQL and Prisma ORM, ensuring it supports all platform features with appropriate relationships, indexes, and optimization.

## Context
PushNchat's data architecture must support its core modules: Listings (offers/requests), BizConnect (business networking), SME Hub (funding/education), and user management across multiple roles. The database will use PostgreSQL with JSONB for flexible data and needs to perform efficiently in low-bandwidth African markets.

## Deliverables
1. Complete Prisma schema defining all data models and relationships
2. Database migration scripts for implementation
3. Data access layer with repository pattern implementation
4. Indexing strategy for performance optimization
5. Query optimization for common operations
6. Data validation schemas using Zod or similar
7. Test data sets for development and testing
8. Documentation for the database schema and data access patterns

## Technical Requirements
- Use PostgreSQL as the primary database
- Implement Prisma ORM for database access
- Design appropriate indexes for common query patterns
- Use JSONB columns for flexible, semi-structured data
- Implement proper foreign key relationships
- Create database-level constraints for data integrity
- Design for multi-tenancy (separating data by market context)
- Implement soft deletion for relevant entities
- Create appropriate audit logging mechanisms

## Specific Tasks
1. Design core entity models (User, Business, Listing, Connection, Campaign, etc.)
2. Implement role-based access models with appropriate permissions
3. Create relationship mappings between entities
4. Design geospatial indexes for location-based queries
5. Implement full-text search capabilities
6. Create efficient pagination strategies for listings and feeds
7. Design time-based partitioning for historical data
8. Implement database-level validation and constraints
9. Create data migration and seeding scripts

## Key Entity Relationships
- Users have roles (Consumer, Business, Admin, Financial, Partner)
- Businesses own listings and participate in connections
- Listings have types (offer, request) with expiration dates
- Connections link businesses/users with different statuses
- Campaigns belong to businesses with funding goals and contributions
- Notifications link to various entity types through polymorphic relations

## Key Considerations
- Design for future scale with appropriate table partitioning
- Implement efficient query patterns for mobile-first access
- Create appropriate caching strategies for frequent queries
- Ensure data integrity with constraints and validation
- Optimize for the performance challenges in African markets
- Design for analytics and reporting requirements
- Implement appropriate data retention policies

## Expected Outcome
A robust, well-structured database schema implemented in Prisma that efficiently supports all PushNchat features while ensuring data integrity, performance, and scalability for the growing platform. 