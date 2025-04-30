import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image';
import styled from 'styled-components/native';

type Props = {
	imgSource: ImageSource;
	selectedImage?: string;
};

const ImageViewerWrap = styled.Image`
	width: 320;
	height: 440;
	border-radius: 18px;
`;

export default function ImageViewer({ imgSource, selectedImage }: Props) {
	const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

	return <ImageViewerWrap source={imageSource} />;
}
