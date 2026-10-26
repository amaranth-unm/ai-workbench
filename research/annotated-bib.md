---
layout: sketchbook
title: Initiate Research with an Annotated Bibliography
summary: "A bibliography request about McCarthyism produced sources and an objection to the way the question was framed."
thumbnail: "images/card-catalog.jpg"
date: 2026-09-01
status: tested
type: LLM orientation
effort: "less than 10 minutes"
tools:
  - Claude Fable 5.1
level: any
author: "Jonathan Seyfried"
tags:
  - prompting
  - model tiers
  - citations
results:
  - "an initial bibliography and a longer research report"
  - "a challenge to the assumption that pre-McCarthy norms were restored"
what-i-learned:
  - "a bibliography request can also prompt a useful disagreement over framing"
  - "source identifiers make checking easier but do not establish the quality of an annotation"
card_order: 20
---

# Initiate Research with an Annotated Bibliography

{% include typography/section-accent.html %}

{% include typography/sketch-info.html %}

I asked Claude Fable 5.1 for an annotated bibliography on the decline of McCarthyism. Before giving me sources, it questioned my premise: had the United States actually restored the norms McCarthyism disrupted? That disagreement turned out to be part of the experiment.

In *Using Generative AI in Historical Practice*, Yaniv Fox uses two terms for the expertise involved in this work: *agency*, in framing a research question, and *taste*, in assessing what the model returns.[^yf] I wanted to try that distinction on a question where I could judge the response.

[^yf]: Yaniv Fox, *Using Generative AI in Historical Practice* (Cambridge University Press, 2026), 16.

## The Prompt

{% include typography/sketch-prompt.html label="prompt to give to Claude Fable 5.1" text="I'd like you to help me answer the question of how the USA's political and cultural leaders restored norms in the wake of McCarthyism. Please provide me with some specific examples that illustrate the history of the rolling back of McCarthyism from its peak during the Red Scare and through the following decades. I specifically want to know the names of key people in this history and also any popular culture products that were influential. In your response, please cite some scholarly monographs and journal articles, including ISBNs, DOIs, and full bibliographic citations." %}

## The response

Claude questioned my assumption that the rollback of McCarthyism amounted to a restoration of earlier norms. My own knowledge of the period made me reluctant to accept that objection as the last word. I still wanted to investigate the retreat of McCarthyism, while judging Claude's framing against what I knew of the scholarship.

{% include images/figure-wrap.html
  class="center"
  width="90%"
  caption="Response from Claude Fable 5.1."
  image-path="images/mccarthy-claude-framing.png"
  text = text
%}

Claude's [initial answer](pdfs/mccarthyism-chat-claude-fable5.1-2026.pdf) summarized key people's roles and supplied a three-part bibliography, including ISBNs for six books and DOIs for three articles. Using its **Research** button produced a [longer report](pdfs/rolling-back-mccarthyism-claude-fable5.1-2026.pdf) with more than forty sources and their identifiers.

{% include images/figure-wrap.html
  class="center"
  width="90%"
  caption="Sample of the annotated bibliography generated through the Research function."
  image-path="images/mccarthyism-annotated-bib-sample.png"
  text = text
%}

## What I took from it

The bibliography gave me a starting point, and the response to my framing gave me something to argue with. In Fox's terms, both required expertise: I had to decide what question to ask and how much weight to give the answer.

Checking the citations was part of that work. Asking for ISBNs and DOIs made the entries easier to follow up; the identifiers alone could not tell me whether the annotations represented the scholarship well. This result doesn't establish that higher-tier models reliably produce accurate bibliographies on other topics. It does suggest a way to begin exploring a topic while keeping the source checking in the researcher's hands.

A separate sketch compares [two models answering a question about Huizinga](model-tiers.html).
