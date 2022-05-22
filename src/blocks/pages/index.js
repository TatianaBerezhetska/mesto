import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import { initialCards } from '../scripts/initial.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';

import { validationConfig } from '../scripts/initial.js';
import FormValidator from '../scripts/components/FormValidator.js';

export const formElementEdit = document.querySelector('.popup__form_type_edit');
export const formElementAdd = document.querySelector('.popup__form_type_add');

const editButton = document.querySelector('.profile__edit');
const addButton = document.querySelector('.profile__add');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const username = document.querySelector('.profile__name');
const job = document.querySelector('.profile__caption');

const userInfo = new UserInfo({username, job});

const userEditForm = new PopupWithForm({
  popupSelector: '.popup_type_edit-profile', 
  handleSubmitForm: (profileData) => {
    userInfo.setUserInfo(profileData);
    userEditForm.close();
  }
});

const photoPreview = new PopupWithImage('.popup_type_pic');

const profileValidation = new FormValidator(validationConfig, formElementEdit);
const newPlaceValidation = new FormValidator(validationConfig, formElementAdd);

const cardList = new Section({ data: initialCards, renderer: (item) => {
  const card = new Card(item, '.element-template', () => {
    photoPreview.open(item.name, item.link);
    photoPreview.setEventListeners();
  });
  const cardElement = card.createCard();
  return cardElement;
}}, '.elements');

const addPlaceForm = new PopupWithForm({
  popupSelector: '.popup_type_add', 
  handleSubmitForm: (placeData) => {
    const newPlace = {
    name: placeData.placename,
    link: placeData.placelink};
    const addedCard = new Card(newPlace, '.element-template', () => {
      photoPreview.open(newPlace.name, newPlace.link);
      photoPreview.setEventListeners();
    });
    cardList.addItem(addedCard.createCard());
    
    newPlaceValidation.disableButton();
    addPlaceForm.close();
  }});

cardList.renderItems();
userEditForm.setEventListeners();
addPlaceForm.setEventListeners();

profileValidation.enableValidation();
newPlaceValidation.enableValidation();

editButton.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  userEditForm.open()});

addButton.addEventListener('click', () => {addPlaceForm.open()});