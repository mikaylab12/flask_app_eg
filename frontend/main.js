fetch('https://evening-hamlet-43938.herokuapp.com/auth', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"username": "Mikayla", "password": "1234"})
}).then(res => res.json())
  .then(res => {
            console.log(res);
            myStorage = window.localStorage;
            console.log(res["access_token"]);
            myStorage.setItem("jwt-token", res["access_token"]);
   });