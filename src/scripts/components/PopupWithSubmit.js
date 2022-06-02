import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
  super(popupSelector);
  // this._handler = handleSubmitForm;
  this._popupForm = this._popup.querySelector('.popup__form');
  console.log(this._popupForm)// ok
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.setEventListeners('submit', (event) => {
      event.preventDefault();
      console.log('submit event')
    })
  }

  setHandler() {}
}