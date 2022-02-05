import {Post} from './post.js';

const post = new Post();

function printPosts(){

    const sectionPosts = document.getElementById("posts-list");
    sectionPosts.innerHTML = " ";

    for(let i = 0; i < post.posts.length; i++){
        const item = post.posts[i];

        const divElement = document.createElement("div");
        divElement.className = "post-items";

        const liElement = document.createElement("li");
        liElement.className = "post-item";

       const title = document.createElement("h2");
       const image = document.createElement("img");
       image.className ="post-image";

       const content = document.createElement("p");
       const date = document.createElement("span");
       const deleteBtn = document.createElement("button");
       deleteBtn.innerHTML = "Delete";

       title.textContent = item.title;
       image.src = item.image;
       content.textContent = item.content;
       date.textContent = item.date;

       liElement.append(image);
       liElement.append(title);
       liElement.append(content);
       liElement.append(date);
       liElement.append(deleteBtn);

        divElement.append(liElement);
        sectionPosts.append(divElement);
    }

}

printPosts();
