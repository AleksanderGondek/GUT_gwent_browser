﻿(function () {
    "use strict";

    var dataArray = [
    { title: "Basic banana", text: "Low-fat frozen yogurt", picture: "images/60banana.png" },
    { title: "Banana blast", text: "Ice cream", picture: "images/60banana.png" },
    { title: "Brilliant banana", text: "Frozen custard", picture: "images/60banana.png" },
    { title: "Orange surprise", text: "Sherbet", picture: "images/60banana.png" },
    { title: "Original orange", text: "Sherbet", picture: "images/60banana.png" },
    { title: "Vanilla", text: "Ice cream", picture: "images/60banana.png" },
    { title: "Very vanilla", text: "Frozen custard", picture: "images/60banana.png" },
    { title: "Marvelous mint", text: "Gelato", picture: "images/60banana.png" },
    { title: "Succulent strawberry", text: "Sorbet", picture: "images/60banana.png" }
    ];

    var itemList = new WinJS.Binding.List(dataArray);

    // Create a namespace to make the data publicly
    // accessible. 
    var publicMembers =
        {
            itemList: itemList
        };
    WinJS.Namespace.define("DataExample", publicMembers);
})();