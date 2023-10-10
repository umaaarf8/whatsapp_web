function openProfileNav() {
    document.getElementById("profilePopUp").style.width = "447.71px";
}

function closeProfileNav() {
    document.getElementById("profilePopUp").style.width = "0";
}

function openCommunityNav() {
    document.getElementById("communitiesPopUp").style.width = "447.71px";
}

function closeCommunityNav() {
    document.getElementById("communitiesPopUp").style.width = "0";
}
var threeDotsSVG = document.getElementById("threeDots");
var threeDotsPopUpBtn = document.getElementById("threeDotsPopUp");

function threeDotsPopUp() {

    if (threeDotsPopUpBtn.style.display === "none") {
        threeDotsPopUpBtn.style.display = "block";
        threeDotsSVG.style.backgroundColor = "rgba(217, 219, 223, 1)";
    }
    else {
        threeDotsPopUpBtn.style.display = "none";
        threeDotsSVG.style.backgroundColor = "transparent";

    }
}

var logoutbtn = document.getElementById("logOutPopUp") 

function logOutPopUp(){
    if(logoutbtn.style.display === 'none'){
        logoutbtn.style.display = 'block';
        threeDotsPopUpBtn.style.display = "none";
        threeDotsSVG.style.backgroundColor = "transparent";
    }
    else{
        logoutbtn.style.display = 'none';
    }
}

function logOutCloseBtn(){
    logoutbtn.style.display = 'none';
}


window.onclick = function (event) {
    if (event.target == logoutbtn) {
        logoutbtn.style.display = "none";
    }
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark_mode");
}