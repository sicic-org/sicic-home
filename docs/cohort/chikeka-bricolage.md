<p class="landing-kicker">Founding Cohort Demo</p>
# Bruno Chikeka

<div class="cohort-demo-hero">
  <div>
    <p class="cohort-badge">Founding Cohort</p>
    <h2>Bruno's Bricolage Lab</h2>
    <p>An agentic system for assembling free-tier resources into working outcomes across domains, with a live protocol, specialist agents, and a public troubleshooting record.</p>
  </div>
  <div class="cohort-demo-actions">
    <a class="md-button md-button--primary" href="https://chikeka.github.io/bricolage-portfolio/">View Live Demo</a>
  </div>
</div>

## Project Snapshot

<div class="grid-3">
  <div class="proof-card">
    <p class="proof-label">Builder</p>
    <div class="cohort-member-head">
      <h3>Bruno Chikeka</h3>
      <a class="cohort-linkedin" href="https://www.linkedin.com/in/brunochikeka/" aria-label="Bruno Chikeka LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V9.67H5.9V17H8.34M7.12 8.66A1.41 1.41 0 1 0 7.12 5.84A1.41 1.41 0 0 0 7.12 8.66M18.1 17V12.96C18.1 10.8 16.95 9.53 15.42 9.53C14.19 9.53 13.64 10.21 13.33 10.69V9.67H10.89C10.92 10.35 10.89 17 10.89 17H13.33V12.91C13.33 12.69 13.35 12.47 13.41 12.31C13.58 11.87 13.97 11.41 14.6 11.41C15.42 11.41 15.75 12.03 15.75 12.94V17H18.1Z"/>
        </svg>
      </a>
    </div>
    <p>Systems Architect | AI x Infrastructure x Institutional Design | MSc Oxford Said</p>
  </div>
  <div class="proof-card">
    <p class="proof-label">System</p>
    <h3>Bricolage</h3>
    <p>A domain-agnostic protocol that helps agents discover, select, and combine free resources into working builds.</p>
  </div>
  <div class="proof-card">
    <p class="proof-label">Architecture</p>
    <h3>6 Specialist Agents</h3>
    <p>Master, planner, guide, assembler, discovery, and infra coordinate through a runtime-agnostic MCP layer.</p>
  </div>
</div>

## Why Bruno Built This

The live demo starts with a concrete problem: free-tier services give individuals enough infrastructure to build real products, but most people do not know which parts still exist, which ones still work, or how to combine them reliably.

Bricolage is Bruno's answer to that problem.

The site frames the project as owned infrastructure rather than rented tooling. The goal is not just to use services, but to assemble them into repeatable outcomes through protocol, verification, and agent coordination.

## What Bricolage Is

The published site describes Bricolage as a domain-agnostic protocol for assembling free resources into outcomes.

The current implementation includes:

- 6 agents: `master`, `planner`, `guide`, `assembler`, `discovery`, `infra`
- 411 free resources in the compute domain
- 5 assembly patterns: `blog-ai`, `portfolio`, `saas-starter`, `ai-chatbot`, `api-backend`
- 10 MCP tools for catalog browsing, status tracking, and encrypted token storage

The site also makes the underlying standard explicit:

- every resource has a durability classification
- every resource carries a `verified_at` date
- stale entries can be excluded by the planner

That is a stronger design choice than treating free tiers as static documentation. It turns the resource layer into something agents can reason about.

## Lead Agents

The master is the entry point and routes the goal to five specialists.

The live site lists these roles clearly:

- `master`: reads the goal, picks the domain, delegates
- `planner`: reads the catalog, picks the minimal set of resources
- `guide`: walks the user through account creation and token capture
- `assembler`: takes the plan plus acquired access and builds the outcome
- `discovery`: scaffolds a new domain when a goal fits nowhere
- `infra`: deploys the runtime onto user-provisioned free compute

## Why It Matters

Bruno's project stands out because it treats free-tier infrastructure as a moving system that needs governance, not just a list of links.

The live demo is strong for three reasons:

- the protocol is explicit
- the architecture is decomposed into specialist agents
- the troubleshooting journal is part of the product record

This is a useful founding cohort pattern: publish the methodology, expose the architecture, and document the failure modes alongside the wins.

## Visit the Demo

- [Open Bruno's Bricolage Lab](https://chikeka.github.io/bricolage-portfolio/)
- [View the source repository](https://github.com/chiKeka/bricolage)

## Closing Thought

Bricolage is not a narrow single-agent utility. It is an attempt to build a reusable protocol for turning fragmented free infrastructure into deployable systems. That is exactly the kind of systems-level thinking a founding cohort page should make visible.
