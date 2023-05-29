/* eslint-disable no-unused-vars */
import { atom, selector } from "recoil";

export const currentFile = atom({
    key: 'currentFile',
    default: '',
});
export const getCurrentFile = selector({
    key: "getCurrentFile",
    get: ({get}) =>{
        return get(currentFile);
    }
});

export const parsedCurrentFile = atom({
    key: 'parsedCurrentFile',
    default: '',
})

export const getParsedCurrentFile = selector({
    key:"getParsedCurrentFile",
    get: ({get}) =>{
        return get(parsedCurrentFile);
    }
})