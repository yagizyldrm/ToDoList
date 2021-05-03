import { StyleSheet } from 'react-native';
import { Metrics } from '../../../../StylingConstants';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'pink',
    },
    addButton: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 20,
        backgroundColor: 'transparent',
        width: Metrics.width * 0.2,
        height: undefined,
        borderRadius: 1000,
        flexDirection: 'row',
    },
    iconContainer: {
        width: Metrics.width * 0.09,
        height: Metrics.width * 0.09,
        aspectRatio: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
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
