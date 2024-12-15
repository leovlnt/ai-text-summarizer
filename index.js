import { pipeline } from "@xenova/transformers";
const pipe = await pipeline("summarization");
const article = "The United States of America (USA), commonly referred to as the United States (U.S.) or America, is a federal republic consisting of 50 states, a federal district, five major self-governing territories, and various possessions. At 3.8 million square miles (9.8 million km2) and with over 325 million people, the United States is one of the world's most ethnically diverse and multicultural nations, the third-most populous, the third-largest country by land area, and the world's most powerful economy. The capital is Washington, D.C., and the most populous city is New York City. Paleo-indians migrated from Asia to the North American mainland at least 15,000 years ago, and European colonization began in the 16th century. The United States emerged from the thirteen British colonies established along the East Coast. Disputes between Great Britain and the colonies following the French and Indian War led to the American Revolution, which began in 1775, and the subsequent Declaration of Independence in 1776 represented the first successful revolution against a European empire. The current United States Constitution was adopted in 1788, after the Articles of Confederation, adopted in 1781, were felt to have provided inadequate governance over the newly independent nation. The United States has a diverse geography, climate, and wildlife, and is home to a wide variety of ethnic groups, traditions, and cultures. The United States has a capitalist mixed economy, which is fueled by abundant natural resources and high productivity. Except for the Native American population, nearly all Americans or their ancestors immigrated or were imported to the United States within the past five centuries. The United States is a global military power, and its cultural, economic, and political influence are felt around the world. The United States is a founding member of the United Nations, World Bank, International Monetary Fund, Organization of American States (OAS), and other international organizations. The United States is a federal constitutional republic, with a representative democracy. The government is divided into three branches: the executive, legislative, and judicial, with a system of checks and balances. The executive branch is headed by the President, and the legislative branch is divided into two chambers: the House of Representatives, and the Senate. The judicial branch is composed of the Supreme Court and lower federal courts. The United States is a global leader in scientific research and technological innovation, and is home to many of the world's most prestigious universities. The United States is a highly industrialized country, and is a leading producer of agricultural products, automobiles, and aerospace products. The United States is also a major producer of oil and natural gas, and is one of the world's largest trading nations. The United States is a federal republic of 50 states, a federal district, five major self-governing territories, and various possessions. The capital is Washington, D.C., and the most populous city is New York City. The United States is a culturally diverse nation, home to a wide variety of ethnic groups, traditions, and cultures. The United States is a global military power, and its cultural, economic, and political influence are felt around the world. The United States is a founding member of the United Nations, World Bank, International Monetary Fund, Organization of American States (OAS), and other international organizations. The United States is a federal constitutional republic, with a representative democracy. The government is divided into three branches: the executive, legislative, and judicial, with a system of checks and balances. The executive branch is headed by the President, and the legislative branch is divided into two chambers: the House of Representatives, and the Senate. The judicial branch is composed of the Supreme Court and lower federal courts. The United States is a global leader in scientific research and technological innovation, and is home to many of the world's most prestigious universities. The United States is a highly industrialized country, and is a leading producer of agricultural products, automobiles, and aerospace products. The United States is also a major producer of oil and natural gas, and is one of the world's largest trading nations.";
const result = await pipe(article, {max_length: 200, min_length: 120});
console.log(result);