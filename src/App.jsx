import React, { useState } from "react";
import './App.scss';
import { PostList } from "./components/PostList";
import { PrimaryButton } from "./components/UI/buttons/PrimaryButton";
import { PrimaryInput } from "./components/UI/input";



function App() {
const postsFromDatabase = [
  {
    id: 1,
    title: 'JavaScript',
    body: 'Js is pease of the bullshit'
  },
  {
    id: 2,
    title: 'Python',
    body: 'Python is pease of the bullshit'
  },
  {
    id: 3,
    title: 'C#',
    body: 'C# is pease of the bullshit'
  },
  {
    id: 4,
    title: 'C++',
    body: 'C++ is pease of the bullshit'
  },
  {
    id: 5,
    title: 'Go',
    body: 'Go is pease of the bullshit'
  },
  {
    id: 6,
    title: 'Ruby',
    body: 'Ruby is pease of the bullshit'
  },
];

  const [posts, setPosts] = useState(postsFromDatabase);
  const [post, setPost] = useState({title: '', body: ''});
  
  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({title: '', body: ''})
  }


  return (
    <div className="App">
      <form>
        <PrimaryInput
          type="text"
          placeholder="Post Name"
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
        />

        <PrimaryInput
          type="text"
          placeholder="Post Description"
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
        />

        <PrimaryButton onClick={addNewPost}>Create</PrimaryButton>
      </form>

      <PostList posts={posts} title={"Post List"} />
    </div>
  );
}

export default App;
