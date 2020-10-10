window.onload = function () {
    var c = document.getElementById("board");
    var ca = c.getElementsByTagName("div");

    var t;
    for ( t = 0; t < ca.length; t++) {

        ca[t].setAttribute("class","square");
    }

    ca.addEventListener("click",whenClicked,{once:true});

    function whenClicked(e) {
        
    }

}