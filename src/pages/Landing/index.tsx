import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import logo from '../../../assets/logo_transparent.png';

function Landing() {
    const [total, setTotal] = useState('');
    const [go, setGo] = useState(false);
    const { navigate } = useNavigation();
    const [itensLoaded, setItensLoaded] = useState(false);

    function handleNavigateToProducts() {
        navigate('Products');
    }

    function handleNavigateToRegister() {
        setItensLoaded(false);
        navigate('Register');
    }

    load();

    useEffect(() => {
        console.log('lorem')
        load();
    }, [itensLoaded]);

    async function load() {
        await api.get('/').then(response => {
            const { total } = response.data;
            setTotal(total);
            if (total == 0) {
                setTotal('0');
            }
            console.log(total);
            setItensLoaded(true);
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Logo-Teste</Text>

            <Text style={styles.subtitle}>Produtos de diversos sites reunidos em um só lugar!
            {'\n'} {'\n'} 
            O que deseja fazer ?
            </Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleNavigateToProducts} style={[styles.button, styles.buttonPrimary, styles.border, styles.buttonPrimary]}>
                    <Text style={styles.buttonText}>Lista de Produtos</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNavigateToRegister} style={[styles.button, styles.buttonSecondary]}>
                    <Text style={styles.buttonText}>Cadastrar Novo Produto</Text>
                </TouchableOpacity>

                {Number(total) > 0 ? (
                    <Text style={styles.totalProducts}>
                        Total de {total ? total : <Text>...</Text>}
                        {' '}
                        {Number(total) > 1 ? (
                            <Text>produtos</Text>
                        ) : <Text>produto</Text>}
                        {' '}
                        {Number(total) > 1 ? (
                            <Text>cadastrados</Text>
                        ) : <Text>cadastrado</Text>}
                    </Text>
                ) : (
                        <Text style={styles.totalProducts}>
                            {total ? (
                                <Text>Nenhum Produto Cadastrado</Text>
                            ) : (
                                    <Text>Total de produtos...</Text>
                                )}
                        </Text>
                    )}
            </View>
        </View>
    );
}

export default Landing;