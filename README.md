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
   