window.onload = function () {
    var c = document.getElementById("board");
    var ca = c.getElementsByTagName("div");
    let circleTurns;
    let insideHTML;
    const x_class = "X";
    const circle_class= "O";
    
    var t;
    for ( t = 0; t < ca.length; t++) {
       var eachDiv = ca[t];
        eachDiv.setAttribute("class","square");
    

    eachDiv.addEventListener("click",whenClicked,{once:true});
    }
    function whenClicked(e) {
        const eachDiv = e.target
        const activeClass = circleTurns ? x_class : circle_class
        placeMark(eachDiv,activeClass)
        swapTurns()
        console.log("div got clicked!!")
    }

    function placeMark(eachDiv,activeClass) {
        
        eachDiv.classList.add(activeClass)
        if (eachDiv.className == "square O") {
            eachDiv.innerHTML = "O"
        } else {
            eachDiv.innerHTML = "X"
        }
        
    
    }

    function swapTurns() {
        circleTurns = !circleTurns
        
    }

}