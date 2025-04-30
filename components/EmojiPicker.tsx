import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styled from 'styled-components/native';

type Props = PropsWithChildren<{
	isVisible: boolean;
	onClose: () => void;
}>;

const EmojiListModal = styled.View`
	height: 25%;
	width: 100%;
	background-color: #25292e;
	border-top-right-radius: 18px;
	border-top-left-radius: 18px;
	position: absolute;
	bottom: 0px;
`;

const TitleContainer = styled.View`
	background-color: #464c55;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
	padding: 10px 5px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const Title = styled.Text`
	color: #fff;
	font-size: 16px;
`;
export default function EmojiPicker({ isVisible, children, onClose }: Props) {
	return (
		<View>
			<Modal animationType='slide' transparent={true} visible={isVisible}>
				<EmojiListModal>
					<TitleContainer>
						<Title>Choose a sticker</Title>
						<Pressable onPress={onClose}>
							<MaterialIcons name='close' color='#fff' size={22} />
						</Pressable>
					</TitleContainer>
					{children}
				</EmojiListModal>
			</Modal>
		</View>
	);
}
