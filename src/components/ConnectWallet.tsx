import { FC } from 'react'
import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Button from '@components/Button'
import { Visibility } from '@lib/type'

const ConnectWallet: FC<{ show?: Visibility }> = ({ show = 'always' }) => {
	const { data: account } = useAccount()

	if ((show == 'connected' && !account?.address) || (show == 'not_connected' && account?.address)) return null

	return (
		// <ConnectButton.Custom>
		// 	{({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
		// 		return (
		// 			<div
		// 				{...(!mounted && {
		// 					'aria-hidden': true,
		// 					style: {
		// 						opacity: 0,
		// 						pointerEvents: 'none',
		// 						userSelect: 'none',
		// 					},
		// 				})}
		// 			>
		// 				{(() => {
		// 					if (!mounted || !account || !chain) {
		// 						return (
		// 							<div onClick={openConnectModal}>
		// 								<Button
		// 									frontColour="hsl(225, 76%, 46%)"
		// 									backColour="hsl(225, 76%, 32%)"
		// 									text="Connect Wallet"
		// 								></Button>
		// 							</div>
		// 						)
		// 					}

		// 					if (chain.unsupported) {
		// 						return (
		// 							<Button
		// 								frontColour="hsl(225, 76%, 46%)"
		// 								backColour="hsl(225, 76%, 32%)"
		// 								text="Wrong network"
		// 							></Button>
		// 						)
		// 					}

		// 					return (
		// 						<div style={{ display: 'flex', gap: 12 }}>
		// 							<button
		// 								onClick={openChainModal}
		// 								style={{ display: 'flex', alignItems: 'center' }}
		// 								type="button"
		// 							>
		// 								{chain.hasIcon && (
		// 									<div
		// 										style={{
		// 											background: chain.iconBackground,
		// 											width: 12,
		// 											height: 12,
		// 											borderRadius: 999,
		// 											overflow: 'hidden',
		// 											marginRight: 4,
		// 										}}
		// 									>
		// 										{chain.iconUrl && (
		// 											// eslint-disable-next-line @next/next/no-img-element
		// 											<img
		// 												alt={chain.name ?? 'Chain icon'}
		// 												src={chain.iconUrl}
		// 												style={{ width: 12, height: 12 }}
		// 											/>
		// 										)}
		// 									</div>
		// 								)}
		// 								{chain.name}
		// 							</button>

		// 							<button onClick={openAccountModal} type="button">
		// 								{account.displayName}
		// 								{account.displayBalance ? ` (${account.displayBalance})` : ''}
		// 							</button>
		// 						</div>
		// 					)
		// 				})()}
		// 			</div>
		// 		)
		// 	}}
		// </ConnectButton.Custom>
		<ConnectButton />
	)
}

export default ConnectWallet
