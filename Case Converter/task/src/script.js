// JavaScript script
const buttonToUpper = document.getElementById("upper-case");
const buttonToLower = document.getElementById("lower-case");
const buttonToProper = document.getElementById("proper-case");
const buttonToSentence = document.getElementById("sentence-case");
const buttonToSave = document.getElementById("save-text-file");
let textData;
function getTextData() {
    textData = document.getElementById("text-area").value;
    return textData;
}
function convertTextUpper() {
    getTextData();
    document.getElementById("text-area").value = textData.toUpperCase();
}
function convertToLower(){
    getTextData();
    document.getElementById("text-area").value = textData.toLowerCase();
}
function convertToProper() {
    getTextData();
    document.getElementById("text-area").value = textData.toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
function convertToSentence() {
    getTextData();
    const textArea = document.getElementById("text-area");
    let string = textData.toLowerCase().trim();
    if (string.length > 0) {
        string = string.charAt(0).toUpperCase() + string.slice(1);
    }
    string = string.replace(/([.!?]+)\s*(\p{L})/gu, (match, punctuation, letter) => {
        return punctuation + " " + letter.toUpperCase();
    });
    textArea.value = string;
}

function saveToFile() {
    getTextData();
    let blob = new Blob([textData], {type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "text.txt";
    link.click();

}

buttonToUpper.addEventListener("click", convertTextUpper);
buttonToLower.addEventListener("click", convertToLower);
buttonToProper.addEventListener("click", convertToProper);
buttonToSentence.addEventListener("click", convertToSentence);
buttonToSave.addEventListener("click", saveToFile);
