const containerNormal = document.querySelector('.search-logo-normal')
const containerActive = document.querySelector('.search-logo-active')
const containerActiveSpring = document.querySelector('.container-active-spring')

function runSearchActive() {
    containerActive.style.display = 'block'
    containerActiveSpring.style.display = 'block'

    containerActive.addEventListener(('animationend'), () => {
        containerActive.style.transform = 'rotate(0)';
    })

    containerActive.addEventListener(('transitionend'), () => {
        containerActiveSpring.style.height = '192px';
    })

    containerActiveSpring.addEventListener(('transitionend'), () => {
        containerActiveSpring.style.animationName = 'spring-color'
        document.querySelector('.search-logo-active__text').style.animationName = 'spring-color-text'
        document.querySelector('.search-logo-active__text').style.display = 'block'
    })
}


containerNormal.addEventListener('pointerdown', () => {
    containerNormal.style.top = '450px'
    containerNormal.style.left = '584px'
    containerNormal.style.transform = 'scale(0.8)'
    containerNormal.style.animationIterationCount = 'revert'
})

containerNormal.addEventListener('transitionend', () => {
    runSearchActive()
    containerNormal.style.transform = 'scale(1)'
    containerNormal.style.display = 'none'
})