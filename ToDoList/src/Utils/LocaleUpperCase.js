import { Locales } from "../Modules/Localization"

export const customUppercase = (text, locale) => {
    let newText = text;
    if (locale === Locales.turkish) {
        newText = newText.replace(/[i]/g, 'İ');
    }

    newText = newText.toLocaleUpperCase(locale);
    return newText;
}

export const customLowercase = (text, locale) => {
    let newText = text;
    if (locale === Locales.turkish) {
        newText = newText.replace(/[İ]/g, 'i');
    }

    newText = newText.toLocaleLowerCase(locale);
    return newText;
}