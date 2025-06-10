import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cardContainer: {
        width: 300,
        borderRadius: 12,
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 5,
        overflow: 'hidden'
    },

    image: {
        width: '100%',
        height: 150,
    },

    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
    },

    textContainer: {
        flex: 1,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
    },

    subInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },

    restaurante: {
        fontSize: 13,
        color: '#666',
        marginRight: 4,
    },

    distancia: {
        fontSize: 13,
        color: '#666',
        marginLeft: 2,
    },

    avaliacaoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },

    avaliacaoText: {
        fontSize: 13,
        color: '#888',
        marginLeft: 4,
    },

    precoContainer: {
        backgroundColor: '#c66b3d',
        borderRadius: 6,
        paddingVertical: 4,
        paddingHorizontal: 8,
    },

    preco: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default styles;
