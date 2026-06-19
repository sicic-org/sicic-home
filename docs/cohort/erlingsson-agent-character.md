<p class="landing-kicker">Founding Cohort Demo</p>
# Johannes Erlingsson

<div class="cohort-demo-hero">
  <div>
    <p class="cohort-badge">Founding Cohort</p>
    <h2>agent-character-creator</h2>
    <p>A platform-agnostic skill for defining reusable AI agent personas as structured, version-controllable artifacts instead of ad-hoc system prompts.</p>
  </div>
  <div class="cohort-demo-actions">
    <a class="md-button md-button--primary" href="https://github.com/urbanmania/skills">View Demo Repository</a>
  </div>
</div>

## Project Snapshot

<div class="grid-3">
  <div class="proof-card">
    <p class="proof-label">Builder</p>
    <div class="cohort-member-head">
      <h3>Johannes Erlingsson</h3>
      <a class="cohort-linkedin" href="https://www.linkedin.com/in/johanneserlingsson/" aria-label="Johannes Erlingsson LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V9.67H5.9V17H8.34M7.12 8.66A1.41 1.41 0 1 0 7.12 5.84A1.41 1.41 0 0 0 7.12 8.66M18.1 17V12.96C18.1 10.8 16.95 9.53 15.42 9.53C14.19 9.53 13.64 10.21 13.33 10.69V9.67H10.89C10.92 10.35 10.89 17 10.89 17H13.33V12.91C13.33 12.69 13.35 12.47 13.41 12.31C13.58 11.87 13.97 11.41 14.6 11.41C15.42 11.41 15.75 12.03 15.75 12.94V17H18.1Z"/>
        </svg>
      </a>
    </div>
    <p>AI Specialist and consultant | Developing GenAI solutions and enabling organisational capability | AI @ Oxford</p>
  </div>
  <div class="proof-card">
    <p class="proof-label">Project</p>
    <h3>Agent Character Creator</h3>
    <p>A skill that interviews the builder and turns agent persona design into structured files.</p>
  </div>
  <div class="proof-card">
    <p class="proof-label">Output</p>
    <h3>Five-file agent definition</h3>
    <p>SOUL.md, IDENTITY.md, USER.md, TOOLS.md, and ROUTINES.md.</p>
  </div>
</div>

## Problem

Defining an AI agent's persona in a consistent, reusable way is hard.

Builders often write ad-hoc system prompts that are unstructured, hard to maintain, and difficult to port across different environments such as Claude Code, Claude Desktop, Cowork, or custom runtimes.

That creates a practical gap: there is no repeatable method for capturing an agent's character, identity, user relationship, available tools, and routines as discrete artifacts that can be reviewed, versioned, reused, and improved.

## Solution

Johannes' project, **agent-character-creator**, is a skill that interviews the builder and generates a complete structured agent definition.

Instead of leaving the persona inside one long prompt, the skill splits the definition into five files:

- **SOUL.md** captures character, values, and operating principles.
- **IDENTITY.md** defines who the agent is.
- **USER.md** defines who the agent serves and the relationship it should maintain.
- **TOOLS.md** records the capabilities and tool context available to the agent.
- **ROUTINES.md** defines recurring behaviours, patterns, and expected operating habits.

## Why It Matters

Reusable agent design needs more than a good system prompt. It needs structure.

By turning persona design into separate files, agent-character-creator makes agent definitions easier to maintain, compare, audit, and install across different harnesses.

The same definition can be used for fictional, real-world, or neutral personas. Because it is platform-agnostic, the generated skill folder can be dropped into a Claude harness or custom runtime without rewriting the agent from scratch.

## Project Direction

This project points toward a more disciplined way of building agents:

- interviews replace blank-page prompt writing
- personas become version-controllable artifacts
- agent identity is separated from tools and routines
- builders can move definitions between platforms without losing structure

## Project Status

The member page and public repository are published now.

## Visit the Demo

- [Open Johannes' skills repository](https://github.com/urbanmania/skills)

## Closing Thought

Johannes' project shows that agent quality is not only about model choice. It is also about the discipline of defining who the agent is, who it serves, what it can do, and how it should behave over time.
