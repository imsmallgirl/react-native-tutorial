import { Tabs } from 'expo-router';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, View } from 'react-native';

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? 'home-sharp' : 'home-outline'}
							color={color}
							size={24}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='about'
				options={{
					title: 'About',
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={
								focused ? 'information-circle' : 'information-circle-outline'
							}
							color={color}
							size={24}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
