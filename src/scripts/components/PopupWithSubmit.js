import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  constructor({popupSelector, handleSubmitForm}) {
  super(popupSelector);
  this._handler = handleSubmitForm;
  this._popupForm = this._popup.querySelector('.popup__form');
  }

  setSubmitHandler() {
    this._handler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this.setSubmitHandler();
    })
  }
}