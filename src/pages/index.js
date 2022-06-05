import './index.css';

import Api from '../scripts/components/Api.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithSubmit from '../scripts/components/PopupWithSubmit.js';

import { validationConfig } from '../scripts/initial.js';
import FormValidator from '../scripts/components/FormValidator.js';

export const formElementEdit = document.querySelector('.popup__form_type_edit');
export const formElementAdd = document.querySelector('.popup__form_type_add');
const formAvatarUpdate = document.querySelector('.popup_type_edit-avatar');

const editButton = document.querySelector('.profile__edit');
const editAvatarButton = document.querySelector('.profile__edit-avatar');
const addButton = document.querySelector('.profile__add');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

const likeCount = document.querySelector('.element__like-count');

let userId;

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-42/cards',
  userUrl: 'https://mesto.nomoreparties.co/v1/cohort-42/users/me',
  headers: {
    authorization: '7b060f74-b72c-47c7-a5e8-ffbce8b574c7',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo({});
const cardList = new Section({ data: [], renderer: (item) => {
  const card = createNewCard(item);
  return card;
}}, '.elements');

api.getAllData()
  .then(data => {
    const [userData, cardsArray] = data;
    
    userInfo.setInitialInfo(userData);
    userInfo.setUserInfo(userData);
    
    userId = userData._id;
    cardList.data = cardsArray;
    
    cardList.renderItems(cardsArray);
  })
  .then()

const userEditForm = new PopupWithForm({
  popupSelector: '.popup_type_edit-profile', 
  handleSubmitForm: (profileData) => {
    userEditForm.renderLoading(true);
    api.updateUserInfo(profileData)
      .then((profileData) => {
        userInfo.setInitialInfo(profileData)
      })
      .finally(() => {
        userEditForm.renderLoading(false);
        userEditForm.close();
      })
  }
});

const avatarEditForm = new PopupWithForm({
  popupSelector: '.popup_type_edit-avatar',
  handleSubmitForm: (url) => {
    avatarEditForm.renderLoading(true);
    api.updateUserAvatar(url)
      .then((link) => {
        userInfo.updateAvatar(link)
      })
      .finally(() => {
        avatarEditForm.renderLoading(false);
        avatarEditForm.close()})
  }
})

const photoPreview = new PopupWithImage('.popup_type_pic');

const profileValidation = new FormValidator(validationConfig, formElementEdit);
const avatarValidation = new FormValidator(validationConfig, formAvatarUpdate)
const newPlaceValidation = new FormValidator(validationConfig, formElementAdd);

const addPlaceForm = new PopupWithForm({
  popupSelector: '.popup_type_add', 
  handleSubmitForm: (placeData) => {
    addPlaceForm.renderLoading(true);
    const newPlace = {
    name: placeData.placename,
    link: placeData.placelink};
    api.postNewCard(newPlace)
      .then((cardData) => {
        const newCard = createNewCard(cardData, cardData._id);
        cardList.addItem(newCard);
      })
      .finally(() => {
        addPlaceForm.renderLoading(false);
        newPlaceValidation.disableButton();
        addPlaceForm.close();
      })    
  }});

const submitDeleteForm = new PopupWithSubmit({
  popupSelector: '.popup_type_submit-action'});

function createNewCard(item) {
  const newCard = new Card({
    data: item,
    handleCardClick: () => { handleCardClick(item) }, 
    handleLikeClick: () => {
      const cardId = newCard.getCardId();
      if(newCard.isLiked(newCard)) {
        api.dislikeCard(cardId)
          .then((res)=> {
            newCard.toggleLike();
            newCard.updateLikes(res.likes.length);
          })
          .catch((err) => {
            console.log(`Дизлайк не работает ${err}`)})
      } else {
        api.likeCard(cardId)
        .then((res)=> {
          newCard.toggleLike();
          newCard.updateLikes(res.likes.length);
        })
        .catch((err) => {
          console.log(`Лайк не работает ${err}`)
        })
      }},
    handleDeleteClick: (event) => { 
      const cardId = newCard.getCardId();
      const cardElement = event.target.closest('.element');
      submitDeleteForm.setSubmitHandler(() => {
        api.deleteCard(cardId)
          .then(() => {
            cardElement.remove();
            submitDeleteForm.close();
          })
          .catch((err) => {
            console.log(`Ошибка при удалении карточки ${err}`)
          })
      })
      submitDeleteForm.open();
    }
  }, '.element-template', userInfo.getUserInfo().id);
    const element = newCard.createCard();
    return element;
};

function handleCardClick(card) {
  photoPreview.open(card.name, card.link);
};

submitDeleteForm.setEventListeners();
userEditForm.setEventListeners();
avatarEditForm.setEventListeners();
addPlaceForm.setEventListeners();
photoPreview.setEventListeners();

profileValidation.enableValidation();
avatarValidation.enableValidation();
newPlaceValidation.enableValidation();

editAvatarButton.addEventListener('click', () => {
  avatarEditForm.open();
})

editButton.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  userEditForm.open()});

addButton.addEventListener('click', () => {addPlaceForm.open()});