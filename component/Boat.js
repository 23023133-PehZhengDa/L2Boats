import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";



const Boat = ({ title, desc, img }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                <Icon name="sailboat" size={50} color="grey" /> {title}
            </Text>
            <Text style={styles.description}>{desc}</Text>
            <Image source={img}/>
            <Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'monospace',
        fontSize: 24,
        color: 'grey',
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        color: 'grey',
    },
});


export default Boat;
