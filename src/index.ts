/*
const len: number = 10000000;
const toto: Array<number> | number[] = Array(len);

for(let i = 0; i < len; i++) {
    toto[i] = (Math.round(Math.random() * 10));
}

const logiqueDeTri = (a:number, b:number) => {
   return a - b;
}


function Bench(){
    const debut: number = Date.now();
    const retour: Array<number> = toto.sort(logiqueDeTri);
    return Date.now() - debut;
}

console.log(Bench());

*/
/*
const problemesFaciles: {
    [objectifs: string]: Array<string>;
} = {
    "": ["bla", "bl", "a"],
    "abcdef": ["ab", "abc", "cd", "def", "abcd"],
    "skateboard": ["bo", "rd", "ate", "t", "ska", "sk", "boar"],
    "enterapotentpot": ["a", "p", "ent", "enter", "ot", "o", "t"],
};
const problemesDifficile: {
    [objectifs: string]: Array<string>;
} = {
    "eeeeeeeeeeeeeeeeeeeeeeeeef": ["e","ee", "eee", "eeee", "eeeee", "eeeeee", "eeeeeeee"],
};

type constructionPossible = (objectifs: string, alphabet: Array<string>) => boolean;

function constructionPossible (
    objectif: string,
    alphabet: Array<string>,
    memo: { [objectifs: string]: boolean } = {}
): boolean {
    if (objectif in memo) return memo[objectif]
    if (objectif === "") return true
    for (let piece of alphabet) {
        if (objectif.indexOf(piece) === 0) {
            const reste = objectif.slice(piece.length)
            if (constructionPossible(reste, alphabet, memo)) {
                memo[objectif] = true
                return true
            }
        }
    }
    memo[objectif] = false
    return false
}

function bench (problemes: {[p: string]: Array<string>}){
    for (const objectif in problemes){
        const alphabet = problemes[objectif]
        console.log(`"${objectif}" -> ${constructionPossible(objectif,alphabet)}`);
    }
}


console.log(bench(problemesFaciles));
console.log(bench(problemesDifficile));
*/

import path from "path"
import express from "express"

const __dirname = path.resolve()
const srv = express()
srv.get("/", (_req, res) => res.sendFile(path.join(__dirname, "public", "index.html")))
srv.get("/:file", (req, res) => res.sendFile(path.join(__dirname, "public", req.params["file"])))
srv.get("/scripts/:file", (req, res) => res.sendFile(path.join(__dirname, "public", "scripts", req.params["file"])))
const port = 3000
srv.listen(port, () => console.log(`Serveur en écoute sur http://127.0.0.1:${port}`))

