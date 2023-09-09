/*
TITLE: Honors Project
AUTHOR: Noran Abdel-Aziz (NA)
CREATE DATE: 26 April 2023
PURPOSE: To demonstrate everything I've learned
LAST MODIFIED ON: 28 April 2023
LAST MODIFIED BY: Noran Abdel-Aziz (NA)
MODIFICATION HISTORY:
28 April 2023: finished lab
THEME: Genshin Impact wisher and form!
Honors requirements start on line 341!
*/
// step 4 - create and use an array
var arr5Stars = ["Albedo", "Alhaitham", "Arataki Itto", "Cyno", "Dehya", 
                "Diluc", "Eula", "Ganyu", "Hu Tao", "Jean", "Kaedehara Kazuha", 
                "Kamisato Ayaka", "Kamisato Ayato", "Keqing", "Klee", "Mona", 
                "Nahida", "Nilou", "Qiqi", "Raiden Shogun", "Sangonomiya Kokomi",
                "Shenhe", "Tartaglia", "Tighnari", "Venti", "Wanderer", "Xiao", 
                "Yae Miko", "Yelan", "Yoimiya", "Zhongli"];

var arr4Stars = ["Amber", "Barbara", "Beidou", "Bennett", "Candace", "Chongyun", 
                "Collei", "Diona", "Dori", "Faruzan", "Fischl", "Gorou", "Kaeya",
                "Kujou Sara", "Kuki Shinobu", "Layla", "Lisa", "Mika", "Ningguang",
                "Noelle", "Razor", "Rosaria", "Sayu", "Shikanoin Heizou", "Sucrose",
                "Thoma", "Xiangling", "Xingqiu", "Xinyan", "Yanfei", "Yaoyao", "Yun Jin",
                "Akuoumaru", "Alley Hunter", "Dragon's Bane", "Eye of Perception", 
                "Favonius Codex", "Favonius Greatsword", "Favonius Lance", "Favonius Sword", 
                "Favonius Warbow", "Lion's Roar", "Lithic Blade", "Lithic Spear",
                "Makhaira Aquamarine", "Mappa Mare", "Mitternachts Waltz", "Mouun's Moon", 
                "Rainslasher", "Rust", "Sacrificial Bow", "Sacrificial Fragments", 
                "Sacrificial Greatsword", "Sacrificial Sword", "The Alley Flash", 
                "The Bell", "The Flute", "The Stringless","The Widsith", "Wandering Evenstar",
                "Wavebreaker's Fin", "Wine and Song", "Xiphos' Moonlight"];

var arr3Stars = ["Black Tassel", "Bloodtainted Greatsword", "Cool Steel", "Debate Club",  
                "Emerald Orb", "Ferrous Shadow", "Harbinger of Dawn", "Magic Guide", "Raven Bow",
                "Sharpshooter's Oath", "Slingshot", "Thrilling Tales of Dragon Slayers", 
                "White Tassel"];

// step 3 - use appropriate prefixes with all variables
var arrWeapons = [];
var arrRefinements = [];
var doubleRate5 = 0.006; // 0.6%
var doubleRate4 = 0.051; // 5.1%
var intPity5 = 73 // 5* pity starts after 73 attempts
var intPity4 = 8 // 4* pity starts after 8 attempts 
var intCounter5 = 0;
var intCounter4 = 0;
var bolNot5or4 = true;

// step 16 - use a date object method
var todaysDate = new Date(); // today's date, used to find the time
var intHourNow = todaysDate.getHours(); // time right now, used to generate greeting
var strGreeting = "";
// step 5 - use if/else 
// step 6 - demonstrate the use of comparison operators
if(intHourNow >= 18){
    strGreeting = "Good evening!"; // evening is outputted
} else if(intHourNow >= 12){
    strGreeting = "Good afternoon!"; // afternoon is outputted
} else if(intHourNow >= 0){
    strGreeting = "Good morning!"; // morning is outputted
} else {
    intHourNow = "Hello there!"; // hello is outputted
} // end if/else-if/else
document.getElementsByClassName("greeting")[0].textContent = strGreeting;

var strOutput = "";
for(let i = 0; i < arr5Stars.length; i++){
    strOutput = strOutput + arr5Stars[i] + " ";
}
document.getElementById("list").innerHTML = strOutput;

function clickMe(){
    // step 15 - use a math object method
    let intRandom = Math.random();   // # between 0.0 and 1.0
    let doubleProb5 = doubleRate5 + Math.max(0, (intCounter5 - intPity5) * 10 * doubleRate5);
    let doubleProb4 = doubleRate4 + Math.max(0, (intCounter4 - intPity4) * 10 * doubleRate4);
    if(intRandom < doubleProb5){
        fiveStar()
        intCounter5 = 0;
        intCounter4++;
        document.getElementById("counter").innerHTML = "5 counter: " + intCounter5 + "<br/>4 counter: " + intCounter4;
    // step 7 - demonstrate the use of logical operators
    } else if(intRandom < doubleProb4 + doubleProb5 || intCounter4 + 1 == 10){
        fourStar();
        intCounter5++;
        intCounter4 = 0;
        document.getElementById("counter").innerHTML = "5 counter: " + intCounter5 + "<br/>4 counter: " + intCounter4;
    } else if(bolNot5or4){
        threeStar();
        intCounter5++;
        intCounter4++;
        document.getElementById("counter").innerHTML = "5 counter: ".concat(intCounter5, "<br/>4 counter: ", intCounter4);
    }
}

// function to pick a random 5 star rolled.
function fiveStar(){
    let intRandom5 = Math.floor(Math.random() * arr5Stars.length);
    document.getElementById("wishResults").innerHTML = "<h3>" + arr5Stars[intRandom5].toUpperCase() + "</h3>";
    document.getElementById("roll").addEventListener("click", function() {
        this.style.backgroundColor = "yellow";
    });
}

// function to pick a random 4 star rolled, and output necessary comments underneath.
function fourStar(){
    let intRandom4 = Math.floor(Math.random() * arr4Stars.length);
    document.getElementById("wishResults").textContent = arr4Stars[intRandom4];
    document.getElementById("roll").addEventListener("click", function() {
        this.style.backgroundColor = "purple";
    });
}

function threeStar(){
    let intRandom3 = Math.floor(Math.random() * arr3Stars.length);
    document.getElementById("wishResults").innerHTML = arr3Stars[intRandom3].toLowerCase();
    document.getElementById("roll").addEventListener("click", function() {
        this.style.backgroundColor = "blue";
    });
}
document.getElementById("roll").addEventListener("click", clickMe); // call function when btn is clicked

// step 17 - create and use an object that has properties and methods
function Weapon(name, type, baseAttack){
    // instance variables
    this.name = name; // sets instance variable name (this.name) to parameter name (name)
    this.type = type; // sets instance variable type (this.type) to parameter type (type)
    this.baseAttack = baseAttack; // sets instance variable baseAttack (this.baseAttack) to parameter baseAttack (baseAttack)

    /*
    function to add a weapon to arrWeapons if unowned
    if owned, refinement of the weapon will go up by 1
    */
    this.addWeapon = function(){
        // step 18 - use the keyword this
        if(!(arrWeapons.includes(this.name))){
            arrWeapons.push(this.name);
            arrRefinements.push(0);
        } else {
            let index = arrWeapons.findIndex(this.name);
            arrRefinements[index]++;
        }
    }; 

    // function outputting each property to a page element
    this.outputProperties = function(id, output1, output2, output3){
        let elText = document.getElementById(id);
        elText.innerHTML = output1 + this.name + "<br/>" + output2 + this.type + "<br/>" + output3 + this.baseAttack;
    }
    
    // function using Math object method
    this.incrementBaseAttack = function(){
        let intMin = 100;
        let intMax = 1000;
        // step 15 - use parseInt() to convert a string to an int
        let intParse = parseInt("13");
        this.baseAttack += parseInt(Math.floor(Math.random() * (intMax - intMin) + intMin), 10);
    }
}

var xiaoWeapon = new Weapon("Primordial Jade Winged-Spear", "Polearm", 310);
xiaoWeapon.addWeapon();
xiaoWeapon.outputProperties("objectOutput1", "Name: ", "Type: ", "Base attack: ");
xiaoWeapon.incrementBaseAttack();
xiaoWeapon.outputProperties("objectOutput2", "Name: ", "Type: ", "Base attack: ");

document.getElementById("remove").parentNode.removeChild(document.getElementById("remove"));

var element = document.getElementById("header");
element.classList.add("class");

document.getElementById("roll").addEventListener("click", function(intRandom) {
    intRandom = Math.floor(Math.random() * arr5Stars.length);
    if(document.getElementById("wishResults").innerHTML == arr5Stars[intRandom]){
        this.style.backgroundColor = "green";
    }
});

document.getElementById("bubble1").addEventListener("click", function(){
    window.alert("Xiao is an Anemo user.");
});
document.getElementById("bubble2").addEventListener("click", function(e){
    window.alert("Xiao wields this polearm.");
    e.stopPropagation();
});

document.getElementById("wishResults").addEventListener("click", function(e){
    window.alert(e.target);
});

// step 25 - use one form event to add functionality to your form
document.getElementById("form8").addEventListener("focus", function(event){
    event.target.style.background = "pink";
}, true);
document.getElementById("form8").addEventListener("blur", function(event){
    event.target.style.background = "";
}, true);

function mouseOver() {
    document.getElementById("wishResults").style.color = "green";
}
  
function mouseOut() {
    document.getElementById("wishResults").style.color = "black";
}

document.getElementById("wishResults").addEventListener("mouseover", mouseOver);
document.getElementById("wishResults").addEventListener("mouseout", mouseOut);

/*function checkBox(){
    if(!document.getElementById("check11").checked){
        document.getElementById("p11a").innerHTML = "You can't submit yet.";
    } else {
        document.getElementById("p11a").innerHTML = "You can submit!";
    }
}
function submitForm(){
    document.getElementById("p11").innerHTML = "Form submitted!";
}
document.getElementById("form8").addEventListener("change", checkBox);
document.getElementById("form8").addEventListener("submit", submitForm);*/

// step 24 - use one form method to add functionality to your form
document.getElementById("focusButton").addEventListener("click", function(){
    document.getElementById("step5").focus();
});


// jQuery code begins here
$(document).ready(function(){
    $("h3").css("color", "blue");
    $("#header").css("color", "green");
    $("div").find("p").not("#bubble2").css("font-style", "italic");
   // step 19 - use the .each() method to loop through a jQuery selection of multiple page elements.
   $("input").each(function() {
        $(this).css("background-color", "#efa2f5"); // bg of input boxes is light purple before clicking on them.
   });
   // step 14 - demonstrate jQuery chaining
   // step 13 - use a jQuery animation method
   $("#check11").hide().delay(3000).fadeIn();
   // step 11 - a jQuery method to change a page element's content
   $("h1").text("Final Project: Genshin Wisher & Form");
   $("h3").prepend("Genshin ");
   $("#header").attr("id", "updatedHeader");
   $("#step12").removeAttr("id");
   $("h3").on("mouseover", function(){
        $(this).css("color", "red");
   });
   $("h3").on("mouseout", function(){
        $(this).css("color", "blue");
   });
   $("h1").on("mousemove", function(){
        $(this).css("color", "purple");
   });
   // step 12 - use a jQuery event to produce visible results on the page when the user triggers the event
   // step 20 - use the Event object in a jQuery method or an object method
   $("p").on("click", function(e){
        if(e.target.className == "greeting"){
            $(this).css("color", "pink");
        } else if(e.target.id == "list"){
            $(this).css("color", "brown");
        }
   });  
    // step 9 - use a jQuery method to remove an element from the page
    $("#willRemove").remove();
    // step 10 - use jQuery to add a class to an existing page element
    $("#bubble2").parent().addClass("step20");

   $("#tabs").tabs();
   var arrTags = ["Albedo", "Alhaitham", "Arataki Itto", "Cyno", "Dehya", 
   "Diluc", "Eula", "Ganyu", "Hu Tao", "Jean", "Kaedehara Kazuha", 
   "Kamisato Ayaka", "Kamisato Ayato", "Keqing", "Klee", "Mona", 
   "Nahida", "Nilou", "Qiqi", "Raiden Shogun", "Sangonomiya Kokomi",
   "Shenhe", "Tartaglia", "Tighnari", "Venti", "Wanderer", "Xiao", 
   "Yae Miko", "Yelan", "Yoimiya", "Zhongli",
   "Amber", "Barbara", "Beidou", "Bennett", "Candace", "Chongyun", 
   "Collei", "Diona", "Dori", "Faruzan", "Fischl", "Gorou", "Kaeya",
   "Kujou Sara", "Kuki Shinobu", "Layla", "Lisa", "Mika", "Ningguang",
   "Noelle", "Razor", "Rosaria", "Sayu", "Shikanoin Heizou", "Sucrose",
   "Thoma", "Xiangling", "Xingqiu", "Xinyan", "Yanfei", "Yaoyao", "Yun Jin"];
   $("#step5").autocomplete({
        source: function( request, response ) {
            var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
            response( $.grep( arrTags, function( item ){
                return matcher.test( item );
            }) );
        }
    });
    // step 26 - submit button should be disabled until at least one form field is filled

    // HONORS PROJECT JQ REQUIREMENTS
    $("#sliderForm").slider({
        range: false,
        min: 1,
        max: 54,
        slide: function(event, ui){
            sliderFunction(ui.value);
        }
    });
    function sliderFunction(sliderVal){
        $("#currentVal").attr("value", sliderVal);
    }

    $("#datepicker").datepicker();

    var arrTags2 = ["Azhdaha", "Stormterror Dvalin", "Magatsu", "Childe", "Everlasting Lord",
                    "La Signora", "Warden of the Last Oasis", "Warden of Oasis Prime", "Andrius"];
   $("#boss").autocomplete({
        source: function( request, response ) {
            var matcher2 = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
            response( $.grep( arrTags2, function( item ){
                return matcher2.test( item );
            }) );
        }
    });

    $("#drag").draggable();

    $("#bouncer").click(function(){
        $("#bounce").toggle("bounce", {times: 3}, "slow");
    });

    // step 8 - use jQuery validation plugin to validate my form
    // each form field should be required + user input must pass validation before submission
    $("form[name = 'registration']").validate({
        rules:{
            emailLbl2: {
                required: true,
                email: true
            }, 
            passLbl2: {
                required: true,
                minlength: 5
            }, 
            boss: {
                required: true,
                minlength: 5
            },
            favoriteVillain: {
                required: true,
                minlength: 5
            },
            favReg: {
                required: true,
                minlength: 5
            },
            currentVal: {
                required: true,
                minlength: 5
            },
            datepicker: {
                required: true,
                minlength: 5
            }
        },
        // step 8 - display appropriate error messages
        messages: {
            emailLbl2: "Please enter a valid email address.",
            boss: "This field is required.",
            favoriteVillain: "This field is required.",
            favReg: "This field is required.",
            currentVal: "This field is required.",
            datepicker: "This field is required."
        },
        submitHandler: function(form){
            form.submit();
        }
    });
});
// step 22 - create a labelled output area for form output. form field values must display to the output area with labels on submit
var form = document.getElementById("form8");
form.addEventListener("submit", function(e){
    e.preventDefault();
    var elements = this.elements;
    var email = elements.emailLbl.value;
    document.getElementById("emailOutput").textContent = "Email: " + email;
    var password = elements.passLbl.value;
    document.getElementById("passOutput").textContent = "Password: " + password;
    var favChar = elements.step5.value;
    document.getElementById("favChar").textContent = "Favorite character: " + favChar;
    var favArchon = "";
    if(document.getElementById("Venti").checked){
        favArchon = "Venti";
    } else if(document.getElementById("Zhongli").checked){
        favArchon = "Zhongli";
    } else if(document.getElementById("Raiden").checked){
        favArchon = "Raiden";
    } else if(document.getElementById("Nahida").checked){
        favArchon = "Nahida";
    }
    document.getElementById("favArchon").textContent = "Favorite archon: " + favArchon;
    var favElements = "";
    if(document.getElementById("Anemo").checked){
        favElements += " Anemo ";
    } 
    if(document.getElementById("Geo").checked){
        favElements += " Geo ";
    } 
    if(document.getElementById("Electro").checked){
        favElements += " Electro ";
    } 
    if(document.getElementById("Dendro").checked){
        favElements += " Dendro ";
    } 
    if(document.getElementById("Hydro").checked){
        favElements += " Hydro ";
    } 
    if(document.getElementById("Cryo").checked){
        favElements += " Cryo ";
    } 
    if(document.getElementById("Pyro").checked){
        favElements += " Pyro ";
    }
    document.getElementById("favElements").textContent = "Favorite elements: " + favElements;
});

// HONORS PROJECT JS REQUIREMENTS
// step 1 - create a set of objects using constructor notation (using Weapon object from earlier as well)
function Character(strName, intRandomRate){
    // instance variables
    this.strName = strName; 
    this.intRandomRate = intRandomRate; 

    // picks random number
    // step 3 - method that returns numeric value and stores it in one of the object's properties
    this.pickNumber = function(){
        this.intRandomRate = Math.floor(Math.random() * 10);
        return this.intRandomRate;
    }; 
}

// step 2 - instantiate at least 4 objects using constructor notation
var char1 = new Character("Diluc", 0);
char1.pickNumber();
var char2 = new Character("Venti", 0);
char2.pickNumber();
var char3 = new Character("Alhaitham", 0);
char3.pickNumber();
var char4 = new Character("Baizhu", 0);
char4.pickNumber();

// step 4 - function that is external to the object that sorts objects based on numeric property
var arrObjs = [char1, char2, char3, char4];
// sort array from least to greatest (insertion sort)
for(let i = 1; i < arrObjs.length; i++){
    let currentValue = arrObjs[i];
    let j;
    for(j = i - 1; j >= 0 && arrObjs[j].intRandomRate > currentValue.intRandomRate; j--){
        arrObjs[j+1] = arrObjs[j];
    }
    arrObjs[j+1] = currentValue;
}

// step 5 - output results of the sort to the page
document.getElementById("objOutput1").textContent = arrObjs[0].strName + ": " + arrObjs[0].intRandomRate;
document.getElementById("objOutput2").textContent = arrObjs[1].strName + ": " + arrObjs[1].intRandomRate;
document.getElementById("objOutput3").textContent = arrObjs[2].strName + ": " + arrObjs[2].intRandomRate;
document.getElementById("objOutput4").textContent = arrObjs[3].strName + ": " + arrObjs[3].intRandomRate;

// prevent form submission if any fields are empty (step 7)
function empty(){
    if(document.getElementById("emailLbl2").value == ""){
        return false;
    }
    if(document.getElementById("passLbl2").value == ""){
        return false;
    }
    if(document.getElementById("boss").value == ""){
        return false;
    }
    if(document.querySelectorAll("input[name='favoriteVillain']:not(:checked)").length > 3){
        return false;
    }
    if(document.querySelectorAll("input[name='favReg']:not(:checked)").length > 6){
        return false;
    }
    if(document.getElementById("currentVal").value == ""){
        return false;
    }
    if(document.getElementById("datepicker").value == ""){
        return false;
    }
}

// step 11 - output results of form
var form2 = document.getElementById("form");
form2.addEventListener("submit", function(e){
    e.preventDefault();
    var elements2 = this.elements;
    var email2 = elements2.emailLbl2.value;
    document.getElementById("emailOutput2").textContent = "Email: " + email2;
    var password2 = elements2.passLbl2.value;
    document.getElementById("passOutput2").textContent = "Password: " + password2;
    var favBoss = elements2.boss.value;
    document.getElementById("favBoss").textContent = "Favorite character: " + favBoss;
    var favVil = "";
    if(document.getElementById("Childe").checked){
        favVil = "Childe";
    } else if(document.getElementById("Signora").checked){
        favVil = "Signora";
    } else if(document.getElementById("Scaramouche").checked){
        favVil = "Scaramouche";
    } else if(document.getElementById("twin").checked){
        favVil = "twin";
    }
    document.getElementById("favVil").textContent = "Favorite archon: " + favVil;
    var favRegions = "";
    if(document.getElementById("Mondstadt").checked){
        favRegions += " Mondstadt ";
    } 
    if(document.getElementById("Liyue").checked){
        favRegions += " Liyue ";
    } 
    if(document.getElementById("Inazuma").checked){
        favRegions += " Inazuma ";
    } 
    if(document.getElementById("Sumeru").checked){
        favRegions += " Sumeru ";
    } 
    if(document.getElementById("Fontaine").checked){
        favRegions += " Fontaine ";
    } 
    if(document.getElementById("Snezhnaya").checked){
        favRegions += " Snezhnaya ";
    } 
    if(document.getElementById("Natlan").checked){
        favRegions += " Natlan ";
    }
    document.getElementById("favRegions").textContent = "Favorite elements: " + favRegions;
    var numChars = elements2.currentVal.value;
    document.getElementById("numChars").textContent = "# characters owned: " + numChars;
    var dateJoined = elements2.datepicker.value;
    document.getElementById("dateJoined").textContent = "Date joined: " + dateJoined;
});