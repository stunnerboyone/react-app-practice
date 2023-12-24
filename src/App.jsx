import React, { useState, useMemo } from "react";
import './App.scss';
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { PostFilter } from "./components/PostFilter";
import { ModalForm } from "./components/UI/Modals/ModalForm/ModalForm";
import { PrimaryButton } from "./components/UI/buttons/PrimaryButton";

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
  const [modal, setModal] = useState(false);

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
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App mx-auto my-5 px-10 items-center">
      <ModalForm visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </ModalForm>

      <div className="flex justify-between items-end">
        <PrimaryButton onClick={() => setModal(true)}>
          Create New Post
        </PrimaryButton>

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
