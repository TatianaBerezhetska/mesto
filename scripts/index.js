import Card from './Card.js';
import { initialCards } from './initial.js';
import { openPopup } from './utils.js';
import { closePopup } from './utils.js';

import { validationConfig } from './initial.js';
import FormValidator from './FormValidator.js';

export const formElementEdit = document.querySelector('.popup__form_type_edit');
export const formElementAdd = document.querySelector('.popup__form_type_add');

const popups = document.querySelectorAll('.popup');
const editButton = document.querySelector('.profile__edit');
const editForm = document.querySelector('.popup_type_edit-profile');
const addButton = document.querySelector('.profile__add');
const addForm = document.querySelector('.popup_type_add');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__caption');

const inputLink = document.querySelector('.popup__input_type_place-link');
const inputPlacename = document.querySelector('.popup__input_type_place-name');

const elements = document.querySelector('.elements');

const profileValidation = new FormValidator(validationConfig, formElementEdit);
const newPlaceValidation = new FormValidator(validationConfig, formElementAdd);

profileValidation.enableValidation();
newPlaceValidation.enableValidation();

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(editForm);
}

function createNewCard(item) {
  const card = new Card(item, '.element-template');
  const cardElement = card.createCard();
  return cardElement;
};

initialCards.forEach((item) => {
  elements.append(createNewCard(item));
});

function addCard (newCard, elements) {
  elements.prepend(createNewCard(newCard));
};

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {};
  newCard.name = inputPlacename.value,
  newCard.link = inputLink.value;
  addCard(newCard, elements);
  event.target.reset();
  newPlaceValidation.disableButton();
  closePopup(addForm);
}

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
     if (evt.target.classList.contains('popup__close-button')) {
        closePopup(popup);
      }
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup);
    }
  });
});

editButton.addEventListener('click', () => {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  openPopup(editForm)});
addButton.addEventListener('click', () => {openPopup(addForm)});
formElementEdit.addEventListener('submit', handleProfileFormSubmit);
formElementAdd.addEventListener('submit', handleAddFormSubmit);