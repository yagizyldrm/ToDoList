import { StyleSheet } from 'react-native';
import { Metrics } from '../../../StylingConstants';

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
        flex: 0.75,
        justifyContent: 'center',
        alignItems: 'center',
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
        marginTop: Metrics.width * 0.02,

    },
});

export default styles;
