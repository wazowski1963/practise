function add() {
    var result =
        Number(document.getElementById("firstno").value) +
        Number(document.getElementById("secondno").value);
    window.alert(result);
}

var reasons = [
  "Trees Provide Shade",
  "Trees help in retaining the Rainwater",
  "Trees Provide fruits",
  "Trees are natural medicines"
];

var images = [
  "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  "https://images.unsplash.com/photo-1462143338528-eca9936a4d09?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  "https://images.unsplash.com/photo-1421790500381-fc9b5996f343?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  "https://images.unsplash.com/photo-1485067801970-70573e3f77d0?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
];

var i = 0;

function nextslide() {
    document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
    document.getElementById("audio").play();

}
