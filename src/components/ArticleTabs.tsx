import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { tags } from 'config'
import Card from './Card'
// import parse from 'html-react-parser'

const Container = styled.div`
	margin-left: 2rem;
	margin-right: 2rem;
	height: 25em;
	width: 35em;
	margin-top: 5rem;
`

const ArticleTabs = () => {
	return (
		<Container>
			<Tabs>
				<TabList>
					{tags?.map(tags => (
						<Tab key={tags.title}>
							<span>{tags.title}</span>
						</Tab>
					))}
				</TabList>

				{tags?.map(tags => (
					<TabPanel key={tags.title}>
						{/* <Card key={article.name + article.desc} {...article} /> */}
					</TabPanel>
				))}
			</Tabs>
		</Container>
	)
}

export default ArticleTabs
