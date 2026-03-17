# Nova Blocks — UI Component Library

Nova Blocks is a Vue 3 UI component library with SCSS support, Storybook documentation, and build system using Rollup. It can be used in both Vue and React projects via web components.

## Git Workflow

1. **Branches**
   - Main branches: `main` and `develop`.
   - All tasks are done in separate branches named `nb-1`, `nb-2`, etc.
   - Tasks should be small enough to fit in a single pull request.
   - Once a task is logically complete, create a pull request **into `develop`**.

2. **Commit Messages**
   - Use the following pattern for commit messages:
     ```
     [NB-1] Commit description
     ```
     where `[NB-1]` is the branch name and the rest is a short description of the commit.

3. **Pull Requests**
   - The pull request title should match the task name (potentially including a Jira or task manager ID).
   - Provide a short description of the task in the pull request body.

## 🎨 Design System

Nova Blocks follows a **Soft Futurism (Level 5)** design approach:

- Clean, minimal base UI
- Subtle gradients for primary actions
- Glow effects only on interaction (hover / focus)
- Glass / depth surfaces for layout components

### Principles

- One visual accent per component
- No aggressive neon or constant animations
- Effects are triggered, not persistent
- Focus on clarity + modern aesthetics

### Styling Architecture
src/styles/
tokens.scss # design tokens (colors, spacing, effects)
mixins.scss # reusable style logic
base.scss # global styles

### Usage

Global styles are automatically included when importing the library:

```ts
import 'nova-blocks/dist/styles.css'
```
