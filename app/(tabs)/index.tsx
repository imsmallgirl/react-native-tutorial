import { ScrollView, Text, View } from 'react-native';
import styled from 'styled-components/native';
import * as ImagePicker from 'expo-image-picker';
import { useCallback, useState, useRef } from 'react';
import { type ImageSource } from 'expo-image';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';

import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import CircleButton from '@/components/CircleButton';
import IconButton from '@/components/IconButton';
import EmojiPicker from '@/components/EmojiPicker';
import EmojiList from '@/components/EmojiList';
import EmojiSticker from '@/components/EmojiSticker';

const PlaceholderImage = require('@/assets/images/background-image.png');

const Container = styled.View`
	flex: 1;
	background-color: #25292e;
	align-items: center;
`;

const ImageContainer = styled.View`
	flex: 1;
`;

const FooterContainer = styled.View`
	align-items: center;
	flex: 0.33;
`;
const OptionsContainer = styled.View`
	position: absolute;
	bottom: 80;
`;

const OptionsRow = styled.View`
	flex-direction: row;
	align-items: center;
	gap: 30px;
`;

export default function HomeScreen() {
	const imageRef = useRef<View>(null);

	const [selectedImage, setSelectedImage] = useState<string | undefined>(
		undefined
	);
	const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(
		undefined
	);
	const [status, requestPermission] = MediaLibrary.usePermissions();
	// ...rest of the code remains same

	if (status === null) {
		requestPermission();
	}

	const pickImageAsync = useCallback(async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ['images'],
			allowsEditing: true,
			quality: 1,
		});

		if (!result.canceled) {
			setSelectedImage(result.assets[0].uri);
			setShowAppOptions(true);
		} else {
			alert('You did not select any image.');
		}
	}, [setSelectedImage]);

	const onReset = () => {
		setShowAppOptions(false);
	};

	const onAddSticker = () => {
		setIsModalVisible(true);
	};

	const onModalClose = () => {
		setIsModalVisible(false);
	};

	const onSaveImageAsync = async () => {
		try {
			const localUri = await captureRef(imageRef, {
				height: 440,
				quality: 1,
			});

			await MediaLibrary.saveToLibraryAsync(localUri);
			if (localUri) {
				alert('Saved!');
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<GestureHandlerRootView>
			<Container>
				<ImageContainer ref={imageRef} collapsable={false}>
					<ImageViewer
						imgSource={PlaceholderImage}
						selectedImage={selectedImage}
					/>
					{pickedEmoji && (
						<EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
					)}
				</ImageContainer>
				{showAppOptions ? (
					<OptionsContainer>
						<OptionsRow>
							<IconButton icon='refresh' label='Reset' onPress={onReset} />
							<CircleButton onPress={onAddSticker} />
							<IconButton
								icon='save-alt'
								label='Save'
								onPress={onSaveImageAsync}
							/>
						</OptionsRow>
					</OptionsContainer>
				) : (
					<FooterContainer>
						<Button
							theme='primary'
							label='Choose a photo'
							onPress={pickImageAsync}
						/>
						<Button
							label='Use this photo'
							onPress={() => setShowAppOptions(true)}
						/>
					</FooterContainer>
				)}
				<EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
					<EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
				</EmojiPicker>
			</Container>
		</GestureHandlerRootView>
	);
}
