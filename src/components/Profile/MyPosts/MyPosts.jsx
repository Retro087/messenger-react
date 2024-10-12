import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  let postElements = props.posts.map((p) => (
    <Post
      profile={props.userProfile}
      key={p.id}
      liked={p.liked}
      id={p.id}
      disLike={disLike}
      addLike={addLike}
      name={p.name}
      message={p.message}
      likes={p.likes}
    />
  ));

  let areaElement = React.createRef();

  function addPost() {
    props.addPost();
  }

  function onPostChange() {
    let text = areaElement.current.value;
    props.onPostChange(text);
  }

  function addLike(postId) {
    props.addLike(postId);
  }

  function disLike(postId) {
    props.disLike(postId);
  }

  return (
    <div className={s.PostsBlock}>
      <h3>My posts</h3>
      <div className={s.AddPost}>
        <div className={s.areaWrapper}>
          <textarea
            placeholder="Что нового?"
            className={s.tArea}
            ref={areaElement}
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <div className={s.btnWrapper}>
          <button className={s.pushBtn} onClick={addPost}>
            Add post
          </button>
        </div>
      </div>
      <div className={s.Posts}>{postElements}</div>
    </div>
  );
}

export default MyPosts;
