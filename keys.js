RedFocus = true;
GreenFocus = false;
BlueFocus = false;
document.getElementById("RedTag").setAttribute("class", "Focused");

window.addEventListener("keydown", MyKeyDown);

function MyKeyDown(e) {
    KeyPressed = e.keyCode;
    switch (KeyPressed) {
        case 38:
            if (GreenFocus == true) {
                RedFocus = true;
                GreenFocus = false;
                BlueFocus = false;
                document.getElementById("RedTag").setAttribute("class", "Focused");
                document.getElementById("GreenTag").removeAttribute("class", "Focused");
                document.getElementById("BlueTag").removeAttribute("class", "Focused");
            } else if (BlueFocus == true) {
                RedFocus = false;
                GreenFocus = true;
                BlueFocus = false;
                document.getElementById("RedTag").removeAttribute("class", "Focused");
                document.getElementById("GreenTag").setAttribute("class", "Focused");
                document.getElementById("BlueTag").removeAttribute("class", "Focused");
            }
            break;
        case 40:
            if (RedFocus == true) {
                RedFocus = false;
                GreenFocus = true;
                BlueFocus = false;
                document.getElementById("RedTag").removeAttribute("class", "Focused");
                document.getElementById("GreenTag").setAttribute("class", "Focused");
                document.getElementById("BlueTag").removeAttribute("class", "Focused");
            } else if (GreenFocus == true) {
                RedFocus = false;
                GreenFocus = false;
                BlueFocus = true;
                document.getElementById("RedTag").removeAttribute("class", "Focused");
                document.getElementById("GreenTag").removeAttribute("class", "Focused");
                document.getElementById("BlueTag").setAttribute("class", "Focused");
            }
            break;
        case 39:
            if (RedFocus == true && document.getElementById("RedPlus").disabled == false) {
                Value("Increase", "Red");
            } else if (GreenFocus == true && document.getElementById("GreenPlus").disabled == false) {
                Value("Increase", "Green");
            } else if (BlueFocus == true && document.getElementById("BluePlus").disabled == false) {
                Value("Increase", "Blue");
            }
            break;
        case 37:
            if (RedFocus == true && document.getElementById("RedMinus").disabled == false) {
                Value("Decrease", "Red");
            } else if (GreenFocus == true && document.getElementById("GreenMinus").disabled == false) {
                Value("Decrease", "Green");
            } else if (BlueFocus == true && document.getElementById("BlueMinus").disabled == false) {
                Value("Decrease", "Blue");
            }
            break;
    }
}