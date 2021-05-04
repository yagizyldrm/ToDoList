import { StyleSheet } from 'react-native';
import { colorNames } from '../../Theming/Colors';
import { Metrics } from '../../../StylingConstants';

export default Colors => StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors[colorNames.todo.background],
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
        color: Colors[colorNames.todo.addButton],
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
    },
    todoBoxContainer: {

    },
});
