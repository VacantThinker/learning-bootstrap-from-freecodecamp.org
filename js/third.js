
$(document).ready(function () {
    // $("button").addClass("animate__animated animate__bounce");
    // $(".well").addClass("animate__animated animate__shakeX");
    // $("#target3").addClass("animate__animated animate__fadeOut");

    // $("button").addClass("animate__animated")
    // $(".btn").addClass("animate__shakeX")
    // $("#target1").addClass("btn-primary")

    $("button").removeClass("btn-default")
    $("#target1").css("color", "red")
    $("#target1").prop("disabled", true)
    $("#target4").html("<em>#target4</em>")
    $("#target4").remove()
    $("#target2").appendTo("#right-well")
    $("#target5").clone().appendTo("#left-well")
    $("#target1").parent().css("background-color","red")
    $("#right-well").children().css("color","orange")
    $(".target:nth-child(2)").addClass("animate__animated animate__bounce")

    $(".target:even").addClass("animate__animated animate__shakeX")

    $("body").addClass("animate__animated animate__hinge")
});
