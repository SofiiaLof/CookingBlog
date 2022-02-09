export class Post{

    constructor(){
        this.posts = [
            {
                title: "Post 1",
                image: "../assets/christmas.png",
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                date: "2022/02/12"
            },
            {
                title: "Post 2",
                image: "../assets/christmas.png",
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                date: "2022/02/12"
            },
            {
                title: "Post 3",
                image: "../assets/christmas.png",
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                date: "2022/02/12"
            },
        ];
    }
 
    addNewPost(title, content, image){
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        let fullDate = `${year}/${month}/${day}`;

        console.log(fullDate);
        const newPost = {
            title: title,
            image: image,
            content: content,
            date: fullDate
        };

         this.posts.push(newPost);
    }

  
}
