import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Skills = () => {
	return (
		<div
			className="h-auto p-5 justify-center bg-white border border-gray-200 rounded-lg shadow my-10"
			style={{ backgroundColor: "white" }}
		>
			<div className="pb-4 text-4xl font-extrabold dark:text-black">
				💫 Skills
			</div>
			<div className="flex justify-center flex-wrap">
				<StaticImage
					src="../images/javascript.svg"
					loading="eager"
					placeholder="blurred"
					width={50}
					height={50}
					alt="JavascriptIcon"
					style={{ margin: 5 }}
				/>
				<StaticImage
					src="../images/typescript.svg"
					loading="eager"
					placeholder="blurred"
					width={50}
					height={50}
					alt="TypescriptIcon"
					style={{ margin: 5 }}
				/>
				<StaticImage
					src="../images/react.svg"
					loading="eager"
					placeholder="blurred"
					width={50}
					height={50}
					alt="ReactIcon"
					style={{ margin: 5 }}
				/>
				<StaticImage
					src="../images/nextjs.svg"
					loading="eager"
					placeholder="blurred"
					width={50}
					height={50}
					alt="NextJsIcon"
					style={{ margin: 5 }}
				/>
				<StaticImage
					src="../images/php.svg"
					loading="eager"
					placeholder="blurred"
					width={50}
					height={50}
					alt="PHPIcon"
					style={{ margin: 5 }}
				/>
				<StaticImage
					src="../images/laravel.svg"
					loading="eager"
					placeholder="blurred"
					width={50}
					height={50}
					alt="LaravelIcon"
					style={{ margin: 5 }}
				/>
				<StaticImage
					src="../images/cakephp.svg"
					loading="eager"
					placeholder="blurred"
					width={50}
					height={50}
					alt="CakePHPIcon"
					style={{ margin: 5 }}
				/>
			</div>
		</div>
	)
}

export default Skills
