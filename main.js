ColorDiv = document.getElementById("Color");

Red = document.getElementById("Red");
RedValue = parseInt(Red.innerHTML);
RedHex = "00";
Green = document.getElementById("Green");
GreenValue = parseInt(Green.innerHTML);
GreenHex = "00";
Blue = document.getElementById("Blue");
BlueValue = parseInt(Blue.innerHTML);
BlueHex = "00";

HexTag = document.getElementById("Hex");

function Value(Action, Color, Amount) {
    if (Action == "Increase") {
        switch (Color) {
            case "Red":
                if (Amount == 15 && RedValue >= 240) {
                    RedValue = 255;
                } else {
                    RedValue += Amount;
                }
                Red.innerHTML = RedValue;
                RedHex = RedValue.toString(16);
                RedHex = RedHex.length == 1 ? "0" + RedHex : RedHex;
                Hex = "#" + RedHex + GreenHex + BlueHex;
                HexTag.innerHTML = Hex;
                ColorDiv.style.backgroundColor = Hex;
                if (RedValue > 0) {
                    document.getElementById("RedMinus").disabled = false;
                } else {
                    document.getElementById("RedMinus").disabled = true;
                }
                if (RedValue < 255) {
                    document.getElementById("RedPlus").disabled = false;
                } else if (RedValue == 255) {
                    document.getElementById("RedPlus").disabled = true;
                }
                break;
            case "Green":
                if (Amount == 15 && GreenValue >= 240) {
                    GreenValue = 255;
                } else {
                    GreenValue += Amount;
                }
                Green.innerHTML = GreenValue;
                GreenHex = GreenValue.toString(16);
                GreenHex = GreenHex.length == 1 ? "0" + GreenHex : GreenHex;
                Hex = "#" + RedHex + GreenHex + BlueHex;
                HexTag.innerHTML = Hex;
                ColorDiv.style.backgroundColor = Hex;
                if (GreenValue > 0) {
                    document.getElementById("GreenMinus").disabled = false;
                } else {
                    document.getElementById("GreenMinus").disabled = true;
                }
                if (GreenValue < 255) {
                    document.getElementById("GreenPlus").disabled = false;
                } else if (GreenValue == 255) {
                    document.getElementById("GreenPlus").disabled = true;
                }
                break;
            case "Blue":
                if (Amount == 15 && BlueValue >= 240) {
                    BlueValue = 255;
                } else {
                    BlueValue += Amount;
                }
                Blue.innerHTML = BlueValue;
                BlueHex = BlueValue.toString(16);
                BlueHex = BlueHex.length == 1 ? "0" + BlueHex : BlueHex;
                Hex = "#" + RedHex + GreenHex + BlueHex;
                HexTag.innerHTML = Hex;
                ColorDiv.style.backgroundColor = Hex;
                if (BlueValue > 0) {
                    document.getElementById("BlueMinus").disabled = false;
                } else {
                    document.getElementById("BlueMinus").disabled = true;
                }
                if (BlueValue < 255) {
                    document.getElementById("BluePlus").disabled = false;
                } else if (BlueValue == 255) {
                    document.getElementById("BluePlus").disabled = true;
                }
                break;
        }
    } else if (Action == "Decrease") {
        switch (Color) {
            case "Red":
                if (Amount == 15 && RedValue <= 15) {
                    RedValue = 0;
                } else {
                    RedValue -= Amount;
                }
                Red.innerHTML = RedValue;
                RedHex = RedValue.toString(16);
                RedHex = RedHex.length == 1 ? "0" + RedHex : RedHex;
                Hex = "#" + RedHex + GreenHex + BlueHex;
                HexTag.innerHTML = Hex;
                ColorDiv.style.backgroundColor = Hex;
                if (RedValue > 0) {
                    document.getElementById("RedMinus").disabled = false;
                } else {
                    document.getElementById("RedMinus").disabled = true;
                }
                if (RedValue < 255) {
                    document.getElementById("RedPlus").disabled = false;
                } else if (RedValue == 255) {
                    document.getElementById("RedPlus").disabled = true;
                }
                break;
            case "Green":
                if (Amount == 15 && GreenValue <= 15) {
                    GreenValue = 0;
                } else {
                    GreenValue -= Amount;
                }
                Green.innerHTML = GreenValue;
                GreenHex = GreenValue.toString(16);
                GreenHex = GreenHex.length == 1 ? "0" + GreenHex : GreenHex;
                Hex = "#" + RedHex + GreenHex + BlueHex;
                HexTag.innerHTML = Hex;
                ColorDiv.style.backgroundColor = Hex;
                if (GreenValue > 0) {
                    document.getElementById("GreenMinus").disabled = false;
                } else {
                    document.getElementById("GreenMinus").disabled = true;
                }
                if (GreenValue < 255) {
                    document.getElementById("GreenPlus").disabled = false;
                } else if (GreenValue == 255) {
                    document.getElementById("GreenPlus").disabled = true;
                }
                break;
            case "Blue":
                if (Amount == 15 && BlueValue <= 15) {
                    BlueValue = 0;
                } else {
                    BlueValue -= Amount;
                }
                Blue.innerHTML = BlueValue;
                BlueHex = BlueValue.toString(16);
                BlueHex = BlueHex.length == 1 ? "0" + BlueHex : BlueHex;
                Hex = "#" + RedHex + GreenHex + BlueHex;
                HexTag.innerHTML = Hex;
                ColorDiv.style.backgroundColor = Hex;
                if (BlueValue > 0) {
                    document.getElementById("BlueMinus").disabled = false;
                } else {
                    document.getElementById("BlueMinus").disabled = true;
                }
                if (BlueValue < 255) {
                    document.getElementById("BluePlus").disabled = false;
                } else if (BlueValue == 255) {
                    document.getElementById("BluePlus").disabled = true;
                }
                break;
        }
    }
}