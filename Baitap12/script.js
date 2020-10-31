//Bài 1 nhập vào 1 mảng, nếu trong mảng có phần tử âm thì trả nó về 0
function timSoAm(Ar1){
    for (let i = 0; i < Ar1.length; i++) {
            if(Ar1[i] < 0){       
                  Ar1[i] = 0;
            } 
    }
    return Ar1;
}

// Bài 2 Tìm min, max trong 1 mảng
function findMinMaxArray(Ar2){
    let min=0;
    let max=0; 
    for (let i = 0; i < Ar2.length; i++) {
        if(min > Ar2[i]){
            min= Ar2[i];
        }
    }
    for (let j = 1; j < Ar2.length; j++) {
        if(max < Ar2[j]){
            max = Ar2[j];
        }
    }
    return "số nhỏ nhất là: " + min + " Số lớn nhất là: " + max;
}


//Bài 3 Viết hàm trả về vị trí đầu tiên của số lẻ, vị trí cuối cùng của số chẵn trong mảng bất kì


function findLastEvenFirstOdd(Ar6){   
    let chancuoi;
    let ledau;
    for(let i=0; i< Ar6.length; i++)
    {
        if(Ar6[i]%2 == 0)
        {
            chancuoi = Ar6[i];
        }
    }
    for (let j = Ar6.length; j >= 0; j--) {
        if (Ar6[j]%2 != 0) {
            // ledau = Ar5[j];
            // return ledau;
            ledau = Ar6[j];
        }
    }
    return "số chẵn cuối là: " + chancuoi + " Số lẻ đầu là: " + ledau;
}