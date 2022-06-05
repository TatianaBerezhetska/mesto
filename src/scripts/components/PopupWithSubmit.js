import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  constructor({popupSelector}) {
  super(popupSelector);
  this._popupForm = this._popup.querySelector('.popup__form');
  }

  setSubmitHandler(handleSubmitForm) {
    this._handler = handleSubmitForm;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handler(event);
    })
    document.addEventListener('keydown', (event) => {
      if(event.key === "Enter") {
        this._handler();
      }
    })
  }
}