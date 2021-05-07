import { Locales } from "../Modules/Localization"

export const customUppercase = (text, locale) => {
    console.log(">>>>>>> TYPE",typeof text);
    let newText = text;
    if (locale === Locales.turkish) {
        newText = newText.replace(/[i]/g, 'İ');
    }

    console.log('>>>>>> TYPE newText', typeof newText)
    newText = newText.toLocaleUpperCase(locale);
    return newText;
}

export const customLowercase = (text, locale) => {
    console.log(">>>>>>> TYPE",typeof text);
    let newText = text;
    if (locale === Locales.turkish) {
        newText = newText.replace(/[İ]/g, 'i');
    }

    console.log('>>>>>> TYPE newText', typeof newText)
    newText = newText.toLocaleLowerCase(locale);
    return newText;
}