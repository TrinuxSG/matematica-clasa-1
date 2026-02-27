## Project context

- **Name**: `matematica-clasa-1`
- **Type**: static web app (HTML + CSS + vanilla JS)
- **Purpose**: interactive educational exercises for 1st grade (mathematics up to 20 and basic Romanian language skills).

## Expectations for AI changes

- **Language**: keep all user-facing text in **Romanian**, friendly and age-appropriate for copii de clasa I.
- **Scope**: preserve the current structure (single `index.html`, `css/style.css`, `js/script.js`) and avoid introducing build tools or heavy dependencies unless explicitly requested.
- **Exercises**:
  - When adding or removing exercises, keep numbers consistent with the totals in `README.md`.
  - Prefer simple, concrete word problems and vocabulary aligned with early primary school.
- **Design/UX**:
  - Maintain the colorful, playful style and responsive layout already defined in `css/style.css`.
  - Keep interactions accessible: large click targets, clear feedback, and support for Enter key where relevant.

## How agents should work here

- Before non-trivial edits, **scan `script.js`** to understand how new exercises or categories fit into the existing `exercises` array and filtering logic.
- Reuse existing patterns (components, CSS classes, validation and hint mechanisms) instead of inventing parallel systems.
- When changing behavior that affects the game flow (scoring, progression, completion screen), verify that:
  - counters (`correctCount`, `wrongCount`) stay accurate;
  - the progress bar and final score still match the number of exercises played.

