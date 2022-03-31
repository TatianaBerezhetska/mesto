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

const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit');
const editForm = document.querySelector('.popup_type_edit-profile');
const addButton = document.querySelector('.profile__add');
const addForm = document.querySelector('.popup_type_add');
const pic = document.querySelector('.popup_type_pic');
const closeButtonProfile = editForm.querySelector('.popup__close-button');
const closeButtonAdd = addForm.querySelector('.popup__close-button');
const closeButtonPic = pic.querySelector('.popup__close-button');

const formElementEdit = document.querySelector('.popup__form_type_edit');
const formElementAdd = document.querySelector('.popup__form_type_add');

let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__caption');

const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template');

let popupPic = pic.querySelector('.popup__photo');
let popupCaption = pic.querySelector('.popup__photo-caption');

const like = (evt) => {
  evt.target.classList.toggle('element__like-button_active');
};

const del = (evt) => {
  evt.target.closest('.element').remove();
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

function formSubmitHandlerEdit(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(editForm);
}

initialCards.forEach(function(item) {
  const card = elementTemplate.content.querySelector('.element').cloneNode(true);
  card.querySelector('.element__description').textContent = item.name;
  card.querySelector('.element__photo').src = item.link;
  card.querySelector('.element__like-button').addEventListener('click', like);
  card.querySelector('.element__delete-button').addEventListener('click', del);
  card.querySelector('.element__photo').addEventListener('click', () => previewPicture(item.name, item.link));
  elements.append(card)
});

function createCard(placename, link) {
  const cardTemplate = elementTemplate.content;
  const newCard = cardTemplate.querySelector('.element').cloneNode(true);
  newCard.querySelector('.element__photo').src = link;
  newCard.querySelector('.element__description').textContent = placename;
  newCard.querySelector('.element__like-button').addEventListener('click', like);
  newCard.querySelector('.element__delete-button').addEventListener('click', del);
  newCard.querySelector('.element__photo').addEventListener('click', () => previewPicture(placename, link));
  return newCard;
}

function addCard (newCard, elements) {
  createCard();
  elements.prepend(newCard);
}

function formSubmitHandlerAdd(evt) {
  evt.preventDefault();
  const image = document.querySelector('.element__photo');
  const place = document.querySelector('.element__description');
  const link = document.querySelector('.popup__input_type_place-link');
  const placename = document.querySelector('.popup__input_type_place-name');
  place.textContent = placename.value;
  image.src = link.value;
  addCard(placename, link);
  closePopup(addForm);
}

function previewPicture(placename, link) {
  popupPic.src = link;
  popupCaption.textContent = placename;
  openPopup(pic);
}

editButton.addEventListener('click', () => {openPopup(editForm)});
addButton.addEventListener('click', () => {openPopup(addForm)});
closeButtonProfile.addEventListener('click', () => {closePopup(editForm)});
closeButtonAdd.addEventListener('click', () => {closePopup(addForm)});
closeButtonPic.addEventListener('click', () => {closePopup(pic)});
formElementEdit.addEventListener('submit', formSubmitHandlerEdit);
formElementAdd.addEventListener('submit', formSubmitHandlerAdd);