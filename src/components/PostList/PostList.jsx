import React from "react";
import { PostItem } from "../PostItem";

import classes from './PostList.module.scss'

export const PostList = ({
	posts,
	title,
	remove,
}) => {
	return (
		<div className={classes.list}>
			<h1 className={classes.title}>{posts.length ? title : 'Empty'}</h1>
			{posts.map(post => (
					<PostItem 
						remove={remove} 
						post={post} 
						key={post.id}
					/>
			))}
		</div>
	)
}