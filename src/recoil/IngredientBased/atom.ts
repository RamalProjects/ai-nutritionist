import { atom } from "recoil";
import { IngredientModel } from "../../models/IngredientModel";
import { InstructionsModel } from "../../models/InstructionsModel";

export const withIngredients = atom({
    key: "withIngredients",
    default: [] as IngredientModel[]
})

export const withInstructions = atom({
    key: "withInstructions",
    default: {instructions: [], calories: 0, proteins: 0} as InstructionsModel
})

export const withInstructionsLoading = atom({
    key: "withInstructionsLoading",
    default: false
})