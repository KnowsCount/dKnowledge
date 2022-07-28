import styled from 'styled-components'
import Link from 'next/link'
import { NextPage } from 'next'
import { nav } from 'config'
import ConnectWallet from './ConnectWallet'

const Container = styled.div`
	position: sticky;
	top: 0;
`

const NavbarArea = styled.div`
	height: 60px;
	/* background-color: whitesmoke; */
	background: rgba(253, 253, 253, 0.8);
	backdrop-filter: blur(4px);
	border-bottom: 1px solid #f1f1f1;
	display: flex;
	align-items: center;
	/* justify-content: center; */
`

const Logo = styled.section`
	margin-right: 60px;
	margin-left: 2rem;
	font-size: 30px;
	font-weight: bolder;
`

const LinkArea = styled.section`
	justify-content: flex-end;
	margin-left: auto;
	margin-right: 1rem;
	a {
		font-size: 18px;
		font-weight: 600;
		padding: 0 20px;
		color: black;
	}
	.active {
		color: green;
	}
`

const ConnectWalletWrapper = styled.div`
	margin-right: 2rem;
`

const Navbar: NextPage = () => {
	return (
		<Container>
			<NavbarArea>
				<Logo>dKnowledge</Logo>
				<LinkArea>
					{nav?.map(nav => (
						<Link key={nav?.label} href={nav?.value}>
							<a>{nav.label}</a>
						</Link>
					))}
				</LinkArea>
				<ConnectWalletWrapper>
					<ConnectWallet />
				</ConnectWalletWrapper>
			</NavbarArea>
		</Container>
	)
}

export default Navbar
