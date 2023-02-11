import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Skills from "../components/Skills"
import TreeView from "../components/TreeView"
import HeaderIntroductionMyself from "../components/HeaderIntroductionMyself"
import HeaderIntroduction from "../components/HeaderIntroduction"
import Blog from "../components/Blog"

const IndexPage = () => (
	<Layout>
		<main>
			<HeaderIntroduction />
			<HeaderIntroductionMyself />
			<TreeView />
			<Skills />
			<Blog />
		</main>
	</Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
	<Seo title="Home" description={undefined} children={undefined} />
)

export default IndexPage
