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
function findMinArray(Ar2){
    let min = Ar2[0]
    for (let i = 1; i < Ar2.length; i++) {
        if(min > Ar2[i]){
            min= Ar2[i];
        }
    }
    return min;
}

function findMaxArray(Ar3){
    let max = Ar3[0]
    for (let i = 1; i < Ar3.length; i++) {
        if(max < Ar3[i]){
            max = Ar3[i];
        }
    }
    return max;
}

//Bài 3 Viết hàm trả về vị trí đầu tiên của số lẻ, vị trí cuối cùng của số chẵn trong mảng bất kì

function findLastEven(Ar4){    
    for(let i=Ar4.length-1; i>=0; i--)
    {
        if(Ar4[i]%2==0)
        {
            // chancuoi = Ar4[i]
            return Ar4[i];
        }
    }
    //nếu không có số chẵn trong mảng thì trả về giá trị -1
    return -1;
}
function findFirstOdd(Ar5) {
    // let ledau = 0;
    for (let j = 0; j < Ar5.length; j++) {
        if (Ar5[j]%2 ==1) {
            // ledau = Ar5[j];
            // return ledau;
            return Ar5[j];
        }
    }
    //nếu trong mảng không có số lẻ thì trả về giá trị -1
    return -1;
}
    
    
    