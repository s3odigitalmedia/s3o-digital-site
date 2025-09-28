import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
        @keyframes footerGlow {0% {opacity: 0.6;}
100% {opacity: 1;}}@keyframes footerPulse {0%,100% {opacity: 0.6;
width: 24px;}
50% {opacity: 1;
width: 32px;}}@keyframes footerGridFloat {0% {transform: translate(0, 0);}
100% {transform: translate(-40px, -40px);}}@keyframes footerGlowFloat {0%,100% {transform: translate(0, 0) scale(1);}
33% {transform: translate(30px, -20px) scale(1.1);}
66% {transform: translate(-20px, 30px) scale(0.9);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<script defer data-name="footer">
(function(){
  // Back to top functionality
  const backToTopBtn = document.getElementById("backToTop")

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })

    // Show/hide back to top button based on scroll position
    let scrollTimer = null
    window.addEventListener("scroll", function () {
      if (scrollTimer) {
        clearTimeout(scrollTimer)
      }

      scrollTimer = setTimeout(function () {
        if (window.pageYOffset > 500) {
          backToTopBtn.style.opacity = "1"
          backToTopBtn.style.pointerEvents = "auto"
        } else {
          backToTopBtn.style.opacity = "0.7"
          backToTopBtn.style.pointerEvents = "auto"
        }
      }, 10)
    })
  }

  // Enhanced hover effects for social links
  const socialLinks = document.querySelectorAll(".footer-social-link")
  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.05)"
    })

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Animated contact icon interactions
  const contactItems = document.querySelectorAll(".footer-contact-item")
  contactItems.forEach((item) => {
    const icon = item.querySelector(".footer-contact-icon")

    item.addEventListener("mouseenter", function () {
      if (icon) {
        icon.style.transform = "scale(1.1) rotate(5deg)"
      }
    })

    item.addEventListener("mouseleave", function () {
      if (icon) {
        icon.style.transform = "scale(1) rotate(0deg)"
      }
    })
  })

  // Intersection Observer for footer reveal animation
  const footer = document.querySelector(".footer")
  if (footer) {
    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            footer.style.animation = "footerReveal 0.8s ease-out forwards"
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    footerObserver.observe(footer)
  }

  // Add reveal animation keyframes
  const style = document.createElement("style")
  style.textContent = \`
  @keyframes footerReveal {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
\`
  document.head.appendChild(style)
})()
</script>`}
          ></Script>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-container">
            <div className="footer-brand">
              <div className="footer-logo">
                <h3 className="footer-brand-name">S3O Digital</h3>
                <div className="footer-brand-accent"></div>
              </div>
              <p className="footer-brand-tagline">
                Strategic. Digital. Results.
              </p>
              <p className="footer-brand-description">
                {' '}
                Transforming businesses through innovative digital marketing
                strategies and cutting-edge technology solutions.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="footer-section">
              <h4 className="footer-section-title">Quick Links</h4>
              <nav className="footer-nav">
                <a href="#">
                  <div className="footer-link">
                    <span>Homepage</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-link">
                    <span>Why Choose Us</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-link">
                    <span>Services</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-link">
                    <span>About Us</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-link">
                    <span>Contact / CTA</span>
                  </div>
                </a>
              </nav>
            </div>
            <div className="footer-section">
              <h4 className="footer-section-title">Services</h4>
              <nav className="footer-nav">
                <a href="#">
                  <div className="footer-link">
                    <span>Digital Marketing</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-link">
                    <span>SEO &amp; Visibility</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-link">
                    <span>Content Creation</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-link">
                    <span>Social Media Strategy</span>
                  </div>
                </a>
              </nav>
            </div>
            <div className="footer-section">
              <h4 className="footer-section-title">Get In Touch</h4>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
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
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </g>
                    </svg>
                  </div>
                  <a href="mailto:hello@s3odigital.com?subject=">
                    <div className="footer-contact-link">
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
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
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
                  <a href="tel:+1234567890">
                    <div className="footer-contact-link">
                      <span>
                        {' '}
                        +1 (234) 567-8900
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="footer-contact-text">San Francisco, CA</span>
                </div>
              </div>
              <div className="footer-social">
                <h5 className="footer-social-title">Follow Us</h5>
                <div className="footer-social-links">
                  <a href="#">
                    <div aria-label="LinkedIn" className="footer-social-link">
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
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                          <circle r="2" cx="4" cy="4"></circle>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Twitter" className="footer-social-link">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Facebook" className="footer-social-link">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Instagram" className="footer-social-link">
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
                          <rect
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                            width="20"
                            height="20"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <div className="footer-bottom-content">
              <div className="footer-legal">
                <p className="footer-copyright">
                  {' '}
                  &amp;copy; 2025 S3O Digital. All rights reserved.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <nav className="footer-legal-links">
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Cookie Policy</span>
                    </div>
                  </a>
                </nav>
              </div>
              <button
                id="backToTop"
                aria-label="Back to top"
                className="footer-back-to-top"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m5 12l7-7l7 7m-7 7V5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="footer-decoration">
          <div className="footer-grid-pattern"></div>
          <div className="footer-glow-orb-1 footer-glow-orb"></div>
          <div className="footer-glow-orb-2 footer-glow-orb"></div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
