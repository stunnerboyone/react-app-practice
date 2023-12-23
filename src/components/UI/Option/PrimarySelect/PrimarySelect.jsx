import React from 'react';

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
			className='border border-green-600 rounded-lg text-center'
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