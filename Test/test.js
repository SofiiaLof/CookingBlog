
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
    
        console.log(Object.entries(localStorage));
        const contentForStorage = localStorage.stashContent();
      
        console.log(Object.entries(localStorage));
        console.log(contentForStorage);

        post.addNewPost(title, image, content);
        const lastObjectinArray = post.posts[post.posts.length-1].title;
        console.log(lastObjectinArray);
        assert.equal(lastObjectinArray, title);

        localStorage.restoreContent(contentForStorage);
        console.log(Object.entries(localStorage));
       
    });
});

