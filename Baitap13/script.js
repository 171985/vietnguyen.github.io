//Bài 1:  Viết hàm ktra 2 số, trả về số lớn hơn
function maxTwoNumber(a,b){
    if(typeof(a) == "number" || typeof(b) == "number"){
        if (a>b) {
            return "Số lớn hơn giữa " + a + "và " + b + " là: " + a ;
        }
        else{
            return "Số lớn hơn giữa " + a + "và " + b + " là: " + b;
        }
    }
    else{
        return "Yêu cầu nhập số";
    }
}

//Bài 2: Viết hàm tính n! (giai thừa) với n là số nguyên dương.
function fact(x) {
    if (typeof(x) != 'number') {
        return "phải nhập vào số";
    }
    if(x == 0) {
        return 1;
    }
    if(x < 0 ) {
        return undefined;
    }
    for(var i = x; --i; ) {
        x *= i;
    }
    return "Giai thừa là: " + x;
}

//Bai 3 3. Viết hàm lấy ra một mảng các số chẵn từ mảng ban đầu và trả về mảng đã được sắp xếp giảm dần.
function arEvenIncrest(Array1) {
    let mangs, arr1;
    for( let item of Array1){
        mangs = Array1.filter((number)=> (number%2==0));
        arr1 = mangs.sort(function(a,b){return a-b});
    }
    return arr1;
}

/* Bài 4 Viết hàm lấy ra ngày tháng năm hiện tại, xác định đang là mùa nào trong năm. Biết rằng:

Mùa xuân từ tháng 1 đến tháng 3

Mùa hè từ tháng 4 đến tháng 6

Mùa thu từ tháng 7 đến tháng 9

Mùa đông từ tháng 10 đến tháng 12
*/
function checkFullYear() {
    var ketqua = "";
    var today = new Date;
    var k = today.getDate();
    var m = today.getMonth()+1;
    var l = today.getFullYear();
    switch (m) {
        case 1:
        case 2:
        case 3:
              ketqua = "Mùa xuân";
              break;
        case 4:
        case 5:
        case 6:
              ketqua = "Mùa hạ";
              break;
        case 7:
        case 8:
        case 9:
              ketqua = "Mùa thu";
              break;
        case 10:
        case 11:
        case 12:
              ketqua = "Mùa đông";
              break;
    };
    return "Ngày " + k + " Tháng " + m +" Năm " + l + " là " + ketqua  ;
}

//Bài 6. Viết hàm đảo ngược một chuỗi từ một chuỗi cho trước.
function reverseString(str) {
    var newstr = "";
    for (let i = str.length; i >= 0; i--) {
        newstr += str[i]; 
        return newstr;
    }
}

//Bài 7. Cho một số nguyên dương N, viết hàm kiểm tra N có phải là số nguyên tố.
function kiem_tra_snt(n)
{
    // Biến cờ hiệu
    let y = true;
    //kiểm tra dữ liệu nhập vào nếu không phải số hiện thông báo
    if (typeof(n) != 'number') {
        return "Đây không phải số";
    }
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2){
        y = false;
    }
    else if (n == 2){
        y = true;
    }
    else if (n % 2 == 0){
        y = false;
    }
    else{
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i < n-1; i+=2)
        {
            if (n % i == 0){
                y = false;
                break;
            }
        }
    }
 
    // Kiểm tra biến flag
    if (y == true){
        return n + " là số nguyên tố "
    }
    else{
        return n + " không phải là số nguyên tố ";
    }
}

// Bài 8. Cho một số nguyên dương N, viết hàm in ra màn hình những số hoàn hảo nhỏ hơn N
function soHoanHao(n) {
    for(var i = 1;i<n;i++)
        {
            var tong=0;
            for(var j=1; j<i;j++)
            {
                if(i%j==0) {
                    tong+=j;
                }
            }
            if(i==tong)
            {
               console.log('số hoàn hảo bé hơn' + n + ' là ' + tong );
            }
        } 
}

//Bài 9 Viết chương trình vẽ một hình chữ nhật bằng các dấu * với chiều rộng và chiều cao cho trước(chiều rộng, chiều cao lớn hơn 1)

function printStarsRectangle(x,y) {
    if (x<1 || y<1) {
        return "phải nhập số lớn hơn 1"
    }
    for (let i = 1; i <= y; i++) {
        for (let j = 1; j <= x; j++) {
            document.writeln('*');    
        }
        document.writeln("<br/>");   
    }
}

//Bài 10 Viết chương trình vẽ một tam giác cân bằng các dấu * với chiều cao cho trước(Chiều cao lớn hơn 1) 
function TamGiacCan(n){
    if(n<=1){
        return "phải nhập số lớn hơn 1"
    }
    for(i = 1; i <= n; i++) {
        for(j = 1; j <= n-i; j++){
           document.write("\xa0");
        }
        for(j = 1; j <= i; j++){
           document.write("*");
        }
        document.write("<br>");
     }
}