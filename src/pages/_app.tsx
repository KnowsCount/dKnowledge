import 'tailwindcss/tailwind.css'
import { APP_NAME } from '@/lib/consts'
import '@rainbow-me/rainbowkit/styles.css'
import { chain, createClient, WagmiConfig } from 'wagmi'
import { apiProvider, configureChains, darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, globalTheme } from '@/utils/globalStyle'
import 'styles/global.css'

const { chains, provider } = configureChains(
	[chain.mainnet, chain.optimism],
	[apiProvider.infura(process.env.NEXT_PUBLIC_INFURA_ID), apiProvider.fallback()]
)

const { connectors } = getDefaultWallets({ appName: APP_NAME, chains })
const wagmiClient = createClient({ autoConnect: true, connectors, provider })

const App = ({ Component, pageProps }) => {
	return (
		<>
			<GlobalStyle />
			<WagmiConfig client={wagmiClient}>
				<RainbowKitProvider chains={chains}>
					<ThemeProvider theme={globalTheme}>
						<Component {...pageProps} />
					</ThemeProvider>
				</RainbowKitProvider>
			</WagmiConfig>
		</>
	)
}

export default App
