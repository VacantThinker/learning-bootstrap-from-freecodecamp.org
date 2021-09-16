document.querySelectorAll('button').forEach(ele => {
    ele.classList.add("animate__animated", "animate__bounce")
})
document.querySelectorAll(".well").forEach(ele => {
    ele.classList.add("animate__animated", "animate__shakeX")
})
document.getElementById("target3")
    .classList.add("animate__animated", "animate__fadeOut")

