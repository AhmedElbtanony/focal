function active(par){
    let li1 = document.getElementById('1');
    let li2 = document.getElementById('2');
    let li3 = document.getElementById('3');
    let li4 = document.getElementById('4');
    let li5 = document.getElementById('5');
    let li6 = document.getElementById('6');
    let li7 = document.getElementById('7');
    li1.className = ("")
    li2.className = ("")
    li3.className = ("")
    li4.className = ("")
    li5.className = ("")
    li6.className = ("")
    li7.className = ("")
    if (par == 1) {
        li1.className = ("active")
    } else if (par == 2) {
        li2.className = ("active")
    } else if (par == 3) {
        li3.className = ("active")
    } else if (par == 4) {
        li4.className = ("active")
    } else if (par == 5) {
        li5.className = ("active")
    } else if (par == 6) {
        li6.className = ("active")
    } else if (par == 7) {
        li7.className = ("active")
    }
}