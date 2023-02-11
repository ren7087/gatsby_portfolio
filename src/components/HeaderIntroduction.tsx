import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const HeaderIntroduction = () => {
	return (
		<div
			className="h-auto justify-center bg-white border border-gray-200 rounded-lg shadow"
			style={{ backgroundColor: "white" }}
		>
			<div className="flex flex-col items-center">
				<div className="flex justify-center">
					<div className="w-1/4 h-1/4 m-auto">
						<StaticImage
							className="my-10 mr-10 ml-5 rounded-lg shadow-lg"
							src="../images/myAvatar2.jpg"
							width={1920}
							height={1920}
							alt="avatarImage"
						/>
					</div>
					<div className="m-auto">
						<div className="mb-1 text-4xl font-extrabold dark:text-black">
							Ren
						</div>
						<span className="text-xl dark:text-black">
							Web Frontend Engineer
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderIntroduction
