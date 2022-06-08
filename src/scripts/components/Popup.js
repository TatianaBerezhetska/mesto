export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close-button');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  };

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  };

  _handleEscClose() {
    if (event.key === 'Escape') {
    this.close();
  }};

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.parentNode.classList.contains('popup_opened')) {
        this.close();
     }
    this._closeButton.addEventListener('click', () => {
      this.close()});
   });
  };
}