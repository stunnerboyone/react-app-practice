import React from "react";

import { PrimaryButton } from "../UI/buttons/PrimaryButton";

import classes from './PostItem.module.scss';

export const PostItem = (props) => {
  const {post, remove} = props;

	return (
		<div className={classes.postlist}>
      <div className="post__content">
        <strong>{post.id}. {props.post.title}</strong>
        <div>
          {post.body}
        </div>
      </div>
      <div className="post__button">
        <PrimaryButton onClick={() => remove(post)}>Delete</PrimaryButton>
      </div>
    </div>
	)
}