window.onload = function () {
    var c = document.getElementById("board");
    var ca = c.getElementsByTagName("div");
    let circleTurns;
    const x_class = "X";
    const circle_class= "O";
    let div;
    const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
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
       checkWinner()
        
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

    // eachDiv.addEventListener("mouseenter",() => eachDiv.classList.add("hover"))
    // eachDiv.addEventListener("mouseleave", () => eachDiv.classList.remove("hover"))


    function checkWinner() {
       
        let announceWinner = document.getElementById("status");
        // horizontal win
       if (ca[0].className == "square X" && ca[1].className == "square X" && ca[2].className == "square X") {
           announceWinner.classList.add("you-won")
           announceWinner.innerHTML = "Congratulations! X is the Winner!";
       }

       if (ca[0].className == "square O" && ca[1].className == "square O" && ca[2].className == "square O") {
        announceWinner.classList.add("you-won")
        announceWinner.innerHTML = "Congratulations! O is the Winner!";
    }
    // second row
    if (ca[3].className == "square X" && ca[4].className == "square X" && ca[5].className == "square X") {
        announceWinner.classList.add("you-won")
        announceWinner.innerHTML = "Congratulations! X is the Winner!";
    }

    if (ca[3].className == "square O" && ca[4].className == "square O" && ca[5].className == "square O") {
        announceWinner.classList.add("you-won")
        announceWinner.innerHTML = "Congratulations! O is the Winner!";
 }
 // third row
 if (ca[6].className == "square X" && ca[7].className == "square X" && ca[8].className == "square X") {
    announceWinner.classList.add("you-won")
    announceWinner.innerHTML = "Congratulations! X is the Winner!";
}

if (ca[6].className == "square O" && ca[7].className == "square O" && ca[8].className == "square O") {
    announceWinner.classList.add("you-won")
    announceWinner.innerHTML = "Congratulations! O is the Winner!";
}

// VERTICAL WIN

// first column
if (ca[0].className == "square X" && ca[3].className == "square X" && ca[6].className == "square X") {
    announceWinner.classList.add("you-won")
    announceWinner.innerHTML = "Congratulations! X is the Winner!";
}

if (ca[0].className == "square O" && ca[3].className == "square O" && ca[6].className == "square O") {
    announceWinner.classList.add("you-won")
    announceWinner.innerHTML = "Congratulations! O is the Winner!";
}

// second column
if (ca[1].className == "square X" && ca[4].className == "square X" && ca[7].className == "square X") {
    announceWinner.classList.add("you-won")
    announceWinner.innerHTML = "Congratulations! X is the Winner!";
}

if (ca[1].className == "square O" && ca[4].className == "square O" && ca[7].className == "square O") {
    announceWinner.classList.add("you-won")
    announceWinner.innerHTML = "Congratulations! O is the Winner!";
}

// third column
if (ca[2].className == "square X" && ca[5].className == "square X" && ca[8].className == "square X") {
    announceWinner.classList.add("you-won")
    announceWinner.innerHTML = "Congratulations! X is the Winner!";
}

if (ca[2].className == "square O" && ca[5].className == "square O" && ca[8].className == "square O") {
    announceWinner.classList.add("you-won")
    announceWinner.innerHTML = "Congratulations! O is the Winner!";
}

// DIAGONAL WIN
// first win
if (ca[0].className == "square X" && ca[4].className == "square X" && ca[8].className == "square X") {
    announceWinner.classList.add("you-won")
    announceWinner.innerHTML = "Congratulations! X is the Winner!";
}

if (ca[0].className == "square O" && ca[4].className == "square O" && ca[8].className == "square O") {
    announceWinner.classList.add("you-won")
    announceWinner.innerHTML = "Congratulations! O is the Winner!";
}

// second win
if (ca[2].className == "square X" && ca[4].className == "square X" && ca[6].className == "square X") {
    announceWinner.classList.add("you-won")
    announceWinner.innerHTML = "Congratulations! X is the Winner!";
}

if (ca[2].className == "square O" && ca[4].className == "square O" && ca[6].className == "square O") {
    announceWinner.classList.add("you-won")
    announceWinner.innerHTML = "Congratulations! O is the Winner!";
}



    







    }

}