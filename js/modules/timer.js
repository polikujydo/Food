function timer(){
    const deadLine = '2024-01-01'
//deadLine & currentTime offset Func
    function timeRemaining(deadLine){
        const totalTime = Date.parse(deadLine) - Date.parse(new Date()), //ms to deadLine - current time
              days = Math.floor(totalTime / (1000 * 60 * 60 * 24)),
              hours = Math.floor((totalTime / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((totalTime / (1000 * 60) % 60)),
              seconds = Math.floor((totalTime / 1000) % 60);
        return {
            'total': totalTime,
            'days': days,
            "hours": hours,
            "minutes": minutes,
            "seeconds": seconds
        }
    }

    function getZero(num){
        if(num >= 0 && num < 10){
            return `0${num}`
        } else{
           return num
        }
    }

    function setClock(selector, deadLine){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
              
        updateClock();
        
        function updateClock(){
            const totalTime = timeRemaining(deadLine)

            days.innerText = getZero(totalTime.days)
            hours.innerText = getZero(totalTime.hours)
            minutes.innerText = getZero(totalTime.minutes)
            seconds.innerText = getZero(totalTime.seeconds)

            if (totalTime.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadLine)
}
module.exports = timer