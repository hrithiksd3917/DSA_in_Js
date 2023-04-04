let data = [60, 99, 10, 20, 55, 84, 99,99];
let index = [];
let item = 99;

for (let i = 0; i < data.length; i++) {
    if (data[i] === item){
       index.push(i);
    }
}
console.log(index);