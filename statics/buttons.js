const downloadGame = () => {
  var link = document.createElement("a");
  document.body.appendChild(link);
  link.href =
    "https://github.com/blenassefa2/Maze_1/archive/refs/heads/version3.zip";
  link.download = "Medieval_Maze";
  link.click();
};
