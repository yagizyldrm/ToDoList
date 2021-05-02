// hex
const constantColors = {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
    pink: '#ff9cf7',
    blue: '#189ad3', //seçtiğimiz mavi
    greys: {
        1: '#383838',
        2: '#ACACAC',
        3: '#868686',
        4: '#BCBCBC',
    },
};

const toRGBA = (hexCode, opacity) => {
    let hex = hexCode.replace('#', '');

    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity / 100})`;
};

export const colorNames = {
    auth: {
        background: 'auth/background',
        inputBorder: 'auth/inputBorder',
        inputBackground: 'auth/inputBackground',
        inputText: 'auth/inputText',
        inputPlaceholder: 'auth/inputPlaceholder',
        coloredButtonBackground: 'auth/coloredButtonBackground',
        coloredButtonText: 'auth/coloredButtonText',
        paleButtonBackground: 'auth/paleButtonBackground',
        paleButtonText: 'auth/paleButtonText',
        appNameText: 'auth/appNameText',
    },
    todo: {
        background: 'todo/background',
        headerText: 'todo/headerText',
        contentBorder: 'todo/contentBorder',
        checkBoxColor: 'todo/checkBoxColor',
    },
    settings: {
        background: 'settings/background',
        radioButtonSelected: 'settings/radioButtonSelected',
        radioButtonUnselected: 'settings/radioButtonUnselected',
        signOutBorder:'settings/signOutBorder',
        signOutButtonBackground:'settings/signOutButtonBackground',
        signOutText:'settings/singOutText',
        titleColor:'settings/titleColor',
        username:"settings/username",
        eMail:"settings/eMail",
    },
};

export const darkColors = {
    // auth
    [colorNames.auth.background]: constantColors.pink, // örnek

    //todo
    [colorNames.todo.background]: constantColors.blue,
    //settings
    [colorNames.settings.background]: constantColors.black,
    [colorNames.settings.radioButtonSelected]: constantColors.blue,
    [colorNames.settings.radioButtonUnselected]: constantColors.white,
    [colorNames.settings.signOutBorder]: constantColors.blue,
    [colorNames.settings.signOutText]: constantColors.white,
    [colorNames.settings.titleColor]: constantColors.blue,
    [colorNames.settings.signOutButtonBackground]: constantColors.black,
    [colorNames.settings.eMail]:constantColors.white,
    [colorNames.settings.username]:constantColors.white,
};

export const lightColors = {
    // auth
    [colorNames.auth.background]: constantColors.pink, // örnek

    //todo
    [colorNames.todo.background]: constantColors.blue,

    //settings
    [colorNames.settings.background]: constantColors.white,
    [colorNames.settings.radioButtonSelected]: constantColors.blue,
    [colorNames.settings.radioButtonUnselected]: constantColors.black,
    [colorNames.settings.signOutBorder]: constantColors.blue,
    [colorNames.settings.signOutText]: constantColors.black,
    [colorNames.settings.signOutButtonBackground]: constantColors.white,
    [colorNames.settings.titleColor]: constantColors.blue,
    [colorNames.settings.username]: constantColors.black,
    [colorNames.settings.eMail]:constantColors.black,
};
