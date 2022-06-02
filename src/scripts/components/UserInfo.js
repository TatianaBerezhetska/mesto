export default class UserInfo {
  constructor({name, about, avatar}) {
    this._userName = name;
    this._userInfo = about;
    this._avatar = avatar;
    this._name = document.querySelector('.profile__name');
    this._description = document.querySelector('.profile__caption');
    this._profilePic = document.querySelector('.profile__pic');
  }
  
  getUserInfo() {
    const userValueDefault = {};
    userValueDefault.name = this._userName;
    userValueDefault.job = this._userInfo;

    return userValueDefault;
  };

  setUserInfo(newData) {
    this._userName = newData['name'];
    this._userInfo = newData['about'];
    this._avatar = newData['avatar'];
  };

  setInitialInfo(data) {
    this._name.textContent = data.name;
    this._description.textContent = data.about;
    this._profilePic.src = data.avatar;
  }
}