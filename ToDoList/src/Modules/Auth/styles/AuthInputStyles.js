import { StyleSheet } from 'react-native';
import {Metrics} from '../../../StylingConstants';


const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        paddingHorizontal: Metrics.textMargin,
        backgroundColor: '#189ad3',
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#71c7ec',
        borderColor:'#107dac',
        
    },
});

export default styles;
