---
layout: sketchbook
title: Workbench Tags
description: "Browse AI Workbench experiments by tag."
date: 2026-04-09
permalink: /tags/
---

{% assign tag_pages = site.pages
  | where_exp: "item", "item.tags.size > 0"
  | where_exp: "item", "item.name != 'index.md'"
  | where_exp: "item", "item.listed != false"
  | sort: "title" %}

{% assign all_tags = "" | split: "" %}
{% for p in tag_pages %}
  {% for t in p.tags %}
    {% assign all_tags = all_tags | push: t %}
  {% endfor %}
{% endfor %}
{% assign all_tags = all_tags | uniq | sort %}

# Workbench Tags

Browse research experiments by subject.
{: .lede}

{% include typography/section-accent.html %}

{::nomarkdown}
<div class="sketchbook-tag-list" id="sketchbook-tag-list">
  <a class="sketchbook-tag-badge active" href="{{ '/tags/' | relative_url }}">All</a>
  {% for tag in all_tags %}
    {% assign tag_count = tag_pages | where_exp: "p", "p.tags contains tag" | size %}
    <a class="sketchbook-tag-badge" href="{{ '/tags/' | relative_url }}?tag={{ tag | url_encode }}" data-tag="{{ tag | downcase }}">{{ tag }} <span class="tag-count">{{ tag_count }}</span></a>
  {% endfor %}
</div>

<p class="sketchbook-tag-summary" id="sketchbook-tag-summary">Showing all research experiments with tags.</p>

<div class="sketchbook-intro-cards" id="sketchbook-tag-cards">
{% include nav/card-list.html pages=tag_pages tag-data=true %}
</div>

<p class="sketchbook-tag-empty" id="sketchbook-tag-empty" hidden>No research experiments match this tag yet.</p>
{:/nomarkdown}

<script>
  (function () {
    const params = new URLSearchParams(window.location.search);
    const selectedTag = (params.get('tag') || '').trim().toLowerCase();

    const cards = Array.from(document.querySelectorAll('.sketch-tag-card'));
    const badges = Array.from(document.querySelectorAll('.sketchbook-tag-badge[data-tag]'));
    const clear = document.querySelector('.sketchbook-tag-badge:not([data-tag])');
    const summary = document.getElementById('sketchbook-tag-summary');
    const empty = document.getElementById('sketchbook-tag-empty');

    let shown = 0;
    let activeLabel = selectedTag;

    cards.forEach((card) => {
      const tags = (card.dataset.tags || '').split('|').map((tag) => tag.trim()).filter(Boolean);
      const match = selectedTag ? tags.includes(selectedTag) : true;
      card.style.display = match ? '' : 'none';
      if (match) shown += 1;
    });

    if (selectedTag) {
      badges.forEach((badge) => {
        if (badge.dataset.tag === selectedTag) {
          badge.classList.add('active');
          activeLabel = badge.textContent.trim();
        }
      });
      if (clear) clear.classList.remove('active');
      if (summary) {
        summary.textContent = shown === 1
          ? 'Showing 1 research experiment for this tag.'
          : `Showing ${shown} research experiments for this tag.`;
      }
    } else {
      if (clear) clear.classList.add('active');
    }

    if (selectedTag && shown === 0) {
      if (empty) empty.hidden = false;
      if (summary) summary.textContent = 'No research experiments match this tag.';
    }
  })();
</script>
