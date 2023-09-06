/* eslint-disable no-unused-vars */
import { atom, selector } from "recoil";

export const text = atom({
    key: 'text',
    default: ''
});

export const getText = selector({
    key: 'getText',
    get: ({get}) => {
        return get(text);
    }
});

export const setText = selector({
    key: 'setText',
    set: ({set}, newText) => {
        set(text, newText);
    }
});


export const translatedText = atom({
    key: 'translatedText',
    default: []
});

export const getTranslatedText = selector({
    key: 'getTranslatedText',
    get: ({get}) => {
        return get(translatedText);
    }
});

export const setTranslatedText = selector({
    key: 'setTranslatedText',
    set: ({set}, newTranslatedText) => {
        set(translatedText, newTranslatedText);
    }
});
