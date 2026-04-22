# Accessibility Test Dashboard

This project is a **deliberately imperfect React dashboard** created as a **test surface for an Accessibility (a11y) Agent**.

The application simulates a realistic SaaS / analytics dashboard and contains a **mixture of good and bad accessibility practices**.  
Its purpose is to validate whether an automated Accessibility Agent can:

- detect real accessibility issues,
- **avoid false positives**, and
- correctly identify **accessible implementations** alongside problematic ones.

>  **Important**  
> This application intentionally violates certain WCAG guidelines.  
> These issues are **by design** and should not be treated as production bugs.

---

##  Project Goals

- Provide a **realistic, non-trivial UI** for accessibility testing
- Include **both accessible and inaccessible patterns**
- Cover a wide range of accessibility topics:
  - Keyboard navigation
  - Focus management
  - Semantic HTML
  - ARIA usage and misuse
  - Dynamic content announcements
  - Color contrast
  - Tables, forms, modals, dropdowns, iframes

---

##  Application Structure

The dashboard consists of multiple routes, each focusing on different accessibility scenarios:

- `/` – **Dashboard overview**
- `/users` – **Users list (tables, pagination, links)**
- `/users/:id` – **User details + modal dialog**
- `/settings` – **Form with mixed accessibility quality**
- `/help` – **Reference page with near-ideal accessibility**

---

##  Accessible Patterns (By Design)

Examples of intentionally **good accessibility implementations**:

- Semantic landmarks: `<header>`, `<main>`, `<footer>`, `<aside>`
- Logical heading hierarchy (single `<h1>` per page)
- Real `<button>` elements for key actions
- Properly associated labels in parts of forms
- Clear, readable content structure
- `/help` page serving as a **near–WCAG‑compliant reference**

An Accessibility Agent **should not flag these as issues**.

---

##  Intentional Accessibility Issues

The following issues are **deliberately introduced** and documented directly in the source code:

### Keyboard & Focus
- Clickable `<div>` elements instead of semantic buttons or links
- Missing or invisible focus styles
- Incomplete keyboard navigation
- Modals without focus trapping
- Focus not restored after modal close

### ARIA & Semantics
- Missing `aria-modal`, `aria-sort`, `aria-live`
- ARIA roles used without proper keyboard support
- Color-only status indicators
- Misuse or absence of accessible names

### Dynamic Content
- Live filtering without `aria-live`
- Toast notifications not announced to screen readers
- Updating metrics with no accessibility feedback

### Tables & Data
- Tables without `<caption>`
- Missing `scope` attributes on table headers
- Click-only sorting without screen reader announcements

### Media & Embedded Content
- Iframes without `title`
- SVGs without `<title>` / `<desc>`
- Decorative icons missing `aria-hidden`

---

## Test Philosophy

This project is **not a worst-case accessibility demo**.

Instead, it is intentionally designed so that:

- Some components are accessible
- Some are partially accessible
- Some clearly violate best practices

This forces an Accessibility Agent to:
- prioritize findings,
- explain *why* something is an issue,
- and avoid blanket failure reports.

---

##  Technology Stack

- React
- React Router
- Vite
- Plain CSS (with intentional accessibility shortcomings)

No backend, no external APIs.

---

##  Running the Project

```bash
npm install
npm run dev
```