function calculationDurationDiscountTime() {
    const currentDate = new Date();
    const currentURCHour = currentDate.getUTCHours();
    let startUTCHour = 0;
    switch (true) {
        case (currentURCHour < 7):
            startUTCHour = '00';
            break;
        case (currentURCHour < 13):
            startUTCHour = '06';
            break;
        case (currentURCHour < 19):
            startUTCHour = '12';
            break;
        default:
            startUTCHour = '18';
            break;
    }
    const time = new Date(`${currentDate.getFullYear()}-${("0" + (currentDate.getMonth() + 1)).slice(-2)}-${("0" + currentDate.getDate()).slice(-2)}T${startUTCHour}:00:00.000Z`); 
    //cộng 7 tiếng
    return time.getTime() + 25200000;
}