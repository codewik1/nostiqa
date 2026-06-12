document.addEventListener("DOMContentLoaded", () => {
  // ===== Header =====
  const header = document.getElementById("main-header");
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  toggleBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu?.classList.toggle("hidden");
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu?.classList.add("hidden");
    });
  });

  document.addEventListener("click", (e) => {
    if (
      mobileMenu &&
      !mobileMenu.contains(e.target) &&
      !toggleBtn?.contains(e.target)
    ) {
      mobileMenu.classList.add("hidden");
    }
  });

  const handleScroll = () => {
    if (!header) return;

    const scrolled = window.scrollY > 30;

    header.classList.toggle("bg-transparent", !scrolled);
    header.classList.toggle("bg-white/95", scrolled);
    header.classList.toggle("backdrop-blur-xl", scrolled);
    header.classList.toggle("shadow-lg", scrolled);
    header.classList.toggle("border-b", scrolled);
    header.classList.toggle("border-primary/10", scrolled);
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);

  // Active Menu Highlight
  const normalizePath = (path) => path.replace(/\/+$/, "") || "/";
  const currentPath = normalizePath(window.location.pathname);

  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");

    if (!href || href.startsWith("http") || href.startsWith("#")) return;

    if (normalizePath(href) === currentPath) {
      link.classList.remove("text-dark");
      link.classList.add("text-primary", "font-semibold");
    }
  });

  // ===== Lucide =====
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // ===== Shortlist Swiper =====
  if (
    typeof Swiper !== "undefined" &&
    document.querySelector(".shortlistSwiper")
  ) {
    new Swiper(".shortlistSwiper", {
      spaceBetween: 10,
      pagination: {
        el: ".shortlistSwiper .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: { slidesPerView: 2.2 },
        576: { slidesPerView: 2.5 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 3 },
        1600: { slidesPerView: 4 },
      },
    });
  }

  // ===== Report Swiper =====
  if (
    typeof Swiper !== "undefined" &&
    document.querySelector(".reportSwiper")
  ) {
    new Swiper(".reportSwiper", {
      slidesPerView: 1,
      spaceBetween: 15,
      navigation: {
        nextEl: ".report-next",
        prevEl: ".report-prev",
      },
      pagination: {
        el: ".reportSwiper .swiper-pagination",
        clickable: true,
      },
    });
  }

  // ===== Pricing Switcher =====
  const plans = {
    nano: {
      followers: "Under 50K followers",
      price: "₹1,999",
      delivery: "Per creator report · Delivered within 24 hours",
    },
    micro: {
      followers: "50K - 250K followers",
      price: "₹4,999",
      delivery: "Per creator report · Delivered within 48 hours",
    },
    mid: {
      followers: "250K - 1M followers",
      price: "₹9,999",
      delivery: "Detailed audit · Delivered within 72 hours",
    },
    macro: {
      followers: "1M+ followers",
      price: "Custom Pricing",
      delivery: "Enterprise-grade creator intelligence",
    },
  };

  const planButtons = document.querySelectorAll(".plan-btn");

  planButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const plan = plans[button.dataset.plan];
      if (!plan) return;

      document.getElementById("followersText").textContent = plan.followers;
      document.getElementById("priceText").textContent = plan.price;
      document.getElementById("deliveryText").textContent = plan.delivery;

      planButtons.forEach((btn) => {
        btn.classList.remove("bg-primary", "text-white");
        btn.classList.add("border", "border-gray/30", "text-dark");
      });

      button.classList.add("bg-primary", "text-white");
      button.classList.remove("border", "border-gray/30", "text-dark");
    });
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   // ===== Header =====
//   document.addEventListener("DOMContentLoaded", () => {
//   const header = document.getElementById("main-header");
//   const toggleBtn = document.getElementById("mobile-menu-toggle");
//   const mobileMenu = document.getElementById("mobile-menu");
//   const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  
//   toggleBtn?.addEventListener("click", (e) => {
//     e.stopPropagation();
//     mobileMenu?.classList.toggle("hidden");
//   });
  
//   mobileLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//       mobileMenu?.classList.add("hidden");
//     });
//   });
  
//   document.addEventListener("click", (e) => {
//     const target = e.target;

//     const clickedInsideMenu = mobileMenu?.contains(target);
//     const clickedToggle = toggleBtn?.contains(target);

//     if (!clickedInsideMenu && !clickedToggle) {
//       mobileMenu?.classList.add("hidden");
//     }
//   });
  
//   const handleScroll = () => {
//     if (!header) return;

//     if (window.scrollY > 30) {
//       header.classList.add(
//         "bg-white/95",
//         "backdrop-blur-xl",
//         "shadow-lg",
//         "border-b",
//         "border-primary/10"
//       );

//       header.classList.remove("bg-transparent");
//     } else {
//       header.classList.remove(
//         "bg-white/95",
//         "backdrop-blur-xl",
//         "shadow-lg",
//         "border-b",
//         "border-primary/10"
//       );

//       header.classList.add("bg-transparent");
//     }
//   };

//   handleScroll();
//   window.addEventListener("scroll", handleScroll);
  
//   const normalizePath = (path) => {
//     return path.replace(/\/+$/, "") || "/";
//   };

//   const currentPath = normalizePath(window.location.pathname);

//   document.querySelectorAll("a[href]").forEach((link) => {
//     const href = link.getAttribute("href");

//     if (!href || href.startsWith("http")) return;

//     const linkPath = normalizePath(href);

//     if (currentPath === linkPath) {
//       link.classList.remove("text-dark");

//       link.classList.add(
//         "text-primary",
//         "font-semibold"
//       );
//     }
//   });
// });

//   // ===== Lucide =====
//   if (typeof lucide !== "undefined") {
//     lucide.createIcons();
//   }

//   // ===== Shortlist Swiper =====
//   if (
//     typeof Swiper !== "undefined" &&
//     document.querySelector(".shortlistSwiper")
//   ) {
//    new Swiper(".shortlistSwiper", {
//       spaceBetween: 10,
//       pagination: {el: ".shortlistSwiper .swiper-pagination", clickable: true,},
//       breakpoints: {
//         0: {slidesPerView: 2.2,},
//         576: {slidesPerView: 2.5,},
//         768: {slidesPerView: 3,},
//         1024: {slidesPerView: 3,},
//         1600: {slidesPerView: 4,},
//       },
//     });
//   }

//   // ===== Report Swiper =====
//   if (
//     typeof Swiper !== "undefined" &&
//     document.querySelector(".reportSwiper")
//   ) {
//     new Swiper(".reportSwiper", {
//       slidesPerView: 1,
//       spaceBetween: 15,
//       navigation: {
//         nextEl: ".report-next",
//         prevEl: ".report-prev",
//       },
//       pagination: {
//         el: ".reportSwiper .swiper-pagination",
//         clickable: true,
//       },
//     });
//   }

//   // ===== Pricing Switcher =====
//   const plans = {
//     nano: {
//       followers: "Under 50K followers",
//       price: "₹1,999",
//       delivery: "Per creator report · Delivered within 24 hours",
//     },
//     micro: {
//       followers: "50K - 250K followers",
//       price: "₹4,999",
//       delivery: "Per creator report · Delivered within 48 hours",
//     },
//     mid: {
//       followers: "250K - 1M followers",
//       price: "₹9,999",
//       delivery: "Detailed audit · Delivered within 72 hours",
//     },
//     macro: {
//       followers: "1M+ followers",
//       price: "Custom Pricing",
//       delivery: "Enterprise-grade creator intelligence",
//     },
//   };

//   const buttons = document.querySelectorAll(".plan-btn");

//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const plan = plans[button.dataset.plan];
//       if (!plan) return;

//       document.getElementById("followersText").textContent =
//         plan.followers;
//       document.getElementById("priceText").textContent =
//         plan.price;
//       document.getElementById("deliveryText").textContent =
//         plan.delivery;

//       buttons.forEach((btn) => {
//         btn.classList.remove("bg-primary", "text-white");
//         btn.classList.add("border", "border-gray/30", "text-dark");
//       });

//       button.classList.add("bg-primary", "text-white");
//       button.classList.remove(
//         "border",
//         "border-gray/30",
//         "text-dark"
//       );
//     });
//   });
// });