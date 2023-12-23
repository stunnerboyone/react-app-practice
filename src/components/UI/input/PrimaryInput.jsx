import React from "react";
import classes from './PrimaryInput.module.scss';

export const PrimaryInput = (props) => {
	return (
		<input className={classes.input} {...props} />
	)
}