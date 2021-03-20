import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsData = [
    {message: "Поздравляю, ТЫ ТОЛЬКО ЧТО ГРАНАТУ.", likesCount:"10"},
    {message: "Только что что?", likecounts:"15"},
    {message: "Гранату, ясное дело."},
    {message: "Что гранату?"},
    {message: "Только что."},
    {message: "Что только что?"},
    {message: "Гранату."},
    {message: "Что гранату?"},
    {message: "Только что."},
  ]
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea name="" id="" cols="30" rows="1"></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <button>Remove</button>
      <div className={s.posts}>
        <Post message={postsData[0].message} likesCount={postsData[0].likecounts}/>
        <Post message={postsData[1].message} likesCount={postsData[1].likecounts}/>
        <Post message={postsData[2].message} likesCount={postsData[2].likecounts}/>
        <Post message={postsData[3].message} likesCount={postsData[3].likecounts}/>
        <Post message={postsData[4].message} likesCount={postsData[4].likecounts}/>
        <Post message={postsData[5].message} likesCount={postsData[5].likecounts}/>
        <Post message={postsData[6].message} likesCount={postsData[6].likecounts}/>
        <Post message={postsData[7].message} likesCount={postsData[7].likecounts}/>
        <Post message={postsData[8].message} likesCount={postsData[8].likecounts}/>
      </div>
    </div>
  );
};

export default MyPosts;
