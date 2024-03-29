import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'


const config = {
  apiKey: "AIzaSyAJL-9kvahXg_z-k-4ZDJ-ZTrvz3OTrzbA",
  authDomain: "stokopname.firebaseapp.com",
  databaseURL: "https://stokopname.firebaseio.com",
  projectId: "stokopname",
  storageBucket: "stokopname.appspot.com",
  messagingSenderId: "179482782298",
  appId: "1:179482782298:web:5008e39deb208075"
};


class Firebase
{


constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
    this.Googleprovider = new app.auth.GoogleAuthProvider();
	}

login (){
  
  return this.auth.signInWithRedirect(this.Googleprovider)
}

logout(){
  return this.auth.signOut()
}
}


export default new Firebase()
