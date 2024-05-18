import React from 'react'
import { RealmProvider } from '@realm/react'
// Import your models
import { Profile } from '../models/Profile.model'
import { Text } from 'react-native'

export const RealmWrapper = (props: { children?: React.ReactNode }) => {
	return (
		<RealmProvider schema={[Profile]}>
			<Text>RealmWrapper</Text>
			{props.children}
		</RealmProvider>
	)
}
