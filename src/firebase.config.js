import {getApp,getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBJYOCDxAatflV5YK24ilDRpI3CDwrOHyQ",
    authDomain: "restaurnatapp.firebaseapp.com",
    databaseURL: "https://restaurnatapp-default-rtdb.firebaseio.com",
    projectId: "restaurnatapp",
    storageBucket: "restaurnatapp.appspot.com",
    messagingSenderId: "735935803600",
    appId: "1:735935803600:web:9474efdf9c9c99cf6b2ed5"
  };

  const app = getApps.length>0 ? getApp() : initializeApp(firebaseConfig); //barbar jno firebase initialize na hoy....

  const db = getFirestore(app);
  const storage = getStorage(app);
  export {app,db,storage};