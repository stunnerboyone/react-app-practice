import React from 'react';
import classes from './PrimaryButton.module.scss';

export const PrimaryButton = ({children, ...props}) => {
	return (
		<button {...props} className={classes.button}>
			{children}
		</button>
	)
}