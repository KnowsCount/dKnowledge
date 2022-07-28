import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { tags } from 'config'
import { card } from 'config'
import Card from './Card'
// import parse from 'html-react-parser'

const Container = styled.div`
	margin-left: 2rem;
	margin-right: 2rem;
	height: 25em;
	width: 35em;
	margin-top: 5rem;
`

const TabPanelContainer = styled.div``

const CardContainer = styled.div`
	margin-top: 2rem;
	display: flex;
	gap: 30px;
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
					<TabPanelContainer key={tags.title}>
						<TabPanel>
							<CardContainer>
								{card?.map(card => (
									<Card
										key={tags.title + card.desc}
										title={tags.title}
										desc={card.desc}
										home={card.home}
										logo={card.logo}
										logoWidth={90}
										logoHeight={90}
									></Card>
								))}
							</CardContainer>
						</TabPanel>
					</TabPanelContainer>
				))}
			</Tabs>
		</Container>
	)
}

export default ArticleTabs
