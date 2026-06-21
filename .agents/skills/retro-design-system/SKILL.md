```markdown
# retro-design-system Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches you the core development patterns and conventions used in the `retro-design-system` TypeScript codebase. You'll learn about file naming, import/export styles, commit message conventions, and how to write and run tests in this repository. While no specific frameworks or automated workflows are detected, this guide ensures consistency and best practices for contributing to the project.

## Coding Conventions

### File Naming
- **Pattern:** PascalCase
- **Example:**  
  - `ButtonComponent.ts`
  - `ThemeProvider.ts`

### Import Style
- **Pattern:** Relative imports
- **Example:**
  ```typescript
  import { Button } from './ButtonComponent';
  import { Theme } from '../theme/ThemeProvider';
  ```

### Export Style
- **Pattern:** Named exports
- **Example:**
  ```typescript
  // In ButtonComponent.ts
  export const Button = () => { /* ... */ };
  ```

### Commit Messages
- **Pattern:** Conventional Commits
- **Prefixes:** `feat`, `docs`
- **Average Length:** ~58 characters
- **Example:**
  ```
  feat: add new Button component with customizable styles
  docs: update README with usage examples for ThemeProvider
  ```

## Workflows

### Creating a New Component
**Trigger:** When you need to add a new UI component  
**Command:** `/new-component`

1. Create a new file using PascalCase (e.g., `MyComponent.ts`).
2. Use relative imports for dependencies.
3. Export your component using a named export.
4. Write a corresponding test file (`MyComponent.test.ts`).
5. Commit your changes using a conventional commit message (e.g., `feat: add MyComponent`).

### Updating Documentation
**Trigger:** When you update or add documentation  
**Command:** `/update-docs`

1. Edit or add markdown files as needed.
2. Use a conventional commit message with the `docs` prefix (e.g., `docs: update usage section for Button`).
3. Push your changes.

## Testing Patterns

- **Test File Pattern:** Files ending with `.test.*` (e.g., `ButtonComponent.test.ts`)
- **Testing Framework:** Not explicitly detected; use your preferred TypeScript-compatible testing framework.
- **Example:**
  ```typescript
  // ButtonComponent.test.ts
  import { Button } from './ButtonComponent';

  describe('Button', () => {
    it('should render correctly', () => {
      // Test implementation here
    });
  });
  ```

## Commands
| Command          | Purpose                                         |
|------------------|-------------------------------------------------|
| /new-component   | Scaffold and commit a new UI component          |
| /update-docs     | Update documentation with proper commit message |
```
