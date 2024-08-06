function getDate(){
    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();

    const formattedDate = `${date.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year.toString()}`;
    console.log(formattedDate);
}

getDate(); // 06-07-2024