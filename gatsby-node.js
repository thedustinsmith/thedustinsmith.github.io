exports.onCreatePage = async ({ page, boundActionCreators }) => {
    const { createPage } = boundActionCreators
  
    return new Promise((resolve, reject) => {
      if (page.path.match(/^\/resume/)) {
        page.layout = "bare"
        createPage(page)
      }
  
      resolve()
    })
  }