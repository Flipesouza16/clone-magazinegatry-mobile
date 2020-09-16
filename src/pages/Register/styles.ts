import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scroll: {
        marginTop: -70,
    },

    container: {
        padding: 30,
        backgroundColor: '#0a4c89',
        borderRadius: 8, 
    },

    label: {
        fontSize: 19,
        color: '#fff',
        marginBottom: 15,
        marginRight: 8,
        marginTop: 5
    },

    groupLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    groupInputs: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    input: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        color: 'black',
        overflow: 'hidden'
    },

    fieldleft: {
        textAlign: 'center',
        alignItems: 'center',
        width: 125
    },

    right: {
        maxWidth: 200
    },

    button: {
        marginTop: 30,
        padding: 20,
        backgroundColor: '#3aadef',
        borderRadius: 8
    },

    buttonDelete: {
        marginTop: 15,
        padding: 20,
        backgroundColor: ' rgb(224, 5, 5)',
        borderRadius: 8
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    },

    footer: {
        backgroundColor: '#3aadef',
        height: 250,
    },

    loading: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'gray',
        padding: 50,
        marginVertical: 100,
        textAlign: 'center'
    },
})

export default styles;