ColorFocused = false;
RedTag = [document.getElementById("RedTag"), document.getElementById("RedMinus"), document.getElementById("RedPlus")];
GreenTag = [document.getElementById("GreenTag"), document.getElementById("GreenMinus"), document.getElementById("GreenPlus")];
BlueTag = [document.getElementById("BlueTag"), document.getElementById("BlueMinus"), document.getElementById("BluePlus")];
LastFocused = RedTag;

window.addEventListener("keydown", MyKeyDown);

function MyKeyDown(e) {
    KeyPressed = e.keyCode;
    switch (KeyPressed) {
        case 32:
            if (ColorFocused == false) {
                ColorFocused = true;
                LastFocused[0].setAttribute("class", "Focused");
            } else {
                ColorFocused = false;
                LastFocused[0].removeAttribute("class", "Focused");
            }
            break;
        case 38:
            if (ColorFocused == true) {
                if (LastFocused == GreenTag) {
                    LastFocused = RedTag;
                    GreenTag[0].removeAttribute("class", "Focused");
                    RedTag[0].setAttribute("class", "Focused");
                } else if (LastFocused == BlueTag) {
                    LastFocused = GreenTag;
                    BlueTag[0].removeAttribute("class", "Focused");
                    GreenTag[0].setAttribute("class", "Focused");
                }
            }
            break;
        case 40:
            if (ColorFocused == true) {
                if (LastFocused == RedTag) {
                    LastFocused = GreenTag;
                    RedTag[0].removeAttribute("class", "Focused");
                    GreenTag[0].setAttribute("class", "Focused");
                } else if (LastFocused == GreenTag) {
                    LastFocused = BlueTag;
                    GreenTag[0].removeAttribute("class", "Focused");
                    BlueTag[0].setAttribute("class", "Focused");
                }
            }
            break;
        case 37:
            if (ColorFocused == true && LastFocused[1].disabled == false) {
                switch (LastFocused) {
                    case RedTag:
                        Value("Decrease", "Red");
                        break;
                    case GreenTag:
                        Value("Decrease", "Green");
                        break;
                    case BlueTag:
                        Value("Decrease", "Blue");
                        break;
                }
            }
            break;
        case 39:
            if (ColorFocused == true && LastFocused[2].disabled == false) {
                switch (LastFocused) {
                    case RedTag:
                        Value("Increase", "Red");
                        break;
                    case GreenTag:
                        Value("Increase", "Green");
                        break;
                    case BlueTag:
                        Value("Increase", "Blue");
                        break;
                }
            }
            break;
    }
}