import { atom } from "recoil";
import { DescriptionModel } from "../../models";

export const withDescription = atom({
    key: "withDescription",
    default: ""
})

export const withDescriptionResult = atom({
    key: "withDescriptionResult",
    default: { nameOfDish: "", ingredients: [] } as DescriptionModel
})

export const withDescriptionLoading = atom({
    key: "withDescriptionLoading",
    default: false
})