// write js code here corresponding to matches.html
var data = JSON.parse(localStorage.getItem("schedule")) || [];

var favData = JSON.parse(localStorage.getItem("favourites")) || [];

function display(data) {
    data.forEach(function (elem) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = elem.number;

        var td2 = document.createElement("td");
        td2.innerText = elem.teamA;

        var td3 = document.createElement("td");
        td3.innerText = elem.teamB;

        var td4 = document.createElement("td");
        td4.innerText = elem.date;

        var td5 = document.createElement("td");
        td5.innerText = elem.venue;

        var td6 = document.createElement("td");
        td6.innerText = "Favourites";
        td6.style.color = "green";
        td6.style.cursor = "pointer";
        td6.addEventListener("click", function () {
            addFavourites(elem);
        });

        tr.append(td1, td2, td3, td4, td5, td6);

        document.querySelector("tbody").append(tr);
    });

}
function addFavourites(elem) {
    var count = 0;
    favData.forEach(function (obj) {
        if (obj == elem) {
            count++;
        }
    });
    if (count == 0) {
        favData.push(elem);
        localStorage.setItem("favourites", JSON.stringify(favData));
    }
}

document.querySelector("#filterVenue").addEventListener("change", function () {
    filteredVenue(data);
});

function filteredVenue(data) {
    var selected = document.querySelector("#filterVenue").value;
    var filterData = [];
    data.filter(function (elem) {
        if (selected == elem.venue) {
            filterData.push(elem);
        }
    });
    document.querySelector("tbody").innerHTML = "";
    display(filterData);

}

display(data);