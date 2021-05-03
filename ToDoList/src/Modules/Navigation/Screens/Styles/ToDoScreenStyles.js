import { StyleSheet } from 'react-native';
import { Metrics } from '../../../../StylingConstants';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'pink',
    },
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: 'transparent',
        width: Metrics.width * 0.18,
        height: Metrics.width * 0.18,
        flexDirection: 'column',
        marginTop: Metrics.width * 1.525,
        marginLeft: Metrics.width * 0.82,
        
    },
    iconContainer: {
        width: Metrics.width * 0.146,
        height: Metrics.width * 0.146,
        aspectRatio: 1,
    },
    icon: {
        color: 'lightblue',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderRadius: 50,
        width: Metrics.width * 0.09,
        height: Metrics.width * 0.09,
    },
    iconCon: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginLeft: 60,
        backgroundColor: 'blue',
    },
});

export default styles;
