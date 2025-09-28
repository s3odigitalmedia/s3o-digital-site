import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
        @keyframes pulse {0%,100% {opacity: 0.4;
transform: scale(1);}
50% {opacity: 1;
transform: scale(1.2);}}@keyframes slideInUp {0% {opacity: 0;
transform: translateY(30px);}
100% {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<script defer data-name="navigation">
(function(){
  const navigationToggle = document.getElementById("navigationToggle")
  const navigationMobile = document.getElementById("navigationMobile")
  const navigation = document.querySelector(".navigation")

  // Mobile menu toggle
  navigationToggle.addEventListener("click", () => {
    navigationMobile.classList.toggle("active")
    document.body.style.overflow = navigationMobile.classList.contains("active")
      ? "hidden"
      : ""
  })

  // Close mobile menu when clicking on a link
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navigationMobile.classList.remove("active")
      document.body.style.overflow = ""
    })
  })

  // Close mobile menu when clicking outside
  navigationMobile.addEventListener("click", (e) => {
    if (e.target === navigationMobile) {
      navigationMobile.classList.remove("active")
      document.body.style.overflow = ""
    }
  })

  // Scroll effect for navigation background
  let lastScrollY = window.scrollY

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navigation.classList.add("scrolled")
    } else {
      navigation.classList.remove("scrolled")
    }
    lastScrollY = window.scrollY
  })

  // Close mobile menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navigationMobile.classList.contains("active")) {
      navigationMobile.classList.remove("active")
      document.body.style.overflow = ""
    }
  })

  // Smooth scroll behavior for navigation links
  const navigationLinks = document.querySelectorAll(
    ".navigation-link, .navigation-mobile-link"
  )
  navigationLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href")
      if (href && href.startsWith("#")) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          const offsetTop =
            target.getBoundingClientRect().top + window.pageYOffset - 80
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          })
        }
      }
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <nav className="navigation">
        <div className="navigation-container">
          <div className="navigation-brand">
            <a href="/">
              <div className="navigation-logo">
                <span className="navigation-logo-text">S3O</span>
                <span className="navigation-logo-accent">Digital</span>
              </div>
            </a>
          </div>
          <div className="navigation-links">
            <a href="/">
              <div className="navigation-link">
                <span>Home</span>
              </div>
            </a>
            <a href="/services">
              <div className="navigation-link">
                <span>Services</span>
              </div>
            </a>
            <a href="/why-choose-us">
              <div className="navigation-link">
                <span>Why Choose Us</span>
              </div>
            </a>
            <a href="/about">
              <div className="navigation-link">
                <span>About</span>
              </div>
            </a>
            <a href="/contact">
              <div className="navigation-link">
                <span>Contact / CTA</span>
              </div>
            </a>
          </div>
          <div className="navigation-cta">
            <button className="btn btn-primary">Get Started</button>
          </div>
          <button
            id="navigationToggle"
            aria-label="Toggle mobile menu"
            className="navigation-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 5h16M4 12h16M4 19h16"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div id="navigationMobile" className="navigation-mobile">
          <div className="navigation-mobile-content">
            <a href="/">
              <div className="navigation-mobile-link">
                <span>Home</span>
              </div>
            </a>
            <a href="/services">
              <div className="navigation-mobile-link">
                <span>Services</span>
              </div>
            </a>
            <a href="/why-choose-us">
              <div className="navigation-mobile-link">
                <span>Why Choose Us</span>
              </div>
            </a>
            <a href="/about">
              <div className="navigation-mobile-link">
                <span>About</span>
              </div>
            </a>
            <a href="/contact">
              <div className="navigation-mobile-link">
                <span>Contact / CTA</span>
              </div>
            </a>
            <div className="navigation-mobile-cta">
              <button className="btn-lg btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
