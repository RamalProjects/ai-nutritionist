import { Configuration, OpenAIApi } from "openai";
import { constants } from "../constants";

const configuration = new Configuration({
    apiKey: constants.gpt3Token,
});

export const openai = new OpenAIApi(configuration);