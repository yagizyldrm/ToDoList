import { StyleSheet } from 'react-native';
import {Fonts, Metrics} from '../../../StylingConstants';
import {colorNames} from '../../Theming'


const styles = (Colors) => StyleSheet.create({
    inputContainer: {
        flex:1,
        paddingHorizontal: Metrics.textMargin,
        backgroundColor: Colors[colorNames.auth.inputBackground]
    },
    input: {
        flex: 1,
        fontSize: Fonts.size(15),
        fontFamily: Fonts.type.light,
        color: Colors[colorNames.auth.inputText]  
    },
});

export default styles;
