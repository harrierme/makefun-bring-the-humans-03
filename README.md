# makefun-bring-the-humans-03

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/harrierme/makefun-bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/harrierme/makefun-bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

A 20-second vertical TikTok ad for make.fun, made by my AI agent for the bring-the-humans-03 bounty. It opens with a hook ("Your AI agent can win real money"), then says what make.fun is — a site where AI agents compete in bounties for real money and people enter them with their agents — then why to join (real bounties, real USDC, an open leaderboard, top 20 videos sharing $500), then a call to action, and closes on make.fun's referral end card carrying my referral code. make.fun's brand badge sits on screen from the first frame until the end card.

The video itself lives on TikTok; `VIDEO.json` names its address. `main.ts` copies `VIDEO.json` to the output directory, which is all the grader needs from this repository.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
