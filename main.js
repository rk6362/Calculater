let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonValue = e.target.innerHTML;

        if (buttonValue == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                string = "Error";
                input.value = string;
            }
        }
        else if (buttonValue == 'AC') {
            string = "";
            input.value = string;
        }
        else if (buttonValue == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += buttonValue;
            input.value = string;
        }
    });
});