window.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded")
})
document.querySelectorAll('button').forEach(ele => {
    ele.classList.add("animate__animated", "animate__bounce")
})


// $(document).ready(function () {
//
//     $("button").addClass("animate__animated animate__bounce");
//     $(".well").addClass("animate__animated animate__shakeX");
//     $("#target3").addClass();
//
// });
