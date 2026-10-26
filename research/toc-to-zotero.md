---
layout: sketchbook
title: Table of Contents to Zotero
summary: "Claude turned a publisher’s table of contents into chapter entries that could be imported into Zotero."
thumbnail: "images/zotero-toc.png"
date: 2026-08-21
status: tested
type: citation work
effort: "less than 10 minutes"
tools:
  - Claude
  - Zotero
level: any
author: "Jonathan Seyfried"
tags:
  - citations
  - prompting
  - agentic AI
results:
  - extracted data from the Table of Contents
  - built a file in BibTeX format
  - imported to Zotero
what-i-learned:
  - "a publisher’s contents page can supply the records for a batch import"
  - "an import file can avoid entering each chapter separately"
card_order: 20
---

# Table of Contents to Zotero

{% include typography/section-accent.html %}

{% include typography/sketch-info.html %}

I often run into essay collections where nearly every chapter will end up in one of my footnotes. Entering them all into Zotero by hand takes time, particularly when Google Scholar lacks the chapter page numbers.

My test case was *The Oxford Handbook of Public History*. The Zotero browser extension didn't capture its [table of contents](https://academic.oup.com/edited-volume/34632) correctly: page numbers were missing, and editors appeared as authors. I asked Claude to make an import file instead.

## The Prompt

{% include typography/sketch-prompt.html label="prompt to give to Claude" text="There is a 2017 essay collection titled The Oxford Handbook of Public History edited by Hamilton and Gardner (DOI 10.1093/oxfordhb/9780199766024.001.0001). I want a single text file list of all the chapters to import into Zotero. So I would like you to make a single text file that includes a BibTeX entry for each of the chapters. In addition to the default BibTeX output for each chapter, please ensure that each BibTeX entry has the item type 'book section', the page numbers of the chapter, and the editors as Paula Hamilton and James B. Gardner." %}

## The import

Claude produced a BibTeX entry for each chapter, corrected my item-type instruction, and saved the entries in a `.bib` file. In the Claude app, an **Open in Zotero** button imported them into a new collection.

I found no mistakes in this result. Using Opus 4.8, the task took less than ten minutes. It was a good fit for what I needed: transferring a defined set of bibliographic records into Zotero, with the publisher's contents page available to check against.
