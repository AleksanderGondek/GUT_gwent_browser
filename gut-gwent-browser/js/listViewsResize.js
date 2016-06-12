(function () {
    window.addEventListener("resize", function () {
        var listviewdiv = document.getElementById("listView");
        var h = window.innerHeight;

        listviewdiv.setAttribute("style", "height:" + h.toString() + "px");
    });

    WinJS.Utilities.ready(function() {
        var listviewdiv = document.getElementById("listView");
        var h = window.innerHeight;

        listviewdiv.setAttribute("style", "height:" + h.toString() + "px");
    }, true).done();

    window.addEventListener("resize", function () {
        var listviewdiv = document.getElementById("listView2");
        var h = window.innerHeight;

        listviewdiv.setAttribute("style", "height:" + h.toString() + "px");
    });

    WinJS.Utilities.ready(function () {
        var listviewdiv = document.getElementById("listView2");
        var h = window.innerHeight;

        listviewdiv.setAttribute("style", "height:" + h.toString() + "px");
    }, true).done();
})();