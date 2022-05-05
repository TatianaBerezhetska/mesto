import Card from './Card.js';
import { initialCards } from './initial.js';
import { validationConfig } from './initial.js';
import { disableButton } from './FormValidator.js';
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

export function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupByEsc);
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupByEsc);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(editForm);
}

initialCards.forEach((item) => {
  const card = new Card(item, '.element-template');
  const cardElement = card.createCard();
  elements.append(cardElement);
});

function addCard (newCard, elements) {
  const addedCard = new Card(newCard, '.element-template');
  const newElement = addedCard.createCard();
  elements.prepend(newElement);
};

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {};
  newCard.name = inputPlacename.value,
  newCard.link = inputLink.value;
  addCard(newCard, elements);
  event.target.reset();
  disableButton(event.target.querySelector('.popup__submit-button'));
  closePopup(addForm);
}

function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

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

const profileValidation = new FormValidator(validationConfig, formElementEdit);
const newPlaceValidation = new FormValidator(validationConfig, formElementAdd);

profileValidation.enableValidation();
newPlaceValidation.enableValidation();

editButton.addEventListener('click', () => {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  openPopup(editForm)});
addButton.addEventListener('click', () => {openPopup(addForm)});
formElementEdit.addEventListener('submit', handleProfileFormSubmit);
formElementAdd.addEventListener('submit', handleAddFormSubmit);