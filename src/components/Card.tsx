import { FC, MouseEvent } from 'react'
import { useRouter } from 'next/router'
// import Icon from '@/common/Icons'
import styled from 'styled-components'
import { Row, Column } from 'styles/Utils'

const Wrapper = styled(Column)`
	align-self: center;
	flex-shrink: 1;
	background: ${props => props.theme.colors.white};
	box-shadow: 0px 8px 24px rgba(163, 177, 191, 0.35);
	border-radius: 10px;
	align-items: center;
	width: 165px;
	height: 215px;
	cursor: pointer;
	padding: 20px 12px 0 12px;
	box-sizing: border-box;
	transition: transform 0.4s;
	@media ${props => props.theme.device.md} {
		&:hover {
			transform: scale(1.1);
		}
	}
`

const Logo = styled.img`
	width: ${props => (props.width ? props.width : 45)}px;
	height: ${props => (props.height ? props.height : 45)}px;
	border-radius: 10px;
	margin-bottom: 6px;
`

const Title = styled.div`
	color: ${props => props.theme.colors.fontColor};
	font-weight: 600;
	font-size: 20px;
	height: 40px;
	margin-bottom: 6px;
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`

const Desc = styled.div`
	font-size: 12px;
	height: 34px;
	line-height: 17px;
	color: ${props => props.theme.colors.fontColor};
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	margin-bottom: 9px;
`

const DividingLine = styled.div`
	background: ${props => props.theme.colors.itemLineColor};
	height: 1px;
	width: 100%;
`

const Actions = styled(Row)`
	flex: 1;
	padding: 0 4px;
	width: 100%;
	align-items: center;
	justify-content: space-between;
`

interface IconWrapperProps {
	right?: boolean
}

const IconWrapper = styled(Row)<IconWrapperProps>`
	-webkit-tap-highlight-color: transparent;
	-moz-tap-highlight-color: transparent;
	height: 100%;
	width: 48px;
	align-items: center;
	flex-direction: ${props => (props.right ? 'row-reverse' : 'row')};
`

export interface ItemsProps {
	name: string
	desc: string
	home: string
	is_docschina?: boolean
	logo: string
	contribute?: string
	logoWidth?: number
	logoHeight?: number
}

const Card: FC<ItemsProps> = ({ name, desc, home, logo, contribute, logoWidth, logoHeight }) => {
	const router = useRouter()
	const handleClick = (e: MouseEvent<HTMLDivElement>, url: string) => {
		e.stopPropagation()
		if (/(http|https):\/\/([\w.]+\/?)\S*/.test(url)) {
			window.open(url, '_blank')
		} else {
			router.push(url)
		}
	}
	return (
		<Wrapper onClick={(e: MouseEvent<HTMLDivElement>) => handleClick(e, home)}>
			<Logo width={logoWidth} height={logoHeight} src={logo} />
			<Title>{name}</Title>
			<Desc title={desc}>{desc}</Desc>
			<DividingLine />
			<Actions>
				{/* <IconWrapper onClick={(e: MouseEvent<HTMLDivElement>) => handleClick(e, home)}>
					<Icon icon="item-home-btn" size={24} />
				</IconWrapper>
				{contribute && (
					<IconWrapper right onClick={(e: MouseEvent<HTMLDivElement>) => handleClick(e, contribute)}>
						<Icon icon="item-github-btn" size={24} />
					</IconWrapper>
				)} */}
			</Actions>
		</Wrapper>
	)
}

export default Card
