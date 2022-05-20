class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  };

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.element')
      .cloneNode(true);

    return cardElement;
  };

  createCard() {
    this._element = this._getTemplate();
    this._photoElement = this._element.querySelector('.element__photo');

    this._photoElement.src = this._link;
    this._photoElement.alt = this._name;
    this._element.querySelector('.element__description').textContent = this._name;
  
    this._likeButton = this._element.querySelector('.element__like-button');
    this._deleteButton = this._element.querySelector('.element__delete-button');
    this._setEventListeners();

    return this._element;
  };

  _handleLike() {
    this._likeButton.classList.toggle('element__like-button_active');
  };

  _removeCard() {
    this._element.remove();
    this._element = null;
  }

  // _previewPicture() {
  //   const pic = document.querySelector('.popup_type_pic');
  //   const popupPic = pic.querySelector('.popup__photo');
  //   const popupCaption = pic.querySelector('.popup__photo-caption');
  //   popupPic.src = this._link;
  //   popupPic.alt = this._name;
  //   popupCaption.textContent = this._name;
  //   // openPopup(pic);
  // }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLike(this);
    });
    this._deleteButton.addEventListener('click', () => {
      this._removeCard(this);
    });
    this._photoElement.addEventListener('click', () => {
      this._handleCardClick;
      
    });
  };

}

export default Card;