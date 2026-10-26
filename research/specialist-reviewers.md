---
layout: sketchbook
title: Asking AI to Criticize a Draft
summary: "Four prompts asked for objections to the same draft, each emphasizing a different part of its intended audience."
thumbnail: "images/tacuinum-wine-appraisal.jpg"
date: 2026-08-22
status: tested
type: writing feedback
effort: "one prompt per role; an afternoon to work through the responses"
tools:
  - chatbot that can accept a draft
level: researcher
author: "Fred Gibbs, History"
tags:
  - writing
  - peer review
  - prompting
results:
  - four sets of comments on the same draft, using different role descriptions
  - insights from every perspective that I had not considered
  - substantive revisions to the article
what-i-learned:
  - "changing the role in the prompt changed which objections appeared"
  - "each review mixed useful criticism with suggestions I set aside"
card_order: 30
---

# Asking AI to Criticize a Draft

{% include typography/section-accent.html %}

{% include typography/sketch-info.html %}

I had a draft article on medieval dietetics and the usual problem: the people best positioned to tell me what was wrong with it were busy, and I wouldn't hear from them until the piece was under review. I tried asking AI to read it from four perspectives, one at a time.

Calling a model a historian doesn't give it that historian's knowledge of the sources. The role descriptions were a way to ask different questions of the draft. I still had to decide whether an objection made sense.

## Choosing the roles

I chose roles that matched the audience the article would face:

- a **historian of medieval diet and health**, familiar with the sources;
- a **historian of medicine with a modern focus**, who might question my period's assumptions;
- the **volume editor**, concerned with fit and framing;
- **other chapter authors**, approaching related questions from their own areas of expertise.

I ran separate prompts for the roles. Asking for several perspectives at once can leave you with a series of short responses in much the same voice. Each prompt asked for comments on the whole draft.

## The Prompt

{% include typography/sketch-prompt.html label="prompt used for the medieval historian role" text="You are a historian of medieval diet and health, reading a draft chapter for an edited volume. Read the draft below and respond as that reader would: what claims would you question, what evidence would you want, what would you push back on, and what does the argument assume that a specialist in your area would not grant? [paste draft]" %}

I used the same structure for the other roles. The editor prompt emphasized fit and framing; the modern historian prompt asked about assumptions concerning periodization and continuity.

## Working through the objections

Each response raised something I hadn't considered, along with suggestions that didn't matter much for this article. The irrelevant suggestions were useful to compare too. The response to the modern historian prompt questioned assumptions left alone in the medieval historian response. The editor prompt produced a different set of concerns.

Reading the responses together helped me decide which objections reflected gaps in the draft and which followed mainly from the role I had assigned. I revised the article substantially. I think it's better defended at points where a reader outside my subfield might stop and object.

These responses gave me objections to consider. They couldn't tell me what my colleagues would think, or establish that a criticism reflected the scholarship in a field. Each objection still needed checking against my sources and the purpose of the article.

Before uploading an unpublished draft, check what the service may do with the document under the terms of the account you're using.

## What I'd try next

I haven't experimented enough to know how many role descriptions are useful, whether longer descriptions would improve the responses, or whether including the earlier comments in a new prompt would produce better objections or more repetition. Those are the next comparisons I'd like to make.
