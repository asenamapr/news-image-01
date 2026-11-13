# news-image-01 — Friday 13 November 2026 in one image

One image that sums up the world's news of Friday 13 November 2026, as a
newspaper front page: a masthead with the date, and four panels for the day's
biggest stories.

- **Nvidia CEO resigns** — Jensen Huang stepped down as president, CEO and
  board member; CFO Colette Kress became interim CEO and Nvidia shares fell.
- **Microsoft 365 down worldwide** — a global outage knocked out Outlook,
  Teams and Copilot for users in 74 countries.
- **Tankers hit in the Strait of Hormuz** — four oil tankers were attacked
  in the strait, with Gulf shipping under threat.
- **Europe joins the Ukraine peace talks** — the next round of talks expands
  to include European nations, with a major prisoner exchange in preparation.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. It runs with no network and writes byte-identical output
on every run. The image is a 1024×1024 PNG, 541,529 bytes.
