const React = require("react")
// src="https://apis.google.com/js/api.js"
const HeadComponents = [
  <script key="google-drive-api" src="https://apis.google.com/js/api.js" />,
]
exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents(HeadComponents)
}
