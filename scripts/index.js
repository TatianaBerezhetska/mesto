let popup = document.querySelector('.popup');
let editForm = document.querySelector('.profile__edit');
let closeButton = document.querySelector('.popup__close-button');

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__caption');

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

editForm.addEventListener('click', openForm);
closeButton.addEventListener('click', closeForm);
formElement.addEventListener('submit', formSubmitHandler);