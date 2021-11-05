const dropDowns = document.querySelectorAll('.drop-down')
const nav = document.querySelector('.nav')
const arrows = document.querySelectorAll('.arrow')
const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')

openMenu.addEventListener('click', () => {
    console.log('kk');
    nav.style.transform = "translateX(0%)"
    openMenu.style.display = "none"
    closeMenu.style.display = "block"
})
closeMenu.addEventListener('click', () => {
    console.log('kk');
    nav.style.transform = "translateX(-150%)"
    openMenu.style.display = "block"
    closeMenu.style.display = "none"
})








dropDowns.forEach( (dropDown) => {
    dropDown.addEventListener('click', (e) => {
        e.preventDefault()
        dropDowns.forEach((dd) => {
            if (dd != dropDown) {
                dd.classList.remove('active')
            }
        })
        dropDown.classList.toggle('active')
    })
} )


arrows.forEach( (arrow) => {
    arrow.addEventListener('click', () => {
        const dropDwn = arrow.parentElement
        dropDwn.classList.toggle('active')
        console.log(dropDwn);
    })
})