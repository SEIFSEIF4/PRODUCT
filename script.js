function playVid() {
  let video = document.getElementById("video");

  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

document.getElementById("fullyear").innerHTML = new Date().getFullYear();

(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
