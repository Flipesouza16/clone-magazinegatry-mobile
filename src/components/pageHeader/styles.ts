import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#3aadef'
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    textHeader: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },

    title: {
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 250,
        marginVertical: 40
    }
});

export default styles;