function sortNumbers(array) {
    let temp;

    for (let index = 0; index < array.length; index+= 1) {
        for (let compare = index + 1; compare < array.length; compare += 1) {
            
            if (array[index] > array[compare]) {
                temp = array[index];
                array[index] = array[compare];
                array[compare] = temp;
                
            }
            
        }





    }



    return array;
    
}

console.log(sortNumbers([3, 6, 7, 8, 9, 1, 2]));