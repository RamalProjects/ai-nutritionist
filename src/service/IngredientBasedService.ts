import { IngredientModel } from "../models";
import { InstructionsModel } from "../models/InstructionsModel";
import { openai } from "./OpenAI";

class IngredientBasedService {
    async get(ingredients: IngredientModel[]): Promise<InstructionsModel> {
        let description = "";

        for (const ingredient of ingredients)
            description += `${ingredient.ingredient} ${ingredient.grams} g\n`;

        const prompt = `Generate a recipe based on these ingredients. Return result as json {\"instructions\": list of instructions for a recipe as strings, \"calories\":  total calories, \"proteins\", total proteins}\n\nIngredients:\n${description}\n\nresult:`

        const response = (await openai.createCompletion({
            model: "text-davinci-002",
            prompt,
            temperature: 0.3,
            max_tokens: 250,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })).data.choices?.at(0)?.text;

        console.log("ingredients jason", response)

        const result: InstructionsModel = JSON.parse(response ?? "");

        return result;
    }
}

export class IngredientBasedServiceFactory {
    private static instance: IngredientBasedService;

    private constructor() { }

    static getInstance() {
        if (!this.instance)
            this.instance = new IngredientBasedService();

        return this.instance;
    }
}