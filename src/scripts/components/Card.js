class Card {
  constructor({data, handleCardClick, handleLikeClick, handleDeleteClick}, cardSelector, userId) {
    this._name = data.name;
    this._link = data.link;
    this.likes = data.likes;
    this._id = data._id;
    this._owner = data.owner;
    this._userId = userId;
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
    this._likeCount = this._element.querySelector('.element__like-count');

    this._photoElement.src = this._link;
    this._photoElement.alt = this._name;
    this._element.querySelector('.element__description').textContent = this._name;
    this._likeCount.textContent = this.likes.length;
  
    this._likeButton = this._element.querySelector('.element__like-button');
    this._deleteButton = this._element.querySelector('.element__delete-button');
    this._setLikeState();
    this._setDeleteButtonState();
    this._setEventListeners();

    return this._element;
  };

  getCardId() {
    return this._id;
  };

  isLiked(item) {
    return this.likes.some((item) => {
      return item._id === this._userId;
    })
  }

  _setLikeState() {
    if(this.isLiked()) {
      this._likeButton.classList.add('element__like-button_active');
    } else {
      this._likeButton.classList.remove('element__like-button_active');
    }
  }

  updateLikes(likesLength) {
    this._likeCount.textContent = likesLength;
 }

  toggleLike() {
    this._likeButton.classList.toggle('element__like-button_active');
  };

  _setDeleteButtonState() {
    if(this._userId !== this._owner._id) {
      this._deleteButton.classList.add('element__delete-button_invisible');
    } else {
      this._deleteButton.classList.remove('element__delete-button_invisible');
    }
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this.handleLikeClick(this);
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