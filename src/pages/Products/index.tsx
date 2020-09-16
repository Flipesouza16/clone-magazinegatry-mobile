import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image } from 'react-native';
import PageHeader from '../../components/pageHeader';

import styles from './styles';
import ItemProduct, { Card } from '../../components/ItemProduct';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import RNRestart from 'react-native-restart';

function Products() {
    const { navigate } = useNavigation();

    const [products, setProducts] = useState([]);
    const [productsInfo, setProductsInfo] = useState(1);
    const [productsFound, setProductsFound] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadProduct();
    }, [page])
        

    function loadProduct() {
        api.get(`/?page=${page}`).then(response => {
            setProducts(response.data.docs);
            setProductsInfo(response.data.pages);
            setProductsFound(true);
        });
    }

    function prevPage() {
        const thisPage = page;

        if(thisPage === 1) return;

        const pageNumber = thisPage - 1;
        setPage(pageNumber);
    }

    function nextPage() {
        if(page === productsInfo) return;

        const pageNumber = page + 1;

        setPage(pageNumber);
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Lista de Produtos" />

            {productsFound ? (
                <ScrollView 
                    style={styles.itemProduct}
                    contentContainerStyle={{
                        paddingHorizontal: 16,
                        paddingBottom: 16
                    }}
                >
                    {products.map((card: Card) => (
                        <ItemProduct key={card._id} card={card} />
                    ))}
                </ScrollView>
            ) : <Text style={styles.loading}>Carregando...</Text>
            }

            {(productsFound && products.length === 0) && (
                <Text style={styles.results}>Nenhum resultado encontrado</Text>
            )}

            {productsFound && 
                <View style={styles.buttonsContainer}>
                <RectButton 
                    onPress={prevPage}
                    style={styles.button}>
                    <Text 
                    style={styles.buttonText}>Anterior
                    </Text>
                </RectButton>

                <Text style={styles.pageText}>{`${page}/${productsInfo}`}</Text>

                <RectButton onPress={nextPage}
                    style={styles.button}>
                    <Text 
                    style={styles.buttonText}>Próxima</Text>
                </RectButton>
            </View>
            }

        </View>
    );
}

export default Products;