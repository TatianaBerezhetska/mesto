export default class UserInfo {
  constructor({username, job}) {
    // console.log({username, job});//{username: h1.profile__name, job: p.profile__caption}
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
    console.log(newData['username']);
    this._userName.textContent = newData['username'];
    this._userInfo.textContent = newData['job'];
  };
}