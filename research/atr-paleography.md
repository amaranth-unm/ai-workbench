---
layout: sketchbook
title: Pipelines for Medieval Handwriting Recognition
summary: "Gemini and Claude transcribe 300-page archival registers for full-text searching, with readings checked against the images."
thumbnail: "images/apr-11-aca-cr-r2053-f4r-violant-img10.jpg"
date: 2026-04-09
status: tested
type: processing sources
effort: "downloaded document images; two hours to set up; automated run of ~12hr/register"
tools:
  - Gemini
  - Claude
  - Open Claw
level: researcher
author: "Fred Gibbs, History"
tags:
  - archives
  - big data
  - paleography
  - agentic AI
results:
  - "processed entire handwritten registers into searchable text"
  - "kept model outputs for comparison and error checking"
what-i-learned:
  - "a searchable transcription can still be too unreliable to cite"
  - "dates needed checking even after revisions to the process"
  - "processing a register took about 12 hours and $75 in API costs"
card_order: 10
---

# When AI Could Help Read a Difficult Script

{% include typography/section-accent.html %}

{% include typography/sketch-info.html %}

Could an LLM read the Gothic secretarial hand used in late fourteenth-century records? I had tried the specialized handwriting-recognition platform [Transkribus](https://www.transkribus.org/), including training a model with 60 transcribed documents. In February 2026, a PARES image uploaded to Gemini gave me a better result. That was enough reason to try a larger batch.

Spain's [PARES](https://pares.cultura.gob.es/pares/en/inicio.html) provides digitized images from the Archive of the Crown of Aragon. Being able to search those handwritten registers for names and places would change how I could work through them.

## From one image to a register

{% capture text %}
I began combining transcriptions from Gemini and Claude. By March, I was using Open Claw to download the images, send each to both models, merge their transcriptions, and save the result in a text file. A final instruction combined the files into a CSV.

[Register 1819](https://jonathanseyfried.net/aca-reg1819-transcriptions/) was the first complete register I processed. [Register 2053](https://jonathanseyfried.net/aca-reg2053-transcriptions), the third, looked noticeably better. I had refined the prompts, and the models had changed between February and March; this comparison didn't separate their contributions to the improvement.
{% endcapture %}

{% include images/figure-wrap.html
  class="left"
  width="50%"
  caption="An example of a folio from an ACA register, ACA CR R2053 f4r. The script has been notoriously difficult and abbreviations are frequent."
  image-path="images/apr-11-aca-cr-r2053-f4r-violant-img10.jpg"
  text = text
%}

## Results and limits

A 300-page register takes about 12 hours to process, at approximately $75 in API costs. Keeping the two models' outputs made recurring errors easier to spot and left a record I could check when the combined transcription looked questionable.

The result is useful for full-text searches. It isn't reliable enough to cite without returning to the image. Dates remained inconsistent even after I revised the process, although I was surprised by how well the models read the script and expanded its abbreviations.

For my purposes, the immediate gain was being able to find a name or place across an entire register. The search gives me somewhere to look; the manuscript still has to supply the reading.
