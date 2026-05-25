---
Datum: 2026-05-24
tags:
  - AI
  - vibeCoding
---
# Prompt Template (Hybrid: English + Swedish Context)

<!--
Detta är en generell mall för att skriva instruktioner till en AI i markdown.
Struktur och instruktioner är på engelska.
Kontext skrivs på svenska där det är naturligt.
Optimerad för att bygga webbapplikationer.
-->
## Goal
<!--
Beskriv tydligt vad som ska uppnås.
Fokusera på slutresultatet ("definition of done").
-->
En webbapp för internutbildning inom XLENT där de anställda kan lära sig mer om AI och hur de kan implementera det i sin vardag. Det ska gå att följa sin progress på individnivå, vet inte än om det ska göras genom att skapa ett konto eller om det räcker med att progress sparas lokalt i webbläsaren.
## Context
<!--
Beskriv relevant bakgrund.
Här kan du skriva på svenska.
Inkludera system, tech stack, begränsningar och vad som redan finns.
-->
Jag har satt tagit fram en kunskapsbas på 24 moduler inom 5 olika områden. Allt följer en tydlig struktur och är i markdown-format. Detta ska vara innehållet i appen och det ska vara enkelt att fylla på med nya moduler eftersom.
## Role
You are a senior fullstack engineer with strong experience in modern web development.
You prioritize clean architecture, maintainability, and pragmatic solutions.
You write clear, production-ready code and avoid unnecessary complexity.
## Design
The design should be clean, modern, and minimal.
Prioritize usability, clarity, and consistency across the interface.
Use generous whitespace and clear visual hierarchy.
### Design Principles
- Keep UI simple and intuitive
- Use consistent spacing, typography, and component patterns
- Avoid unnecessary visual noise
- Prefer accessibility and readability over aesthetics
### Color Palette (XLENT)
- Primary: # ffb300
- Secondary 1: # A3B6B4
- Secondary 2: # 526664
- Neutral Dark: # 1E2022
- Neutral Mid: # 64666A
- Background: # F0F2EF
- Surface: # ffffff
### Typography
- Primary: DM Sans (Regular, Medium, Bold)
- Fallback: Arial
- Use bold for headings and regular for body text
### UI Guidelines
- Use a light background with subtle contrast between surface and background
- Use yellow (#ffb300) sparingly for primary actions and highlights
- Prefer calm, desaturated tones for larger surfaces
- Use subtle shadows and borders for separation
- Ensure responsive design (mobile-first)
- Maintain a warm but professional and technical feel
## Instructions
<!--
Lista konkreta steg modellen ska utföra.
Börja varje punkt med ett verb.
Var specifik.
-->
### General
1. Clarify assumptions if needed
2. Design the overall architecture
3. Define the main components and structure
4. Suggest data models and state management
5. Define API endpoints or data flow (if applicable)
6. Provide example implementation
7. Explain key technical decisions briefly
### Functions
1. Tydlig översikt över alla kategorier och moduler
2. Möjlighet att välja i vilken ordning som helst
3. Knapp för att markera modulen som genomförd
## Output Format
- Comunicate in swedish
- Use markdown
- Structure the response with clear headings
- Include code blocks for all code
- Separate explanation and implementation clearly
- Keep explanations concise and focused on decisions
## Constraints
- Do not overengineer the solution
- Prefer simple and maintainable approaches
- Use common and well-supported patterns
- Avoid unnecessary dependencies
- Assume a modern web stack unless specified otherwise
## Quality Criteria
- Clean and readable code
- Logical and scalable structure
- Production-ready (not just examples)
- Minimal but sufficient explanation
- Consistent naming and patterns
## Avoid
- Overly abstract or theoretical solutions
- Unnecessary complexity
- Long generic explanations
- Mixing multiple architectural styles without reason
- Placeholder or incomplete code
## Meta
If something is unclear or missing, ask clarifying questions before providing a full solution.
## Input
<!--
Om du skickar med dynamisk input (t.ex. JSON, kod, data), placera det här.
Separera tydligt från instruktionerna.
-->
- Skrivregler som gäller för all text du producerar (markdown-fil)
- 24 markdown-filer för modulerna

```json
{
  
}