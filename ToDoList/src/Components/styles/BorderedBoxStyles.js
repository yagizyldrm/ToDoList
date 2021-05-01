import { StyleSheet } from 'react-native';
import { Metrics} from '../../StylingConstants';

const styles = StyleSheet.create({
    container: {
        borderRadius: Metrics.borderRadiusStandard,
    },
    normalHeight: {
        height: Metrics.boxNormalHeight,
    },
    tallHeight: {
        height: Metrics.normalHeight,
    },
});

export default styles;