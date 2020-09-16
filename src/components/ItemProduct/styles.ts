import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
        paddingHorizontal: 16
    },

    image: {
        width: 74,
        height: 74,
        borderRadius: 32,
        backgroundColor: '#feee'
    },

    topGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24
    },

    type: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 18
    },

    title: {
        marginHorizontal: 24,
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6188'
    },

    price: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 23,
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        backgroundColor: '#3aadef',
        height: 56,
        borderRadius: 8,
        margin: 13,
        padding: 15,
        paddingHorizontal: 20
    },

    buttonEditar: {
        backgroundColor: '#0a4c89',
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default styles;