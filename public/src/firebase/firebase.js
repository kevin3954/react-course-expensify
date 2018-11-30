import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyCnhyF5bFBqNNIg0iWUdlfi8dpXGihpJl0",
    authDomain: "expensify-3954.firebaseapp.com",
    databaseURL: "https://expensify-3954.firebaseio.com",
    projectId: "expensify-3954",
    storageBucket: "expensify-3954.appspot.com",
    messagingSenderId: "586483588330"
};

firebase.initializeApp(config);

const db = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, db as default};

/*
//subscribe to changes
db.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
});

setTimeout(() => {
    db.ref('age').set(97);
}, 3500)

db.ref('name')
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((e) => {
        console.log('this failed: ', e)
    })


db.ref().set({
    name: 'Kevin Alley',
    age: 46,
    isSingle: false,
    location: {
        city: 'Grovetown',
        country: 'GA'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('this failed: ', e)
});

db.ref().update({
    name: 'Briana',
    age: 32
}).then(() => {
    console.log('data was updated');
}).catch((e) => {
    console.log('this failed: ', e)
});

//remove data
db.ref('isSingle')
    .remove()
    .then(() => {
        console.log('data was removed');
    }).catch((e) => {
        console.log('This failed: ', e)
});

//this also deletes everything
db.ref('isSingle').set(null);
*/
