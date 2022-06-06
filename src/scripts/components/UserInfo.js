export default class UserInfo {
  constructor({nameSelector, aboutSelector, avatarSelector}) {
    this._userName = nameSelector;
    this._userInfo = aboutSelector;
    this._avatar = avatarSelector;
    this._name = document.querySelector(nameSelector);
    this._description = document.querySelector(aboutSelector);
    this._profilePic = document.querySelector(avatarSelector);
  }
  
  getUserInfo() {
    const userValueDefault = {};
    userValueDefault.name = this._userName;
    userValueDefault.job = this._userInfo;
    userValueDefault.id = this._id;

    return userValueDefault;
  };

  setUserInfo(newData) {
    this._userName = newData['name'];
    this._userInfo = newData['about'];
    this._avatar = newData['avatar'];
    this._id = newData['_id'];
  };

  setInitialInfo(data) {
    this._name.textContent = data.name;
    this._description.textContent = data.about;
    this._profilePic.src = data.avatar;
  }

  updateAvatar(data) {
    this._profilePic.src = data.avatar;
  }
}