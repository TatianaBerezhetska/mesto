export default class Api {
  constructor({url, userUrl, headers}) {
    this.url = url;
    this.userUrl = userUrl;
    this.headers = headers;
  }

  getUserInfo() {
    return fetch(this.userUrl, {
      headers: this.headers
    })
    .then((res) => {
      if(res.ok) {
        return Promise.resolve(res.json());
      }
    })
  }

  getCards() {
    return fetch(this.url, {
      headers: this.headers
    })
    .then((res) => {
      if(res.ok) {
        return Promise.resolve(res.json());
      }
    })
  }

  getAllData() {
    return Promise.all([this.getUserInfo(), this.getCards()]);
  }

  updateUserInfo(data) {
    return fetch(this.userUrl, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: data.username,
        about: data.job
      })
    })
    .then((res) => {
      if (res.ok) {
        return Promise.resolve(res.json());
      }
    })
  }

  updateUserAvatar(res) {
    return fetch(`${this.userUrl}/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: res.avatar,
      })
    })
      .then((res) => {
        if (res.ok) {
          return Promise.resolve(res.json());
        }
      })
  }

  postNewCard(newCard) {
    return fetch(this.url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: newCard.name,
        link: newCard.link
      })
    })
    .then((res) => {
      if (res.ok) {
        return Promise.resolve(res.json());
      }
    })
  }

  deleteCard(cardId) {
    return fetch(`${this.url}/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
      body: JSON.stringify({
        _id: cardId,
      })
    })
    .then((res) => {
      if (res.ok) {
        return Promise.resolve(res.json());
      }
    })
  }

  likeCard(cardId) {
    return fetch(`${this.url}/${cardId}/likes`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify({
        _id: cardId,
      })
    })
    .then((res) => {
      if (res.ok) {
        return Promise.resolve(res.json());
      }
    })
  }

  dislikeCard(cardId) {
    return fetch(`${this.url}/${cardId}/likes`, {
      method: 'DELETE',
      headers: this.headers,
      body: JSON.stringify({
        _id: cardId,
      })
    })
    .then((res) => {
      if (res.ok) {
        return Promise.resolve(res.json());
      }
    })
  }

}