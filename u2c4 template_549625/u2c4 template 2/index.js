// write js code here corresponding to index.html
// You should add submit event on the form
var matchData = JSON.parse(localStorage.getItem("schedule")) || [];

var form = document.querySelector("#masaiForm");

form.addEventListener("submit", addData);
function addData() {
    event.preventDefault();

    var data = {
        number: form.matchNum.value,
        teamA: form.teamA.value,
        teamB: form.teamB.value,
        date: form.date.value,
        venue: form.venue.value
    }

    matchData.push(data);

    localStorage.setItem("schedule", JSON.stringify(matchData));
}