function tabs(tabsSelector, tabsParentSelector, tabsContentSelector, activeClassSelector ){
    const tabs = document.querySelectorAll(tabsSelector),
          tabsParent = document.querySelector(tabsParentSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector);

//Hide tabsContent Func
    function hideTabContent(){
        tabsContent.forEach(eachTabContent => {
            eachTabContent.classList.add('hide'),
            eachTabContent.classList.remove('show', 'fade')
        })
        tabs.forEach(eachTab => {
            eachTab.classList.remove(activeClassSelector)
        })
    }

//Show tabsContent Func
    function showTabContent(i = 0){
        tabsContent[i].classList.add('show', 'fade'),
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add(activeClassSelector)
    }
    hideTabContent()
    showTabContent()

    tabsParent.addEventListener('click', (event) => {
        const target = event.target
        if (target && target.classList.contains(tabsSelector.slice(1))){
            tabs.forEach((eachTab, i) => {
                if (target == eachTab){
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })
}

export default tabs