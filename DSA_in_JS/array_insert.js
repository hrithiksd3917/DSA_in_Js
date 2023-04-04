let data = [60, 30, 10, 20, 55];
let position = 2;
let newElement = 18;

for (let i = data.length - 1; i >= 0; i--) {
    if (i >= position) {
        data[i + 1] = data[i];
        if (i == position) {
            data[i] = newElement;
        }
    }
}
console.log(data);
 