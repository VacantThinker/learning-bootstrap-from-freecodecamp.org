// document.querySelectorAll('button').forEach(ele => {
//     ele.classList.add("animate__animated", "animate__bounce")
// })
// document.querySelectorAll(".well").forEach(ele => {
//     ele.classList.add("animate__animated", "animate__shakeX")
// })
// document.getElementById("target3")
//     .classList.add("animate__animated", "animate__fadeOut")
document.querySelectorAll("button").forEach(el => {
    el.classList.remove("btn-default")
})
document.getElementById("target1")
    .style.color = "red"
document.getElementById("target1")
    .setAttribute("disabled", "true")
document.getElementById("target4")
    .innerHTML = "<em>#target4</em>"
document.getElementById("target4")
    .remove()
let target2 = document.getElementById("target2")
target2.remove()
document.getElementById("right-well")
    .appendChild(target2)

let target5 = document.getElementById("target5")
document.getElementById("left-well")
    .appendChild(target5.cloneNode(true))

document.getElementById("target1")
    .parentElement
    .style
    .backgroundColor = "red"

document.getElementById("right-well")
    .childNodes
    .forEach(ele => {
        ele.parentElement.style.color = "orange"
    })

document.querySelectorAll(".target:nth-child(2)")
    .forEach(ele=>{
        ele.classList.add("animate__animated", "animate_bounce")
    })

document.querySelectorAll(".target:nth-child(2n)")
    .forEach(ele=>{
        ele.classList.add("animate__animated", "animate__shakeX")
    })

document.querySelectorAll("body")[0]
    .classList.add("animate__animated", "animate__hinge")
