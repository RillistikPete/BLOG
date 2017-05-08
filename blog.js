var originalBlogs = document.getElementById("listView");
var showAddBlog = document.getElementById('add-blog');
var list = document.getElementById('blogList');
var addEntry = document.getElementById("addEntry");
var button = document.getElementById('add');

addEntry.addEventListener("click", function(){
	console.log("click works");
	listView.classList.add("hidden");
	showAddBlog.classList.remove("fieldset");
})

list.addEventListener("click", function(){
	console.log("click works");
	listView.classList.remove("hidden");
	showAddBlog.classList.add("fieldset");
})


//INPUT ID'S FOR THE EVENT LISTENERS
let title = document.getElementById("title");
let date = document.getElementById("date");
let author = document.getElementById("author");
let keywords = document.getElementById("keywords");
let textarea = document.getElementById('textarea');

button.addEventListener("click", function(event){
	console.log("button works");
	console.log(title.value);
	let newPost = document.createElement("section");

	var newEntry = `<section id="newSection">
								<h3>${title.value}</h3>
								<p>${date.value}</p>
								<p>${author.value}</p>
								<p>${textarea.value}</p>
								<p>${keywords.value}</p>
					</section>`

	newPost.innerHTML = newEntry;
	originalBlogs.appendChild(newPost);
})