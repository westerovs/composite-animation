const searchContainerNormal = document.querySelector('.search-logo-normal')
const searchContainerActive = document.querySelector('.search-logo-active')
const searchContainerActiveSpring = document.querySelector('.container-active-spring')
const searchLogoActiveText = document.querySelector('.search-logo-active__text')


function runSearchActiveAnimation() {
    console.log('3_runSearchActiveAnimation')
    searchContainerActive.style.display = 'block'
    searchContainerActiveSpring.style.display = 'block'

    // окончание появления загагулины
    searchContainerActive.addEventListener(('animationend'), function showZigZag() {
        searchContainerActive.removeEventListener(('animationend'), showZigZag)

        console.log('окончание появления загагулины',)
        searchContainerActive.style.transform = 'rotate(0)';
    })

    // окончание повората загагулины
    searchContainerActive.addEventListener(('transitionend'), function endRotate() {
        searchContainerActive.removeEventListener(('transitionend'), endRotate)

        console.log('окончание повората загагулины',)
        searchContainerActiveSpring.style.height = '192px';
        document.getElementById('search-zigzag-active').style.display = 'none'
        document.getElementById('canvas').style.display = 'block'
    })

    // окончание выезжания пружины
    searchContainerActiveSpring.addEventListener(('transitionend'), function endSpring() {
        searchContainerActiveSpring.removeEventListener(('transitionend'), endSpring)

        console.log('окончание выезжания пружины',)
        searchContainerActiveSpring.style.animationName = 'spring-color'
        searchLogoActiveText.classList.add('search-logo-active__text--active')
    })
}

function removeSearchActiveAnimation() {
    console.log('removeSearchActiveAnimation',)

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


// управление -------------------------------------------------------------
// 1 клик по маленькому логотипу
searchContainerNormal.addEventListener('pointerdown', runActiveSearch)

function runActiveSearch() {
    console.log('1_самый первый клик')
    searchContainerNormal.classList.add('search-logo-normal__position-active')
    searchContainerNormal.addEventListener('transitionend', showActiveSpiral)
}

// 2
function showActiveSpiral() {
    searchContainerNormal.removeEventListener('transitionend', showActiveSpiral)
    console.log('2_showActiveSpiral')
    searchContainerNormal.style.display = 'none'
    runSearchActiveAnimation()
}

