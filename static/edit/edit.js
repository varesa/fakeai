function setText() {
    $.post(
        "/post",
        JSON.stringify({
            loading: false,
            text: $("#inputtext").val()
        }),
        function () {
            console.log("ok");
        }
    );
}

function setLoading() {
    $.post(
        "/post",
        JSON.stringify({
            loading: true,
            text: $("#inputtext").val()
        }),
        function () {
            console.log("ok");
        }
    );
}

function setup() {
    $("#btnloading").click(setLoading);
    $("#btntext").click(setText);
}

$(document).ready(setup);