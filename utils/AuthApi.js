class AuthApi{
    constructor({baseUrl}){
        this._baseUrl = baseUrl;
        this._token = null;
    }

    _checkResponse(response){
      return response.json()
       .then( data => {
           if(response.ok){
               return data;
           }
           return Promise.reject(data.message || 'Что-то сломалось');
       }) 
    }

    registration({username, password}){
        return fetch(`${this._baseUrl}/auth/registr`, {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify({username, password})
        })
        .then(this._checkResponse)
    }
    login({username, password}){
        return fetch(`${this._baseUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify({username, password})
        })
        .then(this._checkResponse)
    }
    
}

export const authApi = new AuthApi({baseUrl: 'https://fast-thicket-71822.herokuapp.com'})