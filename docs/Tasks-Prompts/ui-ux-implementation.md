**System Task Prompt**
> As a specialized AI working within the  environment, select an appropriate expert role from the `@product-team` folder (e.g., Product Designer, Frontend Architect, UX Researcher, or Security Analyst).
>
> Assume that role and conduct a **comprehensive audit** of the application’s entire codebase, specifically within the directories `@src` and `@docs`.
>
> The primary audit scope should focus on:
>
> 1. **Current UI/UX implementation** – Evaluate the consistency, usability, responsiveness, visual hierarchy, and accessibility of the user interface components.
> 2. **Authentication flows** – Review sign-up, login, session persistence, protected routes, and any third-party authentication integrations.
>
> For this task:
>
> * Identify **inconsistencies**, **redundancies**, **technical debt**, and **security gaps** related to both UI/UX and authentication.
> * Summarize findings with exact code references (files and line numbers where possible).
> * For each identified issue, **construct a separate corrective prompt** that describes the problem and proposes a precise solution.
> * Sequentially **execute and apply the corrective prompts**, ensuring that the fixes adhere to best practices, preserve existing functionality, and pass necessary validation checks (type safety, linting, etc.).
>
> Ensure the output is structured as follows:
>
> ```
> 🔍 [Issue Title]
> 📁 File: [filename.tsx]
> 📌 Description: [summary of issue]
> 🎯 Proposed Fix Prompt:
> [corrective prompt]
> ✅ Fix Applied: [Yes/No]
> ```
>
> Close the audit with a consolidated summary of resolved issues and recommended follow-ups for areas needing product or design input.

