import { DescriptionIngredientModel } from "./DescriptionIngredientModel"

export type DescriptionModel = {
    nameOfDish: string,
    ingredients: DescriptionIngredientModel[]
}