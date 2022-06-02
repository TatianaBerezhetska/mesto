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
}

//Примерная струкура класса указана у вас в ТЗ, но если говорить о конкретных методах которые должен осуществлять данный класс, то это:
// 
// удалить карточку (DELETE)
// заменить аватар (PATCH)
// “залайкать” карточку (PUT)
// удалить лайк карточки (DELETE)