
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import I18n from '../Config/I18nConfig';
import { texts } from '../Config/TextNames';
import { Locales } from '../LocalizationConstants';
import { LocalizationSelectors, LocalizationActions } from '../Redux/LocalizationRedux';


export function useLocaleOptions() {
    const locale = useLocale();
    const loc = useLocalization();

    const localeOptions = useMemo(() => {
        return [
            {
                key: Locales.english,
                title: loc.t(texts.english),
            },
            {
                key: Locales.turkish,
                title: loc.t(texts.turkish),
            }
        ]
    }, [locale]);

    return localeOptions;
}

export function useLocale() {
    const currentLocale= useSelector(LocalizationSelectors.locale); 
    return currentLocale;
}

export function useLocalization() {
    const currentlocale = useLocale();
    const localizationAgent = useMemo(() => {
        I18n.locale = currentlocale;
        return I18n;
    }, [currentlocale]);

    return localizationAgent;
}



export function useDispatchChangeLocale() {
    const dispatch = useDispatch();
    return (locale) => {dispatch(LocalizationActions.changeLocale(locale));};
}

export function useLocaleDateFormat() {
    const locale = useLocale();
    if (locale === Locales.turkish) {
        return "DD.MM.YYYY";
    }
    else if (locale === Locales.english) {
        return "MM/DD/YYYY";
    }
}
