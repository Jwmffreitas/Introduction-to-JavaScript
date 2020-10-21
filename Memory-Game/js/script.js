var Card
var Abriu = 0
var Acertos = 0
var id1
var id2 
var c1
var c2
var c
var Batman = `<div class="card" id="#contador#" name="Batman" onclick="virarCard('#'+'#contador#')">
<div class="cardB">
    <img src="img/JL.png" alt="">
</div>
<div class="cardF">
    <img src="img/batman.png" alt="">
</div>
</div>`
var Superman = `<div class="card" id="#contador#" name="Superman" onclick="virarCard('#'+'#contador#')">
<div class="cardB">
    <img src="img/JL.png" alt="">
</div>
<div class="cardF">
    <img src="img/superman.png" alt="">
</div>
</div>`
var WW = `<div class="card" id="#contador#" name="Mulher-Maravilha" onclick="virarCard('#'+'#contador#')">
<div class="cardB">
    <img src="img/JL.png" alt="">
</div>
<div class="cardF">
    <img src="img/WW.png" alt="">
</div>
</div>`
var Flash = `<div class="card" id="#contador#" name="Flash" onclick="virarCard('#'+'#contador#')">
<div class="cardB">
    <img src="img/JL.png" alt="">
</div>
<div class="cardF">
    <img src="img/flash.png" alt="">
</div>
</div>`
var pos = [Batman, Superman, WW, Flash, Batman, Superman, WW, Flash]

function virarCard(Card) {
    if(Abriu == 0) {
        //console.log(10 * Math.random())
        c1 = $(Card).attr('name')
        $(Card).css('transform', 'rotateY(180deg)')
        Abriu = Abriu + 1
        id1 = Card
        //console.log(Card)   
    }else if(Abriu == 1) {
        c2 = $(Card).attr('name')
        $(Card).css('transform', 'rotateY(180deg)')
        Abriu = Abriu + 1
        id2 = Card
        //console.log(Card)
        //console.log(`${c1} e ${c2}`)
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

function Sorteio() {
    
}

function Aleatorio() {
    //console.log([0,1,2,3,4,5,6,7].sort(()=>Math.random()-0.5))
    //console.log(pos.sort(()=> Math.random()-0.5))
    var str
    pos.sort(()=> Math.random()-0.5)
    for ( i = 0 ; i <= 7 ; i++) {
        c = i
        str = pos[c]
        str = str.replace('#contador#', `d${c}`)
        //console.log(str)
        document.getElementById('mesa').innerHTML += str.replace('#contador#', `d${c}`)
    }

}