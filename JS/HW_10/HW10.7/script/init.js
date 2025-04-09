function addToLocalStorage(localKey, obj) {
    let result = JSON.parse(localStorage.getItem(localKey));
    result.push(obj);
    localStorage.setItem(localKey, JSON.stringify(result));
}

let arr = ['data_string', 'data_int' ];
localStorage.setItem('data', JSON.stringify(arr));


let objectToAdd = {
    session: 'data_session',
    username: 'username',
    token: 'token'
};

addToLocalStorage('data', objectToAdd);

console.log(JSON.parse(localStorage.getItem('data')));

newObjectToAdd = {
    country : "Ukraine",
    language:'english'
};

addToLocalStorage('data', newObjectToAdd);

console.log(JSON.parse(localStorage.getItem('data')));


