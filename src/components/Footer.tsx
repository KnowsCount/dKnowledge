import styled from 'styled-components'

type Props = {
	children?: React.ReactNode
}

const FooterContainer = styled.footer`
	border-top-width: 1px; 
	--tw-bg-opacity: 1;
	background-color: rgb(250 250 250 / var(--tw-bg-opacity));
	border-color: rgb(229 229 229 / var(--tw-border-opacity));
`

const FooterBody = styled.div`
	display: flex; 
	padding-top: 7rem;
	padding-bottom: 7rem; 
	flex-direction: column; 
	align-items: center; 
	@media (min-width: 1024px) { 
		flex-direction: row; 
	}
`

const FooterTitle = styled.h3`
	margin-bottom: 2.5rem;
	font-size: 2.25rem;
	line-height: 2.5rem;
	font-size: 2.5rem;
	font-weight: 700;
	letter-spacing: -0.05em;
	line-height: 1.25;
	text-align: center;
	@media (min-width: 1024px) {
		padding-right: 1rem;
		margin-bottom: 0;
		text-align: left;
		width: 50%;
	}
`

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (min-width: 1024px) { 
		padding-left: 1rem;
		flex-direction: row;
		width: 50%;
	}
`

const Button = styled.a`
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
	padding-left: 3rem;
	padding-right: 3rem;
	margin-left: 0.75rem;
	margin-right: 0.75rem;
	margin-bottom: 1.5rem;
	background-color: #000000;
	transition-property: background-color, border-color, color, fill, stroke;
	transition-duration: 200ms;
	color: #ffffff;
	font-weight: 700;
	border-width: 1px;
	border-color: #000000;
	@media (min-width: 1024px) { 
		padding-left: 2rem;
		padding-right: 2rem;
		margin-bottom: 0;
	}
	:hover {
		background-color: #ffffff;
		color: #000000;
	}
`

const Link = styled.a`
	margin-left: 0.75rem;
	margin-right: 0.75rem;
	font-weight: 700;
	:hover {
		text-decoration: underline;
	}
`

const Container = ({ children }: Props) => {
	return <div className="container mx-auto px-5">{children}</div>
}

const Footer = () => {
	return (
	  <FooterContainer>
		<Container>
		  <FooterBody>
			<FooterTitle>
			  Join us. &nbsp; Like right now.
			</FooterTitle>
			<ButtonContainer>
			  <Button
				href="https://nextjs.org/docs/basic-features/pages"
			  >
				Mobile App
			  </Button>
			  <Link
				href={`https://github.com/vercel/next.js/tree/canary/examples/`}
			  >
				View on GitHub
			  </Link>
			</ButtonContainer>
		  </FooterBody>
		</Container>
	  </FooterContainer>
	)
  }

  export default Footer