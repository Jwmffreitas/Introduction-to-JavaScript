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
      var habc = ['Rajadas ópticas','Resistente a energia','Estrategista','Líderança']
      var habj = ['Telepatia', 'Criar Ilusões', 'Possessão mental', 'Forma psiônica', 'Transmutação', 'Pirocinése', 'Absorção de energia']
      var habr = ['Absorção de poderes', 'Absorção de habilidades', 'Absorção de memórias', 'Toque semi-letal', 'Acúmulo de habilidades absorvidas']
      var habi = ['Visão térmica', 'Clonagem', 'Congelamento das moléculas de água', 'Transmutar sua prórpia matéria em gelo']
      var fav1 = Number(fav.value) - 1
      let final = conj[fav1]
      let finalimg = conjimg[fav1]

      if(fav.value == '' || Number(fav.value > 5)) {
        res.innerHTML = `Por favor, digite um número entre 1 e 5`
      }else {
        res.innerHTML = `<h3>Seu mutante favorito é: </br><h1>${final}</h1></h3>`
        res.innerHTML += `<img class="wolv" src="${finalimg}" alt=""></img> <h2>Habilidades:</h2>`
      }
      if(fav.value == '1') {
        res.innerHTML += `${habw[0]} </br> ${habw[1]} </br> ${habw[2]} </br> ${habw[3]} </br> ${habw[4]}`
      }else if(fav.value == '2') {
        res.innerHTML += `${habc[0]} </br> ${habc[1]} </br> ${habc[2]} </br> ${habc[3]}`
      }else if(fav.value == '3') {
        res.innerHTML += `${habj[0]} </br> ${habj[1]} </br> ${habj[2]} </br> ${habj[3]} </br> ${habj[4]} </br> ${habj[5]}  </br> ${habj[6]}`
      }else if (fav.value == '4') {
        res.innerHTML += `${habr[0]} </br> ${habr[1]} </br> ${habr[2]} </br> ${habr[3]} </br> ${habr[4]}`
      }else if (fav.value == '5') {
        res.innerHTML += `${habi[0]} </br> ${habi[1]} </br> ${habi[2]} </br> ${habi[3]}`
      }
      // document.getElementById('favorit').value = ""
  }