import React from "react"
import { PrimarySelect } from "../UI/Option/PrimarySelect";
import { PrimaryInput } from "../UI/input";
import { PrimaryButton } from "../UI/buttons/PrimaryButton";

export const PostFilter = ({filter, setFilter}) => {
	return (
		<div className="flex flex-col max-w-96">
			<PrimaryInput 
				placeholder='Search'
				value={filter.query}
				onChange={e => setFilter({...filter, query: e.target.value})}
			/>
			
			<div className="flex justify-between">
				<PrimarySelect
					value={filter.sort}
					defaultValue="Sort"
					options={[
						{
							value: 'title',
							name: 'By name'
						},
						{
							value: 'body',
							name: 'By description'
						},
					]}
					onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
				/>

				<PrimaryButton onClick={() => setFilter({...filter, reset: true})}>Reset</PrimaryButton>
			</div>
		</div>
	)
}