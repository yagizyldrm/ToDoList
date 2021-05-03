import { StyleSheet } from 'react-native';
import { Metrics,Fonts } from '../../../StylingConstants';


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#189ad3',
    },
    keyboardAvoiding: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: Metrics.width * 0.03,
        paddingHorizontal: Metrics.marginHorizontal,
    },
    appLogoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:40
    },
    inputsContainer: {
        minHeight: Metrics.width * 0.5,
        justifyContent: 'center',
    },
    image: {
        width: undefined,
        height: '80%',
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    buttonsContainer: {
        justifyContent: 'center',
    },
    signupTouchable: {
        alignItems: 'center',
        marginTop: Metrics.width * 0.01,
    },
    signupText: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(16),
        color: 'black',
        paddingVertical:5
    },
    authLogoContainer: {
        width: Metrics.width * 0.8,
        height: undefined,
        aspectRatio: 1,
    },
    appNameContainer: {
        alignItems: 'center',
    },
    appNameText: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(40),
        color: 'black',
        letterSpacing: Metrics.width * 0.04,
    },
});

export default styles;
