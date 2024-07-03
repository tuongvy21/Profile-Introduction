const texts = ["Tường Vy"];
const dynamicText = document.getElementById('dynamic-text');
let textIndex = 0;
let charIndex = 0;

const type = () => {
  if (charIndex < texts[textIndex].length) {
    dynamicText.textContent += texts[textIndex][charIndex];
    charIndex++;
    setTimeout(type, 200);
  } else {
    setTimeout(erase, 2000);
  }
}

const erase = () => {
  if (dynamicText.textContent.length > 0) {
    dynamicText.textContent = dynamicText.textContent.slice(0, -1);
    setTimeout(erase, 100);
  } else {
    charIndex = 0;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, 200);
  }
}

type();