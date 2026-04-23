# TheSaaSsin Vol. 1 — 16 Covers

Puppeteer-based cover art generator for the **TheSaaSsin Vol. 1** content system. Renders 16 consistent, on-brand cover images from a single source list — one script run, sixteen finished PNGs.

---

## What it generates

Each of the 16 volumes gets its own cover with a title and a one-line premise:

| # | Volume |
|---|--------|
| 1 | Notion Operating System |
| 2 | SaaS Funnel Architect |
| 3 | AI Workflow Automations |
| 4 | B2B Lead Engine |
| 5 | Productized Service Systems |
| 6 | SaaS Content Factory |
| 7 | Customer Success OS |
| 8 | Founder Productivity Protocols |
| 9 | Sales Playbook Generator |
| 10 | SaaS Brand Identity System |
| 11 | AI-Enhanced Market Research |
| 12 | Launch & GTM Engine |
| 13 | Pricing & Packaging Lab |
| 14 | SaaS Ops & Infrastructure |
| 15 | Viral Social Frameworks |
| 16 | Founder Leverage Systems |

## Stack

- Node
- Puppeteer (headless Chromium for rendering)

## Running

```bash
node generate.js
# or the alternate layout:
node generate2.js
```

Puppeteer installs on first run if it's missing. Output PNGs land in the working directory.

## Files

| File | Purpose |
|------|---------|
| `generate.js` | Primary cover layout |
| `generate2.js` | Alternate composition variant |

---

Built and maintained by [@theSaaSsin](https://github.com/theSaaSsin).
