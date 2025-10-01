import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './why-choose-us.css'

const WhyChooseUs = (props) => {
  return (
    <div className="why-choose-us-container10">
      <Helmet>
        <title>Why Choose S3O Digital Media | Trusted SEO Agency for Growth</title>
        <meta name="description" content="Partner with S3O Digital Media to grow your brand online. We combine SEO, content marketing, analytics, and strategy to deliver measurable business outcomes." />
        <meta name="keywords" content="trusted SEO agency, data-driven marketing, SEO strategy, content marketing experts, digital growth, SEO audit services" />
      </Helmet>
      <Navigation></Navigation>
      <div className="why-choose-us-container11">
        <div className="why-choose-us-container12">
          <Script
            html={`<style>
        @keyframes glow-text {from {text-shadow: 0 0 20px
        color-mix(in srgb, var(--color-accent) 30%, transparent);}
to {text-shadow: 0 0 30px
        color-mix(in srgb, var(--color-accent) 50%, transparent);}}@keyframes float {0%,100% {transform: translateY(0);}
50% {transform: translateY(-20px);}}@keyframes pulse-glow {0% {opacity: 0.3;
transform: scale(0.95);}
100% {opacity: 0.6;
transform: scale(1.05);}}@keyframes pulse-button {0%,100% {transform: scale(1);}
50% {transform: scale(1.05);}}@keyframes counter-up {from {opacity: 0;
transform: translateY(20px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="why-choose-us-container13">
        <div className="why-choose-us-container14">
          <Script
            html={`<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: var(--font-family-body);
  background: var(--color-surface);
  color: var(--color-on-surface);
  overflow-x: hidden;
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="why-choose-us-container15">
        <div className="why-choose-us-container16">
          <Script
            html={`<script defer data-name="why-choose-us-page">
(function(){
  // Initialize progress bars animation
  function animateProgressBars() {
    const progressBars = document.querySelectorAll(".progress-bar")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target
            const progress = bar.getAttribute("data-progress")
            bar.style.width = progress + "%"
          }
        })
      },
      {
        threshold: 0.5,
      }
    )

    progressBars.forEach((bar) => observer.observe(bar))
  }

  // Testimonials carousel functionality
  function initTestimonialsCarousel() {
    const cards = document.querySelectorAll(".testimonial-card")
    const dots = document.querySelectorAll(".dot")
    let currentSlide = 0

    function showSlide(index) {
      cards.forEach((card, i) => {
        card.classList.remove("active")
        if (i === index) {
          card.classList.add("active")
        }
      })

      dots.forEach((dot, i) => {
        dot.classList.remove("active")
        if (i === index) {
          dot.classList.add("active")
        }
      })
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % cards.length
      showSlide(currentSlide)
    }

    // Auto-advance carousel
    setInterval(nextSlide, 5000)

    // Dot click handlers
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentSlide = index
        showSlide(currentSlide)
      })
    })
  }

  // Scroll-triggered animations
  function initScrollAnimations() {
    const animateElements = document.querySelectorAll(
      ".trust-card, .stat-card, .philosophy-card"
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    animateElements.forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(30px)"
      element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(element)
    })
  }

  // Hover effects for interactive elements
  function initHoverEffects() {
    const interactiveCards = document.querySelectorAll(
      ".trust-card, .stat-card, .philosophy-card"
    )

    interactiveCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = card.classList.contains("stat-card")
          ? "translateY(-5px) scale(1.02)"
          : "translateY(-10px)"
      })

      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)"
      })
    })
  }

  // Smooth number counting animation for stats
  function initNumberCounters() {
    const statNumbers = document.querySelectorAll(".stat-number")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target
            const finalNumber = element.textContent.replace(/[^\d.]/g, "")
            const isDecimal = finalNumber.includes(".")
            const suffix = element.textContent.replace(/[\d.]/g, "")

            animateNumber(
              element,
              0,
              parseFloat(finalNumber),
              isDecimal,
              suffix
            )
          }
        })
      },
      { threshold: 0.5 }
    )

    statNumbers.forEach((number) => observer.observe(number))
  }

  function animateNumber(element, start, end, isDecimal, suffix) {
    const duration = 2000
    const steps = 60
    const increment = (end - start) / steps
    const stepDuration = duration / steps
    let current = start

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        current = end
        clearInterval(timer)
      }

      const displayValue = isDecimal ? current.toFixed(1) : Math.round(current)

      element.textContent = displayValue + suffix
    }, stepDuration)
  }

  // Button pulse animation on click
  function initButtonAnimations() {
    const buttons = document.querySelectorAll(".btn")

    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const ripple = document.createElement("span")
        const rect = button.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height)
        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2

        ripple.style.width = ripple.style.height = size + "px"
        ripple.style.left = x + "px"
        ripple.style.top = y + "px"
        ripple.style.position = "absolute"
        ripple.style.borderRadius = "50%"
        ripple.style.background = "rgba(255, 255, 255, 0.3)"
        ripple.style.transform = "scale(0)"
        ripple.style.animation = "ripple 0.6s linear"
        ripple.style.pointerEvents = "none"

        button.style.position = "relative"
        button.style.overflow = "hidden"
        button.appendChild(ripple)

        setTimeout(() => {
          ripple.remove()
        }, 600)
      })
    })
  }

  // Add ripple animation CSS
  const rippleStyle = document.createElement("style")
  rippleStyle.textContent = \`
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
\`
  document.head.appendChild(rippleStyle)

  // Initialize all functionality
  animateProgressBars()
  initTestimonialsCarousel()
  initScrollAnimations()
  initHoverEffects()
  initNumberCounters()
  initButtonAnimations()

  // Parallax effect for hero sphere
  function initParallax() {
    const sphere = document.querySelector(".sphere-container")
    if (!sphere) return

    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.3
      sphere.style.transform = \`translateY(\${rate}px)\`
    })
  }

  initParallax()
})()
</script>`}
          ></Script>
        </div>
      </div>
      <section id="hero" className="hero-section1">
        <div className="hero-background">
          <video
            src="https://videos.pexels.com/video-files/3163534/3163534-hd_1280_720_30fps.mp4"
            loop="true"
            muted="true"
            autoPlay="true"
            playsInline="true"
            className="hero-video"
          ></video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content1">
          <div className="hero-text1">
            <h1 className="hero-title">
              Why top tech brands trust S3O Digital Media
            </h1>
            <p className="hero-subtitle">
              {' '}
              We turn bold product visions into scalable digital growth.
              Strategic creativity, measurable outcomes — delivered with a
              future-forward stack and meticulous craft.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">
                Get our 5‑Step Growth Playbook
              </button>
              <button className="btn btn-outline">
                Request a consultation
              </button>
            </div>
          </div>
          <div className="hero-sphere">
            <div className="sphere-container1">
              <img
                alt="Futuristic 3D sphere representing digital innovation"
                src="https://images.pexels.com/photos/17485658/pexels-photo-17485658.png?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                className="sphere-image1"
              />
              <div className="sphere-glow1"></div>
              <div className="scanline-overlay"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="trust-highlights" className="trust-highlights-section">
        <div className="container">
          <div className="trust-grid1">
            <div className="trust-card1">
              <div className="trust-icon1">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="trust-stat1">
                <span>150+</span>
              </div>
              <h3 className="trust-heading">Tech &amp; Startup Partnerships</h3>
              <p className="trust-description">
                {' '}
                Trusted by fast-scaling teams to launch, iterate, and scale
                revenue-driven campaigns with surgical precision.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="card-glow"></div>
            </div>
            <div className="trust-card1">
              <div className="trust-icon1">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
                  </g>
                </svg>
              </div>
              <div className="trust-stat1">
                <span>6.8x</span>
              </div>
              <h3 className="trust-heading">Average ROI Within 12 Months</h3>
              <p className="trust-description">
                {' '}
                Data-led strategy, continuous optimization, and creative systems
                that convert audiences into predictable growth engines.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="card-glow"></div>
            </div>
            <div className="trust-card1">
              <div className="trust-icon1">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978m7-7.318v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16"></path>
                    <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 0H4.5a1 1 0 0 1 0-5H6"></path>
                  </g>
                </svg>
              </div>
              <div className="trust-stat1">
                <span>34</span>
              </div>
              <h3 className="trust-heading">Awarded Case Studies</h3>
              <p className="trust-description">
                {' '}
                Proven cross-channel wins in fintech, SaaS, and IoT;
                reproducible playbooks that move metrics and win market
                mindshare.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="card-glow"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="impact-stats" className="impact-stats-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {' '}
              Impact at a glance — data that proves design drives growth.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m12 14l4-4M3.34 19a10 10 0 1 1 17.32 0"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="stat-number">
                <span>3.8x</span>
              </div>
              <h3 className="stat-title">Conversion Velocity</h3>
              <p className="stat-description">
                {' '}
                Average uplift in qualified leads within 90 days. We optimize
                funnels, creative, and messaging to accelerate the path from
                first touch to revenue.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="stat-progress">
                <div data-progress="80" className="progress-bar"></div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path>
                    <circle r="3" cx="12" cy="12"></circle>
                  </g>
                </svg>
              </div>
              <div className="stat-number">
                <span>72%</span>
              </div>
              <h3 className="stat-title">Visibility Lift</h3>
              <p className="stat-description">
                {' '}
                Median increase in organic impressions within six months.
                Technical SEO, semantic content, and authority signals combine
                to expand discoverability.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="stat-progress">
                <div data-progress="72" className="progress-bar"></div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="stat-number">
                <span>48%</span>
              </div>
              <h3 className="stat-title">Engagement Depth</h3>
              <p className="stat-description">
                {' '}
                Higher time-on-site and 2.6 pages per session for clients after
                our creative refreshes. Interactive experiences keep users
                invested and moving toward action.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="stat-progress">
                <div data-progress="48" className="progress-bar"></div>
              </div>
            </div>
          </div>
          <div className="impact-cta">
            <p className="impact-note">
              {' '}
              Request a tailored performance projection — we&apos;ll benchmark
              your current metrics and map a 6‑month growth plan.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
        </div>
      </section>
      <section id="cta-focus" className="cta-focus-section">
        <div className="container">
          <div className="cta-container">
            <h2 className="cta-heading">
              Ready to build something future-facing?
            </h2>
            <p className="cta-subheading">
              {' '}
              Let&apos;s map your next leap. Schedule a discovery call or get
              the 5‑Step Digital Growth Playbook and start with a clear,
              strategic roadmap.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
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
                  Book a Strategy Call
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </button>
              <button className="btn btn-secondary">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <path d="m7 10l5 5l5-5"></path>
                  </g>
                </svg>
                <span>
                  {' '}
                  Download the 5‑Step Playbook (Free)
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </button>
            </div>
            <p className="microcopy">
              {' '}
              Choose a short consult (30 mins) or grab the playbook for a
              step-by-step action plan. No sales pressure — just tactics and
              clarity.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="cta-glow-effect"></div>
        </div>
      </section>
      <section id="about-philosophy" className="about-philosophy-section">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-card">
              <h3>Human Insight Meets Engineered Experience</h3>
              <p>
                {' '}
                We prototype at the intersection of human insight and engineered
                experience — designing strategies that feel effortless and
                perform like precision software.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="philosophy-card">
              <h3>Think, Build, Craft</h3>
              <p>
                {' '}
                Our philosophy is simple: think like users, build like
                engineers, and craft like artists. Every campaign, creative
                asset and optimization is informed by data, elevated by design
                and tuned for scale.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="philosophy-card">
              <h3>Small Team, Big Systems</h3>
              <p>
                {' '}
                We favor modular processes, rapid iterations and measurable
                outcomes — so ideas move from concept to impact faster, cleaner
                and with less risk.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="philosophy-card">
              <h3>Trust is Engineered</h3>
              <p>
                {' '}
                We pair transparent reporting, rigorous QA and proactive
                roadmaps so clients always know what we&apos;re testing, why it
                matters and how growth compounds over time.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="philosophy-card">
              <h3>People-First, Future-Ready</h3>
              <p>
                {' '}
                We design with empathy for real users while applying advanced
                tooling and automation that unlocks creativity at scale — the
                result is work that feels human and performs like next-gen
                technology.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="client-voices" className="client-voices-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Client Voices</h2>
          </div>
          <div className="testimonials-carousel">
            <div className="testimonial-card active">
              <div className="quote-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <p className="testimonial-text">
                {' '}
                S3O Digital Media translated our product&apos;s complexity into a
                sleek, scalable growth engine. The strategy felt futuristic but
                utterly practical — metrics rose within weeks.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonial-author">
                <strong>Lena M.</strong>
                <span>VP Product</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <p className="testimonial-text">
                {' '}
                Their team blends creative daring with technical rigor. The
                campaign outperformed forecasts and looked like art on launch.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonial-author">
                <strong>Marco R.</strong>
                <span>Head of Growth</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <p className="testimonial-text">
                {' '}
                Working with S3O felt like hiring a product team and a creative
                studio in one. Fast, strategic, and impeccably executed.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonial-author">
                <strong>Aisha K.</strong>
                <span>Founder</span>
              </div>
            </div>
          </div>
          <div className="carousel-dots">
            <button data-slide="0" className="active dot"></button>
            <button data-slide="1" className="dot"></button>
            <button data-slide="2" className="dot"></button>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div
          aria-label="Sign up to TeleportHQ"
          className="why-choose-us-container22"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="why-choose-us-icon43"
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
          <span className="why-choose-us-text34">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default WhyChooseUs
