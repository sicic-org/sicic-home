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
    <div class="cohort-member-head">
      <h3>Aijie Shu</h3>
      <a class="cohort-linkedin" href="https://www.linkedin.com/in/aijie-shu-5420047a/" aria-label="Aijie Shu LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V9.67H5.9V17H8.34M7.12 8.66A1.41 1.41 0 1 0 7.12 5.84A1.41 1.41 0 0 0 7.12 8.66M18.1 17V12.96C18.1 10.8 16.95 9.53 15.42 9.53C14.19 9.53 13.64 10.21 13.33 10.69V9.67H10.89C10.92 10.35 10.89 17 10.89 17H13.33V12.91C13.33 12.69 13.35 12.47 13.41 12.31C13.58 11.87 13.97 11.41 14.6 11.41C15.42 11.41 15.75 12.03 15.75 12.94V17H18.1Z"/>
        </svg>
      </a>
    </div>
    <p>AI, Blockchain, Full-Stack Developer</p>
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
