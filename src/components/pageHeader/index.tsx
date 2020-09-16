import React from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface PagaHeaderProps {
    title: string;
}

const PageHeader: React.FC<PagaHeaderProps> = ({ title }) => {
    const { navigate } = useNavigation();

    function handleGoBack() {
        navigate('Landing');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Text style={styles.textHeader}>Voltar</Text>
                </BorderlessButton>
                <Text style={styles.textHeader}>Logo-Teste</Text>
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    );
}

export default PageHeader;