---
layout: sketchbook
title: Contribute a Research Experiment
description: "Share an experiment with AI in humanities research."
scrollspy: true
---

# Contribute a Research Experiment

Share a particular research task and what happened when you tried AI. An incomplete result, an abandoned workflow, or a decision not to use a tool belongs here too.
{: .lede}

{% include typography/section-accent.html %}

## Email a draft

[Send a few paragraphs to amaranth@unm.edu](mailto:amaranth@unm.edu). Include:

- the task, source material, and research context;
- the tool, prompts, and steps you tried;
- an example of the output, with permission to share it;
- what you checked, corrected, or could not resolve;
- time and cost, if known, including preparation and checking.

We'll help shape it into an account and check the draft with you before publication. Don't invent results or turn one attempt into a promise about how a tool performs.

## Write in Markdown

In the AI Workbench repository, copy `research/_sketch-template.md` to a new filename in `research/`, such as `my-workflow.md`. Remove the leading underscore so Jekyll publishes the copy, then follow the template's comments. Preserve the existing front-matter fields and use the typography and figure includes for prompts, callouts, and images.

Put images in `research/images/` and supporting PDFs in `research/pdfs/`. Use relative paths such as `images/my-source.jpg`. Add your name and department to `author`, the tool requirements to `tools`, a summary, and concrete results and limitations.

## Check and submit

Run `bundle exec jekyll serve --port 4004` from the AI Workbench folder, then open `http://localhost:4004/ai-workbench/`. Check your experiment, its card, images, downloads, and tags. Submit the changes for review in the AI Workbench repository once it has been created.

## What the status labels mean

- **Rough:** an initial proposal or account with significant questions unresolved.
- **Lightly tested:** a limited attempt with little follow-up.
- **Tested:** enough experience is recorded to describe findings and limitations.
- **Refined:** revised in response to use, with changes and remaining limitations documented.

These describe experience and revision, not proof of accuracy or suitability for another research project. Read `STYLE-GUIDE.md` for the full editorial standard.

## License

Your experiment is published under your name and licensed [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Others may share and adapt it for noncommercial purposes with credit and the same license. Images and source documents retain their own licenses.

For classroom activities and course policies, contribute to [AI Sketchbook](https://amaranth.unm.edu/ai-sketchbook/contribute.html).
