export default class UserInfo {
  constructor({username, job}) {
    this._userName = username;
    this._userInfo = job;
  }
  
  getUserInfo() {
    const userValueDefault = {};
    userValueDefault.name = this._userName.textContent;
    userValueDefault.job = this._userInfo.textContent;

    return userValueDefault;
  };

  setUserInfo(newData) {
    this._userName.textContent = newData['username'];
    this._userInfo.textContent = newData['job'];
  };
}