$( document ).ready(function() {
    $("button.view-rgb").click(function() {
        $("td:contains('#')").each(function() {
            var hextext = $(this).text();
            var hexclean = hextext.replace("#", "");
            var colorRed = parseInt(hexclean.substr(0,2),16);
            var colorGreen = parseInt(hexclean.substr(2,2),16);
            var colorBlue = parseInt(hexclean.substr(4,2),16);
            var RGB = "rgb("+colorRed+", "+colorGreen+", "+colorBlue+")"
            $(this).html(hextext.replace(hextext, hextext+"<br>"+RGB));
        });
        $("button.view-rgb").hide();
        $("button.view-hex").show();
    });
    $("button.view-hex").click(function() {
        location.reload();
    });
});
