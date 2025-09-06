function toggleMode() {
  const html = document.documentElement
  //forma simples de alternar entre light e dark
  html.classList.toggle("light")

  //outra
  // maneira pensadada para alternar entre light e dark
  //if (html.classList.contains("light")) {
  //html.classList.remove("light")
  //} else {
  // html.classList.add("light")
  //}

  //pegar a imagem
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light.mode, colocar a imagem ligth
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Tayson Guntzel com fundo claro")
  } else {
    //se tiver sem light.mode, colocar a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Tayson Guntzel com fundo escuro")
  }
}
