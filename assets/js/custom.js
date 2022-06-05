document.querySelector("li.btn").onclick = function () {
    if (document.querySelector("li.btn ul").style.display === "none")
        document.querySelector("li.btn ul").style.display = "block";
    else
        document.querySelector("li.btn ul").style.display = "none";
};

setTimeout(function () {
    document.querySelector("#loader_parent").style.display = "none";
},2000);