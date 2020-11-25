const container = document.querySelector('.search-logo-active')
const containerSpring = document.querySelector('.container-spring')

container.addEventListener(('animationend'), () => {
    container.style.transform = 'rotate(0)';

    container.addEventListener(('transitionend'), () => {
        containerSpring.style.height = '192px';

        containerSpring.addEventListener(('transitionend'), () => {
            containerSpring.style.animationName = 'spring-color'
            document.querySelector('.search-logo-active__text').style.animationName = 'spring-color-text'
            document.querySelector('.search-logo-active__text').style.display = 'block'
        })
    })
})

