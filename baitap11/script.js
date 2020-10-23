document.writeln('Tất cả các bài trả về trong Element');

//Bài 1: chuyển đổi từ độ F sang độ C & ngược lại
function changeCtoF(a){
    return (a * 1.8)+ 32; 
}
//yêu cầu người dùng nhập độ C
var a = parseInt(prompt('Nhập độ C'));
//hàm làm tròn độ F khi chuyển đổi từ độ C
var F = Math.round(changeCtoF(a));
document.writeln(`Độ F chuyển đổi từ ${a} độ C là: ${F} <br />`);

function changeFtoC(b){
    return (b-32)*5/9;
}
var b = parseInt(prompt('Nhập độ F'));
var C = Math.round(changeFtoC(b));
document.writeln(`Độ C chuyển đổi từ ${b} độ F là: ${C} <br>`);

//Bài 2: Tính thế kỷ của 1 năm
function Century(c){
    return c/100 + 1;
}
var c = prompt('Nhập năm bạn muốn');
var Cen = Math.floor(Century(c));
document.writeln(`năm ${c} thuộc thế kỷ: ${Cen} <br>`);

/**
 * Bài 3: cắt chuỗi dài hơn 15 ký tự thành chuỗi 10 ký tự
 * thêm dấu ... để biết là chuỗi bị cắt
 */

 //yêu cầu người dùng nhập chuỗi dài hơn 15 ký tự
var Chuoi = prompt('nhập chuỗi dài hơn 15 ký tự');
//cắt từ chuỗi lấy 10 ký tự, từ ký tự 0 đến 9
var subChuoi = Chuoi.substr(0,9);
// viết chuỗi ra màn hình
document.writeln(` Chuỗi cắt 10 ký tự từ ${Chuoi} là:  ${subChuoi} ... <br>`)

//Bài 4
var s = prompt('Nhập 1 chuỗi bất kỳ');
var str = s.toLowerCase();
function capitalizeFirstLetter(strs) {
    return strs = str.charAt(0).toUpperCase() + str.slice(1);
}
var strings = capitalizeFirstLetter('strs');
document.writeln(` Hàm trả về chỉ viết hoa chữ cái đầu của ${s} là: ${strings}`)