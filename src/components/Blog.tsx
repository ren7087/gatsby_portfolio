import React from "react"
import Card from "./Card"

const Blog = () => {
	return (
		<div
			className="h-auto p-5 justify-center bg-white border border-gray-200 rounded-lg shadow"
			style={{ backgroundColor: "white" }}
		>
			<div className="pb-4 text-4xl font-extrabold dark:text-black">
				📕 Blog
			</div>
			<div className="flex-wrap flex ml-2">
				<Card
					category="qiita"
					title="ECMAScriptの第一歩"
					url="https://qiita.com/ren7087/items/bb48251cff0673ecd865"
				/>
			</div>
		</div>
	)
}

export default Blog
