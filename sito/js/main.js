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

// 3. Hero video: starts on its own with the sound on, unless the visitor prefers reduced motion.
//    Safari and Chrome refuse to play sound before the visitor has touched the page. In that case
//    the video starts muted and the sound comes on at the first tap, click or key press anywhere.
//    (A touch only counts when the finger is lifted, and not after a scroll: that is the browsers'
//    rule, so we listen to pointerup/touchend/click, not pointerdown.)
const video = document.querySelector(".hero-video video");
if (video) {
  const playButton = document.querySelector(".video-play");
  const soundButton = document.querySelector(".video-sound");
  let soundChosen = false; // true once the visitor has used the sound button
  const update = () => {
    const playing = !video.paused;
    playButton.textContent = playing ? "Pause" : "Play";
    playButton.setAttribute("aria-pressed", String(playing));
    soundButton.textContent = video.muted ? "Tap for sound" : "Mute";
    soundButton.setAttribute("aria-pressed", String(video.muted));
  };

  // Turn the sound on and keep playing; if the browser still refuses, go back to muted playback.
  const playWithSound = () => {
    video.muted = false;
    return video.play().catch(() => {
      video.muted = true;
      return video.play().catch(() => {});
    });
  };

  const gestureEvents = ["pointerup", "touchend", "click", "keydown"];
  const onFirstGesture = (event) => {
    if (soundChosen) return stopListening();
    if (event.target.closest && event.target.closest(".video-controls")) return; // the buttons decide
    if (video.paused) return;
    playWithSound().then(() => { if (!video.muted) stopListening(); });
  };
  const stopListening = () =>
    gestureEvents.forEach((name) => document.removeEventListener(name, onFirstGesture, true));
  const startListening = () =>
    gestureEvents.forEach((name) => document.addEventListener(name, onFirstGesture, true));

  playButton.addEventListener("click", () => {
    if (video.paused) playWithSound(); else video.pause();
  });
  soundButton.addEventListener("click", () => {
    soundChosen = true;
    stopListening();
    if (video.muted) playWithSound(); else video.muted = true;
  });
  ["play", "pause", "volumechange"].forEach((name) => video.addEventListener(name, update));

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    playWithSound().then(() => { if (video.muted) startListening(); });
  } else {
    video.muted = false; // when the visitor presses Play, it plays with sound
  }
  update();
}
