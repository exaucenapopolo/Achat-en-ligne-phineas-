// Sélectionner les boutons "Acheter"
const buyButtons = document.querySelectorAll('.buy-button');

// Ajouter un événement click sur chaque bouton
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Récupérer les informations du produit
    const productName = button.parentNode.querySelector('h3').textContent;
    const productPrice = button.parentNode.querySelector('p').textContent;

    // Ajouter le produit au panier
    const cart = document.querySelector('#panier ul');
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <img src="${button.parentNode.querySelector('img').src}" alt="${productName}">
      <h3>${productName}</h3>
      <p>Prix : ${productPrice}</p>
      <p>Quantité : 1</p>
      <button class="remove-button">Supprimer</button>
    `;
    cart.appendChild(cartItem);

    // Mettre à jour le total du panier
    const total = document.querySelector('#panier p:last-child');
    total.textContent = `Total : ${parseInt(total.textContent.split(' : ')[1]) + parseInt(productPrice.split(' ')[1])}€`;
  });
});