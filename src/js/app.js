const screen = document.querySelector('.screen__content')
const allbtn = document.querySelectorAll(".keypad__button")

/**
 * 
 * @param {*} value the button value
 */
const executeBtn = (value) => {
  switch(value) {
    case 'reset' :
      screen.textContent = ""
      break;
    case 'del':
      if(screen.textContent) {
        screen.textContent = screen.textContent.slice(0,-1)
      }
      break;
    case '=':
      try {
        screen.textContent = eval(screen.textContent)
      } catch {
        screen.textContent = "Error !"
      }      
      break;
    default:
      screen.textContent += value
  }
}

// Adding event listener for all btn
allbtn.forEach(btn => {
  btn.addEventListener("click", () => {
    executeBtn(btn.value)
    getError = false
  })
})
