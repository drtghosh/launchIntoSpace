let rocketElement = document.getElementsByClassName("rocket")[0];
let controlPanelInner = document.getElementsByClassName('control-panel__inner')[0];
let password = document.getElementsByClassName("control-panel__inner")[0].children[0];
let okButton = document.getElementsByClassName("passOk")[0];
let checkBoxes = document.getElementsByClassName("check-buttons")[0].children;
let levers = document.getElementsByClassName("vertical");
let launch = document.getElementsByClassName("launch")[0];

launch.disabled = true;

function ableButtons(bool) {
    password.disabled = !bool;
    okButton.disabled = !bool;
    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].disabled = bool;
    }
    for (let i =0; i < levers.length; i++) {
        levers[i].disabled = bool;
    }
}

ableButtons(true);

function ableLaunch() {
    let allClear = true;
    let checkCount = 0;
    let leverChanged = 0;
    for (let i = 0; i < checkBoxes.length; i++) {
        allClear = allClear && checkBoxes[i].checked;
        checkCount += checkBoxes[i].checked;
    }
    for (let i =0; i < levers.length; i++) {
        allClear = allClear && (levers[i].value == 100);
        leverChanged += levers[i].value == 100;
    }

    launch.disabled = !allClear;
    console.log(`${6-checkCount} checkboxes unchecked and ${5-leverChanged} levers not set to maximum.`);
}

okButton.addEventListener("click", function () {
    if (password.value === 'TrustNo1') {
        console.log("correct password");
        ableButtons(false);
    } else {
        console.log("incorrect, trust me");
    }
})

//controlPanelInner.addEventListener("change", ableLaunch);
controlPanelInner.onchange = ableLaunch;

for (let i = 0; i < checkBoxes.length; i++) {
    //checkBoxes[i].addEventListener("change", ableLaunch);
    checkBoxes[i].onchange = ableLaunch;
}

for (let i = 0; i < levers.length; i++) {
    //levers[i].addEventListener("change", ableLaunch);
    levers[i].onchange = ableLaunch;
}

launch.addEventListener("click", function (){
    console.log("3,2,1... takeoff");
    rocketElement.classList.add('rocket-launched');
})