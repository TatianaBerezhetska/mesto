let popup = document.querySelector('.popup');
let editForm = document.querySelector('.profile__edit');
let closeButton = document.querySelector('.popup__close-button');

function openForm() {
  popup.classList.add('popup_opened');
}

editForm.addEventListener('click', openForm);

function closeForm() {
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closeForm);

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__caption');

function formSubmitHandler (evt) {
  evt.preventDefault();
  
  nameInput = document.querySelector('.popup__name').value;
  jobInput = document.querySelector('.popup__caption').value;

  let name = document.querySelector('.profile__name');
  let job = document.querySelector('.profile__caption');
  name.textContent = nameInput;
  job.textContent = jobInput;

  closeForm();
}

formElement.addEventListener('submit', formSubmitHandler);