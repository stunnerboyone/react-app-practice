import React, { useState, useMemo } from "react";
import './App.scss';
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { PostFilter } from "./components/PostFilter";

import { PrimarySelect } from "./components/UI/Option/PrimarySelect";
import { PrimaryInput } from "./components/UI/input";

export const postsFromDatabase = [
  {
    id: 1,
    title: 'JavaScript',
    body: 'Js is pease of the bullshit'
  },
  {
    id: 2,
    title: 'Python',
    body: 'Shit'
  },
  {
    id: 3,
    title: 'C#',
    body: 'Unity Shit'
  },
  {
    id: 4,
    title: 'C++',
    body: 'Unreal Shit'
  },
  {
    id: 5,
    title: 'Go',
    body: 'Backend Shit'
  },
  {
    id: 6,
    title: 'Ruby',
    body: 'Old shit'
  },
];

function App() {
  const [posts, setPosts] = useState(postsFromDatabase);
  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  })

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => (a[filter.sort].localeCompare(b[filter.sort])))
    } else 
      return posts
  }, [filter.sort, posts]);

  const searchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App mx-auto my-5 px-10 items-center">

      <div className="inputs flex justify-between">
        <PostForm create={createPost}/>

        <PostFilter
          filter={filter}
          setFilter={setFilter}
        />
      </div>

        <PostList
          remove={removePost}
          posts={searchedPosts}
          title={"Post List"}
        />
    </div>
  );
}

export default App;
