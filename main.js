function getCurrentTime() {
    var currentDate = new Date();

    var hours = currentDate.getHours().toString().padStart(2, '0');
    var minutes = currentDate.getMinutes().toString().padStart(2, '0');
    var seconds = currentDate.getSeconds().toString().padStart(2, '0');

    var daysOfWeek = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'пятниця', 'субота'];
    var dayOfWeek = daysOfWeek[currentDate.getDay()];

    var day = currentDate.getDate().toString().padStart(2, '0');
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    var year = currentDate.getFullYear();

    var currentTimeString = hours + ':' + minutes + ':' + seconds + ', ' + dayOfWeek + ', ' + day + ' ' + getMonthName(month) + ' ' + year + ' року';

    console.log(currentTimeString);

    return currentTimeString;
}

function getMonthName(month) {
    var monthNames = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
    return monthNames[parseInt(month) - 1];
}

getCurrentTime();
