function toggle() {
    let buttonElm = document.getElementsByClassName('button')[0];
    let showhideTextElm = document.querySelector('#extra');
    
    if (buttonElm.textContent == "More"){
        buttonElm.textContent = "Less";
        showhideTextElm.style.display = "block";
    } else {
        buttonElm.textContent = "More";
        showhideTextElm.style.display = "none";
    }
}