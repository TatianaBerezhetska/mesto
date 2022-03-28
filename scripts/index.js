const popup = document.querySelector('.popup');
const editForm = document.querySelector('.profile__edit');
const closeButton = document.querySelector('.popup__close-button');

const formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__caption');

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

function openForm() {
  popup.classList.add('popup_opened');
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

function closeForm() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
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

editForm.addEventListener('click', openForm);
closeButton.addEventListener('click', closeForm);
formElement.addEventListener('submit', formSubmitHandler);