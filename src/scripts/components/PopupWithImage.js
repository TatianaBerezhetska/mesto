import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPic = this._popup.querySelector('.popup__photo');
    this._popupCaption = this._popup.querySelector('.popup__photo-caption');
  }

  open(name, link) {
    this._popupPic.src = link;
    this._popupPic.alt = name;
    this._popupCaption.textContent = name;
    
    super.open();
  }
};