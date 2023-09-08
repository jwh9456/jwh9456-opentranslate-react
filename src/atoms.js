/* eslint-disable no-unused-vars */
import { atom } from "recoil";

export const fileState = atom({
    key: 'file',
    default: null
});

export const textState = atom({
    key: 'text',
    default: ''
});


export const translatedTextState = atom({
    key: 'translatedText',
    default: []
});