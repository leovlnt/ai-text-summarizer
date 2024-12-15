import { pipeline } from "@xenova/transformers";
import * as dotenv from 'dotenv';

dotenv.config();

const pipe = await pipeline("summarization");
const ARTICLE_1 = process.env.ARTICLE_1 || "Ancient Megastructures: How They Were Built Ancient wonders like the Great Pyramid of Giza, Stonehenge, and the Colosseum showcase remarkable engineering. Egyptians used ramps and sledges to transport massive stones for the pyramids, while Stonehenge’s builders rolled and floated its stones over miles. Romans innovated with concrete and arches, creating the Colosseum’s durable structure and pulley systems for stage effects. Despite lacking modern tools, ancient engineers relied on teamwork, precise math, and local materials. These timeless feats highlight human ingenuity, leaving us to marvel at their enduring brilliance. Could modern builders replicate such monumental achievements";

const result = await pipe(ARTICLE_1);

console.log(result);