import { atom } from "recoil";
import tasksLSEffect from "../effects/tasksLSEffect";

export const tasksState = atom({
    key: 'tasksState',
    default: [],
    effects_UNSTABLE: [
        tasksLSEffect()
    ]
})