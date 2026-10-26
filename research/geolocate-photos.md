---
layout: sketchbook
title: Photos to Map Pins
summary: "A folder of street-cat photographs became an interactive map using the location data recorded by a phone."
thumbnail: "images/marrakech-thumbnail.jpg"
date: 2026-04-09
status: tested
type: data work
effort: "less than 1 hour"
tools:
  - GitHub Copilot
  - GitHub Pages
level: any
author: "Fred Gibbs, History"
tags:
  - AI-assisted coding
  - maps
  - agentic AI
results:
  - "extracted GPS coordinates from more than 200 photographs"
  - "published a map with a clickable photograph at each pin"
what-i-learned:
  - "existing location data and a familiar website template made the task quick"
  - "map pins inherit the location errors in the photographs"
card_order: 20
---

# Photos to Map Pins

{% include typography/section-accent.html %}

{% include typography/sketch-info.html %}

I came back from Marrakech in March 2026 with more than 200 photographs of street cats. My phone had recorded their locations, so I wanted a map where I could click a pin and see the cat. With Copilot's help, the folder became [Cats of Marrakech](https://jeseyfried.github.io/cats-of-marrakech/), a working map, in about half an hour. I already knew the website template, which gave me a head start.

## Making the map

Location services were enabled in my phone's Camera app, so the photographs contained GPS coordinates. I copied the images into a GitHub repository built from the [Xanthan](https://xanthan-web.github.io/) portfolio template. That supplied the website's files and folders.

I asked GitHub Copilot to extract the coordinates into a YAML data file and update `map.html` to display them. Each pin opens its corresponding photograph. Copilot wrote the code; I didn't need to enter coordinates or make a separate record for each image.

## The Prompt

{% include typography/sketch-prompt.html label="prompt to give to Copilot" text="Please create a new YML file in the _data folder that lists each of the images in assets/images. The YML file should include geographic location extracted from the metadata of each image. Then edit map.html so that the map uses the newly created YML file. The overall goal is to have a pin on the map for each of the photos, and when a user clicks on the pin, the image appears." %}

## What this depended on

The useful combination was a collection with location data already attached and a website I knew how to update. Those conditions explain much of the speed. Someone starting with unlocated images or an unfamiliar website would have more work to do.

Phone GPS also varies in precision. A photograph taken indoors may appear across the street or several meters from where it was taken. The map preserves those coordinates, including their errors. For field photographs or research where a few meters matter, I'd check the locations before treating the pins as evidence.

This was a small project, but it was enough to show me how an AI coding assistant could help publish a collection I would otherwise have left in a folder.
