// function createNewCard(item) {
//   const card = new Card(item, '.element-template');
//   const cardElement = card.createCard();
//   return cardElement;
// };

// initialCards.forEach((item) => {
//   elements.append(createNewCard(item));
// });

// function addCard (newCard, elements) {
//   elements.prepend(createNewCard(newCard));


export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer; //createCard
  }

  renderItems() {
    this._renderedItems.forEach((item) => {
      this._container.append(this._renderer(item));
    });
  }

  addItem() {
    this._container.prepend(this._renderer(item));
  };

}