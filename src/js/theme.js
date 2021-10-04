const themeRange = document.querySelector(".header__range-input");
const html = document.querySelector("html");
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const lsTheme = localStorage.getItem("theme")
const lsThemeID = localStorage.getItem("theme-id")

// sync the theme with the user preferences
window.onload = () => {
  if(lsTheme) {
    changeTheme(lsTheme, lsThemeID)
  } else if(isDarkMode) {
    changeTheme("theme-dark",1)
  } else {
    changeTheme("theme-dark",2)
  }
}

const changeTheme = (theme, value) => {
  html.className = ''
  html.classList.add(theme)
  themeRange.value = value
  localStorage.setItem("theme", theme)
  localStorage.setItem("theme-id", value)
}

// Change the theme
themeRange.addEventListener("change", () => {
  if(themeRange.value === '1') {
    changeTheme("theme-dark", 1)
  } else if (themeRange.value === '2') {
    changeTheme("theme-light", 2)
  } else if (themeRange.value === '3') {
    changeTheme("theme-chroma", 3)
  } else {
    changeTheme("theme-dark", 1)
  }
})