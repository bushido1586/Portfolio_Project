$(function() {
    $("#photoButton").click(function() {
        console.log("button clicked");
        $("#listModal").modal("toggle");
    });

    $("#avilabilityButton").click(function() {
        console.log("button clicked");
        $("#reserveModal").modal("toggle");
    });
    $("#carouselButton").click(function() {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});