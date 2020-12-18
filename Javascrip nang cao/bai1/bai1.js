function Total(a,b) {
    // let numberOne = document.getElementById('number-one').value;
    // let numberTwo = document.getElementById('number-two').value;
    let total = 0;
    if (a < b) {
function Total(a, b) {
  // let numberOne = document.getElementById('number-one').value;
  // let numberTwo = document.getElementById('number-two').value;
  let total = 0;
  a = parseInt(a);
  b = parseInt(b);
  if (a < b) {
    for (let i = a + 1; i < b; i++) {
      total += i;
    }
  } else {
    for (let i = b + 1; i < a; i++) {
      total += i;
    }
  }
  return total;
//   document.getElementById("total").value = total;
}

// Bài 2: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function TotalUC(a) {
  var total = a;
  for (let i = 1; i <= a / 2; i++) {
    if (a % i == 0) {
      total += i;
    }
  }
  return total;
}

// Bài 3: Cho 1 số nguyên dương, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function snt(a) {
  if (a == 2 || a == 3) {
    return true;
  } else {
    for (let i = 2; i < a; i++) {
      if (a % i == 0) {
        return false;
      }
    }
    return true;
  }
}

// Bài 4 Tính tổng các số nguyên tố nhỏ hơn hoặc bằng số nhập vào
function total_snt(y) {
  var sum = 0;
  for (let i = 0; i <= y; i++) {
    if (snt(i)) {
      sum += i;
    }
  }
  return sum;
}

//Bài 5: Viết hoa chữ cái đầu tiên của mỗi từ
function capitalize(str) {
  var strArr = (str.toLowerCase()).split(" ");
  for (var i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1); 
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
  var newstr = str.replace(/" "/g, "").toLowwerCase();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}
