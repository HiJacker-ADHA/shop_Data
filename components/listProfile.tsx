import React from 'react'
import { useQuery } from '@realm/react'
import { Profile } from '../models/Profile.model'
import { Text } from 'react-native'

export const ListProfiles = () => {
	// Find
	const profiles = useQuery(Profile)
	// Sort

	// ... rest of component
	return (
		<>
			{profiles.map((profile, index) => (
				<Text key={index}>{profile.name}</Text>
			))}
		</>
	)
}
