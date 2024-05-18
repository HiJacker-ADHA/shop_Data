import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { BSON } from 'realm'
import { useRealm } from '@realm/react'
import { Profile } from '../models/Profile.model'

export const CreateProfile = () => {
	const realm = useRealm()
	const [profileName, setProfileName] = useState('')

	const addProfile = () => {
		realm.write(() => {
			realm.create(Profile, {
				_id: new BSON.ObjectId(),
				name: profileName,
			})
		})
	}

	return (
		<View>
			<Text>Create</Text>

			<TextInput
				onChangeText={setProfileName}
				value={profileName}
				placeholder="Profile name..."
			/>

			<Button title="Add Profile" onPress={addProfile} />
			<Button
				title="Clear All"
				onPress={() => {
					realm.write(() => {
						realm.delete(realm.objects(Profile))
					})
				}}
			/>
		</View>
	)
}
