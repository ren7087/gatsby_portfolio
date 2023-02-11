import React from "react"

const TreeView = () => {
	return (
		<div className="bg-white text-black py-4  border border-gray-200 rounded-lg shadow my-10">
			<div className="container flex flex-col items-start md:flex-row md:mr-14 my-3">
				<div className="flex flex-col w-full sticky md:top-36 md:w-3/12 mt-2 md:mt-12">
					<p className="text-4xl ml-6 font-extrabold leading-normal md:leading-relaxed mb-2">
						Career
					</p>
				</div>
				<div className="md:w-8/12 sticky p-10 md:ml-20">
					<div className="container mx-auto w-full h-full">
						<div className="relative wrap overflow-hidden h-full">
							<div
								className="border-2-2 border-yellow-555 absolute h-full border"
								style={{
									right: "50%",
									border: "2px solid #FFC100",
									borderRadius: "1%",
								}}
							></div>
							<div
								className="border-2-2 border-yellow-555 absolute h-full border"
								style={{
									left: "50%",
									border: "2px solid #FFC100",
									borderRadius: "1%",
								}}
							></div>
							<div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
								<div className="order-1 w-5/12"></div>
								<div className="order-1 w-5/12 px-1 py-4 text-right">
									<p className="mb-3 text-base" style={{ color: "#ff8e3c" }}>
										2022年10月 ~
									</p>
									<h4
										className="mb-3 font-bold text-lg md:text-2xl"
										style={{ color: "#ff8e3c" }}
									>
										株式会社
										<br />
										HRBrain
									</h4>
									<p className="text-sm md:text-base leading-snug text-black text-opacity-100">
										長期インターン
										<br />
										React
									</p>
								</div>
							</div>
							<div className="mb-8 flex justify-between items-center w-full right-timeline">
								<div className="order-1 w-5/12"></div>
								<div className="order-1 w-5/12 px-1 py-4 text-left">
									<p className="mb-3 text-base" style={{ color: "#ff8e3c" }}>
										2022年5月 ~
									</p>
									<h4
										className="mb-3 font-bold text-lg md:text-2xl"
										style={{ color: "#ff8e3c" }}
									>
										株式会社
										<br />
										タスタス
									</h4>
									<p className="text-sm md:text-base leading-snug text-black text-opacity-100">
										長期インターン
										<br />
										PHP,React
									</p>
								</div>
							</div>
							<div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
								<div className="order-1 w-5/12"></div>
								<div className="order-1 w-5/12 px-1 py-4 text-right">
									<p className="mb-3 text-base" style={{ color: "#ff8e3c" }}>
										2022年7月
									</p>
									<h4
										className="mb-3 font-bold text-lg md:text-2xl"
										style={{ color: "#ff8e3c" }}
									>
										GMOインターネットグループ株式会社
									</h4>
									<p className="text-sm md:text-base leading-snug text-black text-opacity-100">
										サマーインターン
									</p>
								</div>
							</div>

							<div className="mb-8 flex justify-between items-center w-full right-timeline">
								<div className="order-1 w-5/12"></div>

								<div className="order-1 w-5/12 px-1 py-5">
									<p className="mb-3 text-base" style={{ color: "#ff8e3c" }}>
										2022年1月~
										<br />
										2022年7月
									</p>
									<h4
										className="mb-3 font-bold text-lg md:text-2xl"
										style={{ color: "#ff8e3c" }}
									>
										株式会社
										<br />
										futurelabo
									</h4>
									<p className="text-sm md:text-base leading-snug text-black text-opacity-100">
										長期インターン
										<br />
										PHP
									</p>
								</div>
							</div>
						</div>
						<img
							className="mx-auto -mt-24 md:-mt-36"
							src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
							alt="treeImage"
							width={400}
							height={400}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TreeView
