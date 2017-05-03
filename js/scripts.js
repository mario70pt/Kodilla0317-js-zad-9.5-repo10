var menu1ButtClass = document.getElementsByClassName('button');
console.log(menu1ButtClass);
if (menu1ButtClass) {
    for (var i = 0; i < menu1ButtClass.length; i++) {
        console.log(menu1ButtClass[i].innerText);
    }
}