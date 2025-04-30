import { PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
	label: string;
	theme?: 'primary';
	onPress?: () => void;
};
const ButtonWrap = styled.View<{ themeType?: string }>`
	width: 320px;
	height: 68px;
	margin-top: 20px;
	align-items: center;
	justify-content: center;
	padding: 3px;
	border-radius: 18px;
	border-width: ${({ themeType }: { themeType: string }) =>
		themeType === 'primary' ? 4 : 0};
	border-color: ${({ themeType }: { themeType?: string }) =>
		themeType === 'primary' ? '#ffd33d' : '#fff'};
`;

const ButtonContainer = styled.Pressable<{ themeType?: string }>`
	border-radius: 10px;
	width: 100%;
	height: 100%;
	padding: 10px;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	background-color: ${({ themeType }: { themeType?: string }) =>
		themeType === 'primary' ? '#fff' : 'transparent'};
`;

const ButtonLabel = styled.Text<{ themeType?: string }>`
	color: ${({ themeType }: { themeType?: string }) =>
		themeType === 'primary' ? '#25292e' : '#fff'};
	font-size: 16px;
`;

const ButtonIcon = styled(FontAwesome)`
	padding-right: 8px;
	color: #25292e;
	font-size: 18px;
`;

export default function Button({ label, theme, onPress }: Props) {
	return (
		<ButtonWrap themeType={theme}>
			<ButtonContainer themeType={theme} onPress={onPress}>
				<ButtonIcon name='picture-o' size={18} color='#25292e' />
				<ButtonLabel themeType={theme}>{label}</ButtonLabel>
			</ButtonContainer>
		</ButtonWrap>
	);
}
