import { StaticImage } from "gatsby-plugin-image"
import React from "react"

type Props = {
	category: string
	title: string
	url: string
}

const Card = (props: Props) => {
	return (
		<div
			className="p-4 bg-white border border-gray-200 rounded-lg shadow m-5"
			style={{ backgroundColor: "#eff0f3" }}
		>
			{props.category == "qiita" ? (
				<StaticImage
					className="m-2"
					src="../images/qiita.svg"
					width={48}
					height={48}
					alt="qiita"
				/>
			) : (
				<h5 className="w-12 h-12 m-2 pt-2 text-base font-mono font-medium dark:text-black">
					MyBlog
				</h5>
			)}
			<h5 className="pb-5 text-2xl font-semibold tracking-tight dark:text-black">
				{props.title}
			</h5>
			<a
				href={props.url}
				className="inline-flex items-center hover:underline"
				style={{ color: "#ff8e3c" }}
			>
				記事を見る
				<svg
					className="w-5 h-5 ml-2"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
					<path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
				</svg>
			</a>
		</div>
	)
}

export default Card
