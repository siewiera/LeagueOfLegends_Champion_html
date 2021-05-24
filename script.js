var zabojca = "Zabójca";
var wojownik = "Wojownicy";
var mag = "Magowie";
var strzelec = "Strzelcy";
var wspierajacy = "Wspierający";
var obronca = "Obrońcy";


function Contains(classArray, value) {
    for (var i = 0; i < classArray.length; i++)
        if (classArray[i] === value) return true;
    return false;
}