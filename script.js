
import { Post } from "./post.js";

const post = new Post();

const storage = post.openPostsFromStorage();
if(storage !=null){
    printPosts();
    printAside();

}


function printPosts() {

  const sectionPosts = document.getElementById("posts-list");
  sectionPosts.innerHTML = " ";

  const row = document.createElement("div");
  row.className = "row justify-content-center";
  const storage = post.openPostsFromStorage();

  for (let i = 0; i < storage.length; i++) {
    const item = storage[i];

    const card = document.createElement("div");
    card.className = "post-items p-3 m-3 col-8";
   
    const cardBody = document.createElement("div");
    cardBody.className = "post-item card-body";

    const title = document.createElement("h2");
    const image = document.createElement("img");
    image.className = "post-image card-img-top";

    const content = document.createElement("p");
    const date = document.createElement("span");
    const divButton = document.createElement("div");
    divButton.className = "d-flex justify-content-end";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "bi bi-x-square";
    deleteIcon.id = i;

    title.textContent = item.title;
    image.src = item.image;
    content.textContent = item.content;
    date.textContent = item.date;

    card.append(image);
    cardBody.append(title);
    cardBody.append(content);
    cardBody.append(date);
    card.append(cardBody);
    card.append(divButton);
    divButton.append(deleteBtn);
    deleteBtn.append(deleteIcon);
    row.append(card);
    sectionPosts.append(row);
    
  }
 
}

function printAside() {

  const asideList = document.getElementById("aside-post-list");
  const rowDate = document.createElement("div");
  rowDate.className = "row justify-content-center";
  asideList.innerHTML = " ";
  const storage = post.openPostsFromStorage();

  for (let i = 0; i < storage.length; i++) {
   
    const dateContainer = document.createElement("div");
    dateContainer.className = "date-container";
   
    const dateItem = document.createElement("li");
    dateItem.className = "date-item";
    
    const aItem = document.createElement("a");
    aItem.textContent = storage[i].date;
    aItem.href = "#" + i;
    
    dateItem.append(aItem);
    dateContainer.append(dateItem);
    rowDate.append(dateContainer);
    asideList.append(rowDate);

  }
}



const inputImage = document.getElementById("post-image");
let imageSource;

inputImage.addEventListener("change", function (event) {
   
  const reader = new FileReader();

  reader.onload = function () {
    const img = new Image();
    imageSource = img.src;
    imageSource = reader.result;
  };
  reader.readAsArrayBuffer(inputImage.files[0]);
});

const postButton = document.getElementById("publish-post-btn");

postButton.addEventListener("click", function () {

  const title = document.getElementById("post-title").value;
  const content = document.getElementById("post-content").value;
  const image = imageSource;


  post.addNewPost(title, content, image);

  printPosts();
  printAside();
 
});

document
  .getElementById("posts-list")
  .addEventListener("click", function (event) {
    const target = event.target;
    const index = target.id;

    if (target.className != "bi bi-x-square") {
      return;
    }
    let postItem = target.closest(".post-items");
    post.deletePost(index);
    postItem.remove();

    printPosts();
    printAside();

  });


