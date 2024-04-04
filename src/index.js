import chalk from "chalk";
import fs from "fs";

function extractLinks(text) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capture = [...text.matchAll(regex)];
  const results = capture.map((captures) => ({
    [captures[1]]: captures[2],
  }));
  return results.length !== 0 ? results : 'There is no link on the archives';
}

function solveError(erro) {
  console.log(erro);
  throw new Error(chalk.red(erro.code, "Its not an archive"));
}

export default async function takeArchive(archivePath) {
  try {
    const encoding = "utf-8";
    const text = await fs.promises.readFile(archivePath, encoding);
    return extractLinks(text);
  } catch (erro) {
    solveError(erro);
  }
}

takeArchive("./arquivos/text.md");

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
