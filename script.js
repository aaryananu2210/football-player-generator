let title = document.querySelector("#title");
let button = document.querySelector("#btn");
let club = document.querySelector("#club");
let position = document.querySelector("#position");
let rating = document.querySelector("#rating");
let image = document.querySelector("#playerimg");

// Default image
image.src = "footbalimags/default.jpg";

let players = [

    {
        name: "Messi",
        club: "Inter Miami",
        position: "RW",
        rating: 93,
        image: "footbalimags/messi.jpg"
    },

    {
        name: "Ronaldo",
        club: "Al Nassr",
        position: "ST",
        rating: 92,
        image: "footbalimags/ronaldo.jpg"
    },

    {
        name: "Mbappe",
        club: "Real Madrid",
        position: "ST",
        rating: 92,
        image: "footbalimags/mbappe.jpg"
    },

    {
        name: "Haaland",
        club: "Manchester City",
        position: "ST",
        rating: 91,
        image: "footbalimags/haaland.jpg"
    },

    {
        name: "Bruno Fernandes",
        club: "Manchester United",
        position: "CAM",
        rating: 88,
        image: "footbalimags/bruno.jpg"
    },

    {
        name: "Lamine Yamal",
        club: "Barcelona",
        position: "RW",
        rating: 88,
        image: "footbalimags/yamal.jpg"
    },

    {
        name: "Jude Bellingham",
        club: "Real Madrid",
        position: "CM",
        rating: 90,
        image: "footbalimags/bellingham.jpg"
    },

    {
        name: "Vinicius Jr",
        club: "Real Madrid",
        position: "LW",
        rating: 90,
        image: "footbalimags/vini.jpg"
    },

    {
        name: "Pedri",
        club: "Barcelona",
        position: "CM",
        rating: 87,
        image: "footbalimags/pedri.jpg"
    },

    {
        name: "Kevin De Bruyne",
        club: "Manchester City",
        position: "CM",
        rating: 91,
        image: "footbalimags/debruyne.jpg"
    }

];

let lastIndex = -1;

button.addEventListener("click", function () {

    let randomIndex;

    do {
        randomIndex =
        Math.floor(Math.random() * players.length);

    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    let player = players[randomIndex];

    title.innerText = player.name;
    club.innerText = "CLUB: " + player.club;
    position.innerText = "POSITION: " + player.position;
    rating.innerText = "RATING: " + player.rating;
    image.src = player.image;

});

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        title.innerText = "Pick a Player";
        club.innerText = "";
        position.innerText = "";
        rating.innerText = "";

        image.src =
        "footbalimags/default.jpg";
    }

});