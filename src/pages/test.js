import React, { useState } from "react"

const Test = () => {
  if (typeof window !== "undefined") gapi = window.gapi
  // const [apiKey, setApiKey] = useState("")
  // const [clientId, setClientId]= useState("")
  const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
  ]
  const SCOPES = "https://www.googleapis.com/auth/drive.metadata.readonly"
  const [authBtnDisabled, setAuthBtnDisabled] = useState(true)
  const [signoutBtnDisabled, setSignoutBtnDisabled] = useState(true)

  const updateSigninStatus = isSignedIn => {
    if (isSignedIn) {
      setAuthBtnDisabled(false)
      setSignoutBtnDisabled(false)
      //listFiles()
    } else {
      setAuthBtnDisabled(true)
      setSignoutBtnDisabled(true)
    }
  }
  const initClient = () => {
    const clientId = document.querySelector("[name='clientID']").value
    const apiKey = document.querySelector("[name='apikey']").value

    gapi.load("client:auth2", async () => {
      try {
        await gapi.client.init({
          apiKey: "AIzaSyD9rWbKsR7jPHQO5YfGUwMWxHEUxGP9WUs",
          clientId:
            "100858574819-f6kcfu6bbkh6vi06jlofuvapc1mn3j9j.apps.googleusercontent.com",
          // apiKey: apiKey,
          // clientId: clientId,
          dicvoeryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        })
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus)
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
      } catch (error) {
        appendPre(JSON.stringify(error, null, 2))
      }
    })
  }
  const handleAuthClick = event => {
    gapi.auth2.getAuthInstance().signIn()
  }
  const handleSignoutClick = event => {
    gapi.auth2.getAuthInstance().signOut()
  }
  const appendPre = message => {
    var pre = document.getElementById("content")
    var textContent = document.createTextNode(message + "\n")
    pre.appendChild(textContent)
  }
  return (
    <div>
      <label htmlFor="clientID">
        CLIENT ID:
        <input name="clientID" placeholder="Enter Client ID" />
      </label>
      <br />
      <br />
      <label htmlFor="apikey">
        API KEY:
        <input name="apikey" placeholder="Enter API KEY" />
      </label>
      <br />
      <br />
      <button onClick={initClient}>Varify Google Drive API</button>
      <br />
      <br />
      <hr />
      <p>
        If values are varified successully authentication button & signout
        button will appear active
      </p>
      <button id="authBtn" disabled={authBtnDisabled} onClick={handleAuthClick}>
        Authorize
      </button>
      <button
        id="signoutBtn"
        disabled={signoutBtnDisabled}
        onClick={handleSignoutClick}
      >
        Sign Out
      </button>
      <pre id="content" style={{ whiteSpace: "pre-wrap" }}></pre>
    </div>
  )
}
export default Test
