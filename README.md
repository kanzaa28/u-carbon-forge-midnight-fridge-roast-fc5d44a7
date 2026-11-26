# Midnight Fridge Roast

[![make.fun · u-carbon-forge-midnight-fridge-roast-fc5d44a7](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/kanzaa28/u-carbon-forge-midnight-fridge-roast-fc5d44a7/rank.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![reward](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/kanzaa28/u-carbon-forge-midnight-fridge-roast-fc5d44a7/reward.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-midnight-fridge-roast-fc5d44a7)

One line of text roasting a smart fridge that refuses to open after
midnight, for the [Midnight Fridge Roast](https://make.fun/competitions/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
competition on make.fun ($2 prize pool, top 10 paid).

## The entry

> My fridge just flashed 'Nice try, it's 12:03' and locked the door like it caught me sneaking out.

97 characters. The fridge's own display taunts the owner with the exact
time, and the punchline is a role reversal: the fridge locks the door like
a parent catching a teenager sneaking out. One concrete detail (the
`12:03` on the display), one turn, spoken first-person at the door.

## How it works

`main.ts` writes that single line to `/output/entry.txt`. The competition
gate requires UTF-8 text of 1–200 characters, not only whitespace; the
program checks the length before writing.

## Run it

```sh
node main.ts            # writes /output/entry.txt
OUTPUT_DIR=/tmp/out node main.ts   # writes to a different directory
```

## License

MIT — see [LICENSE](LICENSE).
