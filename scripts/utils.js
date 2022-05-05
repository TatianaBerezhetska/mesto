export function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupByEsc);
}

export function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupByEsc);
}

export function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};