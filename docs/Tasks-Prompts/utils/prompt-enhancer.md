# PushNchat Prompt Enhancement Utility

This document provides a systematic approach for AI agents to enhance task prompts with self-assessment capabilities, error handling, and codebase analysis.

## Prompt Self-Improvement Process

When you encounter any PushNchat task prompt that lacks comprehensive guidelines for analysis, self-assessment, or error handling, follow this structured process to enhance it:

### Step 1: Contextual Analysis

Before implementing or improving any prompt, gather critical context:

1. **Documentation Review**
   - Identify and review all relevant documentation in `/docs` directory
   - Focus on technical specifications, UI/UX guidelines, and business requirements
   - Map relevant documentation to the task at hand

2. **Codebase Exploration**
   - Examine related code in the `/src` directory
   - Identify existing patterns, conventions, and implementations
   - Look for dependencies, utility functions, and shared components

3. **Gap Analysis**
   - Compare existing implementation with requirements
   - Identify technical gaps or inconsistencies
   - Document missing features or components

### Step 2: Enhance the Prompt Structure

Modify the prompt to include these critical sections:

1. **Pre-Implementation Analysis Section**
   ```markdown
   ## Pre-Implementation Analysis
   
   ### 1. Documentation Review
   Begin by analyzing these key resources:
   - [List relevant documentation files with descriptions]
   
   ### 2. Codebase Exploration
   Analyze the existing codebase to understand current implementation:
   
   ```
   // Commands to execute for exploration
   ```
   
   - [List specific areas to check]
   
   ### 3. Technical Gaps Assessment
   Based on documentation and code exploration, identify:
   - [List potential gaps to check for]
   ```

2. **Implementation Strategy Section**
   ```markdown
   ## Implementation Strategy
   
   ### Phase 1: [Initial Focus Area]
   1. **[Component/Feature Name]**
      - [Implementation step]
      - [Implementation step]
   
   ### Phase 2: [Next Focus Area]
   1. **[Component/Feature Name]**
      - [Implementation step]
      - [Implementation step]
   ```

3. **Error Detection & Resolution Section**
   ```markdown
   ## Error Detection & Resolution
   
   ### Common Issues & Solutions
   
   1. **[Potential Error Category]**:
      - If [specific error condition], then [investigation approach]
      - For [related issue], check [relevant area]
      - Solution: [Specific resolution steps]
   ```

4. **Self-Assessment Criteria Section**
   ```markdown
   ## Self-Assessment Criteria
   
   Evaluate your implementation against these criteria:
   
   ### [Assessment Category]
   - [Specific question to assess implementation quality]
   - [Specific question to assess implementation quality]
   ```

5. **References Section**
   ```markdown
   ## References
   - [Path to relevant documentation file] - [Brief description]
   - [External resource link] - [Brief description]
   ```

### Step 3: Dynamic Error Resolution

Include instructions for dynamically handling unexpected errors:

```markdown
## Dynamic Error Resolution

If you encounter errors not covered in the Error Detection & Resolution section:

1. **Analyze the Error**
   - Identify the error type and context
   - Determine affected components or functions
   - Assess potential impact and dependencies

2. **Formulate Resolution Approach**
   - Research relevant documentation for similar issues
   - Check for precedents in the codebase
   - Consider multiple potential solutions

3. **Implement Resolution**
   - Apply the most appropriate solution
   - Document your approach and rationale
   - Test thoroughly to ensure the error is resolved

4. **Update Error Documentation**
   - Add the new error and solution to your knowledge base
   - Document any new insights for future reference
```

### Step 4: Continuous Improvement Cycle

Add instructions for continuous improvement of implementation:

```markdown
## Continuous Improvement Cycle

After initial implementation, follow this cycle to refine your work:

1. **Self-Assessment**
   - Evaluate against all criteria in the Self-Assessment section
   - Identify areas for improvement
   - Prioritize improvements based on impact

2. **Implementation Refinement**
   - Address highest priority improvements
   - Refactor for better performance, maintainability, or user experience
   - Apply consistent patterns and best practices

3. **Documentation Update**
   - Document key decisions and approaches
   - Update comments and type definitions
   - Ensure implementation matches documentation
```

## Example Application

Here's a simplified example of applying this enhancement process to a hypothetical "User Profile Component" prompt:

### Before Enhancement
```markdown
# Frontend Task: User Profile Component

## Objective
Create a user profile component for PushNchat.

## Deliverables
1. Profile display component
2. Profile edit form
3. Avatar upload functionality
```

### After Enhancement
```markdown
# Frontend Task: User Profile Component

## Objective
Create a user profile component for PushNchat.

## Pre-Implementation Analysis

### 1. Documentation Review
Begin by analyzing these key resources:
- `/docs/development-docs/ui-ux/user-account-profile.md` - Profile UX specifications
- `/docs/development-docs/ui-ux/media-guidelines.md` - Avatar upload guidelines

### 2. Codebase Exploration
[Detailed exploration steps]

### 3. Technical Gaps Assessment
[Gap identification guidance]

## Deliverables
1. Profile display component
2. Profile edit form
3. Avatar upload functionality

## Implementation Strategy
[Phased implementation approach]

## Error Detection & Resolution
[Common errors and solutions]

## Self-Assessment Criteria
[Assessment questions]

## References
[Relevant documentation]
```

## Using This Enhancement Utility

1. Apply this process to any prompt that lacks comprehensive guidelines
2. Ensure all enhanced prompts include documentation references
3. Add contextually relevant error handling based on the specific task
4. Create appropriate self-assessment criteria for the specific domain

By following this structured enhancement process, AI agents can significantly improve the quality, completeness, and effectiveness of task prompts throughout the PushNchat development process. 