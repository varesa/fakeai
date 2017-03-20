setInterval(function() {
    $.get("/get", function (data) {
        console.log(data);

        obj = JSON.parse(data);

        if(obj.loading) {
            $("#loading").show();
            $("#text").hide();
        } else {
            $("#text").text(obj.text);

            $("#loading").hide();
            $("#text").show();
        }
    })
}, 1000);