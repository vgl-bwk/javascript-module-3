const root = document.querySelector("#root");

const banner = document.createElement("div");
banner.classList.add("banner")
root.appendChild(banner);

const genContainer = document.createElement('div');
genContainer.classList.add("main");
root.appendChild(genContainer);

const sideBar = document.createElement("div");
genContainer.appendChild(sideBar);

const episodesUl = document.createElement("ul");
episodesUl.classList.add("episodesUl");
sideBar.appendChild(episodesUl);

const showMoreBtn = document.createElement("button");
showMoreBtn.innerText = "Load More";
sideBar.appendChild(showMoreBtn);

const mainContainer = document.createElement("div");
genContainer.appendChild(mainContainer);

const jumbotron = document.createElement("div");