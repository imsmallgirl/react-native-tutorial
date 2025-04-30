import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styled from 'styled-components/native';

type Props = {
	icon: keyof typeof MaterialIcons.glyphMap;
	label: string;
	onPress: () => void;
};

const IconButtonContainer = styled.Pressable`
	justify-content: center;
	align-items: center;
`;

const IconButtonLabel = styled.Text`
	color: #fff;
	margin-top: 12px;
`;

export default function IconButton({ icon, label, onPress }: Props) {
	return (
		<IconButtonContainer onPress={onPress}>
			<MaterialIcons name={icon} size={24} color='#fff' />
			<IconButtonLabel>{label}</IconButtonLabel>
		</IconButtonContainer>
	);
}
