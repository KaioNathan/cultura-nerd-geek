function adicionarFavorito(anime) {
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  if (!favoritos.includes(anime)) {
    favoritos.push(anime);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    alert('Anime adicionado aos favoritos!');
  } else {
    alert('Este anime já está nos seus favoritos!');
  }
}
