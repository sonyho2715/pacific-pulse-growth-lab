# Testing Guide

This project uses Jest for unit testing and Playwright for end-to-end testing.

## Setup

Install Playwright browsers (first time only):
```bash
npx playwright install
```

## Running Tests

### Unit Tests (Jest)

```bash
# Run all unit tests
npm test

# Run tests in watch mode (for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### End-to-End Tests (Playwright)

```bash
# Run all e2e tests
npm run test:e2e

# Run e2e tests with UI mode
npm run test:e2e:ui

# Run e2e tests in debug mode
npm run test:e2e:debug
```

## Test Structure

### Unit Tests
- Located in `src/__tests__/` directory
- Use `.test.tsx` or `.test.ts` extension
- Example: `src/__tests__/example.test.tsx`

### E2E Tests
- Located in `e2e/` directory
- Use `.spec.ts` extension
- Example: `e2e/homepage.spec.ts`

## Writing Tests

### Unit Test Example

```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

### E2E Test Example

```typescript
import { test, expect } from '@playwright/test';

test('should navigate to about page', async ({ page }) => {
  await page.goto('/');
  await page.click('text=About');
  await expect(page).toHaveURL('/about');
});
```

## CI/CD Integration

Tests are automatically run in CI/CD pipelines on:
- Every push to main branch
- Every pull request

## Coverage Reports

Coverage reports are generated in the `coverage/` directory when running:
```bash
npm run test:coverage
```

Open `coverage/lcov-report/index.html` in a browser to view detailed coverage.

## Best Practices

1. **Write tests first** (Test-Driven Development)
2. **Keep tests focused** - One test should verify one behavior
3. **Use descriptive test names** - Clearly state what is being tested
4. **Mock external dependencies** - Tests should be isolated
5. **Maintain high coverage** - Aim for >80% code coverage
6. **Run tests before committing** - Ensure all tests pass locally
