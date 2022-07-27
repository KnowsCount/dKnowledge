import { FC, MouseEvent } from 'react'
import { useRouter } from 'next/router'
// import Icon from '@/common/Icons'
import styled from 'styled-components'

const Wrapper = styled.div`
	margin: 10px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
	overflow: hidden;
	width: 300px;
`

const CardImage = styled.div`
	width: 100%;
	height: 200px;
	object-fit: cover;
`

const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 20px;
	min-height: 250px;
	p {
		font-size: 13px;
		margin: 0 0 40px;
	}
`

const Tag = styled.span`
	background: #cccccc;
	border-radius: 50px;
	font-size: 12px;
	margin: 0;
	color: #fff;
	padding: 2px 10px;
	text-transform: uppercase;
	cursor: pointer;
`

const TagTeal = styled.span`
	background-color: #47bcd4;
`

const User = styled.div`
	display: flex;
	margin-top: auto;
	img {
		border-radius: 50%;
		width: 40px;
		height: 40px;
		margin-right: 10px;
	}
`

const UserInfo = styled.div`
	h5 {
		margin: 0;
	}
	small {
		color: #545d7a;
	}
`

export interface Props {
	name: string
	time: string
	avatar: string
	cover: string
}

const Card: FC<Props> = (props: Props) => {
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
		<Wrapper>
			<CardImage>
				<img src={props.cover} alt="rover" />
			</CardImage>
			<CardBody>
				<Tag>
					<TagTeal>Technology</TagTeal>
				</Tag>
				<h4>Why is the Tesla Cybertruck designed the way it is?</h4>
				<p>An exploration into the truck's polarising design</p>
				<User>
					<img src={props.avatar} alt="user" />
					<UserInfo>
						<h5>{props.name}</h5>
						<small>{props.time}</small>
					</UserInfo>
				</User>
			</CardBody>
		</Wrapper>
	)
}

export default Card
