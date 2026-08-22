// ================================
// PROBASHI HUMAN WELFARE
// Main Website JavaScript
// ================================

document.addEventListener("DOMContentLoaded", () => {

  // ================================
  // MOBILE MENU
  // ================================

  const menuButton = document.getElementById("menuButton");
  const navigation = document.getElementById("navigation");

  if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

      navigation.classList.toggle("open");

      if (navigation.classList.contains("open")) {
        menuButton.innerHTML = "✕";
      } else {
        menuButton.innerHTML = "☰";
      }

    });

    // Close menu after clicking a link
    navigation.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        navigation.classList.remove("open");

        menuButton.innerHTML = "☰";

      });

    });

  }


  // ================================
  // CURRENT YEAR
  // ================================

  const yearElement = document.getElementById("year");

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }


  // ================================
  // BACK TO TOP BUTTON
  // ================================

  const topButton =
    document.getElementById("topButton");

  if (topButton) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 500) {

        topButton.classList.add("show");

      } else {

        topButton.classList.remove("show");

      }

    });

    topButton.addEventListener("click", () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


  // ================================
  // 3D HERO LOGO MOVEMENT
  // ================================

  const heroVisual =
    document.querySelector(".hero-visual");

  const mainLogo =
    document.querySelector(".main-logo");

  if (heroVisual && mainLogo) {

    heroVisual.addEventListener(
      "mousemove",
      (event) => {

        // Disable strong effect on mobile
        if (window.innerWidth < 700) {
          return;
        }

        const rect =
          heroVisual.getBoundingClientRect();

        const x =
          event.clientX - rect.left;

        const y =
          event.clientY - rect.top;

        const centerX =
          rect.width / 2;

        const centerY =
          rect.height / 2;

        const rotateY =
          ((x - centerX) / centerX) * 10;

        const rotateX =
          ((centerY - y) / centerY) * 8;

        mainLogo.style.transform =
          `rotateX(${rotateX}deg)
           rotateY(${rotateY}deg)
           translateY(-8px)`;

      }
    );


    heroVisual.addEventListener(
      "mouseleave",
      () => {

        mainLogo.style.transform =
          "rotateX(7deg) rotateY(-8deg)";

      }
    );

  }


  // ================================
  // SCROLL REVEAL
  // ================================

  const revealElements =
    document.querySelectorAll(
      ".about-card, .service-card, .social-card, .link-card, .contact-card"
    );


  const revealObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("reveal-active");

            revealObserver.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12
      }
    );


  revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

  });


  // ================================
  // ACTIVE NAVIGATION
  // ================================

  const sections =
    document.querySelectorAll("section[id]");

  const navLinks =
    document.querySelectorAll(
      '#navigation a[href^="#"]'
    );


  window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

      const sectionTop =
        section.offsetTop - 150;

      if (window.scrollY >= sectionTop) {

        currentSection =
          section.getAttribute("id");

      }

    });


    navLinks.forEach(link => {

      link.classList.remove("active");

      if (
        link.getAttribute("href") ===
        `#${currentSection}`
      ) {

        link.classList.add("active");

      }

    });

  });


  // ================================
  // BUTTON CLICK EFFECT
  // ================================

  const buttons =
    document.querySelectorAll(
      ".btn, .cta-button"
    );


  buttons.forEach(button => {

    button.addEventListener(
      "click",
      function(event) {

        const ripple =
          document.createElement("span");

        ripple.classList.add("ripple");

        const rect =
          this.getBoundingClientRect();

        const size =
          Math.max(
            rect.width,
            rect.height
          );

        ripple.style.width =
          `${size}px`;

        ripple.style.height =
          `${size}px`;

        ripple.style.left =
          `${event.clientX - rect.left - size / 2}px`;

        ripple.style.top =
          `${event.clientY - rect.top - size / 2}px`;

        this.appendChild(ripple);

        setTimeout(() => {

          ripple.remove();

        }, 600);

      }
    );

  });


  // ================================
  // LOGO TILT ON MOBILE TOUCH
  // ================================

  if (
    mainLogo &&
    window.innerWidth < 700
  ) {

    let startX = 0;

    document.addEventListener(
      "touchstart",
      event => {

        startX =
          event.touches[0].clientX;

      },
      {
        passive: true
      }
    );


    document.addEventListener(
      "touchmove",
      event => {

        const currentX =
          event.touches[0].clientX;

        const difference =
          currentX - startX;

        if (Math.abs(difference) > 15) {

          const rotate =
            difference / 12;

          mainLogo.style.transform =
            `rotateY(${rotate}deg)`;

        }

      },
      {
        passive: true
      }
    );


    document.addEventListener(
      "touchend",
      () => {

        mainLogo.style.transform =
          "rotateX(7deg) rotateY(-8deg)";

      }
    );

  }


  // ================================
  // SOCIAL CARD PRESS EFFECT
  // ================================

  const socialCards =
    document.querySelectorAll(
      ".social-card"
    );


  socialCards.forEach(card => {

    card.addEventListener(
      "mousedown",
      () => {

        card.style.transform =
          "scale(.98)";

      }
    );


    card.addEventListener(
      "mouseup",
      () => {

        card.style.transform = "";

      }
    );

  });


  // ================================
  // PREVENT BROKEN # LINKS
  // ================================

  document
    .querySelectorAll('a[href="#"]')
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          event.preventDefault();

        }
      );

    });


  // ================================
  // PAGE READY
  // ================================

  document.body.classList.add(
    "page-loaded"
  );

});
