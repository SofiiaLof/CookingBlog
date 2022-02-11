export class Post {
  
  constructor() {
    
   this.posts =[];
  }

  addNewPost(title, content, image) {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let fullDate = `${year}/${month}/${day}`;
  
    
    const newPost = {
      title: title,
      image: image,
      content: content,
      date: fullDate,
    };

  
    this.posts.push(newPost);
    this.savePostsToStorage();
    
  }

  deletePost(chosenPost) {
    
    let storageArray = this.openPostsFromStorage();
    storageArray.splice(chosenPost,1);
    this.posts = storageArray;
  
    this.savePostsToStorage();
  }

  savePostsToStorage() {
    window.localStorage.setItem("posts", JSON.stringify(this.posts));
  }

  openPostsFromStorage() {
    const storage = JSON.parse(window.localStorage.getItem("posts"));
    return storage;
  }
}
