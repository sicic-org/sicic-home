<p class="landing-kicker">Founding Cohort Demo</p>
# Aijie Shu

<div class="cohort-demo-hero">
  <div>
    <p class="cohort-badge">Founding Cohort</p>
    <h2>HackStudio Pro</h2>
    <p>AI-powered video production studio that turns research into broadcast-ready YouTube documentaries in two languages, from a single codebase.</p>
  </div>
  <div class="cohort-demo-actions">
    <a class="md-button md-button--primary" href="https://losdwind.github.io/hackstudio-lite/">View Live Demo</a>
  </div>
</div>

## Project Snapshot

<div class="grid-3">
  <div class="proof-card">
    <p class="proof-label">Builder</p>
    <h3>Aijie Shu</h3>
    <p>Founding cohort member.</p>
  </div>
  <div class="proof-card">
    <p class="proof-label">Type</p>
    <h3>Video Production Studio</h3>
    <p>A code-driven system for documentary research, scripting, rendering, and bilingual publication.</p>
  </div>
  <div class="proof-card">
    <p class="proof-label">Stack</p>
    <h3>Remotion + React 19 + AI</h3>
    <p>Strict TypeScript, AI-assisted research, MiniMax TTS, and code-driven rendering.</p>
  </div>
</div>

## What It Does

HackStudio Pro treats video production as a software problem rather than a manual editing workflow.

The published demo shows a system designed to:

- research across 17+ platforms
- produce bilingual output in Chinese and English
- work from a single codebase
- reduce manual editing dependency
- validate output before expensive renders

## Core Idea

The site frames the problem directly: making one high-quality documentary takes weeks, doing it in two languages doubles the work, and scaling by hand becomes unrealistic.

HackStudio Pro collapses that workflow by turning each stage of production into code.

## Pipeline

The live demo describes an end-to-end pipeline from raw sources to rendered `.mp4`, including:

- concept
- research
- script
- B-roll sourcing
- editor pass
- TTS generation
- build
- validation harness
- render

## Architecture Highlights

According to the live site, some of the key architectural ideas are:

- scripts are represented as TypeScript data
- timing is computed from audio rather than manual timeline dragging
- animations are React components
- bilingual output is driven from one codebase
- each narration line has a typed `kind` that selects the right renderer

## Notable Systems

### Auto-director for B-roll

The demo includes a `video-editor` skill that reads the script, scores it against different documentary director profiles, and proposes B-roll choices that feel edited rather than merely assembled.

### Pre-render validation harness

Before rendering, the system runs five checks to catch avoidable mistakes:

- counts consistency
- TTS integrity
- breathing time
- B-roll overlap
- text density

## Technology

The live demo lists a stack that includes:

- Remotion 4.0
- React 19
- TailwindCSS v4
- TypeScript
- MiniMax TTS
- OpenAI Whisper
- OpenRouter Vision
- Bun

## Why It Matters

This is one of the strongest examples so far of a founding cohort member turning AI into owned production infrastructure. It is not just a prompt workflow or a single-purpose bot. It is a full publishing system with research, editorial logic, rendering, and validation built in.

## Visit the Demo

- [Open HackStudio Pro](https://losdwind.github.io/hackstudio-lite/)

## Closing Thought

HackStudio Pro shows what it looks like when agentic systems are used not only to automate tasks, but to redesign an entire creative production pipeline around code, structure, and repeatability.
