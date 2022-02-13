/**
 * A class representing a blog post
 * @class  
 */
export class Post {
  
  /**
   * 
   *Gets post array from localStorage if not null, creates an empty object array otherwise
   */
  constructor() {

    if(this.openPostsFromStorage() === null){

      this.posts = [];

    }else{

      this.posts = this.openPostsFromStorage();
      
    }

  }

  /**
   * Adds new post object to the post-array and saves new post-array to the localStorage with a @method savePostsToStorage.
   * @param {string} title -The title to be added
   * @param {string} content -The content to be added
   * @param {string} image - The image to be added
   */
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
  
  /**
   * Deletes a chosen post object from storage array @method openPostsFromStorage
   * @param {string} chosenPost - The id of post to be deleted 
   */
  deletePost(chosenPost) {
    let storageArray = this.openPostsFromStorage();
    storageArray.splice(chosenPost,1);
    this.posts = storageArray;
    this.savePostsToStorage();
  }

  /**
   * Saves array with post objects to localStorage
   */
  savePostsToStorage() {
    window.localStorage.setItem("posts", JSON.stringify(this.posts));
  }

/**
 * Fetch post array from localStorage
 * @returns {array|null}
 */
  openPostsFromStorage() {
    const storage = JSON.parse(window.localStorage.getItem("posts"));
    return storage;
  }
}
