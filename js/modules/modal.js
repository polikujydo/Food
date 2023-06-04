function modal(){
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
}

export default modal