import firebase from 'firebase/app';
import {FIREBASE_CONFIG} from '../utils/apiKey';
import '@firebase/firestore'
import 'firebase/auth';
import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook'


const config = FIREBASE_CONFIG;
if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email, photoURL} = userAuth;
        const createAt = new Date();
        const teams = [];
        let username = null;
        if(displayName == null) {
            username = additionalData
        } else {
            username = displayName;
        }
        try{
            await userRef.set({
                username,
                email,
                createAt,
                photoURL,
                teams
            })
        }catch(error) {
            console.log(error.message);
        }
    }
}

export const getUserInfo = async(userAuth) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  const currentUser = await snapShot.data();
  return currentUser;
}

export const signInWithEmail = async(email, password, onLoginSuccess, onLoginFail) => {
    try {
        const {user} = await auth.signInWithEmailAndPassword(email, password);
        createUserProfileDocument(user);
        onLoginSuccess();
    } catch(error) {
        console.log(error);
        onLoginFail();
    }
}

export const signUpWithEmailAndPassword = async(username, email, password, onSignFail, onSignSuccess) => {
    try {
        const {user} = await auth.createUserWithEmailAndPassword(email, password);
        createUserProfileDocument(user, username);
        onSignSuccess();
    } catch(error) {
        onSignFail();
    }
}

export const getTeamsSchdule = async() => {
  const teamList = [];
  const querySnapshot = await firestore.collection(`teams`).get();
  await Promise.all(
    querySnapshot.docs.map(doc => {
      const {uid, name, owner, teamSchdule, teamMembers} = doc.data();
      teamList.push({
        uid,
        name,
        owner,
        teamMembers,
        teamSchdule
      });
    })
  )
  return teamList;
}

export const signInWithGoogle = async() => {
  try {
      const result = await Google.logInAsync({
        behavior: 'web',
        iosClientId: '607235581955-680ovct6c91cvaor1esb64a5bvb92hh8.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
      if (result.type === 'success') {
          const { idToken, accessToken } = result;
          const credential = glProvider.credential(idToken,accessToken);
          
          auth
            .signInAndRetrieveDataWithCredential(credential)
            .catch(e => {
              console.log('firebase cred err:', e.message);
            });
        } else {
          return { cancelled: true };
        }
      } catch (e) {
        console.log('err:', e);
      }
  }

export const signInWithFacebook = async () => {
  try {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      '513604656149000',
      {behavior: 'web', permissions: ['public_profile', 'email'] }
    )

    if (type === 'success') {
      const credential = fbProvider.credential(token)
      auth.signInAndRetrieveDataWithCredential(credential)
      .then(res => {
          console.log("loggedIn:",res);
        })
      .catch((e) => console.log(e))
    }
    else {
      return { cancelled: true }
    }
  }
  catch (e) {
    console.log('err:', e);
  }
}

export const postSchedule = async() => {
  try {

  } catch(err) {

  }
}
    
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const glProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();
glProvider.setCustomParameters({ prompt: 'select_account' });

export default firebase;