class Popup {
  constructor(popupSelector) {
    this._selector = popupSelector;
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
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
     }
    this._closeButton.addEventListener('click', () => {
      this.close()});
   });
  };
}

// ----- Popup with forms -------------------------------------------------
export class PopupWithForm extends Popup {
  constructor({popupSelector, handleSubmitForm}) {
    super(popupSelector);
    this._handler = handleSubmitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  };

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handler(this._getInputValues());
    });
  };

  close() {
    this._popupForm.reset();
    super.close();
  };
}

// ----- Popup with image preview -----------------------------------------
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    
  }

  open(name, link) {
    const popupPic = this._popup.querySelector('.popup__photo');
    const popupCaption = this._popup.querySelector('.popup__photo-caption')
    popupPic.src = link;
    popupPic.alt = name;
    popupCaption.textContent = name;
    
    super.open();
  }
};