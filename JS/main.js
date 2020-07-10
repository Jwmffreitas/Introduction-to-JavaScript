  function troca(i) {
      if(i == 1) {
          document.getElementById('mag').src = "img/Mag.png"
      }else{
          document.getElementById('mag').src= "img/Magneto.png"
      }
  }

  function mutante() {
      var fav = document.getElementById('favorit')
      var res = document.getElementById('res')
      var conj = ['Wolverine', 'Cyclops', 'Jean Grey', 'Rogue', 'Iceman']
      var conjimg = ['img/Wolv.jpg', 'img/cyclops.jpg', 'img/jean.jpg', 'img/rogue.jpg', 'img/iceman.jpg']
      var habw = ['Garras de adamantium', 'Fator de cura', 'Sentidos aguçados', 'Reflexos sobre-humanos', 'Visão Noturna']
      var fav1 = Number(fav.value) - 1
      let final = conj[fav1]
      let finalimg = conjimg[fav1]

      if(fav.value == '' || Number(fav.value > 5)) {
        res.innerHTML = `Please, digit a number between 1 and 5`
      }else {
        res.innerHTML = `Your favorite mutant is ${final} </br>`
        res.innerHTML += `<img class="wolv" src="${finalimg}" alt=""></img> <h1>Habilidades:</h1>`
      }
      if(fav.value == '1') {
        res.innerHTML += `${habw[0]} </br> ${habw[1]} </br> ${habw[2]} </br> ${habw[3]} </br> ${habw[4]}`
      }
  }