const themeRange = document.querySelector(".header__range-input");
const html = document.querySelector("html");
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// sync the theme with the user preferences
window.onload = () => {
  if(isDarkMode) {
    html.className = ''
    html.classList.add("theme-dark")
  } else {
    html.className = ''
    html.classList.add("theme-light")
  }
}

// Change the theme
themeRange.addEventListener("change", () => {
  if(themeRange.value === '1') {
    html.className = ''
    html.classList.add("theme-dark")
  } else if (themeRange.value === '2') {
    html.className = ''
    html.classList.add("theme-light")
  } else if (themeRange.value === '3') {
    html.className = ''
    html.classList.add("theme-chroma")
  }
});
