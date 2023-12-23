import React, { useState } from "react";
import './App.scss';
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
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
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => (
     a[sort].localeCompare(b[sort])
    )))
  }

  return (
    <div className="App mx-auto my-5 px-10 items-center">
      <PostForm create={createPost}/>

      <div className="flex flex-col max-w-96">
        <PrimaryInput placeholder='Search' />

        <PrimarySelect 
          value={selectedSort}
          defaultValue="Sort"
          options={[
            {
              value: 'title',
              name: 'By name'
            },
            {
              value: 'body',
              name: 'By description'
            },
          ]}
          onChange={sortPosts}
        />
      </div>


      {posts.length
        ?
        <PostList
          remove={removePost}
          posts={posts}
          title={"Post List"}
        />
        :
        <h1 style={{textAlign: 'center'}}>Empty</h1>
        }
    </div>
  );
}

export default App;
