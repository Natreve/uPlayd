
class GoogleDrive {
  constructor(clientID, apiKey) {
    this.clientID = clientID
    this.apiKey = apiKey
    this.discoveryDocs = [
      "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
    ]
    this.scope = "https://www.googleapis.com/auth/drive.metadata.readonly'"
  }
  
}
