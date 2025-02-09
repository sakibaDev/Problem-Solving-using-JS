const findBiggest = (array) =>{
    let bigName=array[0];

    for(let i=1 ; i<array.length ;i++){
        const element = array[i];

        if(element.length > bigName.length){
            bigName = element;
        }
    }
    return bigName;
}

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

const result = findBiggest(friends);

console.log(result)

