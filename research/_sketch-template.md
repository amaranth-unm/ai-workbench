---
layout: sketchbook                                          # required — always this value
title: Your Sketch Title                                    # required
author: "Your Name, Department"                              # recommended — shown in the summary box; the citation uses the name before the comma
summary: "One sentence: what you built or extracted, and what it's for."  # required — drives the listing card and the "Experiment" box below
thumbnail: "images/your-image.jpg"                          # optional — put the image file in research/images/; omit for a text-only card
date: 2026-06-22                                            # optional — shown on the listing card
status: rough                                               # optional — rough | lightly tested | tested | refined
type: data work                                              # optional — short label, e.g. "data work" or "processing sources"
effort: "less than 1 hour"                                   # optional — shown as "Format" in the summary box
tools:                                                       # optional — AI tools used
  - name a tool
level: any                                                   # optional — who this is for, e.g. "any", "researcher"
tags:                                                        # recommended — powers the /tags/ browsing page
  - your-tag
results:                                                      # recommended — shown as "Results" in the summary box and "Results" on the listing card
  - one concrete thing this workflow produced
  - another concrete thing
what-i-learned:                                               # recommended — shown as "What I learned" in the summary box
  - one thing you'd tell someone trying this themselves
  - another thing
card_order: 99                                                # optional — sort position on the listing page; check sibling files and pick the next number
---

# Your Sketch Title

> **Before you start:** duplicate this file into the `research` folder under a new name — lowercase, dashes, no leading underscore (e.g. `my-workflow.md`). Jekyll won't publish a filename that starts with `_`. Then delete this line.

{% include typography/section-accent.html %}

{% include typography/sketch-info.html %}

Start with the particular problem that prompted this sketch. Use the details you have: a reading, an output, an assignment that needed changing, or a task that took too long. If this is a proposal, say so. Don't turn an intended outcome into a claim about what happened.

Use only the sections you need below. Rename or combine them to fit the account. A pull quote is optional; the sketch doesn't need a slogan or a concluding lesson. Keep prompts and practical details someone would need to try it. Don't invent an experience or student reaction to make the prose more personal.

## What I tried

Identify the source material, tool, and task. Explain the steps, with enough detail to follow them, and note any prior work or knowledge that made the task easier.

## The prompt

{% include typography/sketch-prompt.html label="prompt to give to [tool name]" text="The exact prompt you gave the AI tool." %}

## The result

Show what came out, linking to it where possible. Explain what you checked and what needed correcting. Include time and cost when you have them, specifying whether preparation and checking are included. Describe the checks you actually made. Don't turn your elapsed time into a promise to other users.

## What remains to check

Explain the limits that affect how someone could use this result. Separate what you observed from possible explanations. A single successful attempt can be worth reporting without establishing what the tool will do on other material.
