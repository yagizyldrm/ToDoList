// hex
const constantColors = {
    white: '#FFFFFF',
    black: '#2D2D2D',
    transparent: 'transparent',
    pink: '#ff9cf7',
    blue: '#189ad3', //seçtiğimiz mavi
    purple: '#800080',

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
        appNameText: 'auth/appNameText',
        appIcon: 'auth/appIcon',
    },
    todo: {
        background: 'todo/background',
        headerText: 'todo/headerText',
        contentBorder: 'todo/contentBorder',
        checkBoxColor: 'todo/checkBoxColor',
        addButton: 'todo/addButton',
    },
    settings: {
        background: 'settings/background',
        radioButtonSelected: 'settings/radioButtonSelected',
        radioButtonUnselected: 'settings/radioButtonUnselected',
        signOutBorder: 'settings/signOutBorder',
        signOutButtonBackground: 'settings/signOutButtonBackground',
        signOutText: 'settings/singOutText',
        titleColor: 'settings/titleColor',
        username: "settings/username",
        eMail: "settings/eMail",
    },
    addNewNote: {
        border: "addNewNote/border",
        background: "addNewNote/background",
        todayText: "addNewNote/todayText",
        text:"addNewNote/text",
        headerText:"addNewNote/headerText",
        textInputs:"addNewNote/textInputs",
    },
};

export const darkColors = {
    // auth
    [colorNames.auth.background]: constantColors.blue, 
    [colorNames.auth.paleButtonText]: constantColors.greys[1],
    [colorNames.auth.appNameText]: constantColors.greys[1],
    [colorNames.auth.inputPlaceholder]: toRGBA(constantColors.greys[1], 40),
    [colorNames.auth.appIcon]: constantColors.greys[1],
    [colorNames.auth.coloredButtonBackground]: constantColors.white,
    [colorNames.auth.inputBorder]: constantColors.black,
    [colorNames.auth.coloredButtonText]: constantColors.black,
    [colorNames.auth.inputBackground]: toRGBA(constantColors.blue, 10),
    [colorNames.auth.paleButtonBackground]: constantColors.transparent,
    [colorNames.auth.inputText]: constantColors.white,

    //todo
    [colorNames.todo.background]: constantColors.black,
    [colorNames.todo.addButton]: constantColors.blue,

    //settings
    [colorNames.settings.background]: constantColors.black,
    [colorNames.settings.radioButtonSelected]: constantColors.blue,
    [colorNames.settings.radioButtonUnselected]: constantColors.white,
    [colorNames.settings.signOutBorder]: constantColors.blue,
    [colorNames.settings.signOutText]: constantColors.white,
    [colorNames.settings.titleColor]: constantColors.blue,
    [colorNames.settings.signOutButtonBackground]: constantColors.black,
    [colorNames.settings.eMail]: constantColors.white,
    [colorNames.settings.username]: constantColors.white,
    //addNewNote
    [colorNames.addNewNote.background]: constantColors.black,
    [colorNames.addNewNote.border]: constantColors.blue,
    [colorNames.addNewNote.text]: constantColors.white,
    [colorNames.addNewNote.todayText]: constantColors.white,
    [colorNames.addNewNote.headerText]: constantColors.white,
    [colorNames.addNewNote.textInputs]: constantColors.white,
};

export const lightColors = {
    // auth
    [colorNames.auth.background]: constantColors.blue, 
    [colorNames.auth.paleButtonText]: constantColors.black,
    [colorNames.auth.appNameText]: constantColors.black,
    [colorNames.auth.inputPlaceholder]: toRGBA(constantColors.black, 50),
    [colorNames.auth.appIcon]: constantColors.purple,
    [colorNames.auth.coloredButtonBackground]: constantColors.white,
    [colorNames.auth.inputBorder]: constantColors.white, 
    [colorNames.auth.coloredButtonText]: constantColors.purple,
    [colorNames.auth.inputBackground]: toRGBA(constantColors.greys[2], 30),
    [colorNames.auth.paleButtonBackground]: constantColors.transparent,
    [colorNames.auth.inputText]: constantColors.black,


    //todo
    [colorNames.todo.background]: constantColors.white,
    [colorNames.todo.addButton]: constantColors.blue,

    //settings
    [colorNames.settings.background]: constantColors.white,
    [colorNames.settings.radioButtonSelected]: constantColors.blue,
    [colorNames.settings.radioButtonUnselected]: constantColors.black,
    [colorNames.settings.signOutBorder]: constantColors.blue,
    [colorNames.settings.signOutText]: constantColors.black,
    [colorNames.settings.signOutButtonBackground]: constantColors.white,
    [colorNames.settings.titleColor]: constantColors.blue,
    [colorNames.settings.username]: constantColors.black,
    [colorNames.settings.eMail]: constantColors.black,

    //addNewNote
    [colorNames.addNewNote.background]: constantColors.white,
    [colorNames.addNewNote.border]: constantColors.blue,
    [colorNames.addNewNote.text]: constantColors.black,
    [colorNames.addNewNote.todayText]: constantColors.blue,
    [colorNames.addNewNote.headerText]: constantColors.white,
    [colorNames.addNewNote.textInputs]: toRGBA(constantColors.greys[1], 80)
};
