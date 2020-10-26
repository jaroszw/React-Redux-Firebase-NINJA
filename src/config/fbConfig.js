import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyAfn7JyXoCY9AabFyjAJGsc8DTae31cEYI',
  authDomain: 'ninja-project2-a55fd.firebaseapp.com',
  databaseURL: 'https://ninja-project2-a55fd.firebaseio.com',
  projectId: 'ninja-project2-a55fd',
  storageBucket: 'ninja-project2-a55fd.appspot.com',
  messagingSenderId: '746548298132',
  appId: '1:746548298132:web:3fcb931b0fa48e49800f81',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
