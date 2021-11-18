"use strict";
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
const problemesFaciles = {
    "": ["bla", "bl", "a"],
    "abcdef": ["ab", "abc", "cd", "def", "abcd"],
    "skateboard": ["bo", "rd", "ate", "t", "ska", "sk", "boar"],
    "enterapotentpot": ["a", "p", "ent", "enter", "ot", "o", "t"],
};
const problemesDifficile = {
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef": ["e", "ee", "eee", "eeee", "eeeee", "eeeeee", "eeeeeeee"],
};
const constructionsPossibles = (objectifs, alphabet) => {
    if (objectifs === "") {
        return true;
    }
    for (let element of alphabet) {
        if (objectifs.indexOf(element) === 0) {
            const reste = objectifs.slice(element.length);
            if (constructionsPossibles(reste, alphabet)) {
                return true;
            }
        }
    }
    return false;
};
function bench(problemes) {
    for (const objectif in problemes) {
        const alphabet = problemes[objectif];
        console.log(`"${objectif}" -> ${constructionsPossibles(objectif, alphabet)}`);
    }
}
console.log(bench(problemesFaciles));
//# sourceMappingURL=index.js.map