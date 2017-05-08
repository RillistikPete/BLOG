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

	var newEntry = `<section class="art2" id="newSection">
								<h3>${title.value}</h3>
								<p>${date.value}</p>
								<p>${author.value}</p>
								<p>${textarea.value}</p>
								<p>${keywords.value}</p>
					</section>`

	newPost.innerHTML = newEntry;
	originalBlogs.appendChild(newPost);
})

//--------------NEW XHR REQUEST FOR BLOGS--------------------

var blogRequest = new XMLHttpRequest();

blogRequest.addEventListener("load", requestComplete);
blogRequest.addEventListener("error", requestFail);

function requestComplete(event){
	var blogData = JSON.parse(event.target.responseText).blogs;
	console.log("request has loaded successfully");
	showPosts(blogData);
}

function requestFail(event){
	console.log("Error running request");
}

blogRequest.open("GET", "blog.json");
blogRequest.send();

//this function puts the JSON file blog posts into the dom, styling them by putting class on div...
function showPosts(blog){
	var blogPost = "";

	for (var i=0; i < blog.length; i++){
		var post = document.createElement("div");
		post.className = "art2";
		post.innerHTML += `<p>${blog[i].title}</p>
					 <p>${blog[i].post}</p>
					<p>${blog[i].footer}</p>
					<button id="delete">Delete Post</button>`

		originalBlogs.append(post);

//Now I need to add a delete button to each object (above)
//Add event listener to delete button:

		post.addEventListener("click", function(event){
			if (event.target.tagName.toLowerCase() === "button"){
				console.log(event.target);
				originalBlogs.removeChild(event.target.parentElement);
			}
			//console.log("event.target", event.target);
		});
	}

}







// function showData(taco){
// 	var colorDiv = document.getElementById("all-my-colors");
// 	var colorData = "";

// 	for (lettuce in taco){
// 		var colorItem = taco[lettuce];
// 		colorData += "<div>";
// 		colorData += "<h2>" + colorItem.color + ":" + colorItem.value + "</h2>";
// 		colorData += "</div>";
// 	}

// 	colorDiv.innerHTML += colorData;
// }













