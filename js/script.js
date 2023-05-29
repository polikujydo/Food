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

})
