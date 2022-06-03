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
    .catch((err) => {
      console.log(`Данные пользователя не получены: ${err}`);
    });
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
    .catch((err) => {
      console.log(`Массив карточек не получен: ${err}`);
    });
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
    });
  }

//   updateUserAvatar(data) {
//     fetch(`${this.userUrl}/me`, {
//     method: 'PATCH',
//     headers: this.headers,
//     body: JSON.stringify({
//       avatar: '',
//   })
// });
//   }

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
    .catch((err) => {
      console.log(`Ошибка добавления новой карточки: ${err}`);
    });
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
    .catch((err) => {
      console.log(`Ошибка удаления карточки: ${err}`);
    });
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
    .catch((err) => {
      console.log(`Ошибка лайка карточки: ${err}`);
    });
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
    .catch((err) => {
      console.log(`Ошибка лайка карточки: ${err}`);
    });
  }

}

// заменить аватар (PATCH)
// “залайкать” карточку (PUT)
// удалить лайк карточки (DELETE)