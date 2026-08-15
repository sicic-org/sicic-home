---
title: Introduction to AI Agent Building in the Wild
description: A live, online, two-week cohort course. Deploy and secure your own AI agent, orchestrate it, and design your own MVP. 30 hours of structured learning, 15 places per cohort, from GBP 499.
---

{#- UTM tagging: Calendly and Fillout both record these, so each CTA's real
    conversions are attributable without depending on GA or cookie consent.
    utm_content marks the position on the page. The mailto: fallback never
    gets UTM appended — it would show up as literal text in the subject line. -#}
{% set _utm = "utm_source=course-page&utm_medium=cta&utm_content=" %}
{% set _mailto = "mailto:" ~ register_email ~ "?subject=Booking%20enquiry%20%E2%80%94%20Introduction%20to%20AI%20Agent%20Building%20in%20the%20Wild" %}
{% set book_hero = (course_form_url ~ "?" ~ _utm ~ "hero") if course_form_url else _mailto %}
{% set book_final = (course_form_url ~ "?" ~ _utm ~ "final_cta") if course_form_url else _mailto %}
{% set book_label = "Book your place" if course_form_url else "Register your interest" %}
{% set call_pricing = intro_call_url ~ "?" ~ _utm ~ "pricing" %}
{% set call_faq = intro_call_url ~ "?" ~ _utm ~ "faq" %}
{% set call_final = intro_call_url ~ "?" ~ _utm ~ "final_cta" %}

<section class="programme-hero">
  <p class="programme-kicker">Next cohort · {{ cohort_start }}</p>
  <h1>{{ course_name }}</h1>
  <p class="programme-subhead">A live, online, cohort-based course. In {{ course_weeks }} weeks you deploy and secure an AI agent on infrastructure you control, orchestrate it into a working system, and design the MVP architecture for the system you actually want to build.</p>
  <div class="programme-meta">
    <div class="programme-meta__item">
      <strong>Format</strong>
      <span>Live and online, {{ course_weeks }} weeks, {{ course_days }} guided learning days</span>
    </div>
    <div class="programme-meta__item">
      <strong>Learning hours</strong>
      <span>{{ course_hours }} hours of structured, directed learning</span>
    </div>
    <div class="programme-meta__item">
      <strong>Cohort size</strong>
      <span>Capped at {{ cohort_places }} · runs at {{ cohort_minimum }}</span>
    </div>
    <div class="programme-meta__item">
      <strong>Price</strong>
      <span>From {{ course_price_founding }} · Standard {{ course_price_standard }}</span>
    </div>
  </div>
  <div class="programme-actions">
    <a class="md-button md-button--primary" href="{{ book_hero }}" data-evt="apply_click" data-evt-label="course_hero">{{ book_label }}</a>
    <a class="md-button" href="https://learn.sicic.org/" data-evt="start_free_click" data-evt-location="course_hero">Start free</a>
    <a class="md-button" href="#pricing">See pricing</a>
  </div>
</section>

<div class="programme-panel programme-panel--narrow programme-panel--soft cpd-panel">
  <img class="cpd-member-logo" src="../assets/cpd-member-logo.jpg" alt="CPD Member, The CPD Certification Service">
  <div>
    <p class="programme-lead"><strong>CPD:</strong> Super Individuals CIC is a member organisation of The CPD Certification Service (Membership No. {{ cpd_membership_no }}). On completion you receive a certificate evidencing <strong>{{ course_hours }} hours of structured continuing professional development</strong>.</p>
    <p class="programme-center">{% if cpd_courses_accredited %}This course is accredited by The CPD Certification Service.{% else %}This course's accreditation submission is currently <strong>under assessment</strong> by The CPD Certification Service. We will confirm the outcome to all participants — and if accreditation is not in place for your cohort, we will tell you before it begins and you may cancel for a full refund if that materially affects your reason for booking.{% endif %}</p>
  </div>
</div>

## What You'll Build { #what-you-build }

<div class="programme-panel programme-panel--narrow">
  <p class="programme-lead">By the end of the course you will have built, and be able to explain, a working agent system that belongs to you:</p>
  <ul class="programme-checklist">
    <li>An AI agent deployed and secured on infrastructure you control</li>
    <li>An agent whose identity and behaviour you have designed deliberately, not prompted into existence</li>
    <li>A published documentation portfolio that shows what you built and how</li>
    <li>A node-based orchestration layer connected to an autonomous agent runtime</li>
    <li>An MVP architecture for the system you actually want to build next</li>
  </ul>
  <p class="programme-note">The point is not to impress people with complexity. The point is to build a useful, portable system that is genuinely yours — and to leave with the judgement to keep extending it.</p>
</div>

## The Two Modules { #modules }

<div class="programme-week-grid">
  <div class="programme-week-card">
    <p class="programme-week-number">Module 1 · Week 1</p>
    <h3>Intro Track</h3>
    <p>Start with infrastructure that belongs to you. Deploy an agent, secure it, decide how it should behave, and publish the record of what you did.</p>
    <div class="programme-deliverables">
      <strong>Key deliverables</strong>
      <ul>
        <li>An AI agent deployed on a server you control</li>
        <li>Hardening, authentication hygiene, and ownership practices that hold up in real use</li>
        <li>Agent identity and behaviour design — the job, the boundaries, the stop conditions</li>
        <li>A published documentation portfolio as your proof of build</li>
      </ul>
    </div>
  </div>
  <div class="programme-week-card">
    <p class="programme-week-number">Module 2 · Week 2</p>
    <h3>Builder Track</h3>
    <p>Move from one agent to a system. Add orchestration, connect an autonomous runtime, and design the architecture for what you want to build after the course ends.</p>
    <div class="programme-deliverables">
      <strong>Key deliverables</strong>
      <ul>
        <li>Node-based orchestration, on an n8n instance provided free for the course</li>
        <li>An autonomous agent runtime connected into your orchestration layer</li>
        <li>MVP architecture for your own system, designed against a real use case</li>
        <li>A clear decision about what to build next, and what to leave out</li>
      </ul>
    </div>
  </div>
</div>

## How the Course Runs { #schedule }

<div class="programme-stats">
  <div class="programme-stats__grid">
    <div class="programme-stat">
      <strong>{{ course_hours }}</strong>
      <span>hours of structured, directed learning</span>
    </div>
    <div class="programme-stat">
      <strong>{{ course_days }}</strong>
      <span>guided learning days over {{ course_weeks }} weeks</span>
    </div>
    <div class="programme-stat">
      <strong>{{ cohort_places }}</strong>
      <span>places per cohort, maximum</span>
    </div>
    <div class="programme-stat">
      <strong>{{ cohort_minimum }}</strong>
      <span>participants minimum for a cohort to run</span>
    </div>
  </div>
</div>

<div class="programme-panel programme-panel--narrow programme-panel--soft">
  <p class="programme-lead"><strong>Weekday evenings 18:00–21:00 UK time. Saturdays 10:00–17:00 UK time.</strong></p>
  <p class="programme-center">Each of the {{ course_days }} guided learning days combines a scheduled session — an introductory meeting, an optional office-hours surgery, or a facilitated group call — with guided self-directed learning, supported through our Discord community between sessions.</p>
  <p class="programme-note">Live sessions are recorded and made available to participants during the course. Cohorts are capped at {{ cohort_places }} participants and need a minimum of {{ cohort_minimum }} to run; we confirm your cohort is going ahead no later than 7 days before it starts. Exact dates for the {{ cohort_start }} cohort are confirmed when you book.</p>
</div>

## Who It's For { #who-its-for }

<div class="programme-card-grid">
  <div class="programme-card">
    <h3>Domain experts</h3>
    <p>People with real problems worth automating who want an agent built around their own expertise, not a generic demo.</p>
  </div>
  <div class="programme-card">
    <h3>Non-technical professionals</h3>
    <p>People who already use AI chat tools and want one concrete owned system instead of endless theory.</p>
  </div>
  <div class="programme-card">
    <h3>Practical builders</h3>
    <p>People who want the thing running on their own infrastructure, with orchestration on top, not a notebook they never open again.</p>
  </div>
  <div class="programme-card">
    <h3>Anyone planning an MVP</h3>
    <p>People who need the architecture judgement to decide what their own system should be before they commit to building it.</p>
  </div>
</div>

<div class="programme-panel programme-panel--narrow">
  <p class="programme-lead">What you need to take part:</p>
  <ul class="programme-checklist">
    <li>Basic computer literacy and a valid email address</li>
    <li>A computer capable of running a web browser and a terminal</li>
    <li>A reliable internet connection</li>
  </ul>
  <p class="programme-note"><strong>No prior programming or server administration experience is required.</strong> If you would like a gentler warm-up first, the <a href="https://learn.sicic.org/">free starter</a> is a lighter entry point.</p>
</div>

## Pricing { #pricing }

<div class="programme-table-wrap">
  <table class="programme-pricing-table">
    <thead>
      <tr>
        <th>Rate</th>
        <th>Price</th>
        <th>Eligibility</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Founding Circle</strong></td>
        <td><span class="programme-price">{{ course_price_founding }}</span></td>
        <td>Referred by a founding member, or a returning member re-enrolling.</td>
      </tr>
      <tr>
        <td><strong>Early Bird &amp; Alumni Network</strong></td>
        <td><span class="programme-price">{{ course_price_earlybird }}</span></td>
        <td>Referred by a returning member, or network alumni.</td>
      </tr>
      <tr>
        <td><strong>Standard</strong></td>
        <td><span class="programme-price">{{ course_price_standard }}</span></td>
        <td>Open to all.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="programme-panel programme-panel--narrow">
  <p class="programme-lead">Only one rate applies per person, and rates cannot be combined with other offers. <strong>The price shown is the total you pay us</strong> — no booking fees, administration charges, or other compulsory additions. Super Individuals CIC is not registered for VAT, so no VAT is charged on these fees.</p>
  <p class="programme-note">Payment is due in full at the time of booking unless we agree otherwise in writing, and your place is confirmed on receipt of payment. Your booking is a request to reserve a place; the contract is formed when we send you a booking confirmation by email. Full detail is in the <a href="../booking-terms/">Booking Terms &amp; Cancellation Policy</a>.</p>
</div>

### Third-party costs, and the credit back { #third-party-costs }

<div class="programme-panel programme-panel--narrow programme-panel--soft">
  <p class="programme-lead">The course requires you to hold accounts with three third-party providers: a cloud server provider, a large language model API provider, and a messaging platform. You register and pay for these yourself, under those providers' own terms.</p>
  <p class="programme-center">Typical total cost during the course is <strong>under {{ course_api_credit }}</strong>, and cost controls including hard spend caps are configured as part of the curriculum on the first day. <strong>We credit back up to {{ course_api_credit }} of these documented costs when you complete the course.</strong> Your n8n instance is provided free for the duration.</p>
</div>

<div class="programme-panel programme-panel--narrow">
  <p class="programme-lead"><strong>Not sure it fits your use case?</strong> 15 minutes with Yiju will tell you.</p>
  <p class="programme-center">No pitch — if it is not a fit, we will say so. Bring the thing you actually want your agent to do, and we will tell you straight whether this course gets you there.</p>
  <div class="programme-actions programme-actions--center">
    <a class="md-button" href="{{ call_pricing }}" data-evt="call_click" data-evt-location="pricing">Book 15 minutes</a>
  </div>
  <p class="programme-note">Can't make a call? Email <a href="mailto:{{ register_email }}">{{ register_email }}</a> and we will answer by return.</p>
</div>

## Our Booking Guarantees { #guarantees }

<div class="programme-card-grid">
  <div class="programme-card">
    <h3>Full refund until session 2</h3>
    <p>Cancel at any point before the second session begins and we refund you in full, no questions asked — whether that is weeks ahead, the day before, or after sitting through session 1 and deciding it is not for you.</p>
  </div>
  <div class="programme-card">
    <h3>If the cohort doesn't run, full refund</h3>
    <p>A cohort needs {{ cohort_minimum }} participants. We confirm no later than 7 days before the start — and if we fall short, you choose between the next cohort or a full refund.</p>
  </div>
  <div class="programme-card">
    <h3>50% back through Week 1</h3>
    <p>Withdraw after the second session and before the end of the final Week 1 session and we refund 50% — the point at which half the structured hours have been delivered.</p>
  </div>
  <div class="programme-card">
    <h3>If life gets in the way, rejoin free</h3>
    <p>Cannot finish? Join a later cohort at no extra cost, subject to availability, within 12 months of your original start date. Usable once.</p>
  </div>
</div>

<div class="programme-panel programme-panel--narrow">
  <p class="programme-lead">These guarantees are offered <strong>in addition to your legal rights</strong>, including your statutory 14-day right to cancel. Where a guarantee and your legal rights would produce different outcomes, whichever is more favourable to you applies.</p>
  <p class="programme-note">Read the full <a href="../booking-terms/">Booking Terms &amp; Cancellation Policy</a>, including how to cancel and the model cancellation form. Cancellations and booking questions go to <a href="mailto:{{ register_email }}">{{ register_email }}</a>.</p>
</div>

## Certificate and CPD Hours { #certificate }

<div class="programme-panel programme-panel--narrow programme-panel--soft">
  <p class="programme-lead">On completion you receive a certificate evidencing <strong>{{ course_hours }} hours of structured continuing professional development</strong>. Completion means attending or catching up on the scheduled sessions and submitting the required work.</p>
  <p class="programme-center">CPD hours are calculated on structured, directed learning time only, at a ratio of one CPD hour to one hour of structured learning. Most participants spend additional time in applied practice; that time is not counted.</p>
  <p class="programme-note">The certificate is evidence of professional development. It is not a regulated qualification and does not confer a professional licence.</p>
</div>

## Tools and Technologies { #tools }

<div class="programme-tool-grid">
  <div class="programme-tool"><strong>Cloud VPS</strong><span>Infrastructure you own and control</span></div>
  <div class="programme-tool"><strong>Agent runtime</strong><span>A self-hosted autonomous agent you deploy yourself</span></div>
  <div class="programme-tool"><strong>LLM API</strong><span>Your own provider account, with hard spend caps</span></div>
  <div class="programme-tool"><strong>Messaging platform</strong><span>The everyday control room for talking to your agent</span></div>
  <div class="programme-tool"><strong>n8n</strong><span>Node-based orchestration, instance provided free</span></div>
  <div class="programme-tool"><strong>Documentation portfolio</strong><span>A static site publishing what your system produces</span></div>
  <div class="programme-tool"><strong>Discord</strong><span>Where guided self-directed learning is supported</span></div>
</div>

<p class="programme-note">We may make minor changes to the curriculum, the tools used, or the facilitators delivering sessions — for example where a third-party service changes. We will not make changes that materially reduce what the course delivers.</p>

## What You Keep { #what-you-keep }

<div class="grid-2">
  <div class="feature-card">
    <h3>What you build is yours</h3>
    <p>The server, agent, pipeline, documentation site, and MVP design you create during the course belong to you. You are free to use, publish, and develop them as you wish.</p>
  </div>
  <div class="feature-card">
    <h3>What we provide stays ours</h3>
    <p>Workshop guides, handbooks, recordings, and slides remain the intellectual property of Super Individuals CIC, provided for your own learning. Please do not redistribute, publish, or resell them.</p>
  </div>
</div>

<p class="programme-note">Completing the course makes you <strong>eligible for an invitation into the membership community</strong>, including the limited founding cohort (the first {{ founding_total }} members receive lifetime free courses). How membership, benefits, and pricing work is explained once on the <a href="../community/">Community</a> page.</p>

## Frequently Asked Questions { #faq }

<div class="programme-faq-list">
  <div class="programme-faq">
    <strong>Q: Is the course CPD certified?</strong>
    <p>Super Individuals CIC is a member organisation of The CPD Certification Service (Membership No. {{ cpd_membership_no }}).{% if cpd_courses_accredited %} This course is accredited by The CPD Certification Service, and completion evidences {{ course_hours }} CPD hours.{% else %} This course's accreditation submission is currently under assessment. We will confirm the outcome to all participants. If accreditation is not in place for your cohort we will tell you before it begins, and you may cancel for a full refund if that materially affects your reason for booking.{% endif %}</p>
  </div>
  <div class="programme-faq">
    <strong>Q: I'm not technical. Can I still do this?</strong>
    <p>Yes. No prior programming or server administration experience is required — you need basic computer literacy, a machine that can run a browser and a terminal, and a reliable connection. Module 1 is built for people meeting this material for the first time.</p>
  </div>
  <div class="programme-faq">
    <strong>Q: What if I can't attend a session live?</strong>
    <p>Live sessions are recorded and made available to participants during the course. Occasionally a single session may need to be rescheduled; we give as much notice as we can and a recording is always made available.</p>
  </div>
  <div class="programme-faq">
    <strong>Q: What happens if the cohort doesn't fill?</strong>
    <p>A cohort runs only if it reaches {{ cohort_minimum }} participants. We confirm whether your cohort is going ahead no later than 7 days before the scheduled start. If we do not reach the minimum, you choose between a place on the next cohort or a full refund, paid within 14 days.</p>
  </div>
  <div class="programme-faq">
    <strong>Q: How much will the third-party services cost me?</strong>
    <p>Typically under {{ course_api_credit }} in total across the course, and we configure hard spend caps on the first day. We credit back up to {{ course_api_credit }} of documented costs when you complete. The n8n instance is on us.</p>
  </div>
  <div class="programme-faq">
    <strong>Q: My employer is paying. Does anything change?</strong>
    <p>Yes — where an organisation books and pays, the contract is with that organisation and is not a consumer contract, so the statutory cancellation right does not apply. The booking guarantees still apply as a matter of contract. We can provide an invoice and a one-page syllabus summary for internal approval on request. See section 15 of the <a href="../booking-terms/">Booking Terms</a>.</p>
  </div>
  <div class="programme-faq">
    <strong>Q: Can I cancel after booking?</strong>
    <p>You have a statutory right to cancel within 14 days of your booking confirmation, plus the guarantees above. Send a clear statement to <a href="mailto:{{ register_email }}">{{ register_email }}</a>, or use the model cancellation form in the <a href="../booking-terms/#annex-a">Booking Terms</a>.</p>
  </div>
</div>

<div class="programme-panel programme-panel--narrow programme-panel--soft">
  <p class="programme-lead"><strong>Still got a question we have not answered here?</strong></p>
  <p class="programme-center">Take 15 minutes with Yiju. No pitch — if this course is not right for what you are trying to build, we will tell you.</p>
  <div class="programme-actions programme-actions--center">
    <a class="md-button" href="{{ call_faq }}" data-evt="call_click" data-evt-location="faq">Book 15 minutes</a>
  </div>
</div>

<section class="programme-final-cta" id="book">
  <p class="programme-kicker">Next cohort · {{ cohort_start }}</p>
  <h2>{{ cohort_places }} places. {{ course_hours }} hours. One system that is genuinely yours.</h2>
  <p>Pricing starts at {{ course_price_founding }}. Bookings for the {{ cohort_start }} cohort are open now.</p>
  <div class="programme-actions">
    <a class="md-button md-button--primary" href="{{ book_final }}" data-evt="apply_click" data-evt-label="course_final">{{ book_label }}</a>
    <a class="md-button" href="{{ call_final }}" data-evt="call_click" data-evt-location="final_cta">Talk it through first</a>
    <a class="md-button" href="https://learn.sicic.org/" data-evt="start_free_click" data-evt-location="course_cta">Start free</a>
  </div>
</section>
