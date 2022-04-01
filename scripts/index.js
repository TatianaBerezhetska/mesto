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

const popups = document.querySelectorAll('.popup');
const editButton = document.querySelector('.profile__edit');
const editForm = document.querySelector('.popup_type_edit-profile');
const addButton = document.querySelector('.profile__add');
const addForm = document.querySelector('.popup_type_add');
const pic = document.querySelector('.popup_type_pic');

const formElementEdit = document.querySelector('.popup__form_type_edit');
const formElementAdd = document.querySelector('.popup__form_type_add');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__caption');

const inputLink = document.querySelector('.popup__input_type_place-link');
const inputPlacename = document.querySelector('.popup__input_type_place-name');

const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template');

const popupPic = pic.querySelector('.popup__photo');
const popupCaption = pic.querySelector('.popup__photo-caption');

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

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(editForm);
}

initialCards.forEach(function(item) {
  elements.append(createCard(item))
});

function createCard(item) {
  const cardTemplate = elementTemplate.content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  
  cardElement.querySelector('.element__photo').src = item.link;
  cardElement.querySelector('.element__photo').alt = item.name;
  cardElement.querySelector('.element__description').textContent = item.name;

  cardElement.querySelector('.element__like-button').addEventListener('click', like);
  cardElement.querySelector('.element__delete-button').addEventListener('click', del);
  cardElement.querySelector('.element__photo').addEventListener('click', () => previewPicture(item));
  return cardElement;
}

function addCard (newCard, elements) {
  const newElement = createCard(newCard);
  elements.prepend(newElement);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {};
  newCard.name = inputPlacename.value,
  newCard.link = inputLink.value;
  addCard(newCard, elements);
  inputPlacename.value = "";
  inputLink.value = "";
  closePopup(addForm);
}

function previewPicture(item) {
  popupPic.src = item.link;
  popupPic.alt = item.name;
  popupCaption.textContent = item.name;
  openPopup(pic);
}

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
     if (evt.target.classList.contains('popup__close-button')) {
        closePopup(popup)
      }
  })
})

editButton.addEventListener('click', () => {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  openPopup(editForm)});
addButton.addEventListener('click', () => {openPopup(addForm)});
formElementEdit.addEventListener('submit', handleProfileFormSubmit);
formElementAdd.addEventListener('submit', handleAddFormSubmit);