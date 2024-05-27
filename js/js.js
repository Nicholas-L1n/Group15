// item section

img1= $('<img>', {
    src: "./img/baigeshorts.jpeg"
});


img2= $('<img>', {
    src: "./img/blacklongsleeve.jpeg"
});

img3= $('<img>', {
    src: "./img/blackpants.jpeg"
});


img4= $('<img>', {
    src: "./img/bluetshirt.jpeg"
});

img5= $('<img>', {
    src: "./img/greentshirt.jpeg"
});



img6= $('<img>', {
    src: "./img/blackshorts.jpeg"
});


img7= $('<img>', {
    src: "./img/baigepants.jpg"
});



img8= $('<img>', {
    src: "./img/bluelongsleeve.jpeg"
});

var itemsArray = [img1, img2, img3, img4, img5, img6, img7, img8]

var summerLower = [img1,img6];

var winterLower = [img3,img7];

var summerUpper = [img4,img5];

var winterUpper = [img2,img8];





















// outfit generator section

for (var i=0; i<summerLower.length; i++) {
    summerLower[i].addClass("pants");
}

for (var i=0; i<winterLower.length; i++) {
    winterLower[i].addClass("pants");
}

for (var i=0; i<summerUpper.length; i++) {
    summerUpper[i].addClass("shirt");
}

for (var i=0; i<winterUpper.length; i++) {
    winterUpper[i].addClass("shirt");
}



var arraySelector = ""

var season = "summer"

// SHIRT CAROUSEL FUNCTION
function changeToSummer() {
    season = "summer"
    console.log("it's summer");
}

function changeToWinter() {
    season = "winter"
    console.log("it's winter")
}

// generates new shirt based off season selected
function itemGenShirts() {
    if (season=="summer") {
        arraySelector= summerUpper
    } else if (season=="winter") {
        arraySelector= winterUpper
    }

    $('.shirt').remove();
    shirt = randomItemGen(arraySelector)
    $('#generateShirts').after(shirt);
}

// generates new pants based off season
function itemGenPants() {
    if (season=="summer") {
        arraySelector= summerLower
    } else if (season=="winter") {
        arraySelector= winterLower
    }

    $('.pants').remove();
    pants = randomItemGen(arraySelector)
    $('#generatePants').after(pants);
}

// random number generator out of a range
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomItemGen(arraySelector) {
    return arraySelector[getRandomInt(arraySelector.length)]
}





























// closet section
var outfit = {};

var closetArray = [];

// function saveOutfit () {
//     top = shirt;
//     bottoms = pants
//     outfit = {};
//     outfit['top'] = top;
//     outfit['bottoms'] = bottoms;

//     console.log("saving outfit to closet")

//     $('#closetClose').before(shirt);
//     // console.log("closet contains: " + closetArray)
// }














































// functions that hide and unhide sections
function toggleSection() {
    $(this).parent().toggleClass("fullscreen");
    $(this).toggleClass("hide");
}

function toggleGenerator() {
    console.log("opening generator section");

    $(".generatorUI").toggleClass("hide");
    $('#generateShirts').after(img4);
    $('#generatePants').after(img1);
}

function toggleCloset() {
    console.log("opening closet section");

    $(".closetUI").toggleClass("hide");
}

function toggleItems() {
    console.log("opening items section");

    $(".itemsUI").toggleClass("hide");
    $('#itemsClose').before(itemsArray);

}

function generatorClose() {
    $(".generatorUI").toggleClass("hide");
    $(".generatorUI").parent().toggleClass("fullscreen");
    $("#generatorHeader").toggleClass("hide");
}

function closetClose() {
    $(".closetUI").toggleClass("hide");
    $(".closetUI").parent().toggleClass("fullscreen");
    $("#closetHeader").toggleClass("hide");
    
}

function itemsClose() {
    $(".itemsUI").toggleClass("hide");
    $(".itemsUI").parent().toggleClass("fullscreen");
    $("#itemsHeader").toggleClass("hide");
}

// event listeners
$("#summer-button").click(changeToSummer);

$("#winter-button").click(changeToWinter);

$("#generateShirts").click(itemGenShirts);

$("#generatePants").click(itemGenPants);


// generates completely new outfit
$("#generateOutfit").click(function() {
    itemGenShirts();
    itemGenPants();
});

// saves outfit
$("#saveOutfit").click(saveOutfit);

// toggles section
$(".button").click(toggleSection);
$("#generatorClose").click(generatorClose);
$("#itemsClose").click(itemsClose);
$("#closetClose").click(closetClose);


// toggles section specifically
$("#generatorHeader").click(toggleGenerator);

$("#itemsHeader").click(toggleItems);

$("#closetHeader").click(toggleCloset);