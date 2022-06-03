import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  constructor({popupSelector}) {
  super(popupSelector);
  // this._handler = handleSubmitForm;
  this._popupForm = this._popup.querySelector('.popup__form');
  }

  setSubmitHandler(handleSubmitForm) {
    this._handler = handleSubmitForm(event);
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this.setSubmitHandler(event);
      this.close;
    })
  }
}