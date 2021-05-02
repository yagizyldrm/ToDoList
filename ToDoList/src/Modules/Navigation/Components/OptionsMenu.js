import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from '../../../Components/Icon';
import { useThemedValues, colorNames } from "../../Theming";
import { Svgs } from '../../../StylingConstants';

import getStyles from "../Screens/Styles/OptionsMenuStyles";

const OptionsMenu = props => {

    const { colors,styles } = useThemedValues(getStyles);

    const renderOptions =()=>{
        return props.options.map((option,index) =>{

            const isChecked = option.key === props.selectedOptionKey;
            const svg = isChecked? Svgs.RadioSelected : Svgs.RadioUnselected;
            const iconStyle={
                color : isChecked ? colors[colorNames.settings.radioButtonSelected]:colors[colorNames.settings.radioButtonUnselected],
            }
        
            return (
                <TouchableOpacity key={option.key} style={styles.optionTouchable} 
                    onPress={() => props.onSelect(option.key)}>
                    <View style={styles.iconContainer}>
                        <Icon iconStyle={iconStyle} svg={svg}/>
                    </View>
                    <Text style={styles.optionTouchable}>{option.title}</Text>
                </TouchableOpacity>
            )
        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.menuTitle}>{props.menuTitle}</Text>
            {renderOptions()}
        </View>
    );
};

export default OptionsMenu;