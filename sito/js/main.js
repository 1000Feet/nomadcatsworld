// Nomad Cats World — the only script on the page.

// 1. Store buttons: PLACEHOLDER until the app is published. Put the real links here.
const STORE_LINKS = {
  apple: "",   // e.g. "https://apps.apple.com/app/id0000000000"
  google: ""   // e.g. "https://play.google.com/store/apps/details?id=com.nomadcatsworld.app"
};

document.querySelectorAll(".store").forEach((button) => {
  const link = STORE_LINKS[button.dataset.store];
  if (link) {
    button.href = link;
    button.removeAttribute("aria-disabled");
    const small = button.querySelector("small");
    if (small) small.textContent = button.dataset.store === "apple" ? "Download on the" : "Get it on";
  } else {
    // Not published yet: the button scrolls to the waiting list instead.
    button.addEventListener("click", (event) => {
      event.preventDefault();
      document.getElementById("get").scrollIntoView();
      document.getElementById("email").focus({ preventScroll: true });
    });
  }
});

// 2. Waiting list: sent to Netlify Forms. Without JavaScript the form still posts normally.
const form = document.querySelector(".notify");
if (form) {
  const status = form.querySelector(".notify-status");
  const button = form.querySelector("button");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    button.disabled = true;
    status.textContent = "Sending…";
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString()
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      status.textContent = "Thank you. We will write once, on the day it opens.";
    } catch (error) {
      status.textContent = "Sorry, that did not go through. Please try again in a moment.";
    } finally {
      button.disabled = false;
    }
  });
}

// 3. Hero video: never starts on its own. The big play button starts it from the beginning,
//    with sound (a tap is what browsers require before they allow sound). Once it is running,
//    two small buttons below pause/resume it and mute/unmute it. When it ends, or is paused,
//    the big play button comes back.
const video = document.querySelector(".hero-video video");
if (video) {
  const startButton = document.querySelector(".video-start");
  const controls = document.querySelector(".video-controls");
  const playButton = document.querySelector(".video-play");
  const soundButton = document.querySelector(".video-sound");
  const update = () => {
    startButton.hidden = !video.paused;
    playButton.textContent = video.paused ? "Play" : "Pause";
    soundButton.textContent = video.muted ? "Unmute" : "Mute";
  };
  const play = () => {
    if (video.ended) video.currentTime = 0;
    video.muted = false;
    video.play().catch(() => {});
    controls.hidden = false;
  };
  startButton.addEventListener("click", play);
  video.addEventListener("click", () => { if (!video.paused) video.pause(); });
  playButton.addEventListener("click", () => { if (video.paused) play(); else video.pause(); });
  soundButton.addEventListener("click", () => { video.muted = !video.muted; });
  video.addEventListener("ended", () => { video.currentTime = 0; controls.hidden = true; update(); });
  ["play", "pause", "volumechange"].forEach((name) => video.addEventListener(name, update));
  update();
}
