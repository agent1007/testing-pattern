class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  };

  _requestResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      }
    })
      .then((res) => this._requestResult(res))
  }

  getResultats() {
    return fetch(`${this._baseUrl}/resultats`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      }
    })
      .then((res) => this._requestResult(res))
  }

  getUsers() {
    return fetch(`${this._baseUrl}/users`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      }
    })
      .then((res) => this._requestResult(res))
  }

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      }
    })
      .then((res) => this._requestResult(res))
  }

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        author: data.author,
        titleRu: data.titleRu,
        titleDeu: data.titleDeu,
        link: data.link
      })
    })
      .then((res) => this._requestResult(res))
  }

  addResultats(data) {
    return fetch(`${this._baseUrl}/resultats`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nameTest: data.nameTest,
        nameUser: data.nameUser,
        resultat: data.resultat,
      })
    })
      .then((res) => this._requestResult(res))
  }

  

  removeCard(data) {
    return fetch(`${this._baseUrl}/cards/${data._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      }
    })
      .then((res) => this._requestResult(res))
  }


  addCardLike(id) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((res) => this._requestResult(res))
  }

  deleteCardLike(id) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((res) => this._requestResult(res))
  }

  editProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    })
      .then((res) => this._requestResult(res))
  }

  editCard(data) {
    return fetch(`${this._baseUrl}/cards/${data._id}`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        titleRu: data.titleRu,
        titleDeu: data.titleDeu,
        link: data.link
      })
    })
      .then((res) => this._requestResult(res))
  }

  changeUserAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then((res) => this._requestResult(res))
  }

}

const api = new Api({
  baseUrl: 'http://localhost:3000'
})


export default api;