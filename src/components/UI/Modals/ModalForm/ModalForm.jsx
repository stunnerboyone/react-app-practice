import React from "react";

import classes from './ModalForm.module.scss'

export const ModalForm = ({
	children,
	visible,
	setVisible,
}) => {
	const rootClasses = [classes.modal]

	if(visible) {
		rootClasses.push(classes.modalActive)
	}

	return (
		<div 
			className={rootClasses.join(' ')}
			onClick={() => setVisible(false)}
		>
			<div 
				className={classes.modalContent} 
				onClick={e => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
};