import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyDrNqVAklGxigGS7-me7JREsS_dyD81PMc',
  authDomain: 'infaste-app.firebaseapp.com',
  databaseURL: 'https://infaste-app.firebaseio.com',
  projectId: 'infaste-app',
  storageBucket: 'infaste-app.appspot.com',
  messagingSenderId: '156589907879',
  appId: '1:156589907879:web:bb859257e3ba3c3b2b6082',
  measurementId: 'G-2QWKNQJNEG',
};

firebase.initializeApp(config);

export const createUserDocument = async (userAuth: any, addData?: any) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const role_id: number = 2;
    try {
      await userRef.set({
        username: displayName,
        email,
        createdAt,
        role_id,
        ...addData
      });
    } catch (error) {
      console.log('ユーザーの作成に失敗しました');
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
