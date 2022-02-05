import {Post} from './post.js';

const post = new Post();

function printPosts(){

    const sectionPosts = document.getElementById("posts-list");
    sectionPosts.innerHTML = " ";

    const row = document.createElement("div");
    row.className = "row justify-content-center";
    sectionPosts.append(row);
    

    for(let i = 0; i < post.posts.length; i++){
        const item = post.posts[i];

        const card = document.createElement("div");
        card.className = "post-items p-3 m-3 col-8";

        const cardBody = document.createElement("div");
        cardBody.className = "post-item card-body";

       const title = document.createElement("h2");
       const image = document.createElement("img");
       image.className ="post-image card-img-top";

       const content = document.createElement("p");
       const date = document.createElement("span");
       const divButton = document.createElement("div");
       divButton.className = "d-flex justify-content-end";

       const deleteBtn = document.createElement("button");
       deleteBtn.className = "deleteBtn";
       const deleteIcon = document.createElement("i");
       deleteIcon.className = "bi bi-x-square";
      
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
    }

}

printPosts();
