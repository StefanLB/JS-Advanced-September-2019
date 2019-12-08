function createArticle() {
	let input = document.getElementById("createTitle");
	let textarea = document.getElementById("createContent");
    let articles = document.getElementById("articles");

    if (!input.value || !textarea.value){
        return;
    }

    let article = document.createElement("article");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");

    articles.appendChild(article);

    article.appendChild(h3);
    article.appendChild(p);

    h3.innerHTML = input.value;
	p.innerHTML = textarea.value;

    input.value = "";
    textarea.value = "";
}