# PushNchat Implementation Prompt Directory

This document serves as a master directory of all implementation prompts for building the PushNchat platform. Each prompt is assigned to the appropriate product team role and focuses on a specific aspect of the platform implementation.

## Prompt Meta-Capabilities

All prompts in this directory have been designed with the following enhanced capabilities:

1. **Self-Assessment**: Each prompt includes mechanisms for the AI agent to self-critique its work and adjust its approach based on feedback.
2. **Contextual Analysis**: Prompts direct the AI to first explore relevant codebase elements and documentation before implementation.
3. **Error Resolution**: AI agents can identify problems during implementation and dynamically formulate new approaches.
4. **Documentation Integration**: Each prompt references specific documentation files that should be consulted.
5. **Adaptive Learning**: Prompts encourage continuous improvement based on previous implementation attempts.

## Infrastructure & Architecture Prompts

| # | Prompt Title | Primary Role | Support Role | Key Documentation | Description |
|---|-------------|------------|-------------|-----------------|-------------|
| 01 | [Core Infrastructure & Architecture Setup](./01-CTO-Infrastructure-Setup.md) | CTO | DevOps Engineer | `/docs/development-docs/pushnchat-technical-doc.md`, `/docs/product-team/CTO.md` | Establishes the foundational architecture, infrastructure, and project structure for the entire platform. |
| 02 | [CI/CD Pipeline & Deployment Architecture](./02-DevOps-CI-CD-Pipeline.md) | DevOps Engineer | CTO | `/docs/product-team/DevOps-Engineer.md`, `/docs/Rules/Next.js-setup.md` | Creates the continuous integration and deployment pipeline for reliable platform releases. |

## Database & Backend Prompts

| # | Prompt Title | Primary Role | Support Role | Key Documentation | Description |
|---|-------------|------------|-------------|-----------------|-------------|
| 03 | [Database Schema & Data Model Implementation](./03-Backend-Database-Schema.md) | Backend Developer | CTO | `/docs/product-team/Backend-Developer.md`, `/docs/development-docs/pushnchat-technical-doc.md` | Designs and implements the database architecture to support all platform features. |
| 04 | [RESTful API Development](./04-Backend-API-Development.md) | Backend Developer | CTO | `/docs/product-team/Backend-Developer.md`, `/docs/development-docs/pushnchat-technical-doc.md` | Creates the API endpoints and services that power the platform's functionality. |

## Design & User Experience Prompts

| # | Prompt Title | Primary Role | Support Role | Key Documentation | Description |
|---|-------------|------------|-------------|-----------------|-------------|
| 05 | [Design System & Component Library](./05-UI-Designer-Design-System.md) | UI/UX Designer | Frontend Developer | `/docs/product-team/UX/UI-Designer.md`, `/docs/development-docs/ui-ux/media-guidelines.md` | Establishes the visual language and component library for consistent interfaces. |
| 06 | [User Flows & Journey Mapping](./06-UI-Designer-User-Flows.md) | UI/UX Designer | Frontend Developer | `/docs/development-docs/ui-ux/user-logic-flow.md`, `/docs/development-docs/ui-ux/home-page.md` | Designs the user journeys and flow patterns throughout the platform. |

## Frontend Implementation Prompts

| # | Prompt Title | Primary Role | Support Role | Key Documentation | Description |
|---|-------------|------------|-------------|-----------------|-------------|
| 07 | [Authentication System Implementation](./07-Frontend-Authentication-Implementation.md) | Frontend Developer | Backend Developer, CTO | `/docs/development-docs/ui-ux/authentication.md`, `/docs/development-docs/production-auth-setup.md` | Implements the authentication flows and security measures. |
| 08 | [Listings Module Implementation](./08-Frontend-Listings-Module.md) | Frontend Developer | UI/UX Designer, Backend Developer | `/docs/development-docs/ui-ux/home-page.md`, `/docs/development-docs/ui-ux/forms/listing-submission/form-flow.md` | Develops the listings functionality for discovering opportunities. |
| 09 | [BizConnect Module Implementation](./09-Frontend-BizConnect-Module.md) | Frontend Developer | UI/UX Designer, Backend Developer | `/docs/development-docs/ui-ux/forms/bizconnect-submission/step-by-step.md`, `/docs/development-docs/business-model.md` | Creates the business networking and connection features. |
| 10 | [SME Hub Module Implementation](./10-Frontend-SME-Hub-Module.md) | Frontend Developer | UI/UX Designer, Backend Developer | `/docs/development-docs/ui-ux/forms/campaign-submission/walkthrough.md`, `/docs/development-docs/business-model.md` | Builds the crowdfunding and partner directory features. |

## Implementation Order

For optimal development flow, the prompts should be implemented in the following sequence:

1. Infrastructure & Architecture (01-02)
2. Backend Foundation (03-04)
3. UI/UX Design (05-06)
4. Core Frontend Features (07)
5. Feature Modules (08-10)

This approach ensures that the necessary infrastructure, backend services, and design systems are in place before feature implementation begins, allowing for more efficient development.

## Team Collaboration

When implementing these prompts, team members should collaborate closely, particularly at the boundaries between their areas of responsibility:

- **CTO & DevOps Engineer**: Coordinate on infrastructure decisions and deployment strategies
- **Backend & Frontend Developers**: Collaborate on API contract design and implementation
- **UI/UX Designer & Frontend Developer**: Work together on design system implementation and user experience
- **All Roles**: Maintain consistent communication about cross-cutting concerns like performance, security, and accessibility

By following these prompts in sequence and with proper collaboration, the team can efficiently build the PushNchat platform with minimal rework and maximum quality.

## Using This Directory

1. Start with infrastructure prompts (01-02) to establish the foundation
2. Proceed to database and backend prompts (03-04) to create the data layer
3. Reference design prompts (05-06) for UI/UX guidance
4. Implement frontend features (07-10) in priority order

Each prompt includes detailed instructions for the AI agent to analyze existing code, gather contextual information, implement solutions, and self-assess the quality of the work. 