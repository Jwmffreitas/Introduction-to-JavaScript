abriu = false
y = 0
AbriuMenu = false

function sinopse0() {
    if(abriu == false) {
        document.getElementById('modal').style.display = "block"
        document.getElementById('sinopselivro0').style.display = "block"
        abriu = true
        y = 1
    }
}

function fechar(y) {
    if (abriu == true) {
         if(y == 1) {
            document.getElementById('modal').style.display = "none"
            document.getElementById('sinopselivro0').style.display = "none"
            document.getElementById('a1').style.display = "none"
            document.getElementById('a2').style.display = "none"
            y = 0
            abriu = false
         }else if (y == 0){
            setTimeout(() => {
                document.getElementById('modal').style.display = "none"
            }, 1000);

            document.getElementById('sinopseli').style.left = "150%"
        
            setTimeout(() => {
                document.getElementById('sinopseli').style.display = "none"
            }, 1000);

            setTimeout(() => {
                document.getElementById('sinopseli1').style.display = "none"
            }, 1000);

            document.getElementById('sinopseli1').style.left = "-50%"

            document.getElementById('a1').style.bottom = "-100%"

            setTimeout (() => {
                document.getElementById('a1').style.display = "none"
            }, 1000)

            document.getElementById('a2').style.bottom = "-100%"
            
            setTimeout (() => {
                document.getElementById('a2').style.display = "none"
            }, 1000)
            
            abriu = false
        }
    }
}

function mostrar(x) {
    if (abriu == false && x == 0) {
        document.getElementById('modal').style.display = "block"
        document.getElementById('sinopseli').style.display = "block"
        document.getElementById('a2').style.display = "none"
        setTimeout(() => {
            document.getElementById('sinopseli').style.left = "50%"
        }, 100);
        abriu = true
        y = 0
    }else if (abriu == false && x == 1) {
        document.getElementById('modal').style.display = "block"
        document.getElementById('sinopseli1').style.display = "block"
        setTimeout(() => {
            document.getElementById('sinopseli1').style.left = "50%"
        }, 100);
        abriu = true
        y = 0
    }else if (abriu == false && x == 2) {
        document.getElementById('modal').style.display = "block"
        document.getElementById('sinopseli00').style.display = "block"
        setTimeout(() => {
            document.getElementById('sinopseli00').style.left = "50%"
        }, 100);
        abriu = true
        y = 0
    }
}

function autor(x) {
    if(abriu == false && x == 0) {
        document.getElementById('modal').style.display = "block"
        document.getElementById('a1').style.display = "block"
        setTimeout (() => {
            document.getElementById('a1').style.bottom = "0"
        }, 100)
        y = 0
        abriu = true
    } else if (abriu == false && x == 1) {
        document.getElementById('modal').style.display = "block"
        document.getElementById('a2').style.display = "block"
        setTimeout (() => {
            document.getElementById('a2').style.bottom = "0"
        }, 100)
        y= 0
        abriu = true
    }
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