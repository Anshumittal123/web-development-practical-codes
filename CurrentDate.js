function getCurrentDate(){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thesday', 'Friday', 'Saturday'];
    const now = new Date();

    const day = days[now.getDay()];
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear().toString().slice(-2);
    
    let hour = now.getHours();
    const min = now.getMinutes();
    const seconds = now.getSeconds();
    const AmPm = hour>=12?"PM":"AM";
    hour = hour % 12; 
    hour = hour ? hour:12;

    const formattedDate = `${day}, ${date.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    const formattedTime = `${hour} ${AmPm}: ${seconds.toString()}: ${min.toString()}`;

    console.log(`Today is ${formattedDate}`);
    console.log(`Current Time is ${formattedTime}`);
}
getCurrentDate();

// OUTPUT:
// Today is Tuesday, 06/08/24
// Current Time is 11 PM: 43: 15