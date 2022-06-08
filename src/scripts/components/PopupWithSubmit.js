import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  constructor({popupSelector, handleSubmitForm}) {
  super(popupSelector);
  this._popupForm = this._popup.querySelector('.popup__form');
  this._handler = handleSubmitForm;
  }

  setSubmitHandler(cardId) {
    this.card = cardId;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handler(this.card);
    })
    document.addEventListener('keydown', (event) => {
      if(event.key === "Enter") {
        this._handler(this.card);
      }
    })
  }
}