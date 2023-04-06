let data = [34, 30, 1, 0, 25, 54, 12, 89, 555, 78];

for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
        if (data[j] > data[j + 1]) {
            let temp = data[j];
            data[j] = data[j + 1];
            data[j + 1] = temp;

        }
    }
}
console.log(data);
