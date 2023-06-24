import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyAfBhfvarPFWdIHOSgIvTO58DcrSl2Uzuw",
//   authDomain: "askcuiauth.firebaseapp.com",
//   projectId: "askcuiauth",
//   storageBucket: "askcuiauth.appspot.com",
//   messagingSenderId: "204603338663",
//   appId: "1:204603338663:web:67a42568ec459a40175082",
//   measurementId: "G-GWWRVT60KS",
// };
const firebaseConfig = {
  apiKey: "AIzaSyBq5LnxtqcUHGDWPAm7Y5Oku5-BYLbm5YM",
  authDomain: "askcui-985f2.firebaseapp.com",
  projectId: "askcui-985f2",
  storageBucket: "askcui-985f2.appspot.com",
  messagingSenderId: "399328789441",
  appId: "1:399328789441:web:eb709b1d24aa0e2229e540",
  measurementId: "G-QGFK53XPFB",
};
const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
export const auth = getAuth(firebaseApp);
//const analytics = getAnalytics(app);
export const provider = new GoogleAuthProvider(firebaseApp);
export const db = getDatabase(firebaseApp);
export const storage = getStorage(firebaseApp);
// export { auth, provider };
//export default db;
