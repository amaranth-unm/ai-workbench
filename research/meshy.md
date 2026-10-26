---
layout: sketchbook
title: Generate 3D Prints from 2D Drawings
description: "Creating a scale model of an IUD from the 1970s using AI-generated 3D files."
summary: "We used historical drawings of IUDs to try making 3D-printable replicas with Meshy."
thumbnail: "images/meshy-screenshot.jpg"
thumbnail-position: "10% 50%"
date: 2026-04-09
status: tested
type: data work
effort: "30–60 min"
tools:
  - Meshy.ai
level: any
author: "Fred Gibbs, History"
tags:
  - 3D printing
  - material culture
results:
  - "generated printable models from historical drawings"
  - "found that Meshy could smooth away asymmetries in a source"
what-i-learned:
  - "line drawings gave closer-looking results than our earlier photograph experiments"
  - "a printable model still needs comparison with the historical source"
card_order: 30
---

# Generate 3D Prints from 2D Drawings

{% include typography/section-accent.html %}

{% include typography/sketch-info.html %}

History doctoral candidate Edrea Mendoza studies public health and sex education initiatives in 1970s Mexico. Her research turned up drawings of IUDs manufactured during that decade as part of a government push for population control. She wanted replicas she could hold. We tried turning the drawings into printable models with [Meshy.ai](https://www.meshy.ai/).

## From drawing to model

Meshy takes an uploaded image, generates a 3D mesh, and exports a file for printing. That let us try the drawings without first building the models by hand.

{% include images/figure.html
  width="100%"
  image-path="images/meshy-screenshot.jpg"
  alt-text="Screenshot of IUD drawing uploaded in Meshy"
  caption="A 2D IUD drawing uploaded to Meshy.ai."
%}

## What the tool changed

Earlier Meshy experiments at [Amaranth](https://amaranth.unm.edu/) with high-resolution photographs of museum objects had produced distorted results, even with multiple views. The line drawings gave us models that appeared closer to the sources.

{% capture text %}
One result showed why that comparison matters. When we uploaded a drawing of a Middleton Cross, Meshy smoothed and regularized asymmetries in the original. It treated features we wanted to preserve as imperfections to correct. A model can look convincing while losing exactly the details a researcher cares about.
{% endcapture %}

{% include images/figure-wrap.html
  image-position="right"
  image-width="60%"
  caption="Screenshot of what Meshy.ai produced for a Middleton Cross."
  image-path="images/meshy-middleton.jpg"
  text=text
%}

## What the replicas are for

Holding a replica offers a different way to discuss an object in a research presentation. It also makes the reconstruction's limits worth explaining. A printable file doesn't establish the accuracy of its dimensions or the parts of the object the drawing doesn't show.

These experiments make me interested in trying other artifact illustrations and diagrams. I'd assess each result against its source before deciding what claims the replica could help support.
