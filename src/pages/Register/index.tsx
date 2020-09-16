import React, { useState, useEffect } from 'react';
import { View, Text, Picker, Modal } from 'react-native';
import PageHeader from '../../components/pageHeader';
import { TextInput, RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import api from '../../services/api';
import { useNavigation, useRoute } from '@react-navigation/native';

const initialValues = {
    _id: '',
    title: '',
    url: '',
    imageUrl: '',
    price: '',
    type: ''
}

function Register() {
    const { navigate } = useNavigation();
    const route = useRoute();

    const [itensFound, setItensFound] = useState(false);

    const [saving, setSaving] = useState(false);

    const [popupEmptyField, setPopupEmptyField] = useState(false);
    const [popupDeleteItem, setPopupDeleteItem] = useState(false);

    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [url, setUrl] = useState('');
    const [type, setType] = useState('Celulares');
    const params = route.params;
    const [values, setValues] = useState(initialValues);

    function handleNavigateToHome() {
        setSaving(false);
        setPopupDeleteItem(false);
        navigate('Landing', {
            total: true
        });
    }

    useEffect(() => {
        if (params) {
            load();
            setImage(values.imageUrl);
            setUrl(values.url);
            setTitle(values.title);
            setPrice(String(values.price));
            setType(values.type);
        }
    }, [itensFound]);

    async function load() {
        await api.get(`/${params.id}`).then(response => {
            setValues(response.data);
            setItensFound(true);
        })
    }

    async function onsubmit() {
        if (image != '' && title != '' && price != '' && url != '') {
            setSaving(true);
        } else {
            return (
                setPopupEmptyField(true)
            )
        }

        try {
            {
                params ? (
                    await api.put(`/${params.id}`, { imageUrl: image, url, title, price, type }).then(response => {
                        handleNavigateToHome();
                    })
                ) : (
                        await api.post('/', { imageUrl: image, url, title, price, type }).then(response => {
                            handleNavigateToHome();
                        })
                    )
            }
        } catch (err) {
            console.log(err);
        }
    }

    function closePopup() {
        setPopupEmptyField(false);
        setPopupDeleteItem(false);
    }

    async function onDelete() {
        setSaving(true);

        await api.delete(`/${params.id}`).then(response => {
            handleNavigateToHome();
        })
    }

    function warningEmptyField() {
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
                        }}>Preencha Todos os Campos!</Text>

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

    function modalDelete() {
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
                            marginTop: 25,
                            padding: 10
                        }}>Tem certeza que deseja exluir este produto ?</Text>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text onPress={onDelete} style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                fontSize: 35,
                                fontWeight: 'bold',
                                color: '#fff',
                                marginTop: 150,
                                backgroundColor: '#3aadef',
                                borderRadius: 8,
                                padding: 15,
                                marginHorizontal: 50
                            }}>Sim</Text>

                            <Text onPress={closePopup} style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                fontSize: 35,
                                fontWeight: 'bold',
                                color: '#fff',
                                marginTop: 150,
                                backgroundColor: '#3aadef',
                                borderRadius: 8,
                                padding: 15,
                                marginHorizontal: 50
                            }}>Não</Text>
                        </View>

                    </View>

                </View>
            </Modal>
        )
    }

    function warningDeleteItem() {
        setPopupDeleteItem(true);
    }

    return (
        <View>
            {saving && (
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
                        <Text style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: '#fff'
                        }}>Salvando...</Text>
                    </View>
                </Modal>
            )}

            {popupEmptyField && (
                warningEmptyField()
            )}

            {popupDeleteItem && (
                modalDelete()
            )}

            {params ? (
                <PageHeader title="Alterar dados ou excluir o produto" />
            ) : (
                    <PageHeader title="Cadastro" />
                )}
            {values._id === '' && params ? (
                <Text style={styles.loading}>Carregando...</Text>
            ) : (
                    <ScrollView
                        style={styles.scroll}
                        contentContainerStyle={{
                            paddingHorizontal: 14,
                            paddingBottom: 16
                        }}
                    >
                        <View style={styles.container}>

                            <Text style={styles.label}>Título/Descrição do Produto</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Título e/ou Descrição do produto"
                                value={title}
                                onChangeText={e => setTitle(e)}
                            >
                            </TextInput>

                            <View style={styles.groupLabels}>
                                <Text style={styles.label}>Imagem</Text>
                                <Text style={styles.label}>Link do Produto</Text>
                            </View>

                            <View style={styles.groupInputs}>
                                <TextInput
                                    style={[styles.input, styles.fieldleft]}
                                    placeholder="URL da imagem"
                                    value={image}
                                    onChangeText={e => setImage(e)}
                                >
                                </TextInput>

                                <TextInput
                                    style={[styles.input, styles.right]}
                                    placeholder="http://...                   "
                                    value={url}
                                    onChangeText={e => setUrl(e)}
                                >
                                </TextInput>
                            </View>

                            <View style={styles.groupLabels}>
                                <Text style={[styles.label, styles.fieldleft]}>Preço</Text>
                                <Text style={styles.label}>Tipo do Produto</Text>
                            </View>

                            <View style={styles.groupInputs}>

                                <TextInput
                                    style={[styles.input, styles.fieldleft]}
                                    placeholder="Preço"
                                    keyboardType='numeric'
                                    value={price}
                                    onChangeText={e => setPrice(e)}
                                >
                                </TextInput>

                                <Picker
                                    selectedValue={type}
                                    style={{
                                        height: 50,
                                        width: 150,
                                        color: '#fff',
                                    }}
                                    onValueChange={(itemValue, itemIndex) => setType(itemValue)}
                                >
                                    <Picker.Item label="Celulares" value="celulares" />
                                    <Picker.Item label="Livros" value="livros" />
                                    <Picker.Item label="Games" value="games" />
                                    <Picker.Item label="Outros" value="não específicado" />
                                </Picker>
                            </View>

                        </View>
                        <RectButton onPress={onsubmit} style={styles.button}>
                            {params ? (
                                <Text style={styles.buttonText}>Alterar</Text>
                            ) : <Text style={styles.buttonText}>Cadastrar</Text>}
                        </RectButton>

                        {params && (
                            <RectButton onPress={warningDeleteItem} style={styles.buttonDelete}>
                                <Text style={styles.buttonText}>Exluir</Text>
                            </RectButton>
                        )}
                    </ScrollView>
                )}
            <View style={styles.footer} />
        </View>
    );
}

export default Register;