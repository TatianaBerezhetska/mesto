const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit');
const editForm = document.querySelector('.popup_type_edit-profile');
const addButton = document.querySelector('.profile__add');
const addForm = document.querySelector('.popup_type_add');
const closeButton = document.querySelector('.popup__close-button');

let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__caption');
let placeInput = document.querySelector('.popup__input_type_place-name');
let placeLink = document.querySelector('.popup__input_type_place-link');

const image = document.querySelector('.element__photo');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template');

function openPopup(elementToPopup) {
  popup.classList.add('popup_opened');
}

function closePopup(elementToPopup) {
  popup.classList.remove('popup_opened');
}

function formSubmitHandlerEdit (evt) {
  evt.preventDefault();

  name.textContent = nameInput.value;
  job.textContent = jobInput.value;

  closeForm();
}

initialCards.forEach(function(item) {
  const card = elementTemplate.content.querySelector('.element').cloneNode(true);
  card.querySelector('.element__description').textContent = item.name;
  card.querySelector('.element__photo').src = item.link;
  
  elements.append(card)
});

function createCard(card) {
  const newCard = elementTemplate.content.querySelector('.element').cloneNode(true);
  // card.querySelector('.element__description').textContent = INPUT;
  // card.querySelector('.element__photo').src = INPUT;
  const likeButton = document.querySelector('.element__like-button');
  // likeButton.addEventListener('click', like);
  // const deleteButton = 
  // deleteButton.addEventListener('click', deleteCard);
  // image.addEventListener('click', openPopup);
}

function like() {}

function deleteCard() {}

editButton.addEventListener('click', openPopup);
addButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElementEdit.addEventListener('submit', formSubmitHandlerEdit);
