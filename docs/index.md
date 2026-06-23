---
template: home.html
description: Hands-on workshops and an invitation-only community for building real, owned AI agents. Start free, build in public, earn your place in the founding cohort.
hide:
  - navigation
  - toc
---

<section class="programme-hero">
  <p class="programme-kicker">Hands-on AI agent workshops</p>
  <h1>In four weeks, deploy and run an AI agent that's truly yours.</h1>
  <p class="programme-subhead">
    SICIC starts with hands-on workshops where you build a real, owned agent system — not slideware. Complete a track and you can be invited into the membership community, including the limited founding cohort.
  </p>
  <div class="programme-meta">
    <div class="programme-meta__item">
      <strong>Tracks</strong>
      <span>Intro · Builder from {{ price_referral }}</span>
    </div>
    <div class="programme-meta__item">
      <strong>Format</strong>
      <span>Online, hands-on workshop</span>
    </div>
    <div class="programme-meta__item">
      <strong>Entry</strong>
      <span>Rolling Intro &amp; Builder enrolment, open now</span>
    </div>
    <div class="programme-meta__item">
      <strong>Outcome</strong>
      <span>Workshop completion, community review, membership invitation</span>
    </div>
  </div>
  <div class="programme-actions">
    <a class="md-button md-button--primary" href="#how-it-works">How it works</a>
    <a class="md-button" href="#track-fit">Find your track</a>
    <a class="md-button" href="cohort/">See member demos</a>
    <a class="md-button" href="https://learn.sicic.org/" data-evt="start_free_click" data-evt-location="hero">Start free</a>
  </div>
</section>

<div class="programme-panel programme-panel--narrow programme-panel--soft cpd-panel">
  <img class="cpd-member-logo" src="assets/cpd-member-logo.jpg" alt="CPD Member, The CPD Certification Service">
  <div>
    <p class="programme-lead"><strong>CPD status:</strong> SICIC is a member of The CPD Certification Service (Membership No. {{ cpd_membership_no }}).</p>
  </div>
</div>

## How SICIC Works { #how-it-works }

<div class="pathway-strip">
  <div class="pathway-step">
    <p class="pathway-step__number">1</p>
    <h3>Join a workshop track</h3>
    <p>Start with the <a href="https://learn.sicic.org/">free starter</a> if you want a lighter warm-up, Intro if you need the foundation, or Builder if you are ready for orchestration and stronger operational practice.</p>
  </div>
  <div class="pathway-step">
    <p class="pathway-step__number">2</p>
    <h3>Complete and pass</h3>
    <p>Build a working system, publish your proof of work, and show that you can keep building beyond a one-off class.</p>
  </div>
  <div class="pathway-step">
    <p class="pathway-step__number">3</p>
    <h3>Receive membership review</h3>
    <p>After completion, selected participants are reviewed for the long-term community membership.</p>
  </div>
  <div class="pathway-step pathway-step--featured">
    <p class="pathway-step__number">4</p>
    <h3>Enter the founding cohort</h3>
    <p>Founding membership is limited to {{ founding_total }} people and stays permanently marked as the first layer of the community.</p>
  </div>
</div>

<div class="membership-snapshot">
  <div>
    <p class="proof-label">Founding Cohort Membership</p>
    <h2>Limited to {{ founding_total }} places</h2>
    <p>Founding cohort membership is invitation-only and filling up. Places are offered only after workshop completion and final review.</p>
    <div class="programme-actions">
      <a class="md-button md-button--primary" href="community/">View membership page</a>
    </div>
  </div>
  <div class="membership-snapshot__benefits">
    <h3>Benefits and influence</h3>
    <ul>
      <li>Lifetime community access and future workshop access</li>
      <li>Founding Discord badge and private founding channel</li>
      <li>Voice in community culture, standards, and direction</li>
      <li>Opportunity to shape workshop formats and contribution paths</li>
      <li>Visibility for demos, build logs, and public proof of work</li>
    </ul>
  </div>
</div>

## Find Your Track { #track-fit }

<div class="track-quiz">
  <div class="feature-card track-quiz__intro">
    <p class="proof-label">3 questions</p>
    <h3>Answer three quick questions</h3>
    <p>Use the <a href="https://learn.sicic.org/">free starter</a> as a warm-up, Intro track for the first owned workflow, and Builder track when your bottleneck is already complexity. Builder track enrolment is rolling and open now.</p>
    <div class="programme-actions">
      <a class="md-button" href="https://learn.sicic.org/">Start free</a>
    </div>
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
      <a class="md-button md-button--primary" data-result-primary href="https://forms.fillout.com/t/3eGJuNKYW3us" data-evt="apply_click" data-evt-label="intro">Apply for Intro track</a>
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
      copy: "Choose Builder track if your bottleneck is already complexity: multi-agent orchestration, broader MCP toolchains, deployment hygiene, and richer automation. Applications are open now on rolling enrolment.",
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
    primary.setAttribute("data-evt-label", builderCount >= 2 ? "builder" : "intro");
    secondary.textContent = state.secondaryText;
    secondary.href = state.secondaryHref;
    result.classList.toggle("track-quiz__result--builder", builderCount >= 2);
  };

  submit.addEventListener("click", updateRecommendation);
  form.addEventListener("change", updateRecommendation);
  updateRecommendation();
});
</script>

## Why This Is Different

<div class="programme-card-grid">
  <div class="programme-card">
    <h3>You build a system that runs</h3>
    <p>You are not watching videos. You set up real infrastructure, shape an agent, publish outputs, and learn by shipping something that works.</p>
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
    <p class="proof-label">Free · no payment</p>
    <h3>Start free</h3>
    <p>Not ready to pay? Take the first concrete step toward an owned AI agent at your own pace, with our free starter on learn.sicic.org.</p>
    <a href="https://learn.sicic.org/" data-evt="start_free_click" data-evt-location="home_card">Start free</a>
  </div>
  <div class="feature-card">
    <p class="proof-label">Proof of Build</p>
    <h3>See what members publish</h3>
    <p>Founding members are already turning workshop work into public demos, live documentation, and reusable agent systems.</p>
    <a href="cohort/">Browse cohort demos</a>
  </div>
</div>

## Founding Member Demos

These are real systems founding members built during the workshop — each one solving a concrete problem in their own field.

<div class="grid-3">
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
    <p><strong>HackStudio Pro</strong> — an AI video-production studio that turns research into broadcast-ready YouTube documentaries in two languages, all from a single codebase.</p>
    <a href="cohort/shu-hackstudio-pro/">View member page</a>
  </div>
  <div class="proof-card proof-card--founding">
    <p class="proof-label">Member Demo</p>
    <div class="cohort-member-head">
      <h3>Nigel Shardlow</h3>
      <a class="cohort-linkedin" href="https://www.linkedin.com/in/shardlow/" aria-label="Nigel Shardlow LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V9.67H5.9V17H8.34M7.12 8.66A1.41 1.41 0 1 0 7.12 5.84A1.41 1.41 0 0 0 7.12 8.66M18.1 17V12.96C18.1 10.8 16.95 9.53 15.42 9.53C14.19 9.53 13.64 10.21 13.33 10.69V9.67H10.89C10.92 10.35 10.89 17 10.89 17H13.33V12.91C13.33 12.69 13.35 12.47 13.41 12.31C13.58 11.87 13.97 11.41 14.6 11.41C15.42 11.41 15.75 12.03 15.75 12.94V17H18.1Z"/>
        </svg>
      </a>
    </div>
    <p class="cohort-member-role">Marketing Science &amp; Data Strategy Leader</p>
    <p><strong>Nigel's Agent Lab</strong> — a multi-agent lab for marketing science and advisory work, with two agents picked out for a public showcase of how they reason and advise.</p>
    <a href="cohort/shardlow-agents/">View member page</a>
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
    <p class="cohort-member-role">AI x Infrastructure x Institutional Design | MSc Oxford Saïd</p>
    <p><strong>Bruno's Bricolage Lab</strong> — assembles free-tier tools into working results across different domains, with a repeatable build protocol and a public troubleshooting log.</p>
    <a href="cohort/chikeka-bricolage/">View member page</a>
  </div>
  <div class="proof-card proof-card--founding">
    <p class="proof-label">Member Demo</p>
    <div class="cohort-member-head">
      <h3>Johannes Erlingsson</h3>
      <a class="cohort-linkedin" href="https://www.linkedin.com/in/johanneserlingsson/" aria-label="Johannes Erlingsson LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V9.67H5.9V17H8.34M7.12 8.66A1.41 1.41 0 1 0 7.12 5.84A1.41 1.41 0 0 0 7.12 8.66M18.1 17V12.96C18.1 10.8 16.95 9.53 15.42 9.53C14.19 9.53 13.64 10.21 13.33 10.69V9.67H10.89C10.92 10.35 10.89 17 10.89 17H13.33V12.91C13.33 12.69 13.35 12.47 13.41 12.31C13.58 11.87 13.97 11.41 14.6 11.41C15.42 11.41 15.75 12.03 15.75 12.94V17H18.1Z"/>
        </svg>
      </a>
    </div>
    <p class="cohort-member-role">AI Specialist and consultant | GenAI solutions</p>
    <p><strong>agent-character-creator</strong> — a platform-agnostic tool for defining reusable AI agent personas as structured, version-controlled files instead of ad-hoc prompts.</p>
    <a href="cohort/erlingsson-agent-character/">View member page</a>
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
    <p class="cohort-member-role">Masters AI for Business Oxford | Software Delivery</p>
    <p><strong>My Digital Lab</strong> — a working space for designing, testing, and refining agent-driven workflows that turn thinking into repeatable action.</p>
    <a href="cohort/goldfield-zeroclaw/">View member page</a>
  </div>
</div>

<div class="programme-actions programme-actions--center">
  <a class="md-button" href="cohort/">Browse all {{ founding_total }} member demos</a>
</div>

<section class="cta-panel">
  <div>
    <p class="landing-kicker">Next Step</p>
    <h2>Join the Intro track on rolling enrolment. Build your agent, document it, and earn your path into the founding cohort.</h2>
    <p>Selected participants may be invited into the membership community, including the first {{ founding_total }} founding cohort places. Pricing starts at {{ price_referral }}.</p>
  </div>
  <div class="cta-panel__actions">
    <a class="md-button md-button--primary" href="https://forms.fillout.com/t/3eGJuNKYW3us" data-evt="apply_click" data-evt-label="intro">Apply for Intro track</a>
    <a class="md-button" href="workshops/">View Intro track</a>
  </div>
</section>
