const hasSeenIntro = sessionStorage.getItem("seenIntro");
if (!hasSeenIntro) {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
  tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
  tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
  tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
  tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
  sessionStorage.setItem("seenIntro", "true");
} else {
  document.querySelector(".slider").style.transform = "translateY(-100%)";
  document.querySelector(".intro").style.transform = "translateY(-100%)";
  document.querySelector("nav").style.opacity = "1";
  document.querySelector(".big-text").style.opacity = "1";
}
