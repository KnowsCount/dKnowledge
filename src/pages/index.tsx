import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import Typical from 'react-typical'
import Button from '@components/Button'
import Editor from '@components/Editor'
import Navbar from '@/components/Navbar'
import ArticleTabs from '@/components/ArticleTabs'
import Modal from 'react-modal'

Modal.setAppElement('#main')

const Container = styled.div`
	/* padding: 0 2rem; */
`

const Main = styled.main`
	min-height: 90vh;
	padding: 4rem 0;
	flex: 1;
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
`

const Title = styled.h1`
	margin-top: 2rem;
	line-height: 1;
	font-size: 4rem;
	cursor: pointer;
	margin-bottom: 3rem;
	font-weight: 800;
`

const ModalEditor = styled.div`
	margin-top: 2.5rem;
	margin-bottom: 3rem;
`

const ButtonWrapper = styled.div`
	margin-bottom: 2rem;
`

const ButtonsWrapper = styled.div`
	display: flex;
	gap: 15px;
`

const ModalButton = styled.div``

const ConnectWalletWrapper = styled.div`
	/* margin-top: 2rem; */
`

const IntroWrapper = styled.div`
	font-size: 1.2rem;
	text-align: center;
`

const Intro = styled.p`
	margin-left: 10rem;
	margin-right: 10rem;
`

// if ((show == 'connected' && !account?.address) || (show == 'not_connected' && account?.address)) return null

const Home: NextPage = () => {
	const [toggle, setToggle] = useState(true)
	const [modalIsOpen, setIsOpen] = useState(false)
	// const { data: account } = useAccount()
	const openModal = () => {
		setIsOpen(true)
	}
	const closeModal = (e: any) => {
		setIsOpen(false)
		e.stopPropagation()
	}
	// const getTitleText = () => {
	// 	if (toggle == true) {
	// 		let starterText: string = 'Dear diary, \n'
	// 		return starterText
	// 	} else {
	// 		let starterText: string = 'Dear me, \n'
	// 		return starterText
	// 	}
	// }
	return (
		<Container>
			<Head>
				<title>dKnowledge / Home</title>
				<meta name="description" content="a diary app for personal use" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<Main id="main">
				{/* <Title onClick={() => setToggle(!toggle)}>
					{toggle ? (
						<Typical steps={['Knowledge for the People,']} loop={1} />
					) : (
						<Typical steps={['From the People']} loop={1} />
					)}
				</Title> */}
				<Title>
					<Typical steps={['Knowledge for People,', 4000, 'Knowledge from People.', 3000]} loop={1}></Typical>
				</Title>
				<ButtonWrapper onClick={openModal}>
					<Button frontColour="hsl(345deg 100% 47%)" backColour="hsl(340deg 100% 32%)" text="Start" />
				</ButtonWrapper>
				{/* <ConnectWalletWrapper>
					<ConnectWallet />
				</ConnectWalletWrapper> */}
				<Modal isOpen={modalIsOpen} onRequestClose={e => e.stopPropagation()} contentLabel="Modal">
					<h1>{new Date().toJSON().slice(0, 10)}</h1>
					<ModalEditor>
						<Editor starterText={`# My First Post`} />
					</ModalEditor>
					<ButtonsWrapper>
						<ModalButton onClick={closeModal}>
							<Button frontColour="hsl(345deg 100% 47%)" backColour="hsl(340deg 100% 32%)" text="Close" />
						</ModalButton>
						<ModalButton onClick={closeModal}>
							<Button frontColour="hsl(225, 76%, 46%)" backColour="hsl(225, 76%, 32%)" text="Publish" />
						</ModalButton>
					</ButtonsWrapper>
				</Modal>

				<IntroWrapper>
					<Intro>
						<strong>no man is an island.</strong> no man is alone in their thoughts. thoughts worth sharing,
						and this is dKnowledge—a decentralised knowledge monetisation app.
					</Intro>
				</IntroWrapper>

				<ArticleTabs />
			</Main>
		</Container>
	)
}

export default Home
