import chalk from "chalk";
import fs from "fs";

function extractLinks(text) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capture = [...text.matchAll(regex)];
  const results = capture.map((captures) => ({
    [captures[1]]: captures[2],
  }));
  return results;
}

function solveError(erro) {
  console.log(erro);
  throw new Error(chalk.red(erro.code, "Its not an archive"));
}

async function takeArchive(archivePath) {
  try {
    const encoding = "utf-8";
    const text = await fs.promises.readFile(archivePath, encoding);
    console.log(chalk.bgBlueBright(extractLinks(text)));
  } catch (erro) {
    solveError(erro);
  }
}

takeArchive("./arquivos/index.js");

// under const enconding utf-8 fs.readFile(archivePath, encoding,(erro, text) =>{
// if (erro){
//  solveError(erro);
// }
// console.log(chalk.bgBlackBright(text));
// })

//-----------------------------------------//
// fs.promises
//.readFile(archivePath, encoding)
//.then((text) => console.log(chalk.green(text)))
//.catch(solveError)
//--removing text.md generates error message--//
