$(document).ready(function () {
    function updateDO2() {
        const co = $("#co-slider").slider("value") / 1000;
        const hb = $("#hb-slider").slider("value");
        const sao2 = $("#sao2-slider").slider("value") / 100;
        const kg = 75;
        const do2 = co * (hb * 1.34 * sao2) * 10;
        $("#do2-val").text(do2.toFixed(2));
        //$("#do2-slider").value(do2.toFixed(2));
    }

    $("#do2-slider").slider({
        orientation: "vertical",
        min: 0,
        max: 35000,
        value: 5000,
        slide: function (event, ui) {
            //$("#do2-slider").text(ui.value);
            //updateDO2();
        },
    });    

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
        orientation: "vertical",
        slide: function (event, ui) {
            $("#sao2-val").text(ui.value);
            updateDO2();
        },
    });

    $("#pao2-slider").slider({
        orientation: "vertical",
        min: 40,
        max: 150,
        value: 100,
        slide: function (event, ui) {
            $("#pao2-val").text(ui.value);
            updateDO2();
        },
    });

    updateDO2();
});

