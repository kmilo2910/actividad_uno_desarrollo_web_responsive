fetch('https://mock.apidog.com/m1/1268515-1266490-default/books')
  .then(res => res.json())
  .then(data => {
    const contenedor = document.querySelector('.catalogo');

    data.forEach(libro => {
      const card = document.createElement('div');
      card.classList.add('card-libro');

      card.innerHTML = `
        <img src="img/default.jpg">
        <h3>${libro.title}</h3>
        <p>${libro.category}</p>
        <span>$${libro.price}</span>
        <a href="detalle.html">Ver más</a>
      `;

      contenedor.appendChild(card);
    });
  });