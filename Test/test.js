
import { Post } from "../post.js";
import { stashStorage, restoreStorage} from "../util.js";

const assert = chai.assert;

stashStorage();
restoreStorage();

describe("AddNewPost", function (){
    it("lägga till en ny post objekt", function (){
       

        const post = new Post();

        const title = "Post1";
        const image = "";
        const content = "Something about cooking";
    
        const contentForStorage = localStorage.stashContent();
      
        post.addNewPost(title, image, content);
        const lastObjectinArray = post.posts[post.posts.length-1].title;
 
        assert.equal(lastObjectinArray, title);

        localStorage.restoreContent(contentForStorage);

       
    });
});

describe("deletePost", function (){
    it("ta bort en post objekt", function (){

        const post = new Post();

        const title = "Post2";
        const image = "";
        const content = "Something about cooking";

       
        const contentForStorage = localStorage.stashContent();
        const lengthBefore  = post.posts.length;

        post.addNewPost(title, image, content);
       
        const lastObjectinArray = (post.posts.length - 1);

        post.deletePost(lastObjectinArray);

        const lengthAfter = post.posts.length;

        localStorage.restoreContent(contentForStorage);
    
        assert.equal(lengthBefore, lengthAfter);

     

    });
});
