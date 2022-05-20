import Card from './Card.js';
import Section from './Section.js';
import { initialCards } from './initial.js';
import UserInfo from './UserInfo.js';
import { PopupWithForm } from './Popup.js';
import { PopupWithImage } from './Popup.js';

import { validationConfig } from './initial.js';
import FormValidator from './FormValidator.js';

export const formElementEdit = document.querySelector('.popup__form_type_edit');
export const formElementAdd = document.querySelector('.popup__form_type_add');

const editButton = document.querySelector('.profile__edit');
const addButton = document.querySelector('.profile__add');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const username = document.querySelector('.profile__name');
const job = document.querySelector('.profile__caption');

// const inputLink = document.querySelector('.popup__input_type_place-link');
// const inputPlacename = document.querySelector('.popup__input_type_place-name');

const elements = document.querySelector('.elements');

const userInfo = new UserInfo({username, job});

const userEditForm = new PopupWithForm('.popup_type_edit-profile', {
  handleProfileFormSubmit: (profileData) => {
    userInfo.setUserInfo(profileData);
    userEditForm.close();
  }
});

const addPlaceForm = new PopupWithForm('.popup_type_add', handleAddFormSubmit);

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {};
  newCard.name = inputPlacename.value,
  newCard.link = inputLink.value;
  // const newAddedCard = new Section({data: newCard, renderer: (item) => {
  //   const card = new Card(item, '.element-template');
  //   const cardElement = card.createCard();
  //   return cardElement;
  // }}, '.elements');
  // newAddedCard.addItem();
  addCard(newCard, elements);
  event.target.reset();
  newPlaceValidation.disableButton();
  addPlaceForm.close();
}

const photoPreview = new PopupWithImage('.popup_type_pic');

const profileValidation = new FormValidator(validationConfig, formElementEdit);
const newPlaceValidation = new FormValidator(validationConfig, formElementAdd);

userEditForm.setEventListeners();
addPlaceForm.setEventListeners();

profileValidation.enableValidation();
newPlaceValidation.enableValidation();

// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();
//   name.textContent = nameInput.value;
//   job.textContent = jobInput.value;
//   userEditForm.close();
// }

// function createNewCard(item) {
//   const card = new Card(item, '.element-template');
//   const cardElement = card.createCard();
//   return cardElement;
// };

// function addCard (newCard, elements) {
//   elements.prepend(createNewCard(newCard));
// };

const newItem = new Section({ data: initialCards, renderer: (item) => {
  const card = new Card(item, '.element-template', {
    handleCardClick: () => {
      photoPreview.open();
    }});
  const cardElement = card.createCard();
  return cardElement;
}}, '.elements');

newItem.renderItems();

editButton.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  userEditForm.open()});

addButton.addEventListener('click', () => {addPlaceForm.open()});