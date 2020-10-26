const fs = require("fs")
const { google } = require("googleapis")

class GoogleDriveAPI {
  constructor(scopes) {
    this.scopes = scopes || [
      "https://www.googleapis.com/auth/drive.metadata.readonly",
    ]
    this.tokepath = ""
  }
  init() {
     
  }
  authorize(credentials, callback){
      const {client_secret, client_id, redirect_urls} = credentials.installed
  }
}
