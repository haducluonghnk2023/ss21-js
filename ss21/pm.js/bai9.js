function sortNumbers() {
    var a = parseFloat(prompt("Nhập a: "));
    var b = parseFloat(prompt("Nhập b: "));
    var c = parseFloat(prompt("Nhập c: "));
    if (a > b) { [a, b] = [b, a]; }
    if (b > c) { [b, c] = [c, b]; }
    if (a > b) { [a, b] = [b, a]; }
    console.log("Số sau khi sắp xếp tăng dần là:", a, b, c);
}