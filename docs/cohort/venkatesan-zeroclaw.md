<p class="landing-kicker">Founding Cohort Demo</p>
# Jaidev Venkatesan

<div class="cohort-demo-hero">
  <div>
    <p class="cohort-badge">Founding Cohort</p>
    <h2>My ZeroClaw Lab</h2>
    <p>A ZeroClaw-based lab focused on content intelligence, delegation, and owned agent workflows delivered through Telegram.</p>
  </div>
  <div class="cohort-demo-actions">
    <a class="md-button md-button--primary" href="https://j-ai-dev.github.io/my-zeroclaw-agents/">View Live Demo</a>
  </div>
</div>

## Project Snapshot

<div class="grid-3">
  <div class="proof-card">
    <p class="proof-label">Builder</p>
    <div class="cohort-member-head">
      <h3>Jaidev Venkatesan</h3>
      <a class="cohort-linkedin" href="https://www.linkedin.com/in/jaidev-venkatesan-11190012" aria-label="Jaidev Venkatesan LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V9.67H5.9V17H8.34M7.12 8.66A1.41 1.41 0 1 0 7.12 5.84A1.41 1.41 0 0 0 7.12 8.66M18.1 17V12.96C18.1 10.8 16.95 9.53 15.42 9.53C14.19 9.53 13.64 10.21 13.33 10.69V9.67H10.89C10.92 10.35 10.89 17 10.89 17H13.33V12.91C13.33 12.69 13.35 12.47 13.41 12.31C13.58 11.87 13.97 11.41 14.6 11.41C15.42 11.41 15.75 12.03 15.75 12.94V17H18.1Z"/>
        </svg>
      </a>
    </div>
    <p>Senior Manager - Enabling Data &amp; AI Governance</p>
  </div>
  <div class="proof-card">
    <p class="proof-label">Lead Agent</p>
    <h3>Nova</h3>
    <p>A YouTube-focused content intelligence officer that searches, filters, and summarizes relevant videos.</p>
  </div>
  <div class="proof-card">
    <p class="proof-label">Workflow</p>
    <h3>Telegram + MCP</h3>
    <p>ZeroClaw manages delegation while a custom MCP server powers the YouTube retrieval pipeline.</p>
  </div>
</div>

## Why Jaidev Built This

The live site frames the project clearly: Jaidev wanted to build something he actually owns, not just use someone else's AI tool.

This lab documents both what he built and what went wrong along the way.

## Current Lead Agent

### Nova

Nova is Jaidev's Content Intelligence Officer, focused on YouTube discovery and summarisation.

According to the live demo, Nova:

- searches YouTube through the Data API v3 via a custom MCP server
- delivers the top 3 videos with 3-bullet summaries to Telegram
- supports deeper analysis on request by replying with a number
- manages topics through `/topics` commands

## How It Works

ZeroClaw acts as the manager. It receives commands through Telegram, delegates YouTube work to Nova, then renders thumbnails and presents the results.

Nova stays focused on content analysis.

The published pipeline is:

- MCP server
- Python fetcher
- YouTube Data API v3

## Key Numbers

The live site lists the following project details:

| Metric | Value |
| --- | --- |
| Framework | ZeroClaw v0.3.4 |
| VPS | Hetzner, 2 vCPU, 3.7GB RAM |
| Model | Claude Haiku 4.5 via OpenRouter |
| Lead agent | Nova — YouTube Content Intelligence |
| Topics | AI agents, Super Individual business, Claude AI |
| Cost limits | $5/day, $20/month |
| Security | Workspace sandbox, Telegram allowlist, audit logging |
| Monthly cost | Around $6 VPS plus around $5-15 API |

## Why It Matters

This is a strong founding cohort project because it turns a common AI use case, content discovery, into an owned operating workflow with clear delegation, controlled topics, and lightweight delivery through Telegram.

It is not just a chatbot. It is a managed content intelligence system with a defined role for the manager, a focused specialist agent, and a custom tool layer underneath.

## Visit the Demo

- [Open My ZeroClaw Lab](https://j-ai-dev.github.io/my-zeroclaw-agents/)

## Closing Thought

Jaidev's project shows how a small, owned agent system can become useful quickly when the role is narrow, the delegation is clear, and the supporting toolchain is designed around a real workflow.
