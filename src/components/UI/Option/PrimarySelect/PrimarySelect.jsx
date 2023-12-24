import React from 'react';

import classes from './PrimarySelect.module.scss'

export const PrimarySelect = ({
	options,
	defaultValue,
	value,
	onChange,
}) => {
	return (
		<select 
			value={value}
			onChange={event => onChange(event.target.value)}
			className={classes.select}
		>
			<option disabled value=''>{defaultValue}</option>
			{options.map(option => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	)
}