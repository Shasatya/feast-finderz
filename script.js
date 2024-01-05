//loading Animation

gsap.registerPlugin(ScrollTrigger);

gsap.from(".logo", {
  opacity: 0,
  delay: 0.5,
  x: -20,
  ease: "power1.in",
});

gsap.from(".action-btn", {
  opacity: 0,
  delay: 0.5,
  x: 20,
  ease: "power1.in",
});

gsap.from(".links li a", {
  opacity: 0,
  delay: 0.5,
});

gsap.to(".links li a", {
  opacity: 1,
  delay: 0.5,
  stagger: {
    each: 0.2,
    from: "edges",
    ease: "power1.in",
  },
});

gsap.from(".welcome-hero-section-content", {
  opacity: 0,
  delay: 0.5,
  y: 100,
  ease: "power1.in",
});

// gsap.from(".card", {
//   scrollTrigger: {
//     trigger: ".filter-buttons",
//     start: "top center",
//     toggleActions: "restart",
//     scrub: 1, 
//   },
//   opacity:0.5,
//   duration: 3,
// });

//Popular Items Filter
let filterButtons = document.querySelectorAll(".filter-buttons button");
let filterableItems = document.querySelectorAll(
  ".filterable-items .popular-item-card-container .card"
);

let filterCards = (e) => {
  let oldActiveButton = document.querySelector(".active-filter-btn");
  let newActiveButton = e.target;
  oldActiveButton.classList.remove("active-filter-btn");
  newActiveButton.classList.add("active-filter-btn");

  filterableItems.forEach((item) => {
    item.classList.add("hide");
    if (item.dataset.name === e.target.dataset.name) {
      item.classList.remove("hide");
    }
  });
};

filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
);

//More Button
let moreBtn = document.getElementById("more-btn");
moreBtn.addEventListener("click", openLink);

function openLink() {
  window.open("/pages/explore.html", (target = "_parent"));
}

//Visit us
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
