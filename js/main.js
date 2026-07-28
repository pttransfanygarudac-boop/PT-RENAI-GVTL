"use strict";

/* =========================================
   PT RENAI GVTL INDONESIA
   MAIN.JS VERSION 1.0
========================================= */

/* =========================================
   DOM ELEMENTS
========================================= */

const header = document.querySelector("header");

const progressBar = document.querySelector(".progress-bar");

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");

const navLinks = document.querySelectorAll(".nav-menu a");

const revealElements = document.querySelectorAll(".reveal");

const heroImage = document.querySelector(".hero-image");

const cards = document.querySelectorAll(
    ".card, .feature-card, .use-card, .contact-card, .social-card"
);

/* =========================================
   WEBSITE STATE
========================================= */

const website = {

    initialized: false,

    mobileMenu: false,

    currentScroll: 0

};

/* =========================================
   INITIALIZE WEBSITE
========================================= */

function initializeWebsite() {

    if (website.initialized) return;

    website.initialized = true;

    initializeNavigation();

    initializeProgressBar();

    initializeReveal();

    initializeCards();

    initializeHero();

    console.log("PT RENAI GVTL INDONESIA");

    console.log("Website Version 1.0");

    console.log("Initialization Complete");

}

/* =========================================
   WINDOW LOAD
========================================= */

window.addEventListener("load", () => {

    initializeWebsite();

});

/* =========================================
   DOM READY
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeWebsite();

});

/* =========================================
   PLACEHOLDER FUNCTIONS
========================================= */

function initializeNavigation() {}

function initializeProgressBar() {}

function initializeReveal() {}

function initializeCards() {}

function initializeHero() {}

/* =========================================
   END PART 1
========================================= */



/* =========================================
   NAVIGATION
========================================= */

function initializeNavigation() {

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener("click", toggleMobileMenu);

    navLinks.forEach(link => {

        link.addEventListener("click", closeMobileMenu);

    });

    window.addEventListener("scroll", handleHeaderScroll);

}

/* =========================================
   MOBILE MENU
========================================= */

function toggleMobileMenu() {

    navMenu.classList.toggle("active");

    menuToggle.classList.toggle("active");

    website.mobileMenu = navMenu.classList.contains("active");

}

/* =========================================
   CLOSE MOBILE MENU
========================================= */

function closeMobileMenu() {

    navMenu.classList.remove("active");

    menuToggle.classList.remove("active");

    website.mobileMenu = false;

}

/* =========================================
   STICKY HEADER
========================================= */

function handleHeaderScroll() {

    const scrollY = window.scrollY;

    website.currentScroll = scrollY;

    if (scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

/* =========================================
   ACTIVE NAVIGATION
========================================= */

function updateActiveNavigation() {

    const sections = document.querySelectorAll("section");

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href && href.includes(current)) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);

/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* =========================================
   PROGRESS BAR
========================================= */

function initializeProgressBar() {

    window.addEventListener("scroll", updateProgressBar);

}

function updateProgressBar() {

    const totalHeight =

        document.documentElement.scrollHeight -

        window.innerHeight;

    const progress =

        (window.scrollY / totalHeight) * 100;

    if (progressBar) {

        progressBar.style.width =

            progress + "%";

    }

}



/* =========================================
   SCROLL REVEAL
========================================= */

function initializeReveal() {

    revealOnScroll();

    window.addEventListener("scroll", revealOnScroll);

}

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

/* =========================================
   HERO ANIMATION
========================================= */

function initializeHero() {

    if (!heroImage) return;

    window.addEventListener("mousemove", heroParallax);

}

function heroParallax(event) {

    const x = (window.innerWidth / 2 - event.clientX) / 35;

    const y = (window.innerHeight / 2 - event.clientY) / 35;

    heroImage.style.transform =

        `translate(${x}px, ${y}px)`;

}

/* =========================================
   FADE IN PAGE
========================================= */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

/* =========================================
   PAGE VISIBILITY
========================================= */

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        document.title =

            "PT RENAI GVTL INDONESIA";

    } else {

        document.title =

            "Welcome Back";

    }

});

/* =========================================
   SCROLL INDICATOR
========================================= */

window.addEventListener("scroll", () => {

    requestAnimationFrame(updateProgressBar);

});

/* =========================================
   END PART 3
========================================= */



/* =========================================
   CARD INTERACTION
========================================= */

function initializeCards() {

    if (!cards.length) return;

    cards.forEach(card => {

        card.addEventListener("mouseenter", cardEnter);

        card.addEventListener("mouseleave", cardLeave);

    });

}

function cardEnter() {

    this.style.transform = "translateY(-10px)";

}

function cardLeave() {

    this.style.transform = "";

}

/* =========================================
   BACK TO TOP BUTTON
========================================= */

const backToTop = document.createElement("button");

backToTop.className = "back-to-top";

backToTop.innerHTML = "↑";

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* =========================================
   BUTTON RIPPLE EFFECT
========================================= */

document.querySelectorAll(".btn-primary, .btn-secondary")
.forEach(button => {

    button.addEventListener("click", function(event) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left = `${event.clientX - rect.left}px`;

        ripple.style.top = `${event.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/* =========================================
   IMAGE HOVER ENHANCEMENT
========================================= */

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.filter =
            "drop-shadow(0 0 20px rgba(0,217,255,.6))";

    });

    image.addEventListener("mouseleave", () => {

        image.style.filter = "";

    });

});

/* =========================================
   END PART 4
========================================= */



/* =========================================
   DEBOUNCE
========================================= */

function debounce(callback, delay = 200) {

    let timeout;

    return (...args) => {

        clearTimeout(timeout);

        timeout = setTimeout(() => {

            callback(...args);

        }, delay);

    };

}

/* =========================================
   THROTTLE
========================================= */

function throttle(callback, limit = 100) {

    let waiting = false;

    return (...args) => {

        if (waiting) return;

        callback(...args);

        waiting = true;

        setTimeout(() => {

            waiting = false;

        }, limit);

    };

}

/* =========================================
   WINDOW RESIZE
========================================= */

window.addEventListener(

    "resize",

    debounce(() => {

        console.log("Window resized");

    }, 250)

);

/* =========================================
   ESC KEY
========================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeMobileMenu();

    }

});

/* =========================================
   CLICK OUTSIDE MENU
========================================= */

document.addEventListener("click", (event) => {

    if (!website.mobileMenu) return;

    const insideMenu = navMenu.contains(event.target);

    const insideButton = menuToggle.contains(event.target);

    if (!insideMenu && !insideButton) {

        closeMobileMenu();

    }

});

/* =========================================
   SAFE QUERY SELECTOR
========================================= */

function safeQuery(selector) {

    return document.querySelector(selector);

}

function safeQueryAll(selector) {

    return document.querySelectorAll(selector);

}

/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log("--------------------------------");

console.log("PT RENAI GVTL INDONESIA");

console.log("Website Version 1.0");

console.log("JavaScript Loaded Successfully");

console.log("--------------------------------");

/* =========================================
   END PART 5
========================================= */



/* =========================================
   PERFORMANCE OPTIMIZATION
========================================= */

window.addEventListener(

    "scroll",

    throttle(() => {

        updateProgressBar();

        updateActiveNavigation();

    }, 16)

);

/* =========================================
   CHECK REQUIRED ELEMENTS
========================================= */

function checkRequiredElements() {

    const requiredElements = [

        "header",

        ".nav-menu",

        ".menu-toggle",

        ".progress-bar"

    ];

    requiredElements.forEach(selector => {

        if (!document.querySelector(selector)) {

            console.warn(

                `Missing element: ${selector}`

            );

        }

    });

}

checkRequiredElements();

/* =========================================
   DISABLE IMAGE DRAG
========================================= */

document.querySelectorAll("img").forEach(image => {

    image.setAttribute("draggable", "false");

});

/* =========================================
   DISABLE RIGHT CLICK ON LOGO
========================================= */

const logo = document.querySelector(".logo img");

if (logo) {

    logo.addEventListener("contextmenu", event => {

        event.preventDefault();

    });

}

/* =========================================
   PAGE LOADED
========================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log("Website Ready.");

});

/* =========================================
   VERSION INFORMATION
========================================= */

const WEBSITE_INFO = {

    company: "PT RENAI GVTL INDONESIA",

    version: "1.0.0",

    status: "Development",

    year: "2026"

};

console.table(WEBSITE_INFO);

/* =========================================
   FINAL INITIALIZATION
========================================= */

initializeWebsite();

/* =========================================
   END PART 6
========================================= */

/* =========================================
   END OF FILE
========================================= */