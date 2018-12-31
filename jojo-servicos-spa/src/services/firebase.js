import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyANtboEsqE8yVECFbI4yKeeaerDme-KtGs",
  authDomain: "jojo-servicos.firebaseapp.com",
  databaseURL: "https://jojo-servicos.firebaseio.com",
  projectId: "jojo-servicos",
  storageBucket: "jojo-servicos.appspot.com",
  messagingSenderId: "886479688121"
};

firebase.initializeApp(config);

export default firebase;
