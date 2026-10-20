# Launchpad — Responsive Internship Board

A beginner-friendly internship listing interface built with **HTML, CSS, and vanilla JavaScript**. No framework or build step is required.

## Features

- Responsive layouts for mobile, tablet, and desktop.
- Search by role, company, domain, location, duration, and description.
- Filter internships by six career domains.
- Clear/reset controls and an accessible empty state.
- Error-state panel with a retry action.
- Semantic HTML, explicit form labels, skip link, keyboard-focus styles, live result count, and reduced-motion support.
- Reusable internship data array and an HTML `<template>` for internship cards.
- Fictional sample data only. Listings are not live vacancies.

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a browser.
3. Try searching `remote`, `frontend`, or `Python`; then test the domain dropdown and reset button.

No package installation or server is needed.

## Project structure

- `index.html` — semantic page structure, accessible filters, listing template, and state panels.
- `styles.css` — visual design, responsive breakpoints, focus styles, and reduced-motion handling.
- `script.js` — reusable sample data, filtering, rendering, and UI states.

## Responsive test checklist

Record the results after opening the page at each viewport size:

| Viewport | Expected layout | Result |
|---|---|---|
| 360px | One card per row; filters stack vertically | Test in browser |
| 768px | Two cards per row; filters use compact grid | Test in browser |
| Desktop (e.g. 1280px) | Three cards per row; full filter row | Test in browser |

## Accessibility / interaction checks

- Use `Tab` and `Shift+Tab` to move through controls and links.
- Press `Enter` or `Space` on focused buttons and links.
- Confirm each filter has a visible label.
- Search a nonsense term to see the empty state, then clear filters.
- Use the domain filter and Reset filters button.
- Test browser zoom and narrow viewport layouts.

## Design and data note

The opportunity records are fictional examples created for this portfolio task. The board does not collect personal information, submit applications, or connect to an API. The supplied sample dataset can be integrated later if desired.

## Deployment

### GitHub Pages
1. Create a public GitHub repository named `responsive-internship-board`.
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under build/deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. After GitHub finishes deploying, copy the published Pages URL and open it in a private/incognito window to confirm it is public.
6. Submit that live URL in the internship platform's Project URL field. The repository URL also works if the reviewer accepts source-code links.

## Submission explanation

> I built Launchpad, a responsive internship board using semantic HTML, CSS, and vanilla JavaScript. The internship cards are generated from reusable JavaScript data. Users can search by keyword and filter by domain, with empty and error states for feedback. The interface includes accessible labels, keyboard focus indicators, a skip link, live result counts, and responsive layouts for mobile, tablet, and desktop. All listings are fictional sample data for demonstration.
