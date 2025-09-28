import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './contact-cta.css'

const ContactCTA = (props) => {
  return (
    <div className="contact-cta-container10">
      <Helmet>
        <title>Contact-CTA - Silver Dizzy Cheetah</title>
        <meta
          property="og:title"
          content="Contact-CTA - Silver Dizzy Cheetah"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="contact-cta-container11">
        <div className="contact-cta-container12">
          <Script
            html={`<style>
        @keyframes glow {0% {box-shadow: 0 0 5px var(--color-accent), 0 0 10px var(--color-accent);}
100% {box-shadow: 0 0 10px var(--color-accent), 0 0 20px var(--color-accent),
        0 0 30px var(--color-accent);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="contact-cta-container13">
        <div className="contact-cta-container14">
          <Script
            html={`<style>
@media (min-width: 992px) {
.contact-grid {
  grid-template-columns: 2fr 1fr;
}
}
@media (min-width: 768px) {
.contact-form {
  grid-template-columns: repeat(2, 1fr);
}
.full-width {
  grid-column: 1 / -1;
}
}
@media (min-width: 992px) {
.schedule-grid {
  grid-template-columns: 3fr 2fr;
}
}
@media (min-width: 992px) {
.questions-grid {
  grid-template-columns: 2fr 1fr;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="contact-cta-container15">
        <div className="contact-cta-container16">
          <Script
            html={`<script defer data-name="contact-page">
(function(){
  // FAQ Toggle Functionality
  const faqButtons = document.querySelectorAll(".faq-question")

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const faqItem = button.closest(".faq-item")
      const isActive = faqItem.classList.contains("active")

      // Close all other FAQ items
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active")
      })

      // Toggle current item
      if (!isActive) {
        faqItem.classList.add("active")
      }
    })
  })

  // Form Submission Handler
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData)

      // Show loading state
      const submitBtn = contactForm.querySelector(".submit-btn")
      const originalText = submitBtn.innerHTML
      submitBtn.innerHTML = "Sending..."
      submitBtn.disabled = true

      // Simulate form submission (replace with actual API call)
      setTimeout(() => {
        // Show success message
        const successMessage = document.createElement("div")
        successMessage.className = "success-message"
        successMessage.style.cssText = \`
        background: color-mix(in srgb, var(--color-primary) 10%, transparent);
        border: 1px solid var(--color-primary);
        border-radius: var(--border-radius-md);
        padding: var(--spacing-lg);
        margin-top: var(--spacing-lg);
        text-align: center;
        color: var(--color-on-surface);
      \`
        successMessage.innerHTML =
          '<p class="section-content">Thanks — we\'ve received your brief. Expect a tailored reply with a proposed agenda and next steps within 48 hours.</p>'

        contactForm.appendChild(successMessage)

        // Reset form
        contactForm.reset()
        submitBtn.innerHTML = originalText
        submitBtn.disabled = false

        // Remove success message after 5 seconds
        setTimeout(() => {
          successMessage.remove()
        }, 5000)
      }, 1500)
    })
  }

  // Character counter for brief textarea
  const briefTextarea = document.getElementById("brief")
  if (briefTextarea) {
    const counter = document.createElement("div")
    counter.className = "char-counter"
    counter.style.cssText = \`
    text-align: right;
    font-size: var(--font-size-sm);
    color: var(--color-on-surface-secondary);
    margin-top: var(--spacing-xs);
  \`
    counter.textContent = "0/200"
    briefTextarea.parentNode.appendChild(counter)

    briefTextarea.addEventListener("input", () => {
      const count = briefTextarea.value.length
      counter.textContent = \`\${count}/200\`

      if (count > 180) {
        counter.style.color = "var(--color-accent)"
      } else {
        counter.style.color = "var(--color-on-surface-secondary)"
      }
    })
  }

  // Quick form submission
  const quickForms = document.querySelectorAll(".quick-form")
  quickForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      const button = form.querySelector("button")
      const originalText = button.textContent
      button.textContent = "Sent!"
      button.disabled = true

      setTimeout(() => {
        button.textContent = originalText
        button.disabled = false
        form.reset()
      }, 2000)
    })
  })

  // Smooth scroll animation for CTA buttons
  const ctaButtons = document.querySelectorAll(".btn")
  ctaButtons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "translateY(-2px)"
    })

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translateY(0)"
    })
  })

  // Add pulse animation to primary buttons
  const primaryButtons = document.querySelectorAll(".btn-primary")
  primaryButtons.forEach((button) => {
    setInterval(() => {
      if (!button.matches(":hover")) {
        button.style.animation = "pulse 2s infinite"
        setTimeout(() => {
          button.style.animation = ""
        }, 2000)
      }
    }, 8000)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <section className="contact-cta">
        <div className="contact-container1">
          <div className="contact-header">
            <h1 className="hero-title">
              Ready to Build Something Future-Forward?
            </h1>
            <p className="section-subtitle">
              {' '}
              Tell us about your project and we&apos;ll map a custom growth plan
              that blends bold creativity with technical precision.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <div className="form-header">
                <h2 className="section-title">Project Snapshot</h2>
                <p className="section-content">
                  {' '}
                  Briefly describe goals, timeline, and budget. We&apos;ll
                  follow up with a tailored agenda and next steps.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <form id="contactForm" className="contact-form1">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="true"
                    required="true"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required="true"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone (optional)"
                  />
                </div>
                <div className="form-group">
                  <select id="project-type" name="project-type" required="true">
                    <option value="true">Project Type</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="seo-visibility">SEO &amp; Visibility</option>
                    <option value="content-creation">Content Creation</option>
                    <option value="social-media">Social Media Strategy</option>
                    <option value="full-service">Full Service Package</option>
                  </select>
                </div>
                <div className="form-group">
                  <select id="budget" name="budget" required="true">
                    <option value="true">Estimated Budget Range</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="100k+">$100k+</option>
                  </select>
                </div>
                <div className="full-width form-group">
                  <textarea
                    id="brief"
                    name="brief"
                    rows="4"
                    maxlength="200"
                    placeholder="Short brief (200 characters max)"
                  ></textarea>
                </div>
                <div className="form-actions">
                  <button type="submit" className="submit-btn btn btn-primary">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Start Your Project
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </button>
                </div>
                <div className="consent-line">
                  <p className="section-content">
                    {' '}
                    By submitting you agree to receive project-related messages
                    from S3O Digital. We respect your privacy.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </form>
              <div className="reassurance">
                <p className="section-content">
                  {' '}
                  Rapid response within 48 hours. Secure handling of brief and
                  NDA available on request.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="calendar-section">
              <div className="calendar-placeholder">
                <div className="calendar-icon">
                  <svg
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M8 2v4m8-4v4"></path>
                      <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                      <path d="M3 10h18"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-title">
                  Schedule a 30-Minute Strategy Session
                </h3>
                <p className="section-content">
                  {' '}
                  Pick a slot and get an agenda-led call — no fluff, clear
                  outcomes.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <button className="calendar-btn btn btn-secondary">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M8 2v4m8-4v4"></path>
                      <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                      <path d="M3 10h18"></path>
                    </g>
                  </svg>
                  <span>
                    {' '}
                    Book Strategy Call
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </button>
              </div>
              <div className="alternative-contact">
                <p className="section-content">
                  <span>
                    {' '}
                    Prefer email? Reach us at
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a href="mailto:hello@s3odigital.com?subject=">
                    <div>
                      <span>hello@s3odigital.com</span>
                    </div>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="schedule-call">
        <div className="schedule-container">
          <div className="schedule-grid">
            <div className="schedule-content">
              <h2 className="hero-title">Schedule Your Call</h2>
              <p className="section-subtitle">
                {' '}
                Book a focused 30-minute strategy session with our lead team.
                We&apos;ll assess your goals, surface growth opportunities, and
                outline a tailored roadmap you can act on immediately.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="how-it-works">
                <h3 className="section-title">How it works</h3>
                <div className="steps">
                  <div className="step">
                    <div className="step-number">
                      <span>1</span>
                    </div>
                    <p className="section-content">
                      {' '}
                      Pick a time — our calendar shows real-time availability.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="step">
                    <div className="step-number">
                      <span>2</span>
                    </div>
                    <p className="section-content">
                      {' '}
                      Share key details in the quick form.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="step">
                    <div className="step-number">
                      <span>3</span>
                    </div>
                    <p className="section-content">
                      {' '}
                      Get a prep email with agenda and pre-work. After the call
                      we&apos;ll send a concise action plan.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="availability">
                <h3 className="section-title">Availability</h3>
                <p className="section-content">
                  {' '}
                  Weekdays 09:00–17:00 (your timezone). Need an outside-hours
                  slot? Select &quot;Flexible&quot; and we&apos;ll propose
                  alternatives.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="schedule-form">
              <div className="form-card">
                <h3 className="section-title">What to expect</h3>
                <p className="section-content">
                  {' '}
                  A strategic, no-fluff conversation: diagnostic questions,
                  priority recommendations, and a clear recommendation for next
                  steps (pilot, proposal, or self-serve playbook).
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <button className="btn schedule-btn btn-primary">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M8 2v4m8-4v4"></path>
                      <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                      <path d="M3 10h18"></path>
                    </g>
                  </svg>
                  <span>
                    {' '}
                    Open Calendar
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </button>
                <div className="form-note1">
                  <p className="section-content">
                    {' '}
                    Tell us the project focus and one success metric—this helps
                    us maximize your session.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="privacy-note">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <p className="section-content">
                    {' '}
                    We treat your information as confidential. Calendars sync
                    securely; notes and follow-ups are delivered via encrypted
                    email.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="direct-reach">
        <div className="reach-container">
          <div className="reach-header">
            <h2 className="section-title">Direct Reach</h2>
            <p className="section-subtitle">
              {' '}
              Prefer to skip the form? Reach our strategic team directly for
              fast, human responses.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="contact-cards">
            <div className="contact-card">
              <div className="card-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                  </g>
                </svg>
              </div>
              <h3 className="section-title">Email</h3>
              <a href="mailto:hello@s3odigital.com?subject=">
                <div className="contact-link">
                  <span>
                    {' '}
                    hello@s3odigital.com
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </div>
            <div className="contact-card">
              <div className="card-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="section-title">Phone</h3>
              <a href="tel:+14155550198">
                <div className="contact-link">
                  <span>+1 (415) 555-0198</span>
                </div>
              </a>
              <p className="section-content">M–F 9:00–18:00 PT</p>
            </div>
            <div className="contact-card">
              <div className="card-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 6v6l4 2"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="section-title">Business Hours</h3>
              <div className="hours-list">
                <p className="section-content">Monday–Friday: 9:00–18:00 PT</p>
                <p className="section-content">Saturday (by appointment)</p>
                <p className="section-content">Sunday: closed</p>
              </div>
            </div>
          </div>
          <div className="response-promise">
            <div className="promise-card">
              <div className="promise-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="section-title">Response Promise</h3>
                <p className="section-content">
                  {' '}
                  We reply to direct messages within one business hour during
                  operating hours. For urgent creative escalations, use the
                  phone number above.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="common-questions">
        <div className="questions-container">
          <div className="questions-header">
            <h2 className="hero-title">Common Questions</h2>
          </div>
          <div className="questions-grid">
            <div className="faq-section">
              <div className="faq-item">
                <button data-faq="faq1" className="faq-question">
                  <span>How long does your onboarding take?</span>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m18 15l-6-6l-6 6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <div id="faq1" className="faq-answer">
                  <p className="section-content">
                    {' '}
                    Initial discovery to project kickoff typically takes 7–10
                    days. We move fast without cutting corners: audit, strategy
                    sprint, and milestone plan delivered before the first work
                    sprint.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <button data-faq="faq2" className="faq-question">
                  <span>What kind of projects do you take?</span>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m18 15l-6-6l-6 6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <div id="faq2" className="faq-answer">
                  <p className="section-content">
                    {' '}
                    We partner with growth-stage tech companies, SaaS platforms,
                    and forward-looking brands that value design-driven strategy
                    and measurable results. If you&apos;re aiming to scale
                    through digital channels, we&apos;re a fit.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <button data-faq="faq3" className="faq-question">
                  <span>How do you measure success?</span>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m18 15l-6-6l-6 6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <div id="faq3" className="faq-answer">
                  <p className="section-content">
                    {' '}
                    We set KPI-driven goals up front (traffic quality,
                    conversion lift, LTV/CPA, brand metrics) and report progress
                    with clear dashboards and monthly strategy reviews so you
                    always see the ROI.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <button data-faq="faq4" className="faq-question">
                  <span>What&apos;s the typical timeline and cost?</span>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m18 15l-6-6l-6 6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <div id="faq4" className="faq-answer">
                  <p className="section-content">
                    {' '}
                    Timelines depend on scope: tactical engagements start at 6–8
                    weeks; strategic programs run quarterly. We provide
                    transparent scope, phased pricing, and outcome-aligned
                    retainers in every proposal.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="quick-contact">
              <div className="contact-form-card">
                <h3 className="section-title">Still Have Questions?</h3>
                <p className="section-content">
                  {' '}
                  Get instant answers or schedule a call to discuss your
                  specific needs.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <form className="quick-form">
                  <input
                    type="text"
                    required="true"
                    placeholder="Your question"
                  />
                  <button type="submit" className="btn btn-primary">
                    Send Question
                  </button>
                </form>
                <div className="or-divider">
                  <span>or</span>
                </div>
                <button className="btn btn-outline">Book a Quick Call</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-schedule">
        <div className="why-container">
          <div className="why-header">
            <h2 className="hero-title">Why Schedule</h2>
            <p className="section-subtitle">
              {' '}
              Turn ideas into measurable digital advantage. In a 30‑minute
              consult we map opportunities, prioritize quick wins, and outline a
              tailored roadmap that aligns tech, creativity, and growth metrics.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle r="10" cx="12" cy="12"></circle>
                    <circle r="6" cx="12" cy="12"></circle>
                    <circle r="2" cx="12" cy="12"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="section-title">What to Expect</h3>
              <p className="section-content">
                {' '}
                Focused audit of your current digital footprint, clear KPI
                targets, and a 90‑day sprint plan you can act on immediately —
                no buzzwords, just pragmatic, future‑ready strategy.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="section-title">Who This Is For</h3>
              <p className="section-content">
                {' '}
                Product teams, scale‑stage startups, and brands seeking a
                high‑signal partner to accelerate user acquisition, retention,
                and revenue through tech‑savvy creativity.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="section-title">Next Steps</h3>
              <p className="section-content">
                {' '}
                Pick a time, complete a short pre‑call brief, and we&apos;ll
                deliver a concise follow‑up with prioritized recommendations and
                a proposed pilot to prove impact.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="cta-final">
            <button className="btn-lg btn btn-primary">
              {' '}
              Schedule Your Strategy Session
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </button>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div
          aria-label="Sign up to TeleportHQ"
          className="contact-cta-container19"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="contact-cta-icon60"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="contact-cta-text25">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default ContactCTA
