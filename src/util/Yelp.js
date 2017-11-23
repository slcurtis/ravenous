const clientId = 'dIo-9wvl73falrC8CJ2A7g';
const secret = 'qBNr2bHgBmAnHumfDHeK8y3LI6ZsCaIZt4u9UrpIqIenSD1dDShLY1svZQ47R5qQ';

let accessToken = '';

const Yelp = {
  getAccessToken() {
    if (accessToken) {
      return new Promise(resolve => resolve(accessToken));
    }
      return fetch(`https://cors-anywhere.herokuapp.com/api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`), {
        {method: 'POST',
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        accessToken = jsonResponse.access_token;
      })
  }
},
}
