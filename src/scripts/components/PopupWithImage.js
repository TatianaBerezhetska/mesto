import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    
  }

  open(name, link) {
    const popupPic = this._popup.querySelector('.popup__photo');
    const popupCaption = this._popup.querySelector('.popup__photo-caption')
    popupPic.src = link;
    popupPic.alt = name;
    popupCaption.textContent = name;
    
    super.open();
  }
};