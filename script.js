$(document).ready(function () {
    $("#dm").on("click", function() {
        if ($(this).prop("checked")) {
            $("header, footer, body").addClass("dark-mode");
            $("#dm_label").html("&#x2601;");
        } else {
            $("header, footer, body").removeClass("dark-mode");
            $("#dm_label").html("&#x2600;");
        }
    });

    const currentTime = new Date().getHours();
    if (currentTime >= 6 && currentTime < 18) {
        $("body").addClass("daytime");
    } else {
        $("body").addClass("nighttime");
    }

    $("#mybutton").hover(
        function () {
            $(this).text("Hover Over Me");
        },
        function () {
            $(this).text("Click Me");
        }
    );

    $("#mybutton").on("click", function() {
        alert("Button clicked!");
    });
});
