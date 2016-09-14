function index(req, res) {
  res.json({
    message: "Welcome to tunely!",
    documentation_url: "https://github.com/tgaff/tunely/api.md",
    base_url: "http://tunely.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

function templates(req, res) {
  var name = req.params.name;
  var templateFilePath = __dirname.replace(/controllers$/, 'views/templates/') + name + '.html';
  res.sendFile(templateFilePath);

}

module.exports.index = index;
module.exports.templates = templates;
