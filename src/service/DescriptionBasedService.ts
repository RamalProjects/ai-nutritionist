// models
import { DescriptionModel } from "../models";
import { openai } from "./OpenAI";

class DescriptionBasedService {
    async get(description: string): Promise<DescriptionModel> {
        const prompt = `based on dish description that can be in english or croatian return \n- list of ingredients. for each ingredient aproximate calorie and proteine count.\n- predict dish name\nreturn as json format like {\"ingredients\": list[{\"ingredientName\": name of ingredient as string, \"calories\": calculated number of calories, \"proteine\": calculated number of proteine}], "nameOfDish": name of dish as string}\n\nremove whitespaces an newline from result\n\ndescription: ${description}\n\nresult:`

        const response = (await openai.createCompletion({
            model: "text-davinci-002",
            prompt,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0.21,
            presence_penalty: 0,
        })).data.choices?.at(0)?.text

        console.log(response)

        const result: DescriptionModel = JSON.parse(response ?? "");

        return result;
    }
}

export class DescriptionBasedServiceFactory {
    private static instance: DescriptionBasedService;

    private constructor() { }

    static getInstance() {
        if (!this.instance)
            this.instance = new DescriptionBasedService();

        return this.instance;
    }
}