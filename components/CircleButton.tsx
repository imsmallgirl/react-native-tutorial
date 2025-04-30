import { View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styled from 'styled-components/native';

type Props = {
	onPress: () => void;
};

const CircleButtonContainer = styled.View`
	width: 84px;
	height: 84px;
	border-width: 4px;
	border-color: #ffd33d;
	border-radius: 42px;
	padding: 3px;
`;

const CircleButtonWrap = styled.Pressable`
	flex: 1;
	justify-content: center;
	align-items: center;
	border-radius: 42px;
	background-color: #fff;
`;

const CircleButtonIcon = styled(MaterialIcons)`
	color: #25292e;
`;

export default function CircleButton({ onPress }: Props) {
	return (
		<CircleButtonContainer>
			<CircleButtonWrap onPress={onPress}>
				<CircleButtonIcon name='add' size={38} />
			</CircleButtonWrap>
		</CircleButtonContainer>
	);
}
