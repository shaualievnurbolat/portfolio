
// new WOW({
//     boxClass: 'wow',
//     animateClass: 'progressAnimation',
//     offset: 0,
//     mobile: true,
//     live: true
// })
// new WOW().init()

const themeButton = document.querySelectorAll('.change-theme')

themeButton.forEach(btn => {
    btn.addEventListener('click', function() {
        applyTheme(this.dataset.theme)
        localStorage.setItem('theme', this.dataset.theme)
    })
})

function applyTheme(themeName) {
    let themeUrl = `scss/theme-${themeName}.css`
    document.querySelector('[title="theme"]').setAttribute('href', themeUrl)
}

let activeTheme = localStorage.getItem('theme')

if (activeTheme === null) {
    applyTheme('dark')
} else {
    applyTheme(activeTheme)
}

