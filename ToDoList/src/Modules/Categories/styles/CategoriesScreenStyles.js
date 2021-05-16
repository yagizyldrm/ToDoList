import { StyleSheet } from 'react-native';
import { colorNames } from '../../Theming/Colors';
import { Fonts, Metrics } from '../../../StylingConstants';

export default Colors => StyleSheet.create({

    container: { flex:1, 
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor: Colors[colorNames.todo.headerBlue]
    },
    drawerIconsContainer: {
        width: Metrics.width *0.5,
        height: Metrics.width*0.5 ,
        aspectRatio: 1,
    },
});
