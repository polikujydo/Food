function modal(openModalSelector, modalSelector, closeModalSelector){
    const openModalButton = document.querySelectorAll(openModalSelector),
          closeModalButton = document.querySelector(closeModalSelector),
          modal = document.querySelector(modalSelector);

//Open modal Func
    function openModal(modalSelector){
        const modal = document.querySelector(modalSelector);

        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
    }

    openModalButton.forEach(eachBtn => {
        eachBtn.addEventListener('click', () => openModal(modalSelector))
    })

//Close modal Func
    function closeModal(modalSelector){
        const modal = document.querySelector(modalSelector);

        modal.classList.add('hide')
        modal.classList.remove('show')
        document.body.style.overflow = ''
    }

    closeModalButton.addEventListener('click', () => closeModal(closeModalSelector))

    modal.addEventListener('click', (event) => {
        if(event.target == modal){
            closeModal(modalSelector)
        }
    })

    document.addEventListener('keydown', (event) => {
        if(event.code == 'Escape'){
            closeModal(modalSelector)
        }
    })
}

export default modal