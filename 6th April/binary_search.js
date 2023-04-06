const data = [5, 9, 13, 17, 45, 67, 89, 100];

function binarySearch(data) {
    let start = 0;
    let end = data.length - 1;
    let find = 89;
    let position = undefined;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (data[mid] === find) {
            position = mid;
            break;
        }
        else if (data[mid] < find) {
            start = mid + 1;

        }
        else {
            end = mid - 1;

        }

    }
    return position;
}

const findBinary = binarySearch(data);
console.log(findBinary);

