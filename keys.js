ColorFocused = false;
RedTag = [document.getElementById("RedTag"), document.getElementById("RedMinus"), document.getElementById("RedPlus")];
GreenTag = [document.getElementById("GreenTag"), document.getElementById("GreenMinus"), document.getElementById("GreenPlus")];
BlueTag = [document.getElementById("BlueTag"), document.getElementById("BlueMinus"), document.getElementById("BluePlus")];
LastFocused = RedTag;
HexInputTag = document.getElementById("HexInput")

window.addEventListener("keydown", KeyDown1);
window.addEventListener("keydown", KeyDown2);

function KeyDown1(e) {
    KeyPressed = e.keyCode;
    switch (KeyPressed) {
        case 192:
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
                        Value("Decrease", "Red", 1);
                        break;
                    case GreenTag:
                        Value("Decrease", "Green", 1);
                        break;
                    case BlueTag:
                        Value("Decrease", "Blue", 1);
                        break;
                }
            }
            break;
        case 39:
            if (ColorFocused == true && LastFocused[2].disabled == false) {
                switch (LastFocused) {
                    case RedTag:
                        Value("Increase", "Red", 1);
                        break;
                    case GreenTag:
                        Value("Increase", "Green", 1);
                        break;
                    case BlueTag:
                        Value("Increase", "Blue", 1);
                        break;
                }
            }
            break;
    }
}

function KeyDown2(e) {
    KeyPressed = e.keyCode;
    if (e.shiftKey == true) {
        switch (KeyPressed) {
            case 37:
                if (ColorFocused == true && LastFocused[1].disabled == false) {
                    switch (LastFocused) {
                        case RedTag:
                            Value("Decrease", "Red", 15);
                            break;
                        case GreenTag:
                            Value("Decrease", "Green", 15);
                            break;
                        case BlueTag:
                            Value("Decrease", "Blue", 15);
                            break;
                    }
                }
                break;
            case 39:
                if (ColorFocused == true && LastFocused[2].disabled == false) {
                    switch (LastFocused) {
                        case RedTag:
                            Value("Increase", "Red", 15);
                            break;
                        case GreenTag:
                            Value("Increase", "Green", 15);
                            break;
                        case BlueTag:
                            Value("Increase", "Blue", 15);
                            break;
                    }
                }
        }
    }
}