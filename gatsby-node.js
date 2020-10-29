const path = require(`path`)
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      mainFields: ["browser", "module", "main"],
    },
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  if (page.path === "/") {
    page.matchPath = "/*"
    createPage(page)
  }
}
