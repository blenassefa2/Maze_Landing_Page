const downloadGame = () => {
  var link = document.createElement("a");
  document.body.appendChild(link);
  link.href =
    "https://github.com/blenassefa2/web_project/archive/refs/heads/master.zip";
  link.download = "Medieval_Maze";
  link.click();
};
