gsap.fromTo(
  "#loading",
  { opacity: 1 },
  { opacity: 0, duration: 1.5, delay: 3.5 }
);

// hidden loading-div after 6 sec 
const myTimeout = setTimeout(loading, 6000);

function loading() {
  document.getElementById("loading").style.display = "none";
}
