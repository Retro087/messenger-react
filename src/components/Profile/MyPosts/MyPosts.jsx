import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post"



function MyPosts(props) {
    
    let postElements = props.posts.map(p => <Post message={p.message} likes={p.likes} />)

    let areaElement = React.createRef();

    function addPost(){
        props.addPost()
    }

    function onPostChange(){
        let text = areaElement.current.value;
        props.onPostChange(text)
    }

    return (
        <div className={s.PostsBlock}>
            <h3>My posts</h3>
            <div className={s.AddPost}>
                <div>
                    <textarea ref={areaElement} onChange={onPostChange} value={props.NewPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.Posts}>
                {postElements}
            </div>
        </div>

    )
}

export default MyPosts