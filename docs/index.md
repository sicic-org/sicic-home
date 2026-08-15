---
template: home.html
description: A live, online, two-week course and an invitation-only community for building real, owned AI agents. Start free, build in public, earn your place in the founding cohort.
hide:
  - navigation
  - toc
---

{#- UTM tagging, same scheme as the course page. utm_source distinguishes the
    home page from the course page; utm_content marks the position. -#}
{% set _utm = "utm_source=home&utm_medium=cta&utm_content=" %}
{% set _mailto = "mailto:" ~ register_email ~ "?subject=Booking%20enquiry%20%E2%80%94%20Introduction%20to%20AI%20Agent%20Building%20in%20the%20Wild" %}
{% set book_hero = (course_form_url ~ "?" ~ _utm ~ "hero") if course_form_url else _mailto %}
{% set book_modules = (course_form_url ~ "?" ~ _utm ~ "modules") if course_form_url else _mailto %}
{% set book_final = (course_form_url ~ "?" ~ _utm ~ "final_cta") if course_form_url else _mailto %}
{% set book_label = "Book your place" if course_form_url else "Register your interest" %}

<section class="programme-hero">
  <p class="programme-kicker">Live, online, cohort-based course</p>
  <h1>In two weeks, deploy and run an AI agent that's truly yours.</h1>
  <p class="programme-subhead">
    <em>{{ course_name }}</em> is {{ course_hours }} hours of structured learning in which you build a real, owned agent system — not slideware. Complete it and you can be invited into the membership community, including the limited founding cohort.
  </p>
  <div class="programme-meta">
    <div class="programme-meta__item">
      <strong>The course</strong>
      <span>{{ course_weeks }} weeks live and online, two modules</span>
    </div>
    <div class="programme-meta__item">
      <strong>Learning hours</strong>
      <span>{{ course_hours }} structured hours · certificate on completion</span>
    </div>
    <div class="programme-meta__item">
      <strong>Next cohort</strong>
      <span>{{ cohort_start }} · {{ cohort_places }} places</span>
    </div>
    <div class="programme-meta__item">
      <strong>Price</strong>
      <span>From {{ course_price_founding }} · Standard {{ course_price_standard }}</span>
    </div>
  </div>
  <div class="programme-actions">
    <a class="md-button md-button--primary" href="{{ book_hero }}" data-evt="apply_click" data-evt-label="home_hero">{{ book_label }}</a>
    <a class="md-button" href="course/">Course details</a>
    <a class="md-button" href="#how-it-works">How SICIC works</a>
    <a class="md-button" href="https://learn.sicic.org/" data-evt="start_free_click" data-evt-location="hero">Start free</a>
  </div>
</section>

<div class="programme-panel programme-panel--narrow programme-panel--soft cpd-panel">
  <img class="cpd-member-logo" src="assets/cpd-member-logo.jpg" alt="CPD Member, The CPD Certification Service">
  <div>
    <p class="programme-lead"><strong>CPD status:</strong> SICIC is a member organisation of The CPD Certification Service (Membership No. {{ cpd_membership_no }}). Completing the course earns a certificate evidencing {{ course_hours }} hours of structured CPD.</p>
    <p class="programme-center">{% if cpd_courses_accredited %}The course is accredited by The CPD Certification Service.{% else %}The course's accreditation submission is currently under assessment — see the <a href="course/#certificate">course page</a> for what that means for your cohort.{% endif %}</p>
  </div>
</div>

## What the Course Covers { #course-fit }

<div class="programme-week-grid">
  <div class="programme-week-card">
    <p class="programme-week-number">Module 1 · Week 1</p>
    <h3>Intro Track</h3>
    <p>Deploy and secure an AI agent on infrastructure you control, design its identity and behaviour deliberately, and publish a documentation portfolio as your proof of build.</p>
  </div>
  <div class="programme-week-card">
    <p class="programme-week-number">Module 2 · Week 2</p>
    <h3>Builder Track</h3>
    <p>Add node-based orchestration, connect an autonomous agent runtime, and design the MVP architecture for the system you actually want to build next.</p>
  </div>
</div>

<div class="programme-panel programme-panel--narrow programme-panel--soft">
  <p class="programme-lead">Weekday evenings 18:00–21:00 UK and Saturdays 10:00–17:00 UK, across {{ course_days }} guided learning days. Sessions are recorded. Cohorts are capped at {{ cohort_places }} and run at a minimum of {{ cohort_minimum }}.</p>
  <div class="programme-actions programme-actions--center">
    <a class="md-button md-button--primary" href="course/">Full course details</a>
    <a class="md-button" href="{{ book_modules }}" data-evt="apply_click" data-evt-label="home_modules">{{ book_label }}</a>
  </div>
</div>


## How SICIC Works { #how-it-works }

<div class="pathway-strip">
  <div class="pathway-step">
    <p class="pathway-step__number">1</p>
    <h3>Book the course</h3>
    <p>Take the <a href="https://learn.sicic.org/">free starter</a> first if you want a lighter warm-up, then join the next cohort of <a href="course/">{{ course_name }}</a>.</p>
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

## Why This Is Different

<div class="programme-card-grid">
  <div class="programme-card">
    <h3>You build a system that runs</h3>
    <p>You are not watching videos. You set up real infrastructure, shape an agent, publish outputs, and learn by shipping something that works.</p>
  </div>
  <div class="programme-card">
    <h3>Referral-aware</h3>
    <p>The course is open to all. Referrals still matter for pricing, progression into the deeper membership layer, and the path toward founding status.</p>
  </div>
  <div class="programme-card">
    <h3>Small cohorts, real contact</h3>
    <p>{{ cohort_places }} places maximum, with live sessions on weekday evenings and Saturdays plus office-hours surgeries. Your blockers get answered by the people who wrote the material.</p>
  </div>
  <div class="programme-card">
    <h3>Structured hours that count</h3>
    <p>{{ course_hours }} hours of structured, directed learning and a certificate on completion — not a video library you never finish.</p>
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
    <h2>Join the {{ cohort_start }} cohort. Build your agent, document it, and earn your path into the founding cohort.</h2>
    <p>Selected participants may be invited into the membership community, including the first {{ founding_total }} founding cohort places. Pricing starts at {{ course_price_founding }}.</p>
  </div>
  <div class="cta-panel__actions">
    <a class="md-button md-button--primary" href="{{ book_final }}" data-evt="apply_click" data-evt-label="home_final">{{ book_label }}</a>
    <a class="md-button" href="course/">View the course</a>
  </div>
</section>
