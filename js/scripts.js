$(function() {
    $("#photoButton").click(function() {
        console.log("button clicked");
    })

    $("#reserveButton").click(function() {
        $("#reserveModal").modal("toggle")
    });
});