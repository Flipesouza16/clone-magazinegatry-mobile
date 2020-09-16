import React, { useState } from 'react';
import { View, Image, Text, Linking, Modal } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export interface Card {
    _id: string,
    imageUrl: string,
    url: string,
    title: string,
    price: any,
    type: string,
}

interface cardProps {
    card: Card;
}

const ItemProduct: React.FC<cardProps> = ({ card }) => {
    const { navigate } = useNavigation();

    const [urlInvalid, setUrlInvalid] = useState(false);

    function handleNavigateToRegister() {
        navigate('Register', {
            id: card._id
        });    
    }

    function navigateToUrlProduct() {
        //
        Linking.canOpenURL(card.url).then(supported => {
            if (supported) {
              Linking.openURL(card.url);
            } else {
              console.log("Don't know how to open URI: " + card.url);
              setUrlInvalid(true);
            }
          });
    }

    function closePopup() {
        setUrlInvalid(false);
    }

    function warningUrlInvalid() {
        return (
            <Modal
                visible={true}
                transparent={true}
            >
                <View style={{
                    backgroundColor: '#0a4d80d7',
                    height: 450,
                    justifyContent: 'center',
                    marginVertical: '30%',
                    borderRadius: 8
                }}>
                    <View>
                        <Text onPress={closePopup} style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            fontSize: 28,
                            fontWeight: 'bold',
                            color: '#fff',
                            marginTop: 25
                        }}>Url do produto inválida, verifique e tente novamente!</Text>

                        <Text onPress={closePopup} style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: '#fff',
                            marginTop: 150,
                            backgroundColor: '#3aadef',
                            borderRadius: 8,
                            padding: 15,
                            marginHorizontal: 50
                        }}>OK</Text>
                    </View>

                </View>
            </Modal>
        )
    }

    
    return (
        <View style={styles.container}>

            {urlInvalid && (
                warningUrlInvalid()
            )}

            <View style={styles.topGroup}>
                <Image style={styles.image} source={{ uri: card.imageUrl }} />
                <Text style={styles.type}>Tipo: {card.type}</Text>
            </View>
            <Text style={styles.title}>
                {card.title}
            </Text>
            <Text style={styles.price}>R$ {card.price}</Text>

            <View style={styles.buttonsContainer}>
                <RectButton
                    onPress={handleNavigateToRegister}
                    style={[styles.button, styles.buttonEditar]}>
                    <Text style={styles.buttonText}>Editar</Text>
                </RectButton>
                <RectButton 
                    onPress={navigateToUrlProduct}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Verificar o produto</Text>
                </RectButton>
            </View>
        </View>
    );
}

export default ItemProduct;