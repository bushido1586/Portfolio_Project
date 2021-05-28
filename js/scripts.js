$(function() {
    $("#photoButton").click(function() {
        console.log("button clicked");
        $("#listModal").modal("toggle");
    });

    $("#avilabilityButton").click(function() {
        console.log("button clicked");
        $("#reserveModal").modal("toggle");
    });
});