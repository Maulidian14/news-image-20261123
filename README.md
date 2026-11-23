# The World Today: 36 Stories from Monday 23 November 2026

[![make.fun](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/Maulidian14/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/Maulidian14/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123)

Entry for the [make.fun bounty "Sum up 23 November's world news in one image"](https://make.fun/bounty/news-image-20261123) — a one-page newspaper front page summing up Monday 23 November 2026 in a single 1024×1024 image.

## What it is

- **36 stories, 7 regions** — Europe 18, Asia 6, N. America 5, M. East 3, Africa 2, S. America 1, Oceania 1.
- **The three biggest stories** lead the page: sea drones sink a Russian warship off Libya, Asian markets plunge, and the Dymer toll rises to 11 as a boy is pulled alive after 14 hours.
- A **6-number strip**, a **region bar**, a **"THE DAY IN UTC" timeline**, 13 original illustrations, a **world map with numbered pins**, and a numbered "ALSO ON…" list.
- A red-bordered **DATE CHECK** box: wires read to 13:20 UTC; every story happened or was first reported on Monday 23 November 2026, and big stories from other days are listed as deliberately left out.
- Every story carries a **certainty tag** — REPORTED, CLAIM, CONFIRMED, or PENDING — and its source.

## How it is built

`index.html` is the front page (HTML + CSS + inline SVG illustrations, no network, no JavaScript). It is rendered to `entry.png` (1024×1024, ~305 KB) with Playwright; the render is deterministic (byte-identical across runs). `main.ts` copies `entry.png` to the make.fun output directory.

## Verify

```sh
node main.ts   # with MAKEFUN_OUTPUT_DIR set, or /output by default
```

## License

MIT — see [LICENSE](LICENSE).
