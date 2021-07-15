const KEY_AUTH = 'AIzaSyCvwn_y6C4e8ZARMmVzWSXlRQr37A7Dtfk';
const URL_AUTH = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY_AUTH}`;

export function authWithEmailAndPassword(email, password) {  
  try {
    return fetch(`${URL_AUTH}`, {
      method: 'POST',
      body: JSON.stringify({
        email, 
        password,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if(response.registered) {
          return alert('Thank you for registration!');
        } return alert('Your login or password is invalid, please try again!');
      })
    } catch(error)  {            
      console.log(`Ошбика + ${error}`);
    };    
}

// email: e@mail.ru; password: 123456 - для проверки валидности
