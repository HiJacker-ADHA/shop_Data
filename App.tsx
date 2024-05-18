import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { RealmWrapper } from './wrappers/RealmWrapper'
import { CreateProfile } from './components/addProfile'
import { ListProfiles } from './components/listProfile'

export default function App() {
	return (
		<View style={styles.container}>
			<RealmWrapper>
				<Text>Open up App.tsx to start working on your app!</Text>
				<StatusBar style="auto" />
				<CreateProfile />
				<ListProfiles />
			</RealmWrapper>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
