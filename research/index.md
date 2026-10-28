---
layout: sketchbook
title: Jigs
description: "Experiments with AI for transcription, bibliographic work, mapping, models, and writing."
date: 2026-04-01
wide: true
---

{% assign section_pages = site.pages
  | where_exp: "item", "item.dir == page.dir"
  | where_exp: "item", "item.name != 'index.md'"
  | where_exp: "item", "item.listed != false"
  | sort: "card_order" %}

<div class="section-intro" markdown="1">

# Jigs

Accounts of using AI for particular research tasks. Each jig describes the source material, what the tool produced, and what the researcher did with it.
{: .lede}

</div>

{% include nav/sketchbook-card-list.html pages=section_pages %}

[Browse all workbench tags →]({{ '/tags/' | relative_url }}){: .tag-browse-button}
{: .tag-browse-cta}
