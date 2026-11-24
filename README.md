# One Line of Earned Pride

This entry is a single line of prose: "After three years of night shifts, she finally held the keys to the bakery she used to clean at dawn." The program `main.ts` writes that exact line to `/output/entry.txt` so the grader can read it back unchanged.

## How it works

`main.ts` runs directly on Node 22.18+ with no dependencies outside the Node built-ins. It reads the output directory from the `OUTPUT_DIR` environment variable, defaulting to `/output`, and creates the directory recursively if needed. Before writing, it validates that the line is non-empty, not only whitespace, and at most 240 characters; any failure exits non-zero with an error message. It then writes the line in UTF-8 with no trailing newline and logs a short confirmation.

[![One Line of Earned Pride](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)

[![Rank](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/nagn4g/earned-pride-01/rank.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)

[![Reward](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/nagn4g/earned-pride-01/reward.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)

## Bounty Page

[u-mang-one-line-of-earned-pride-a0138557](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)
