function gotoGoogle() {
  const query = document.getElementById("search").value;
  open("https://www.google.com/search?q=" + query);
}

function gotoBlog() {
  open("https://velog.io/@ketchup0211/posts");
}

function gotoGitHub() {
  open("https://github.com/ketchup0211");
}
function main() {
  const search = document.getElementById("search");
  search.addEventListener("keyup", (event) => {
    if (event.key === "Enter") gotoGoogle();
  });

  const blog = document.getElementById("blog");
  blog.addEventListener("click", gotoBlog);

  const github = document.getElementById("github");
  github.addEventListener("click", gotoGitHub);
}

main();
