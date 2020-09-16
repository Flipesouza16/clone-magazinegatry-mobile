import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3aadef'
    },

    title: {
        fontSize: 55,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 45
    },

    subtitle: {
        fontSize: 20,
        lineHeight: 30,
        marginTop: 100,
        color: '#f0f0f1',
        maxWidth: 300
    },

    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 120,
    },

    button: {
        borderRadius: 8,
        padding: 24,
        margin: 5,
    },

    buttonText: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },

    border: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
    },

    buttonPrimary: {
        
    },

    buttonSecondary: {
        backgroundColor: '#0a4c89'
    },

    buttonWeb: {
        backgroundColor: '#0bbdff'
    },

    totalProducts: {
        color: '#6a6188',
        fontSize: 16,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 35
    }
})

export default styles;