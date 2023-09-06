/* eslint-disable no-unused-vars */
import { atom } from "recoil";

export const textState = atom({
    key: 'text',
    default: ''
});


export const translatedTextState = atom({
    key: 'translatedText',
    default: []
});