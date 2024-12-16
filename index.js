import { pipeline } from "@xenova/transformers";
import * as dotenv from 'dotenv';

dotenv.config();

const pipe = await pipeline("summarization");
const ARTICLE_1 = process.env.ARTICLE_1;

const result = await pipe(ARTICLE_1, {max_length: 20, min_length: 10});

console.log(result);