import { useState } from 'react';
import { StyleSheet, FlatList, Platform, Pressable } from 'react-native';
import { Image, type ImageSource } from 'expo-image';
import styled from 'styled-components/native';

type Props = {
	onSelect: (image: ImageSource) => void;
	onCloseModal: () => void;
};

const EmojiListContainer = styled.FlatList.attrs({
	contentContainerStyle: {
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		padding: 20,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
})``;

const EmojiItem = styled.Image`
	width: 100px;
	height: 100px;
	margin-right: 20px;
`;

export default function EmojiList({ onSelect, onCloseModal }: Props) {
	const [emoji] = useState<ImageSource[]>([
		require('../assets/images/emoji1.png'),
		require('../assets/images/emoji2.png'),
		require('../assets/images/emoji3.png'),
		require('../assets/images/emoji4.png'),
		require('../assets/images/emoji5.png'),
	]);

	return (
		<EmojiListContainer
			horizontal
			showsHorizontalScrollIndicator={Platform.OS === 'web'}
			data={emoji}
			renderItem={({ item, index }: { item: ImageSource; index: number }) => (
				<Pressable
					onPress={() => {
						onSelect(item);
						onCloseModal();
					}}
				>
					<EmojiItem source={item} key={index} />
				</Pressable>
			)}
		/>
	);
}
