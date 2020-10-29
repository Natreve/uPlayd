import localforage from "localforage"
import firebase from "gatsby-plugin-firebase"

class Auth {
  static async loginWithGoogle() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope("https://www.googleapis.com/auth/drive.file")
      const data = await firebase.auth().signInWithPopup(provider)
      const token = data.credential.accessToken
      const user = data.user
      localforage.setItem("user", { uid: user.uid, token })
      return { uid: user.uid, token }
    } catch (error) {
      const code = error.code
      const message = error.message
      const email = error.email
      const credential = error.credential
      return { code, message, email, credential }
    }
  }
  static logout() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        console.log("User signed out")
      })
      .catch(function (error) {
        // An error happened.
        console.log("Error siging out user")
      })
  }
}

export default Auth
