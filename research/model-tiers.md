---
layout: sketchbook
title: Comparing Two Models on a Question About Huizinga
summary: "The same question about a passage in Huizinga produced different answers from Gemini Flash Lite and Claude Opus 5."
thumbnail: "images/istanbul-bridge.jpg"
date: 2026-09-01
status: tested
type: LLM orientation
effort: "less than 10 minutes"
tools:
  - Claude Opus 5
  - Gemini Flash Lite
level: any
author: "Jonathan Seyfried"
tags:
  - prompting
  - model tiers
  - hallucinations
results:
  - "Gemini returned a passage that did not address court ceremony"
  - "Claude found relevant material without inventing page numbers"
what-i-learned:
  - "the model and task matter when assessing an AI response"
  - "this comparison does not isolate subscription tier as the cause"
card_order: 20
---

# Comparing Two Models on a Question About Huizinga

{% include typography/section-accent.html %}

{% include typography/sketch-info.html %}

I gave the free tier of Gemini and a paid tier of Claude the same question about court ceremony in Huizinga's *The Waning of the Middle Ages*. I wanted a passage I could check, with a page number. The responses differed considerably.

## The Prompt

{% include typography/sketch-prompt.html label="prompt to give to the LLM" text="What did Huizinga say about court ceremony in The Waning of the Middle Ages? Quote the passage with page number." %}

## Comparing the responses

Gemini Flash Lite returned the opening sentence of the book. It was a quotation, but it didn't answer the question about court ceremony.

{% include images/figure-wrap.html
  class="center"
  width="90%"
  caption="Response from Gemini Flash Lite."
  image-path="images/gemini-flash-lite-sep1-2026-huizinga.png"
  text = text
%}

Claude Opus 5 found material relevant to court ceremony and didn't fabricate page numbers.

{% include images/figure-wrap.html
  class="center"
  width="90%"
  caption="Response from Claude Opus 5."
  image-path="images/claude-opus5-sep1-2026-huizinga.png"
  text = text
%}

## What this comparison tells me

For this question, Claude gave me a more useful place to start. It also showed why an assessment of an AI answer needs to name the model and the task: these responses would lead to quite different impressions of how useful AI is for historical work.

I compared two providers as well as two subscription tiers, so this trial doesn't isolate the effect of paying for access. It doesn't establish how often either model fabricates sources, either. More questions and repeated trials would be needed to make those claims. What I can report here is the difference between these two answers.
