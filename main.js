const passwordString = "abcd%+-/!,$'efghijklmnopqrstuvwxyzßABCDEF%+-/!,$'GHIJKLMNOPQRSTUVWXYZ1234567890%+-/!,$'";
let newPass = '';
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const copy = document.getElementById("copy");

function generatePassword() {
    let length = Number(document.getElementById("length").value);
    if (length == 0) {
        length = 10;
    }
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * passwordString.length);
        newPass += passwordString[index];
    }
}

function showPassword() {
    input.value = newPass;
}

async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      if (input.value == ""){
        return;
      } else {
        document.getElementById("copyText").innerHTML = "<p>Copied to Clipboard</p>"
        setTimeout(() => {
            document.getElementById("copyText").innerHTML = "";
        }, 3000);
      }
    } catch (error) {
      console.error(error.message);
    }
}

copy.addEventListener("click", () => {
    copyToClipboard(input.value);
})

btn.addEventListener("click", () => {
    newPass = '';
    generatePassword();
    showPassword();
})

generatePassword();
console.log(newPass);