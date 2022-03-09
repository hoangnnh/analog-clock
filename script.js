setInterval(setClock, 1000)

const hourHand = document.querySelector('.hand.hand-hour')
const minuteHand = document.querySelector('.hand.hand-minute')
const secondHand = document.querySelector('.hand.hand-second')

function setClock() {
  const currentTime = new Date()

  const secondRatio = currentTime.getSeconds() / 60
  const minuteRatio = (currentTime.getMinutes() + secondRatio) / 60
  const hourRatio = (currentTime.getHours() + minuteRatio) / 12

  setRotation(secondHand, secondRatio)
  setRotation(minuteHand, minuteRatio)
  setRotation(hourHand, hourRatio)
}

function setRotation(hand, rotationRatio) {
  const degree = rotationRatio * 360
  hand.style.setProperty('--rotation', degree)
}

setClock()