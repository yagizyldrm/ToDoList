import {StyleSheet} from 'react-native';
import { Fonts } from '../../../StylingConstants';

const styles = StyleSheet.create({
    touchable: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },  
    text: {
        fontSize: 18,
        color: 'black',
        fontFamily: Fonts.type.bold
    },
});

export default styles;
