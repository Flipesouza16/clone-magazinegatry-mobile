import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#f0f0f7'
    },

    itemProduct: {
        marginTop: -40
    },

    loading: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'gray',
        marginTop: 100,
        textAlign: 'center'
    },

    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    results: {
        marginBottom: 250,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'gray',
        marginTop: 100,
        textAlign: 'center'
    },

    button: {
        marginHorizontal: 25,
        marginVertical: 20,
        borderRadius: 8,
        backgroundColor: '#0a4c89',
        padding: 10
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },

    pageText: {
        fontSize: 16,
        fontWeight: 'bold'
    }

});

export default styles;