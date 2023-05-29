window.addEventListener('DOMContentLoaded', () => {
    // TABS
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsParent = document.querySelector('.tabheader__items'),
          tabsContent = document.querySelectorAll('.tabcontent');

//Hide tabsContent Func
    function hideTabContent(){
        tabsContent.forEach(eachTabContent => {
            eachTabContent.classList.add('hide'),
            eachTabContent.classList.remove('show', 'fade')
        })
        tabs.forEach(eachTab => {
            eachTab.classList.remove('tabheader__item_active')
        })
    }

//Show tabsContent Func
    function showTabContent(i = 0){
        tabsContent[i].classList.add('show', 'fade'),
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active')
    }
    hideTabContent()
    showTabContent()

    tabsParent.addEventListener('click', (event) => {
        const target = event.target
        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((eachTab, i) => {
                if (target == eachTab){
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })

    //MODAL
    const openModalButton = document.querySelectorAll('[data-modal]'),
          closeModalButton = document.querySelector('[data-close]'),
          modal = document.querySelector('.modal');

//Open modal Func
    function openModal(){
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
    }

    openModalButton.forEach(eachBtn => {
        eachBtn.addEventListener('click', openModal)
    })

//Close modal Func
    function closeModal(){
        modal.classList.add('hide')
        modal.classList.remove('show')
        document.body.style.overflow = ''
    }

    closeModalButton.addEventListener('click', closeModal)

    modal.addEventListener('click', (event) => {
        if(event.target == modal){
            closeModal()
        }
    })

    document.addEventListener('keydown', (event) => {
        if(event.code == 'Escape'){
            closeModal()
        }
    })

    // TIMER

    const deadLine = '2024-01-01';

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


})
