import {userInfo} from "../../pages/index.js";

class Card {
  constructor({data, handleCardClick, handleLikeClick, handleDeleteClick}, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._owner = data.owner;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this.handleLikeClick = handleLikeClick;
    this.handleDeleteClick = handleDeleteClick;
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
    this._element.querySelector('.element__like-count').textContent = this._likes.length;
  
    this._likeButton = this._element.querySelector('.element__like-button');
    this._deleteButton = this._element.querySelector('.element__delete-button');
    this._setDeleteButtonState();
    this._setEventListeners();

    return this._element;
  };

  getCardId() {
    return this._id
  };

  _handleLike() {
    this._likeButton.classList.toggle('element__like-button_active');
  };

  _setDeleteButtonState() {
    if(userInfo._userName !== this._owner.name) {
      this._deleteButton.classList.add('element__delete-button_invisible');
    } else {
      this._deleteButton.classList.remove('element__delete-button_invisible');
    }
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLike(this);
      this._handleLikeClick(this);
    });
    this._deleteButton.addEventListener('click', (event) => {
      this.handleDeleteClick(event);
    });
    this._photoElement.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link); 
    });
  };

}

export default Card;