$(document).ready(function () {
    $("#click").click(spocitej);
})

function spocitej() {
    var cislo = $("#cislo").val();
    while (cislo >= 10) {
        cislo = Math.floor(cislo/10) + (cislo%10)
    }
    $("#vypis").text(cislo);
}
