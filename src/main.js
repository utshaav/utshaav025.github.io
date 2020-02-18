const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "Utsav",
  "a learner",
  "python developer",
  "niave web developer"
];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
  new TypeIt("#type", {
    strings: [
      "utshaav",
      "utshaav_",
      "uk_025",
      "utshaav",
      "utshaav025",
      "utshaav_025"
    ],
    startDelay: 200,
    breakLines: false,
    loop: true,
    nextStringDelay: 5000,
    loopDelay: 5000
  }).go();

  (function() {
    var rotator = document.getElementById("Images"); //get the element
    var anchor = document.getElementById("links");
    var delayInSeconds = 6; //delay in seconds
    var num = 1; //start number
    var len = 6; //limit
    var lin = [
      "https://www.facebook.com/utshaav",
      "https://www.instagram.com/utshaav_/",
      "https://twitter.com/uk_025",
      "https://www.linkedin.com/in/utshaav",
      "https://github.com/utshaav025",
      "#",
    ];
    setInterval(function() {
      //interval changer
      num = num === len ? 0 : num; //reset if limit reached
      rotator.src = "images/" + num + ".png"; //change picture
      anchor.setAttribute('href', lin[num]);
      // console.log(rotator.href);
      num++; //increment counter
    }, delayInSeconds * 1000);
  })();
});
