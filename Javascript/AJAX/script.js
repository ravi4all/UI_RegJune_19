window.addEventListener("load", loadAjax);

function loadAjax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        // console.log(this.readyState, this.status);
        var data = this.responseText;
        data = JSON.parse(data);
        var articles = data.articles;
        var ul = document.querySelector("#list_1");
        articles.forEach(function(obj) {
            var li = document.createElement("li");
            var h3 = document.createElement("h3");
            var para = document.createElement("p");
            var img = document.createElement("img");
            h3.innerHTML = obj.title;
            para.innerHTML = obj.description;
            img.src = obj.urlToImage;
            li.appendChild(h3);
            li.appendChild(img);
            li.appendChild(para);
            ul.appendChild(li);
        })
    }
    xhttp.open('get', 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=695e07af402f4b119f0703e9b19f4683');
    xhttp.send();
}