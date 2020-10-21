abriu = false
AbriuMenu = false

function autor(){
    document.getElementById('modal').style.display = "block"
    document.getElementById('a1').style.display = "block"
    setTimeout(() => {
        document.getElementById('a1').style.left = "50%"
    }, 100)
}

function fechar() {
    document.getElementById('a1').style.left = "150%"
    setTimeout (() => {
        document.getElementById('a1').style.display = "none"
    }, 1000)

    setTimeout (() => {
        document.getElementById('modal').style.display = "none"
    }, 1000)
}

function openMenu() {
    if(AbriuMenu == false) {
        document.getElementById('menu').style.display = "block"
        setTimeout (() => {
            document.getElementById('menu').style.top = "30px"
        }, 100)
    
        setTimeout (() => {
            document.getElementById('menu-button').innerHTML = "X"
        }, 100)

        AbriuMenu = true
    }else {
        document.getElementById('menu').style.top = "-130px"

        setTimeout (() => {
            document.getElementById('menu').style.display = "none"
        }, 300)

        setTimeout (() => {
            document.getElementById('menu-button').innerHTML = "☰"
        }, 300)

        AbriuMenu = false
    }
}