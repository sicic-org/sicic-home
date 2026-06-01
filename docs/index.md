---
title: Super Individuals CIC
template: home.html
description: A public-interest community for helping domain experts build domain-specific AI agents.
hide:
  - navigation
  - toc
---

<section class="programme-hero">
  <p class="programme-kicker">Two build paths</p>
  <h1>Start at the right depth for your AI build.</h1>
  <p class="programme-subhead">
    SICIC runs two hands-on tracks: Intro for first owned workflows, Builder for orchestration, broader toolchains, and more demanding operational practice.
  </p>
  <div class="programme-meta">
    <div class="programme-meta__item">
      <strong>Tracks</strong>
      <span>Intro + Builder</span>
    </div>
    <div class="programme-meta__item">
      <strong>Format</strong>
      <span>Online, hands-on workshop</span>
    </div>
    <div class="programme-meta__item">
      <strong>Entry</strong>
      <span>Rolling Intro · Builder orientation June 13, 2026</span>
    </div>
    <div class="programme-meta__item">
      <strong>Outcome</strong>
      <span>Owned systems, public demos, and a path into membership</span>
    </div>
  </div>
  <div class="programme-actions">
    <a class="md-button md-button--primary" href="#track-fit">Find your track</a>
    <a class="md-button" href="cohort/">See member demos</a>
  </div>
</section>

## Find Your Track { #track-fit }

<div class="track-quiz">
  <div class="feature-card track-quiz__intro">
    <p class="proof-label">3 questions</p>
    <h3>Answer three quick questions</h3>
    <p>Most people should start with Intro track. Builder track is for people whose bottleneck is already complexity: orchestration, toolchain breadth, and stronger operational practice. Builder orientation is on June 13, 2026, with official kick-off on June 15, 2026.</p>
  </div>
  <form class="track-quiz__form" id="track-quiz">
    <fieldset class="track-quiz__question">
      <legend>1. What is blocking you right now?</legend>
      <label class="track-quiz__option">
        <input checked name="q1" type="radio" value="intro" />
        <span>I need my first owned agent workflow.</span>
      </label>
      <label class="track-quiz__option">
        <input name="q1" type="radio" value="builder" />
        <span>I already have the basics. I need broader orchestration and automation.</span>
      </label>
    </fieldset>
    <fieldset class="track-quiz__question">
      <legend>2. Which environment sounds more like you?</legend>
      <label class="track-quiz__option">
        <input checked name="q2" type="radio" value="intro" />
        <span>I want a clear guided foundation across Telegram, VPS, files, and publishing.</span>
      </label>
      <label class="track-quiz__option">
        <input name="q2" type="radio" value="builder" />
        <span>I am already running workflows and want to expand into larger systems.</span>
      </label>
    </fieldset>
    <fieldset class="track-quiz__question">
      <legend>3. What do you need next?</legend>
      <label class="track-quiz__option">
        <input checked name="q3" type="radio" value="intro" />
        <span>One reliable pipeline from request to saved output to public proof of work.</span>
      </label>
      <label class="track-quiz__option">
        <input name="q3" type="radio" value="builder" />
        <span>Multi-agent orchestration, broader MCP toolchains, and richer automation.</span>
      </label>
    </fieldset>
    <div class="programme-actions">
      <button class="md-button md-button--primary" id="track-quiz-submit" type="button">See my track</button>
    </div>
  </form>
  <div aria-live="polite" class="feature-card track-quiz__result" id="track-quiz-result">
    <p class="proof-label" data-result-label>Your recommendation</p>
    <h3 data-result-title>Intro track</h3>
    <p class="track-quiz__result-copy" data-result-copy>Start with Intro track if you need the clean foundation: Telegram, VPS, files, documentation, and a public proof-of-work site. Rolling enrolment is open now.</p>
    <div class="programme-actions">
      <a class="md-button md-button--primary" data-result-primary href="https://forms.fillout.com/t/3eGJuNKYW3us">Apply for Intro track</a>
      <a class="md-button" data-result-secondary href="workshops/">View Intro track</a>
    </div>
  </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("track-quiz");
  const result = document.getElementById("track-quiz-result");
  const submit = document.getElementById("track-quiz-submit");

  if (!form || !result || !submit) {
    return;
  }

  const label = result.querySelector("[data-result-label]");
  const title = result.querySelector("[data-result-title]");
  const copy = result.querySelector("[data-result-copy]");
  const primary = result.querySelector("[data-result-primary]");
  const secondary = result.querySelector("[data-result-secondary]");

  const states = {
    intro: {
      label: "Best starting point",
      title: "Intro track",
      copy: "Start with Intro track if you need the clean foundation: Telegram, VPS, files, documentation, and a public proof-of-work site. Rolling enrolment is open now.",
      primaryText: "Apply for Intro track",
      primaryHref: "https://forms.fillout.com/t/3eGJuNKYW3us",
      secondaryText: "View Intro track",
      secondaryHref: "workshops/"
    },
    builder: {
      label: "Best next layer",
      title: "Builder track",
      copy: "Choose Builder track if your bottleneck is already complexity: multi-agent orchestration, broader MCP toolchains, deployment hygiene, and richer automation. Applications are open now. Orientation is on June 13, 2026, and the official kick-off is on June 15, 2026.",
      primaryText: "Apply for Builder track",
      primaryHref: "https://forms.fillout.com/t/mY53Xhjk7zus",
      secondaryText: "View Builder track",
      secondaryHref: "builder-track/"
    }
  };

  const updateRecommendation = function () {
    const answers = new FormData(form);
    let builderCount = 0;

    ["q1", "q2", "q3"].forEach(function (key) {
      if (answers.get(key) === "builder") {
        builderCount += 1;
      }
    });

    const state = builderCount >= 2 ? states.builder : states.intro;

    label.textContent = state.label;
    title.textContent = state.title;
    copy.textContent = state.copy;
    primary.textContent = state.primaryText;
    primary.href = state.primaryHref;
    secondary.textContent = state.secondaryText;
    secondary.href = state.secondaryHref;
    result.classList.toggle("track-quiz__result--builder", builderCount >= 2);
  };

  submit.addEventListener("click", updateRecommendation);
  form.addEventListener("change", updateRecommendation);
  updateRecommendation();
});
</script>

## What Intro Track Builds First

<div class="programme-panel programme-panel--narrow">
  <ul class="programme-checklist">
    <li>A Telegram-connected agent running 24/7 on your own VPS infrastructure</li>
    <li>A safer Week 1 setup with basic hardening and ownership habits</li>
    <li>A first agent shaped by workflow design plus <code>SOUL.md</code> and <code>SKILL.md</code></li>
    <li>A public GitHub Pages site built from Markdown outputs you control</li>
  </ul>
  <p class="programme-note">This is not a course about AI concepts. <br> It is a build environment for people who want one useful owned system, not just familiarity with tools.</p>
  <p class="programme-note">Builder track builds on this foundation with orchestration, broader toolchains, and more demanding operational practice.</p>
</div>

## Why This Is Different

<div class="programme-card-grid">
  <div class="programme-card">
    <h3>Not a course. An incubator.</h3>
    <p>You are not watching videos. You are building infrastructure, shaping an agent, publishing outputs, and learning by shipping.</p>
  </div>
  <div class="programme-card">
    <h3>Referral-aware</h3>
    <p>The workshop is open to applicants. Referrals still matter for pricing, progression into the deeper membership layer, and the path toward founding status.</p>
  </div>
  <div class="programme-card">
    <h3>Foundation before sprawl</h3>
    <p>The Intro track stays deliberately small: Telegram, VPS, files, tools, documentation, and publishing.</p>
  </div>
  <div class="programme-card">
    <h3>Builder track next</h3>
    <p>Advanced builders can continue into the Builder track for multi-agent orchestration, broader MCP toolchains, and automation systems.</p>
  </div>
</div>

## Also Available

<div class="grid-2">
  <div class="feature-card">
    <p class="proof-label">Pre-bootcamp</p>
    <h3>Warm up before Intro track</h3>
    <p>A lighter starting point for non-technical people who want to get comfortable before the workshop, and a useful primer for people already on the Intro track.</p>
    <a href="https://sicic-org.github.io/pre-bootcamp/">Explore pre-bootcamp</a>
  </div>
  <div class="feature-card">
    <p class="proof-label">Proof of Build</p>
    <h3>See what members publish</h3>
    <p>Founding members are already turning workshop work into public demos, live documentation, and reusable agent systems.</p>
    <a href="cohort/">Browse cohort demos</a>
  </div>
</div>

## Founding Member Demos

<div class="grid-3">
  <div class="proof-card">
    <p class="proof-label">Founding Cohort</p>
    <h3>First 31 builders</h3>
    <p>The first members are not just joining a community. They are leaving a public record of what they build.</p>
    <a href="cohort/">See cohort page</a>
  </div>
  <div class="proof-card proof-card--founding">
    <p class="proof-label">Member Demo</p>
    <div class="cohort-member-head">
      <h3>Gemma Oldfield</h3>
      <a class="cohort-linkedin" href="https://www.linkedin.com/in/gemma-oldfield-680b342b/" aria-label="Gemma Oldfield LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V9.67H5.9V17H8.34M7.12 8.66A1.41 1.41 0 1 0 7.12 5.84A1.41 1.41 0 0 0 7.12 8.66M18.1 17V12.96C18.1 10.8 16.95 9.53 15.42 9.53C14.19 9.53 13.64 10.21 13.33 10.69V9.67H10.89C10.92 10.35 10.89 17 10.89 17H13.33V12.91C13.33 12.69 13.35 12.47 13.41 12.31C13.58 11.87 13.97 11.41 14.6 11.41C15.42 11.41 15.75 12.03 15.75 12.94V17H18.1Z"/>
        </svg>
      </a>
    </div>
    <p class="cohort-member-role">Masters AI for Business Oxford | Software Delivery </p>
    <p>ZeroClaw Agents is one of the first founding cohort demos now live.</p>
    <a href="cohort/goldfield-zeroclaw/">View member page</a>
  </div>
  <div class="proof-card proof-card--founding">
    <p class="proof-label">Member Demo</p>
    <div class="cohort-member-head">
      <h3>Mafalda Patricio</h3>
      <a class="cohort-linkedin" href="https://www.linkedin.com/in/mafaldaiapatricio/" aria-label="Mafalda Patricio LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V9.67H5.9V17H8.34M7.12 8.66A1.41 1.41 0 1 0 7.12 5.84A1.41 1.41 0 0 0 7.12 8.66M18.1 17V12.96C18.1 10.8 16.95 9.53 15.42 9.53C14.19 9.53 13.64 10.21 13.33 10.69V9.67H10.89C10.92 10.35 10.89 17 10.89 17H13.33V12.91C13.33 12.69 13.35 12.47 13.41 12.31C13.58 11.87 13.97 11.41 14.6 11.41C15.42 11.41 15.75 12.03 15.75 12.94V17H18.1Z"/>
        </svg>
      </a>
    </div>
    <p class="cohort-member-role">Transforming the UK Comms, Media & High Tech @ Salesforce</p>
    <p>Mafalda's Digital Lab and Nova show how founding members are building owned AI systems with clear operational roles.</p>
    <a href="cohort/patricio-zeroclaw/">View member page</a>
  </div>
  <div class="proof-card proof-card--founding">
    <p class="proof-label">Member Demo</p>
    <div class="cohort-member-head">
      <h3>Aijie Shu</h3>
      <a class="cohort-linkedin" href="https://www.linkedin.com/in/aijie-shu-5420047a/" aria-label="Aijie Shu LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V9.67H5.9V17H8.34M7.12 8.66A1.41 1.41 0 1 0 7.12 5.84A1.41 1.41 0 0 0 7.12 8.66M18.1 17V12.96C18.1 10.8 16.95 9.53 15.42 9.53C14.19 9.53 13.64 10.21 13.33 10.69V9.67H10.89C10.92 10.35 10.89 17 10.89 17H13.33V12.91C13.33 12.69 13.35 12.47 13.41 12.31C13.58 11.87 13.97 11.41 14.6 11.41C15.42 11.41 15.75 12.03 15.75 12.94V17H18.1Z"/>
        </svg>
      </a>
    </div>
    <p class="cohort-member-role">AI, Blockchain, Full-Stack Developer</p>
    <p>HackStudio Pro turns research, scripting, and rendering into a code-driven bilingual video production system.</p>
    <a href="cohort/shu-hackstudio-pro/">View member page</a>
  </div>
  <div class="proof-card proof-card--founding">
    <p class="proof-label">Member Demo</p>
    <div class="cohort-member-head">
      <h3>Yiwen Tuo</h3>
      <a class="cohort-linkedin" href="https://www.linkedin.com/in/yiwen-tuo-646243342/" aria-label="Yiwen Tuo LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V9.67H5.9V17H8.34M7.12 8.66A1.41 1.41 0 1 0 7.12 5.84A1.41 1.41 0 0 0 7.12 8.66M18.1 17V12.96C18.1 10.8 16.95 9.53 15.42 9.53C14.19 9.53 13.64 10.21 13.33 10.69V9.67H10.89C10.92 10.35 10.89 17 10.89 17H13.33V12.91C13.33 12.69 13.35 12.47 13.41 12.31C13.58 11.87 13.97 11.41 14.6 11.41C15.42 11.41 15.75 12.03 15.75 12.94V17H18.1Z"/>
        </svg>
      </a>
    </div>
    <p class="cohort-member-role">PhD Candidate | Visiting Researcher @ Trinity College Dublin</p>
    <p>Paper Party turns paper upload into discovery, mapped literature context, and academic dialogue.</p>
    <a href="cohort/tuo-paper-party/">View member page</a>
  </div>
  <div class="proof-card proof-card--founding">
    <p class="proof-label">Member Demo</p>
    <div class="cohort-member-head">
      <h3>Jaidev Venkatesan</h3>
      <a class="cohort-linkedin" href="https://www.linkedin.com/in/jaidev-venkatesan-11190012" aria-label="Jaidev Venkatesan LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V9.67H5.9V17H8.34M7.12 8.66A1.41 1.41 0 1 0 7.12 5.84A1.41 1.41 0 0 0 7.12 8.66M18.1 17V12.96C18.1 10.8 16.95 9.53 15.42 9.53C14.19 9.53 13.64 10.21 13.33 10.69V9.67H10.89C10.92 10.35 10.89 17 10.89 17H13.33V12.91C13.33 12.69 13.35 12.47 13.41 12.31C13.58 11.87 13.97 11.41 14.6 11.41C15.42 11.41 15.75 12.03 15.75 12.94V17H18.1Z"/>
        </svg>
      </a>
    </div>
    <p class="cohort-member-role">Senior Manager | Enabling Data & AI Governance</p>
    <p>My ZeroClaw Lab shows how Nova can turn YouTube search, MCP tools, and Telegram delivery into a focused content intelligence workflow.</p>
    <a href="cohort/venkatesan-zeroclaw/">View member page</a>
  </div>
  <div class="proof-card proof-card--founding">
    <p class="proof-label">Member Demo</p>
    <div class="cohort-member-head">
      <h3>Gigi Palma</h3>
      <a class="cohort-linkedin" href="https://www.linkedin.com/in/gigirodriguezpalma/" aria-label="Gigi Palma LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V9.67H5.9V17H8.34M7.12 8.66A1.41 1.41 0 1 0 7.12 5.84A1.41 1.41 0 0 0 7.12 8.66M18.1 17V12.96C18.1 10.8 16.95 9.53 15.42 9.53C14.19 9.53 13.64 10.21 13.33 10.69V9.67H10.89C10.92 10.35 10.89 17 10.89 17H13.33V12.91C13.33 12.69 13.35 12.47 13.41 12.31C13.58 11.87 13.97 11.41 14.6 11.41C15.42 11.41 15.75 12.03 15.75 12.94V17H18.1Z"/>
        </svg>
      </a>
    </div>
    <p class="cohort-member-role">Strategic Program &amp; Transformation Leader | Oxford MSc</p>
    <p>Gp's ZeroClaw Lab documents Nova's design, weekly lessons, and an early real estate analyzer build.</p>
    <a href="cohort/palma-zeroclaw/">View member page</a>
  </div>
  <div class="proof-card proof-card--founding">
    <p class="proof-label">Member Demo</p>
    <div class="cohort-member-head">
      <h3>Bruno Chikeka</h3>
      <a class="cohort-linkedin" href="https://www.linkedin.com/in/brunochikeka/" aria-label="Bruno Chikeka LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V9.67H5.9V17H8.34M7.12 8.66A1.41 1.41 0 1 0 7.12 5.84A1.41 1.41 0 0 0 7.12 8.66M18.1 17V12.96C18.1 10.8 16.95 9.53 15.42 9.53C14.19 9.53 13.64 10.21 13.33 10.69V9.67H10.89C10.92 10.35 10.89 17 10.89 17H13.33V12.91C13.33 12.69 13.35 12.47 13.41 12.31C13.58 11.87 13.97 11.41 14.6 11.41C15.42 11.41 15.75 12.03 15.75 12.94V17H18.1Z"/>
        </svg>
      </a>
    </div>
    <p class="cohort-member-role">AI x Infrastructure x Institutional Design | MSc Oxford Said</p>
    <p>Bruno's Bricolage Lab turns free-tier discovery, resource verification, and agent coordination into a reusable build protocol.</p>
    <a href="cohort/chikeka-bricolage/">View member page</a>
  </div>
  <div class="proof-card proof-card--founding">
    <p class="proof-label">Member Demo</p>
    <div class="cohort-member-head">
      <h3>Luis Loio</h3>
      <a class="cohort-linkedin" href="https://www.linkedin.com/in/luis-loio/" aria-label="Luis Loio LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V9.67H5.9V17H8.34M7.12 8.66A1.41 1.41 0 1 0 7.12 5.84A1.41 1.41 0 0 0 7.12 8.66M18.1 17V12.96C18.1 10.8 16.95 9.53 15.42 9.53C14.19 9.53 13.64 10.21 13.33 10.69V9.67H10.89C10.92 10.35 10.89 17 10.89 17H13.33V12.91C13.33 12.69 13.35 12.47 13.41 12.31C13.58 11.87 13.97 11.41 14.6 11.41C15.42 11.41 15.75 12.03 15.75 12.94V17H18.1Z"/>
        </svg>
      </a>
    </div>
    <p class="cohort-member-role">Consulting | Treasury &amp; Investments | Oxford EMBA</p>
    <p>Luis'ZeroClaw Lab is live as an early scaffold, with the architecture, troubleshooting, and showcase structure already in place.</p>
    <a href="cohort/loio-zeroclaw/">View member page</a>
  </div>
  <div class="proof-card proof-card--founding">
    <p class="proof-label">Member Demo</p>
    <div class="cohort-member-head">
      <h3>Charlotte Luzuka</h3>
      <a class="cohort-linkedin" href="https://www.linkedin.com/in/charlotte-luzuka" aria-label="Charlotte Luzuka LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V9.67H5.9V17H8.34M7.12 8.66A1.41 1.41 0 1 0 7.12 5.84A1.41 1.41 0 0 0 7.12 8.66M18.1 17V12.96C18.1 10.8 16.95 9.53 15.42 9.53C14.19 9.53 13.64 10.21 13.33 10.69V9.67H10.89C10.92 10.35 10.89 17 10.89 17H13.33V12.91C13.33 12.69 13.35 12.47 13.41 12.31C13.58 11.87 13.97 11.41 14.6 11.41C15.42 11.41 15.75 12.03 15.75 12.94V17H18.1Z"/>
        </svg>
      </a>
    </div>
    <p class="cohort-member-role">Senior PM | Angel Investor | Digital Health &amp; Innovation Leader</p>
    <p>CHIP turns player context and short clips into focused coaching priorities and 4-week improvement plans.</p>
    <a href="cohort/luzuka-chip/">View member page</a>
  </div>
  <div class="proof-card proof-card--founding">
    <p class="proof-label">Member Demo</p>
    <div class="cohort-member-head">
      <h3>Jamaal Linton</h3>
      <a class="cohort-linkedin" href="https://www.linkedin.com/in/jamaal-linton-13b242b0" aria-label="Jamaal Linton LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V9.67H5.9V17H8.34M7.12 8.66A1.41 1.41 0 1 0 7.12 5.84A1.41 1.41 0 0 0 7.12 8.66M18.1 17V12.96C18.1 10.8 16.95 9.53 15.42 9.53C14.19 9.53 13.64 10.21 13.33 10.69V9.67H10.89C10.92 10.35 10.89 17 10.89 17H13.33V12.91C13.33 12.69 13.35 12.47 13.41 12.31C13.58 11.87 13.97 11.41 14.6 11.41C15.42 11.41 15.75 12.03 15.75 12.94V17H18.1Z"/>
        </svg>
      </a>
    </div>
    <p class="cohort-member-role">Sales Engineer | Datasite</p>
    <p>J's ZeroClaw Lab shows the full journey from first server setup to a deployed Nova workflow with real troubleshooting along the way.</p>
    <a href="cohort/linton-zeroclaw/">View member page</a>
  </div>
  <div class="proof-card proof-card--founding">
    <p class="proof-label">Member Demo</p>
    <div class="cohort-member-head">
      <h3>Dr. Vivek Kumar</h3>
      <a class="cohort-linkedin" href="https://www.linkedin.com/in/vivek-kumar-phd-44011683/" aria-label="Dr. Vivek Kumar LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V9.67H5.9V17H8.34M7.12 8.66A1.41 1.41 0 1 0 7.12 5.84A1.41 1.41 0 0 0 7.12 8.66M18.1 17V12.96C18.1 10.8 16.95 9.53 15.42 9.53C14.19 9.53 13.64 10.21 13.33 10.69V9.67H10.89C10.92 10.35 10.89 17 10.89 17H13.33V12.91C13.33 12.69 13.35 12.47 13.41 12.31C13.58 11.87 13.97 11.41 14.6 11.41C15.42 11.41 15.75 12.03 15.75 12.94V17H18.1Z"/>
        </svg>
      </a>
    </div>
    <p class="cohort-member-role">Research Scientist | AI &amp; Mental Health</p>
    <p>NewsAware turns sentiment analysis and evidence checking into a focused newsroom agent for credibility-sensitive public claims.</p>
    <a href="cohort/kumar-newsaware/">View member page</a>
  </div>
  <div class="proof-card proof-card--founding">
    <p class="proof-label">Member Demo</p>
    <div class="cohort-member-head">
      <h3>Lucile Ripa</h3>
      <a class="cohort-linkedin" href="https://www.linkedin.com/in/lucileripa/" aria-label="Lucile Ripa LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V9.67H5.9V17H8.34M7.12 8.66A1.41 1.41 0 1 0 7.12 5.84A1.41 1.41 0 0 0 7.12 8.66M18.1 17V12.96C18.1 10.8 16.95 9.53 15.42 9.53C14.19 9.53 13.64 10.21 13.33 10.69V9.67H10.89C10.92 10.35 10.89 17 10.89 17H13.33V12.91C13.33 12.69 13.35 12.47 13.41 12.31C13.58 11.87 13.97 11.41 14.6 11.41C15.42 11.41 15.75 12.03 15.75 12.94V17H18.1Z"/>
        </svg>
      </a>
    </div>
    <p class="cohort-member-role">CEO &amp; Founder @FanePath AI</p>
    <p>FanePath AI Lab explores AI visibility for brands through practical ZeroClaw workflows and brand-facing agent systems.</p>
    <a href="cohort/ripa-fanepath/">View member page</a>
  </div>
  <div class="proof-card proof-card--founding">
    <p class="proof-label">Founding Member</p>
    <div class="cohort-member-head">
      <h3>Ilija Tozija</h3>
      <a class="cohort-linkedin" href="https://www.linkedin.com/in/ilijatozija/" aria-label="Ilija Tozija LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V9.67H5.9V17H8.34M7.12 8.66A1.41 1.41 0 1 0 7.12 5.84A1.41 1.41 0 0 0 7.12 8.66M18.1 17V12.96C18.1 10.8 16.95 9.53 15.42 9.53C14.19 9.53 13.64 10.21 13.33 10.69V9.67H10.89C10.92 10.35 10.89 17 10.89 17H13.33V12.91C13.33 12.69 13.35 12.47 13.41 12.31C13.58 11.87 13.97 11.41 14.6 11.41C15.42 11.41 15.75 12.03 15.75 12.94V17H18.1Z"/>
        </svg>
      </a>
    </div>
    <p class="cohort-member-role">Infrastructure &amp; Energy | Risk, Governance &amp; Economics</p>
    <p>Ilija is part of the founding cohort. Public project documentation will be added when his build is ready to publish.</p>
    <a href="cohort/tozija-profile/">View member page</a>
  </div>
</div>

<section class="cta-panel">
  <div>
    <p class="landing-kicker">Next Step</p>
    <h2>Join the Intro track on rolling enrolment. Build your agent, document it, and earn your path into the founding cohort.</h2>
    <p>Selected participants may be invited into the membership community, including the first 31 founding cohort places. Pricing starts at GBP 86.</p>
  </div>
  <div class="cta-panel__actions">
    <a class="md-button md-button--primary" href="https://forms.fillout.com/t/3eGJuNKYW3us">Apply for Intro track</a>
    <a class="md-button" href="workshops/">View Intro track</a>
  </div>
</section>
