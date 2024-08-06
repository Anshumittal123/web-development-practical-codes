function stringToArray(str){
    if(str === ''){
        console.log("String is empty!!");
    }else{
        const wordsArray = str.split(" ");
        return wordsArray;
    }
}

console.log(stringToArray("Central University")); // [ 'Central', 'University' ]