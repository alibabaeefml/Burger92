// use local storage as database
const db = window.localStorage;

// create users value
if (!db.users) {
    db.users = '[]';
    db.signedIn = null;
}

export { db };