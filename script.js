$(document).ready(function () {
    function updateDO2() {
        const co = $("#co-slider").slider("value") / 1000;
        const hb = $("#hb-slider").slider("value");
        const sao2 = $("#sao2-slider").slider("value") / 100;
        const kg = 75;
        const do2 = co * (hb * 1.34 * sao2) * 10;
        $("#do2-val").text(do2.toFixed(2));

        // Update the DO2 bar height
        const maxHeight = 984.90; // Set the max DO2 value you want to consider for 100% height
        const do2BarHeightPercentage = Math.min((do2 / maxHeight) * 100, 100);
        $("#do2-bar").css("height", do2BarHeightPercentage + "%");

        // Change the color of the progress bar to red if do2 <= 398
        if (do2 <= 398) {
            $("#do2-bar").addClass("progress-bar-red");
        } else {
            $("#do2-bar").removeClass("progress-bar-red");
        }        
    }

    $("#co-slider").slider({
        orientation: "vertical",
        min: 0,
        max: 35000,
        value: 5000,
        slide: function (event, ui) {
            $("#co-val").text(ui.value);
            updateDO2();
        },
    });

    $("#hb-slider").slider({
        orientation: "vertical",
        min: 7,
        max: 20,
        value: 15,
        slide: function (event, ui) {
            $("#hb-val").text(ui.value);
            updateDO2();
        },
    });

    $("#sao2-slider").slider({
        orientation: "vertical",
        min: 0,
        max: 100,
        value: 98,
        slide: function (event, ui) {
            $("#sao2-val").text(ui.value);
            updateDO2();
        },
    });

    updateDO2();
});

