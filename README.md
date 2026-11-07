# GTA Vice Mode launch tools

Small, dependency-free Node.js tools for planning a console download and converting the scheduled Xbox GTA VI pre-load instant to an IANA time zone. They run locally without an account, network calls or tracking.

[Open the live download planner](https://lucymt.github.io/gtavice-launch-tools/) — use the calculator in your browser, no installation required. Inputs stay on the page.

```sh
node launch-tools.mjs download 100 100
node launch-tools.mjs xbox Europe/Istanbul
node --test launch-tools.test.mjs
```

The first example returns 134 minutes. It is an illustrative 100 GB transfer, not a claim about GTA VI's download size. The formula uses decimal GB and Mbps; installation, updates and speed changes add time. No storage requirement is used as a default.

The Xbox conversion uses November 10, 2026 at 00:00 UTC. PS5 pre-load follows local midnight instead. This date can change; checked November 6 against [Rockstar's Pre-Load FAQ](https://support.rockstargames.com/articles/7nPqOA2uCbpEQHXx7KVrYd/grand-theft-auto-vi-pre-load-faq), last updated November 3. Do not use this as a release/unlock timer.

The companion [GTA Vice Mode launch centre](https://gtavice.pages.dev/gta-6-launch-hub) explains setup and limitations. The command-line utilities work independently of that site.

This is an independent fan project, unaffiliated with Rockstar Games or Take-Two. No game code, leaked data or Rockstar media is included.

Licence: MIT. Includes a static `index.html` planner for GitHub Pages or offline use. Topics: `gta-vi`, `download-calculator`, `time-zone`, `javascript`, `cli`. This repository contains only the standalone tools; the editorial guide remains on Cloudflare Pages. Do not claim repository stars, search rankings or AI citations without observed evidence.
