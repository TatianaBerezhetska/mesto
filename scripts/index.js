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
nameInput.value = name.textContent;
jobInput.value = job.textContent;

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

initialCards.forEach(function(item) {
  elements.append(createCard(item))
});

function createCard(item) {
  const cardTemplate = elementTemplate.content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const photoElement = cardElement.querySelector('.element__photo');
  
  photoElement.src = item.link;
  photoElement.alt = item.name;
  cardElement.querySelector('.element__description').textContent = item.name;

  cardElement.querySelector('.element__like-button').addEventListener('click', like);
  cardElement.querySelector('.element__delete-button').addEventListener('click', del);
  photoElement.addEventListener('click', () => previewPicture(item));
  return cardElement;
}

function addCard (newCard, elements) {
  let newElement = createCard(newCard);
  elements.prepend(newElement);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {};
  newCard.name = inputPlacename.value,
  newCard.link = inputLink.value;
  addCard(newCard, elements);
  event.target.reset();
  closePopup(addForm);
}

function previewPicture(item) {
  popupPic.src = item.link;
  popupPic.alt = item.name;
  popupCaption.textContent = item.name;
  openPopup(pic);
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

editButton.addEventListener('click', () => {openPopup(editForm)});
addButton.addEventListener('click', () => {openPopup(addForm)});
formElementEdit.addEventListener('submit', handleProfileFormSubmit);
formElementAdd.addEventListener('submit', handleAddFormSubmit);