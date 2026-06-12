document.addEventListener("DOMContentLoaded", () => {
  // ===== Header =====
  const header = document.getElementById("main-header");
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  toggleBtn?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("hidden");
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu?.classList.add("hidden");
    });
  });

  document.addEventListener("click", (e) => {
    const insideMenu = mobileMenu?.contains(e.target);
    const clickedToggle = toggleBtn?.contains(e.target);

    if (!insideMenu && !clickedToggle) {
      mobileMenu?.classList.add("hidden");
    }
  });

  const handleScroll = () => {
    if (!header) return;

    if (window.scrollY > 30) {
      header.classList.add(
        "bg-white/95",
        "backdrop-blur-xl",
        "shadow-lg",
        "border-b",
        "border-primary/10"
      );
      header.classList.remove("bg-transparent");
    } else {
      header.classList.remove(
        "bg-white/95",
        "backdrop-blur-xl",
        "shadow-lg",
        "border-b",
        "border-primary/10"
      );
      header.classList.add("bg-transparent");
    }
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);

  // ===== Active Page =====
// ===== Active Page =====
const currentPage =
  window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("a[href]").forEach((link) => {
  const href = link.getAttribute("href");

  if (!href || href.startsWith("http")) return;

  const isActive =
    href === currentPage ||
    (currentPage === "" && href === "index.html") ||
    (window.location.pathname === "/" && href === "index.html");

  if (isActive) {
    // Desktop Nav
    if (link.closest("#navbar")) {
      link.classList.remove("text-dark");
      link.classList.add("text-primary", "font-semibold");
    }

    // Mobile Nav
    if (link.classList.contains("mobile-nav-item")) {
      link.classList.remove(
        "border-primary/10",
        "bg-primary/5"
      );

      link.classList.add(
        "border-primary",
        "bg-primary/15",
        "ring-2",
        "ring-primary/20"
      );

      const icon = link.querySelector("i");
      if (icon) {
        icon.classList.remove("text-primary");
        icon.classList.add("text-primary");
      }
    }
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
      pagination: {el: ".shortlistSwiper .swiper-pagination", clickable: true,},
      breakpoints: {
        0: {slidesPerView: 2.2,},
        576: {slidesPerView: 2.5,},
        768: {slidesPerView: 3,},
        1024: {slidesPerView: 3,},
        1600: {slidesPerView: 4,},
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

  const buttons = document.querySelectorAll(".plan-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const plan = plans[button.dataset.plan];
      if (!plan) return;

      document.getElementById("followersText").textContent =
        plan.followers;
      document.getElementById("priceText").textContent =
        plan.price;
      document.getElementById("deliveryText").textContent =
        plan.delivery;

      buttons.forEach((btn) => {
        btn.classList.remove("bg-primary", "text-white");
        btn.classList.add("border", "border-gray/30", "text-dark");
      });

      button.classList.add("bg-primary", "text-white");
      button.classList.remove(
        "border",
        "border-gray/30",
        "text-dark"
      );
    });
  });
});