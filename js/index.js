// ---------------------- нормальное состояние поиска
const searchContainerNormal = document.querySelector('.search-logo-normal')

function runActiveSearch() {
    searchContainerNormal.classList.add('search-logo-normal__position-active')

    searchContainerNormal.addEventListener('transitionend', function showActive() {
        runSearchActiveAnimation()
        searchContainerNormal.style.display = 'none'
    })
}

// запуск активной навигации
searchContainerNormal.addEventListener('pointerdown', runActiveSearch)


// ---------------------- активное состояние поиска
const searchContainerActive = document.querySelector('.search-logo-active')
const searchContainerActiveSpring = document.querySelector('.container-active-spring')
const searchLogoActiveText = document.querySelector('.search-logo-active__text')

function runSearchActiveAnimation() {
    searchContainerActive.style.display = 'block'
    searchContainerActiveSpring.style.display = 'block'

    // окончание появления загагулины
    searchContainerActive.addEventListener(('animationend'), () => {
        searchContainerActive.style.transform = 'rotate(0)';
    })

    // окончание повората загагулины
    searchContainerActive.addEventListener(('transitionend'), () => {
        searchContainerActiveSpring.style.height = '192px';
        document.getElementById('search-zigzag-active').style.display = 'none'
        document.getElementById('canvas').style.display = 'block'
    })

    // окончание выезжания пружины
    searchContainerActiveSpring.addEventListener(('transitionend'), () => {
        searchContainerActiveSpring.style.animationName = 'spring-color'
        searchLogoActiveText.classList.add('search-logo-active__text--active')
    })
}

function removeSearchActiveAnimation() {
    searchContainerActive.style.display = 'none'
    searchContainerActiveSpring.style.display = 'none'

    searchContainerActive.style.transform = 'rotate(-270deg)';

    searchContainerActiveSpring.style.height = '0';
    document.getElementById('search-zigzag-active').style.display = 'block'
    document.getElementById('canvas').style.display = 'none'

    searchContainerActiveSpring.style.animationName = ''
    searchLogoActiveText.classList.remove('search-logo-active__text--active')
}

function searchFullReset() {
    console.log('searchFullReset')
    // show normal
    searchContainerNormal.style.display = 'block'
    searchContainerNormal.classList.remove('search-logo-normal__position-active')

    // hide active
    removeSearchActiveAnimation()
}
