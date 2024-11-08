import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boat = ({ title, desc, img }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Icon name="sailboat" size={24} color="grey" style={styles.icon} />
                <Text style={styles.title}>{title.toUpperCase()}</Text>
            </View>
            <Text style={styles.description}>{desc}</Text>
            <Image source={img} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 8,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#f9f9f9',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },
    title: {
        flex: 1,
        fontFamily: 'monospace',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'grey'
    },
    description: {
        fontSize: 16,
        color: 'grey',
        textAlign: 'center',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
});

export default Boat;
