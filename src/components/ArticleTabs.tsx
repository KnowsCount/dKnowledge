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

const CardContainer = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
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
					<CardContainer key={tags.title}>
						<TabPanel>
							{/* <Card
								title="good shit"
								desc="good shit"
								tag="good shit"
								username="good shit"
								userIntro="good shit"
								avatar="https://avatars.githubusercontent.com/u/912236?s=120&v=4"
								// cover="https://avatars.githubusercontent.com/u/912236?s=120&v=4"
							/> */}
							<Card
								name="shit"
								desc="shit"
								home="shit"
								logo="shit"
								contribute="shit"
								logoWidth={3}
								logoHeight={3}
							></Card>
							<Card
								name="shit"
								desc="shit"
								home="shit"
								logo="shit"
								contribute="shit"
								logoWidth={3}
								logoHeight={3}
							></Card>
							<Card
								name="shit"
								desc="shit"
								home="shit"
								logo="shit"
								contribute="shit"
								logoWidth={3}
								logoHeight={3}
							></Card>
						</TabPanel>
					</CardContainer>
				))}
			</Tabs>
		</Container>
	)
}

export default ArticleTabs
