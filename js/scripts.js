$(function() {
    $("#photoButton").click(function() {
        console.log("button clicked");
        $("#listModal").modal("toggle")
    })

    $("#avilabilityButton").click(function() {
        $("#reserveModal").modal("toggle")
    });
});