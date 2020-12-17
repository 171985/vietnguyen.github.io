function Total(a,b) {
    // let numberOne = document.getElementById('number-one').value;
    // let numberTwo = document.getElementById('number-two').value;
    let total = 0;
    if (a < b) {
        for (let i = a+1; i < b; i++) {
            total += i;
        }
    }
    else {
        for (let i = b+1; i < a; i++) {
            total += i;
        }
    }
    return total;
    // document.getElementById("total").innerHTML.valueOf = total;
}

// Bài 2: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function TotalUC(a) {
    var total = a;
    for (let i = 1; i <= a/2; i++) {
        if ((a % i) == 0) {
            total +=i;
        }
    }
    return total;
}

// Bài 3: Cho 1 số nguyên dương, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function snt(b) {
    if ((a==2) || (a==3)) {
        return true;
    }else {
        for (let i = 2; i < a; i++) {
            if(a%i ==0){
                return false
            }
        }
        return true;    
    } 
}


function kiem_tra_snt(n) {
    // Biến cờ hiệu
    let y = true;
    //kiểm tra dữ liệu nhập vào nếu không phải số hiện thông báo
    if (typeof (n) != 'number') {
        return "Đây không phải số";
    }
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2) {
        y = false;
    }
    else if (n == 2) {
        y = true;
    }
    else if (n % 2 == 0) {
        y = false;
    }
    else {
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i < (n/2); i += 2) {
            if (n % i == 0) {
                y = false;
                break;
            }
        }
    }
}

//Bài 4: Cho 1 số nguyên dương. Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số truyền vào.
function total_Snt(x) {

    let total = 0;
    for (let i = 1; i <= x; i++) {
        if (i == 2) {
            total = 2;
        }
        if(i>2){
            for (let j = 0; j < i; j++) {
                if (i%j != 0){
                    total += i;
                }
            }
        }
    }
    return console.log (`tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng ${a} là ${total}`);
}


function total_snt(y) {
    var sum = 0
    for (let i = 0; i<y; i++) {
        if (snt(i)) {
            sum +=i
        }       
    }    
}


//Bài 5: Viết hoa chữ cái đầu tiên của mỗi từ
function capitalize(str) {
	// viết code ở đây
	var strArr=str.split(" ");
	for(var i=0;i<strArr.length;i++){
      var charArr=strArr[i].split("");
	    charArr[0]=charArr[0].toUpperCase();
      strArr[i]=charArr.join("");
	    
	}
	return strArr.join(" ");
}

//Bài 6: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case
function spinnalCase(str) {
    var newstr = str.toLowwerCase();
    var nstr = newstr.replace(/" "/g, "-");
}

//Bai7: Bài 7: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không
function dx(str) {
    var newstr = str.replace(/" "/g, "");
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[str.length-i-1]) {
            return true;
        }
    }
    return false;
    
}
