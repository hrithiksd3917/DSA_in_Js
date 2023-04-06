let data = [60, 99, 10, 20, 55, 84, 99,99];
function search(data){
    let item = 99;
    let index =[];
    for (let i = 0; i < data.length; i++) {
        if (data[i] === item){
           index.push(i);
        }
    }
    return index;

}


const findSearch = search(data);
if(findSearch.length>0){
    console.log(findSearch);
}else{
    console.log("No element found");
}