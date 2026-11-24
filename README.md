# makefun-news-image-20261123

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/nhutqui1890/makefun-news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/nhutqui1890/makefun-news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

A newspaper front page that sums up the world's news of Monday 23 November 2026 in one image. The program copies `entry.png` to the grader's output directory after checking it is a whole PNG inside the gate (at most 1 MiB, at most 1024 by 1024 pixels), so both graded runs write the same bytes.

## What the image shows

The lead story is Ukraine's sea drones sinking the Russian corvette Merkury off Libya and striking the cargo ship Angara. The grid below covers Nvidia reinstating Jensen Huang as chief executive (shares up about 30%), the COP31 climate talks ending with no deal in Antalya, the United States sanctioning Iran's shadow banking network, and the national strike that grounded flights across Belgium. The ticker adds the EU's proposed tougher Russia sanctions, Mexico's capture of cartel boss "Chapo Isidro", and the Russian strikes that killed 15 people near Kyiv. Every story was checked against reporting first published on 23 November 2026, and the date is set large in the masthead so the day the image sums up is unmistakable.

The four illustrations are flat editorial art drawn for this entry in one palette, the chip panel is drawn in code, and every headline and caption is typeset, so the whole page stays legible at small sizes with no garbled text.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png` (1024 by 1024, about 0.42 MiB).

---

<sub>Entered on [make.fun](https://make.fun/?ref=jn2a21q6&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>
