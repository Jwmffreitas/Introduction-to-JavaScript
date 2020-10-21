var Card
var Abriu = 0
var Acertos = 0
var id1
var id2 
var c1
var c2

function virarCard(Card) {
    if(Abriu == 0) {
        c1 = $(Card).attr('name')
        $(Card).css('transform', 'rotateY(180deg)')
        Abriu = Abriu + 1
        id1 = Card
        console.log(Card)   
    }else if(Abriu == 1) {
        c2 = $(Card).attr('name')
        $(Card).css('transform', 'rotateY(180deg)')
        Abriu = Abriu + 1
        id2 = Card
        console.log(Card)
        console.log(`${c1} e ${c2}`)
        Abriu = 0
        if(c1 == c2) {
            Acertos = Acertos + 1
            c1 = ''
            c2 = ''
            verificarAcertos()
        }else {
            setTimeout(() => {
                $(id1).css('transform', 'rotateY(0deg)')
                $(id2).css('transform', 'rotateY(0deg)')
                c1 = ''
                c2 = ''
                id1 = ''
                id2 = ''
            }, 1000)
        }
    }
}

function verificarAcertos() {
    if(Acertos >= 4) {
        setTimeout(() => {
            console.log('Parabéns!')
        }, 1000);
    }
}