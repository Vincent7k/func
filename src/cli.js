import takeArchive from "./index.js";
import chalk from "chalk";

const way = process.argv;

async function processText(way) {
  const result = await takeArchive(way[2]);
  console.log(chalk.magenta("List of links"), result);
}

processText(way);
