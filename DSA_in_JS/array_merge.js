
// Q1) USing for loop (Not so efficient way)

/*
let data = [12,45,65,9,88,32,6];
let data2 = [45, 33, 15,19,5];
let data3 = [];

for(let i = 0;i<data.length;i++){
    data3[i]=data[i];
}
for(let i=0;i<data2.length;i++){
    data3[data.length+i]=data2[i];
   
}
console.log(data3);
*/



// 2) Using while loop

let data1 = [3, 7, 12, 34, 56, 90];
let data2 = [4, 9, 25, 45];
let data3 = [];
let d1 = 0;
let d2 = 0;
let d3 = 0;

while (d1 < data1.length && d2 < data2.length) {
    if (data1[d1] < data2[d2]) {
        data3[d3] = data1[d1];
        d1++;
    }
    else {
        data3[d3] = data2[d2];
        d2++;
    }
    d3++;

} while (d1 < data1.length) {
    data3[d3] = data1[d1];
    d1++;
    d3++;

}
console.log(data3);

