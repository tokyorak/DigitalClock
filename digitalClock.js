let clock = new Vue({
    el: '#clock',
    data: {
        time: '',
        date: '',
        message: 'Peut mieux faire ;)'
    }
});

let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
let timerID = setInterval(updateTime,1000);
updateTime();

function updateTime(){
    let mDate = new Date(); //gets the current date
    //modifies the vue value of data directly in clock object
    clock.time = zeroPad(mDate.getHours(),2) + ':'
                + zeroPad(mDate.getMinutes(),2) + ':'
                + zeroPad(mDate.getSeconds(),2);
    clock.date = zeroPad(mDate.getFullYear(),4) + '-'
                + zeroPad(mDate.getMonth()+1,2) + '-'
                + zeroPad(mDate.getDate(),2) + ' ' + week[mDate.getDay()];
}

function zeroPad(num, digit){
    let zero = '';
    for(let i=0; i<digit; i++){
        zero += '0';
    }
    return (zero + num).slice(-digit);
}