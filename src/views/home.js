import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>S3O Digital Media | #1 SEO Agency & Growth Marketing Partner</title>
        <meta name="description" content="Boost your organic traffic, increase conversions, and dominate Google rankings with S3O Digital Media — your partner for SEO, content strategy, link building, and technical audits." />
        <meta name="keywords" content="SEO agency, digital marketing company, SEO services India, SEO partner, enterprise SEO, Google ranking experts, content strategy, link building, technical SEO audits" />
        <meta property="og:title" content="S3O Digital Media — SEO & Digital Growth Experts" />
        <meta property="og:description" content="End-to-end SEO and growth marketing services designed to get you more traffic, leads, and revenue." />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container11">
        <div className="home-container12">
          <Script
            html={`<style>
        @keyframes float {0%,100% {transform: translateY(0px) rotate(0deg);}
50% {transform: translateY(-20px) rotate(2deg);}}@keyframes pulse {0%,100% {opacity: 0.6;
transform: scale(1);}
50% {opacity: 0.9;
transform: scale(1.05);}}@keyframes drift {0% {transform: translateX(-100px);}
100% {transform: translateX(100px);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container13">
        <div className="home-container14">
          <Script
            html={`<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: var(--color-surface);
  color: var(--color-on-surface);
  font-family: var(--font-family-body);
  line-height: var(--line-height-normal);
  overflow-x: hidden;
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="home-container15">
        <div className="home-container16">
          <Script
            html={`<script defer data-name="homepage-animations">
(function(){
  // Smooth scroll animations and interactions
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Animate sections on scroll
  document
    .querySelectorAll(".service-card, .trust-card, .founder-card")
    .forEach((card) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(30px)"
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      animateOnScroll.observe(card)
    })

  // Enhanced sphere animation
  const sphereImage = document.querySelector(".sphere-image")
  if (sphereImage) {
    let mouseX = 0
    let mouseY = 0
    let sphereX = 0
    let sphereY = 0

    document.addEventListener("mousemove", (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1
      mouseY = (e.clientY / window.innerHeight) * 2 - 1
    })

    function animateSphere() {
      sphereX += (mouseX * 10 - sphereX) * 0.05
      sphereY += (mouseY * 10 - sphereY) * 0.05

      sphereImage.style.transform = \`translate(\${sphereX}px, \${sphereY}px) rotate(\${
        sphereX * 0.1
      }deg)\`
      requestAnimationFrame(animateSphere)
    }

    animateSphere()
  }

  // Form enhancement
  const emailForm = document.querySelector(".email-form")
  if (emailForm) {
    emailForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const button = emailForm.querySelector(".btn")
      const originalText = button.textContent
      button.textContent = "Downloading..."
      button.disabled = true

      setTimeout(() => {
        button.textContent = "Check Your Email!"
        setTimeout(() => {
          button.textContent = originalText
          button.disabled = false
          emailForm.reset()
        }, 2000)
      }, 1500)
    })
  }

  const consultationForm = document.querySelector(".consultation-form")
  if (consultationForm) {
    consultationForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const button = consultationForm.querySelector(".btn")
      const originalText = button.textContent
      button.textContent = "Sending..."
      button.disabled = true

      setTimeout(() => {
        button.textContent = "Message Sent!"
        setTimeout(() => {
          button.textContent = originalText
          button.disabled = false
          consultationForm.reset()
        }, 2000)
      }, 1500)
    })
  }

  // Particle animation enhancement
  const heroParticles = document.querySelector(".hero-particles")
  if (heroParticles) {
    let scrollY = 0

    window.addEventListener("scroll", () => {
      scrollY = window.scrollY
      heroParticles.style.transform = \`translateY(\${scrollY * 0.5}px)\`
    })
  }

  // Trust cards counter animation
  const trustStats = document.querySelectorAll(".trust-stat")
  const countUpObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target
          const finalValue = target.textContent
          const numericValue = parseInt(finalValue.replace(/\D/g, ""))
          const suffix = finalValue.replace(/\d/g, "")

          let currentValue = 0
          const increment = numericValue / 50

          const counter = setInterval(() => {
            currentValue += increment
            if (currentValue >= numericValue) {
              target.textContent = numericValue + suffix
              clearInterval(counter)
            } else {
              target.textContent = Math.floor(currentValue) + suffix
            }
          }, 30)

          countUpObserver.unobserve(target)
        }
      })
    },
    { threshold: 0.5 }
  )

  trustStats.forEach((stat) => {
    countUpObserver.observe(stat)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <main>
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-text">
                <div className="company-logo">
                  <h2>S3O Digital Media</h2>
                  <p className="tagline">
                    {' '}
                    Stories that Connect 🤝 Strategies that Convert 🚀
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <h1 className="hero-title">
                  <span>
                    {' '}
                    We Build Digital Growth Engines
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="home-accent-text">Not Just Campaigns</span>
                </h1>
                <p className="hero-subtitle">
                  {' '}
                  We blend psychology, storytelling, and data so brands grow
                  predictably — turning strangers into customers and customers
                  into advocates.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="hero-ctas">
                  <button className="btn-lg btn btn-primary">
                    Start Your Growth
                  </button>
                  <button className="btn-lg btn btn-outline">
                    View Our Work
                  </button>
                </div>
                <p className="value-line">
                  {' '}
                  Performance-first. Design-led. Measurably better.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="hero-visual">
                <div className="sphere-container">
                  <img
                    alt="3D abstract artwork featuring a neon sphere suspended in a blue illuminated landscape"
                    src="https://images.pexels.com/photos/26545223/pexels-photo-26545223.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                    className="sphere-image"
                  />
                  <div className="sphere-glow"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-particles"></div>
        </section>
        <section className="services-section">
          <div className="services-container">
            <div className="section-header">
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle">
                {' '}
                Comprehensive digital solutions tailored to your growth goals
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-7-7v14"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3>Digital Marketing</h3>
                <p>
                  {' '}
                  Comprehensive strategies that drive measurable growth across
                  all digital channels.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
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
                      <path d="m21 21l-4.34-4.34"></path>
                      <circle r="8" cx="11" cy="11"></circle>
                    </g>
                  </svg>
                </div>
                <h3>SEO &amp; Visibility</h3>
                <p>
                  {' '}
                  Get found by the right audience with data-driven SEO
                  strategies that convert.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
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
                      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                    </g>
                  </svg>
                </div>
                <h3>Content Creation</h3>
                <p>
                  {' '}
                  Compelling content that tells your story and drives engagement
                  across platforms.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2v13m4-9l-4-4l-4 4m-4 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3>Social Media Strategy</h3>
                <p>
                  {' '}
                  Build communities and drive conversions through strategic
                  social media management.
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
        <section className="trust-section">
          <div className="trust-container">
            <div className="section-header">
              <h2 className="section-title">Why Choose Us</h2>
              <p className="section-subtitle">
                {' '}
                Proven results across industries with a human-centered approach
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="trust-grid">
              <div className="trust-card">
                <div className="trust-icon">
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
                      <circle r="10" cx="12" cy="12"></circle>
                      <circle r="6" cx="12" cy="12"></circle>
                      <circle r="2" cx="12" cy="12"></circle>
                    </g>
                  </svg>
                </div>
                <div className="trust-stat">
                  <span>150+</span>
                </div>
                <h3>Proven Strategy</h3>
                <p>
                  {' '}
                  Trusted across SaaS, D2C, real estate &amp; more with
                  consistent results
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="trust-card">
                <div className="trust-icon">
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
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="m19 9l-5 5l-4-4l-3 3"></path>
                    </g>
                  </svg>
                </div>
                <div className="trust-stat">
                  <span>300%</span>
                </div>
                <h3>Data-Driven</h3>
                <p>
                  {' '}
                  Decisions powered by analytics &amp; behavior science for
                  optimal performance
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="trust-card">
                <div className="trust-icon">
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
                <div className="trust-stat">
                  <span>95%</span>
                </div>
                <h3>Scalable Results</h3>
                <p>
                  {' '}
                  Audits, roadmaps, sprints, and clear KPIs that grow with your
                  business
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
        <section className="resource-section">
          <div className="resource-container">
            <div className="resource-content">
              <div className="resource-text">
                <div className="resource-badge">
                  <span>Free Resource</span>
                </div>
                <h2 className="section-title">
                  5-Step Digital Growth Playbook
                </h2>
                <p className="resource-description">
                  {' '}
                  A practical, friendly 15-page guide to diagnose, design,
                  create, launch, and scale — without wasting ad spend.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <ul className="resource-benefits">
                  <li>
                    <span>Diagnose your current digital presence</span>
                  </li>
                  <li>
                    <span>Design a growth-focused strategy</span>
                  </li>
                  <li>
                    <span>Create compelling content that converts</span>
                  </li>
                  <li>
                    <span>Launch campaigns with confidence</span>
                  </li>
                  <li>
                    <span>Scale results systematically</span>
                  </li>
                </ul>
              </div>
              <div className="resource-form">
                <div className="form-container">
                  <div className="download-icon">
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
                  </div>
                  <h3>Get Your Free Playbook</h3>
                  <form className="email-form">
                    <input
                      type="email"
                      required="true"
                      placeholder="Enter your email address"
                    />
                    <button type="submit" className="btn btn-primary">
                      {' '}
                      Download Now
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </button>
                  </form>
                  <p className="form-note">
                    {' '}
                    No spam. Unsubscribe anytime. Your data is safe with us.
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
        <section className="about-section">
          <div className="about-container">
            <div className="about-story">
              <h2 className="section-title">About S3O Digital Media</h2>
              <p className="about-text">
                {' '}
                We started S3O Digital Media because we believed there was a better
                way to approach digital marketing — one that puts human
                psychology at the center of every strategy. Our team combines
                years of experience in data science, creative storytelling, and
                performance marketing to build growth engines that actually
                work.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <p className="about-text">
                {' '}
                We don&apos;t just run campaigns; we craft experiences that turn
                strangers into advocates. Every strategy is built on deep
                customer insights, every creative is tested for maximum impact,
                and every dollar spent is tracked to measurable business
                outcomes.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="founders-grid">
              <div className="founder-card">
                <div className="founder-image">
                  <img
                    alt="Portrait of a confident businesswoman sitting at a desk with a laptop in a modern office"
                    src="https://images.pexels.com/photos/8528744/pexels-photo-8528744.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                    loading="lazy"
                  />
                </div>
                <div className="founder-info">
                  <h3>Sarah Chen</h3>
                  <p className="founder-role">
                    Co-Founder &amp; Strategy Director
                  </p>
                  <p className="founder-bio">
                    {' '}
                    Former Head of Growth at two successful SaaS startups. Sarah
                    brings data-driven strategy and psychological insights to
                    every campaign.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="founder-card">
                <div className="founder-image">
                  <img
                    alt="Professional woman standing confidently in a modern office environment"
                    src="https://images.pexels.com/photos/10041267/pexels-photo-10041267.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                    loading="lazy"
                  />
                </div>
                <div className="founder-info">
                  <h3>Maya Rodriguez</h3>
                  <p className="founder-role">
                    Co-Founder &amp; Creative Director
                  </p>
                  <p className="founder-bio">
                    {' '}
                    Award-winning creative with 8+ years in brand storytelling.
                    Maya ensures every piece of content connects emotionally and
                    drives action.
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
        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-content">
              <div className="contact-text">
                <h2 className="section-title">Ready to Grow?</h2>
                <p className="contact-subtitle">
                  {' '}
                  Tell us your goal. We&apos;ll map the shortest path to it.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="contact-options">
                  <div className="contact-option">
                    <div className="contact-icon">
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
                          <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <div>
                      <h3>Email Us</h3>
                      <p>support@s3odigital.com</p>
                    </div>
                  </div>
                  <div className="contact-option">
                    <div className="contact-icon">
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
                          <rect
                            x="3"
                            y="4"
                            rx="2"
                            width="18"
                            height="18"
                          ></rect>
                          <path d="M3 10h18"></path>
                        </g>
                      </svg>
                    </div>
                    <div>
                      <h3>Schedule a Call</h3>
                      <p>Book a free strategy session</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-form">
                <form className="consultation-form">
                  <div className="form-row">
                    <input
                      type="text"
                      required="true"
                      placeholder="Your Name"
                    />
                    <input
                      type="email"
                      required="true"
                      placeholder="Email Address"
                    />
                  </div>
                  <input type="text" placeholder="Company Name" />
                  <select required="true">
                    <option value="true">What&apos;s your primary goal?</option>
                    <option value="lead-generation">
                      More qualified leads
                    </option>
                    <option value="brand-awareness">
                      Increase brand awareness
                    </option>
                    <option value="sales-growth">Drive sales growth</option>
                    <option value="customer-retention">
                      {' '}
                      Improve customer retention
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </option>
                  </select>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your current challenges and goals..."
                  ></textarea>
                  <button type="submit" className="btn-lg btn btn-primary">
                    {' '}
                    Start Our Partnership
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container20">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon46"
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
          <span className="home-text42">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
