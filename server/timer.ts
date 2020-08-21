export default function serverTimer() {
  const timerPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    // TODO: SET THIS BACK TO 180
    // }, 180*1000)
    }, 3*1000)
  })
  return timerPromise
}
