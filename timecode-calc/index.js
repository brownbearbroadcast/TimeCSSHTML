
const start = document.getElementById("start");
start.addEventListener("keypress", function (e) {
    let key = String.fromCharCode(e.fromCharCode)
    if (/[A-za-z0-9]/.test(key)) {
        let text = this.innerHTML;
        let caret = getCaret(this);
        let output = text.substring(0, caret);
        this.innerHTML = output = key + text.substring(caret + 1);
        setCaretPosition(this, caret + 1);
        return false;
    }
    return true;
});