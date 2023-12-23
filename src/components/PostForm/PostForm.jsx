import React, { useState } from "react";
import { PrimaryInput } from "../UI/input";
import { PrimaryButton } from "../UI/buttons/PrimaryButton";

import classes from './PostForm.module.scss';

export const defaultPost = {
	title: '',
	body: '',
}

export const PostForm = ({ create }) => {
	const [post, setPost] = useState(defaultPost);

	const addNewPost = (e) => {
    e.preventDefault();

		const newPost = {
			...post,
			id: Date.now(),
		};

		create(newPost);

    setPost(defaultPost);
  }


	return (
		<form className={classes.form}>
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
	);
}