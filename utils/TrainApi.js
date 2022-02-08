class TrainApi{
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
             return Promise.reject(`${data.message}&${response.status}` || 'Что-то сломалось');
         }) 
      }

    setToken(token){
        this._token = token;
    }

    getUserName(){
        return fetch(`${this._baseUrl}/user`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${this._token}`
            }
        })
        .then(this._checkResponse)
    }

    getTrains(){
        return fetch(`${this._baseUrl}/trains`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${this._token}`
            }
        })
        .then(this._checkResponse)
    }
    getTrainById(id){
        return fetch(`${this._baseUrl}/trains/train/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${this._token}`
            }
        })
        .then(this._checkResponse)
    }

    getUserTrains(){
        return fetch(`${this._baseUrl}/my-trains/`, {
            method: 'GET',
            headers:{
                'Content-type': 'application/json',
                'Authorization': `Bearer ${this._token}`
            }
        })
        .then(this._checkResponse)
    }
    deleteTrain({trainId}){
        return fetch(`${this._baseUrl}/my-trains/delete`, {
            method: 'DELETE',
            headers:{
                'Content-type': 'application/json',
                'Authorization': `Bearer ${this._token}`
            },
            body: JSON.stringify({trainId})
        })
        .then(this._checkResponse)
    }
    addTrain({trainId}){
        return fetch(`${this._baseUrl}/my-trains/add`, {
            method: 'POST',
            headers:{
                'Content-type': 'application/json',
                'Authorization': `Bearer ${this._token}`
            },
            body: JSON.stringify({trainId})
        })
        .then(this._checkResponse)
    }
}


export const trainApi = new TrainApi({baseUrl: 'https://fast-thicket-71822.herokuapp.com'});