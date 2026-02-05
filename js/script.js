const exercises = [
    // Tipul 1: Gaseste rezultatul cu numere pana la 20 (30 exercitii)
    { type: "result", text: "12 + 5 =", answer: 17 },
    { type: "result", text: "15 - 8 =", answer: 7 },
    { type: "result", text: "11 + 9 =", answer: 20 },
    { type: "result", text: "18 - 6 =", answer: 12 },
    { type: "result", text: "13 + 4 =", answer: 17 },
    { type: "result", text: "16 - 9 =", answer: 7 },
    { type: "result", text: "14 + 6 =", answer: 20 },
    { type: "result", text: "17 - 8 =", answer: 9 },
    { type: "result", text: "12 + 7 =", answer: 19 },
    { type: "result", text: "19 - 7 =", answer: 12 },
    { type: "result", text: "11 + 8 =", answer: 19 },
    { type: "result", text: "15 - 6 =", answer: 9 },
    { type: "result", text: "13 + 7 =", answer: 20 },
    { type: "result", text: "18 - 9 =", answer: 9 },
    { type: "result", text: "12 + 6 =", answer: 18 },
    { type: "result", text: "16 - 7 =", answer: 9 },
    { type: "result", text: "14 + 5 =", answer: 19 },
    { type: "result", text: "17 - 9 =", answer: 8 },
    { type: "result", text: "11 + 7 =", answer: 18 },
    { type: "result", text: "19 - 8 =", answer: 11 },
    { type: "result", text: "15 + 5 =", answer: 20 },
    { type: "result", text: "18 - 7 =", answer: 11 },
    { type: "result", text: "12 + 8 =", answer: 20 },
    { type: "result", text: "16 - 8 =", answer: 8 },
    { type: "result", text: "13 + 6 =", answer: 19 },
    { type: "result", text: "17 - 6 =", answer: 11 },
    { type: "result", text: "14 + 4 =", answer: 18 },
    { type: "result", text: "19 - 9 =", answer: 10 },
    { type: "result", text: "11 + 6 =", answer: 17 },
    { type: "result", text: "20 - 8 =", answer: 12 },

    // Tipul 2: Gaseste numarul lipsa cu numere pana la 20 (20 exercitii)
    { type: "missing", parts: ["", " + 7 = 15"], answer: 8, position: 0 },
    { type: "missing", parts: ["12 + ", " = 19"], answer: 7, position: 1 },
    { type: "missing", parts: ["", " - 6 = 11"], answer: 17, position: 0 },
    { type: "missing", parts: ["18 - ", " = 9"], answer: 9, position: 1 },
    { type: "missing", parts: ["", " + 8 = 16"], answer: 8, position: 0 },
    { type: "missing", parts: ["14 - ", " = 7"], answer: 7, position: 1 },
    { type: "missing", parts: ["", " + 9 = 20"], answer: 11, position: 0 },
    { type: "missing", parts: ["19 - ", " = 12"], answer: 7, position: 1 },
    { type: "missing", parts: ["", " + 6 = 17"], answer: 11, position: 0 },
    { type: "missing", parts: ["16 - ", " = 8"], answer: 8, position: 1 },
    { type: "missing", parts: ["", " + 5 = 18"], answer: 13, position: 0 },
    { type: "missing", parts: ["15 + ", " = 20"], answer: 5, position: 1 },
    { type: "missing", parts: ["", " - 7 = 12"], answer: 19, position: 0 },
    { type: "missing", parts: ["17 - ", " = 9"], answer: 8, position: 1 },
    { type: "missing", parts: ["", " + 4 = 16"], answer: 12, position: 0 },
    { type: "missing", parts: ["13 + ", " = 19"], answer: 6, position: 1 },
    { type: "missing", parts: ["", " - 8 = 11"], answer: 19, position: 0 },
    { type: "missing", parts: ["20 - ", " = 13"], answer: 7, position: 1 },
    { type: "missing", parts: ["", " + 7 = 20"], answer: 13, position: 0 },
    { type: "missing", parts: ["18 - ", " = 11"], answer: 7, position: 1 },

    // Tipul 3: Comparatii cu numere pana la 20 (15 exercitii)
    { type: "comparison", leftParts: ["", " + 5"], symbol: "=", rightParts: ["12 + ", ""], answers: [11, 4], leftAnswer: 11, rightAnswer: 4 },
    { type: "comparison", leftParts: ["14 + ", ""], symbol: "=", rightParts: ["", " + 7"], answers: [3, 10], leftAnswer: 3, rightAnswer: 10 },
    { type: "comparison", leftParts: ["", " + 6"], symbol: "=", rightParts: ["11 + ", ""], answers: [12, 7], leftAnswer: 12, rightAnswer: 7 },
    { type: "comparison", leftParts: ["18 - ", ""], symbol: "=", rightParts: ["", " + 4"], answers: [7, 7], leftAnswer: 7, rightAnswer: 7 },
    { type: "comparison", leftParts: ["", " + 8"], symbol: "=", rightParts: ["15 + ", ""], answers: [9, 2], leftAnswer: 9, rightAnswer: 2 },
    { type: "comparison", leftParts: ["", " + 7"], symbol: ">", rightParts: ["13 + ", ""], answers: [11, 4], leftAnswer: 11, rightAnswer: 4 },
    { type: "comparison", leftParts: ["16 + ", ""], symbol: ">", rightParts: ["", " + 5"], answers: [3, 13], leftAnswer: 3, rightAnswer: 13 },
    { type: "comparison", leftParts: ["", " + 6"], symbol: ">", rightParts: ["12 + ", ""], answers: [14, 5], leftAnswer: 14, rightAnswer: 5 },
    { type: "comparison", leftParts: ["19 - ", ""], symbol: ">", rightParts: ["", " + 4"], answers: [5, 9], leftAnswer: 5, rightAnswer: 9 },
    { type: "comparison", leftParts: ["", " + 9"], symbol: ">", rightParts: ["14 + ", ""], answers: [11, 3], leftAnswer: 11, rightAnswer: 3 },
    { type: "comparison", leftParts: ["", " + 5"], symbol: "<", rightParts: ["15 + ", ""], answers: [11, 6], leftAnswer: 11, rightAnswer: 6 },
    { type: "comparison", leftParts: ["13 + ", ""], symbol: "<", rightParts: ["", " + 7"], answers: [4, 13], leftAnswer: 4, rightAnswer: 13 },
    { type: "comparison", leftParts: ["", " + 6"], symbol: "<", rightParts: ["16 + ", ""], answers: [12, 3], leftAnswer: 12, rightAnswer: 3 },
    { type: "comparison", leftParts: ["17 - ", ""], symbol: "<", rightParts: ["", " + 8"], answers: [6, 9], leftAnswer: 6, rightAnswer: 9 },
    { type: "comparison", leftParts: ["", " + 4"], symbol: "<", rightParts: ["18 + ", ""], answers: [14, 2], leftAnswer: 14, rightAnswer: 2 },

    // Tipul 4: Tabela adunare cu numere pana la 20 (20 exercitii)
    { type: "table-add", termen1: 12, termen2: 5, suma: 17, unknown: "termen1" },
    { type: "table-add", termen1: 14, termen2: 6, suma: 20, unknown: "termen2" },
    { type: "table-add", termen1: 13, termen2: 4, suma: 17, unknown: "suma" },
    { type: "table-add", termen1: 11, termen2: 8, suma: 19, unknown: "termen1" },
    { type: "table-add", termen1: 15, termen2: 5, suma: 20, unknown: "termen2" },
    { type: "table-add", termen1: 12, termen2: 7, suma: 19, unknown: "suma" },
    { type: "table-add", termen1: 16, termen2: 3, suma: 19, unknown: "termen1" },
    { type: "table-add", termen1: 13, termen2: 6, suma: 19, unknown: "termen2" },
    { type: "table-add", termen1: 14, termen2: 5, suma: 19, unknown: "suma" },
    { type: "table-add", termen1: 11, termen2: 9, suma: 20, unknown: "termen1" },
    { type: "table-add", termen1: 12, termen2: 8, suma: 20, unknown: "termen2" },
    { type: "table-add", termen1: 17, termen2: 3, suma: 20, unknown: "suma" },
    { type: "table-add", termen1: 15, termen2: 4, suma: 19, unknown: "termen1" },
    { type: "table-add", termen1: 13, termen2: 5, suma: 18, unknown: "termen2" },
    { type: "table-add", termen1: 16, termen2: 2, suma: 18, unknown: "suma" },
    { type: "table-add", termen1: 12, termen2: 6, suma: 18, unknown: "termen1" },
    { type: "table-add", termen1: 14, termen2: 4, suma: 18, unknown: "termen2" },
    { type: "table-add", termen1: 11, termen2: 6, suma: 17, unknown: "suma" },
    { type: "table-add", termen1: 15, termen2: 3, suma: 18, unknown: "termen1" },
    { type: "table-add", termen1: 16, termen2: 4, suma: 20, unknown: "termen2" },

    // Tipul 5: Tabela scadere cu numere pana la 20 (20 exercitii)
    { type: "table-sub", descazut: 17, scazator: 8, diferenta: 9, unknown: "descazut" },
    { type: "table-sub", descazut: 19, scazator: 7, diferenta: 12, unknown: "scazator" },
    { type: "table-sub", descazut: 20, scazator: 9, diferenta: 11, unknown: "diferenta" },
    { type: "table-sub", descazut: 18, scazator: 6, diferenta: 12, unknown: "descazut" },
    { type: "table-sub", descazut: 16, scazator: 8, diferenta: 8, unknown: "scazator" },
    { type: "table-sub", descazut: 17, scazator: 9, diferenta: 8, unknown: "diferenta" },
    { type: "table-sub", descazut: 19, scazator: 8, diferenta: 11, unknown: "descazut" },
    { type: "table-sub", descazut: 15, scazator: 7, diferenta: 8, unknown: "scazator" },
    { type: "table-sub", descazut: 20, scazator: 8, diferenta: 12, unknown: "diferenta" },
    { type: "table-sub", descazut: 18, scazator: 9, diferenta: 9, unknown: "descazut" },
    { type: "table-sub", descazut: 17, scazator: 6, diferenta: 11, unknown: "scazator" },
    { type: "table-sub", descazut: 16, scazator: 7, diferenta: 9, unknown: "diferenta" },
    { type: "table-sub", descazut: 19, scazator: 9, diferenta: 10, unknown: "descazut" },
    { type: "table-sub", descazut: 20, scazator: 7, diferenta: 13, unknown: "scazator" },
    { type: "table-sub", descazut: 18, scazator: 7, diferenta: 11, unknown: "diferenta" },
    { type: "table-sub", descazut: 15, scazator: 6, diferenta: 9, unknown: "descazut" },
    { type: "table-sub", descazut: 17, scazator: 8, diferenta: 9, unknown: "scazator" },
    { type: "table-sub", descazut: 16, scazator: 9, diferenta: 7, unknown: "diferenta" },
    { type: "table-sub", descazut: 20, scazator: 6, diferenta: 14, unknown: "descazut" },
    { type: "table-sub", descazut: 19, scazator: 8, diferenta: 11, unknown: "scazator" },

    // Tipul 6: Lant de operatii cu numere pana la 20 (15 exercitii)
    { type: "chain", numbers: [12, 5, 3], operators: ["+", "-"], answer: 14 },
    { type: "chain", numbers: [15, 7, 4], operators: ["-", "+"], answer: 12 },
    { type: "chain", numbers: [11, 6, 2], operators: ["+", "-"], answer: 15 },
    { type: "chain", numbers: [18, 9, 5], operators: ["-", "+"], answer: 14 },
    { type: "chain", numbers: [13, 4, 6], operators: ["+", "-"], answer: 11 },
    { type: "chain", numbers: [16, 8, 7], operators: ["-", "+"], answer: 15 },
    { type: "chain", numbers: [14, 5, 3], operators: ["+", "-"], answer: 16 },
    { type: "chain", numbers: [17, 6, 4], operators: ["-", "+"], answer: 15 },
    { type: "chain", numbers: [12, 7, 5], operators: ["+", "-"], answer: 14 },
    { type: "chain", numbers: [19, 8, 6], operators: ["-", "+"], answer: 17 },
    { type: "chain", numbers: [11, 8, 4], operators: ["+", "-"], answer: 15 },
    { type: "chain", numbers: [20, 9, 7], operators: ["-", "+"], answer: 18 },
    { type: "chain", numbers: [15, 4, 6], operators: ["+", "-"], answer: 13 },
    { type: "chain", numbers: [18, 7, 5], operators: ["-", "+"], answer: 16 },
    { type: "chain", numbers: [13, 6, 3], operators: ["+", "-"], answer: 16 },

    // Tipul 7: Probleme text - Ion si Maria (25 exercitii)
    {
        type: "story",
        text: "Ion și Maria aveau câte 15 lei. Ion a cheltuit 5 lei, iar Maria 10 lei. Câți lei i-a rămas lui Ion?",
        answer: 10,
        hint: "Ion avea 15 lei și a cheltuit 5 lei. 15 - 5 = ?"
    },
    {
        type: "story",
        text: "Ion și Maria aveau câte 15 lei. Ion a cheltuit 5 lei, iar Maria 10 lei. Câți lei i-a rămas Mariei?",
        answer: 5,
        hint: "Maria avea 15 lei și a cheltuit 10 lei. 15 - 10 = ?"
    },
    {
        type: "story",
        text: "Ion are 12 mere, iar Maria are 8 mere. Câte mere au împreună?",
        answer: 20,
        hint: "Adună merele: 12 + 8 = ?"
    },
    {
        type: "story",
        text: "Ion avea 18 bomboane și i-a dat Mariei 7 bomboane. Câte bomboane i-au rămas lui Ion?",
        answer: 11,
        hint: "Ion avea 18 și a dat 7. 18 - 7 = ?"
    },
    {
        type: "story",
        text: "Maria are 14 creioane. Ion îi dă încă 6 creioane. Câte creioane are acum Maria?",
        answer: 20,
        hint: "Maria avea 14 și a primit 6. 14 + 6 = ?"
    },
    {
        type: "story",
        text: "Ion și Maria au adunat împreună 20 de nuci. Ion a adunat 12 nuci. Câte nuci a adunat Maria?",
        answer: 8,
        hint: "În total sunt 20, Ion are 12. 20 - 12 = ?"
    },
    {
        type: "story",
        text: "Ion avea 16 lei și a mai primit 4 lei de la bunici. Câți lei are acum?",
        answer: 20,
        hint: "Ion avea 16 și a primit 4. 16 + 4 = ?"
    },
    {
        type: "story",
        text: "Maria citește o carte de 19 pagini. A citit deja 8 pagini. Câte pagini îi mai rămân de citit?",
        answer: 11,
        hint: "Din 19 pagini a citit 8. 19 - 8 = ?"
    },
    {
        type: "story",
        text: "Ion și Maria au plantat împreună flori. Ion a plantat 11 flori, iar Maria 7 flori. Câte flori au plantat în total?",
        answer: 18,
        hint: "Adună florile: 11 + 7 = ?"
    },
    {
        type: "story",
        text: "Ion avea 20 de bile și a pierdut 6 bile. Câte bile îi mai rămân?",
        answer: 14,
        hint: "Din 20 bile a pierdut 6. 20 - 6 = ?"
    },
    {
        type: "story",
        text: "Maria are 13 autocolante. Ion îi dă încă 5 autocolante. Câte autocolante are Maria acum?",
        answer: 18,
        hint: "Maria avea 13 și a primit 5. 13 + 5 = ?"
    },
    {
        type: "story",
        text: "Ion și Maria au cules căpșuni. Ion a cules 15 căpșuni, iar Maria 5 căpșuni. Cu câte căpșuni mai mult a cules Ion?",
        answer: 10,
        hint: "Compară căpșunile: 15 - 5 = ?"
    },
    {
        type: "story",
        text: "Maria avea 17 jucării și i-a dat surorii ei 9 jucării. Câte jucării îi mai rămân Mariei?",
        answer: 8,
        hint: "Din 17 jucării a dat 9. 17 - 9 = ?"
    },
    {
        type: "story",
        text: "Ion are 12 ani, iar Maria are 7 ani. Cu câți ani este Ion mai mare decât Maria?",
        answer: 5,
        hint: "Scade vârstele: 12 - 7 = ?"
    },
    {
        type: "story",
        text: "Maria a rezolvat 14 exerciții dimineața și 6 exerciții după-amiaza. Câte exerciții a rezolvat în total?",
        answer: 20,
        hint: "Adună exercițiile: 14 + 6 = ?"
    },
    {
        type: "story",
        text: "Ion avea 15 bani și a mai economisit încă 4 bani. Câți bani are Ion acum?",
        answer: 19,
        hint: "Ion avea 15 și a economisit 4. 15 + 4 = ?"
    },
    {
        type: "story",
        text: "Maria a cumpărat o carte de 18 lei și avea 20 de lei. Câți lei îi mai rămân?",
        answer: 2,
        hint: "Din 20 lei a cheltuit 18. 20 - 18 = ?"
    },
    {
        type: "story",
        text: "Ion și Maria s-au jucat împreună 11 ore în weekend. Sâmbătă s-au jucat 6 ore. Câte ore s-au jucat duminică?",
        answer: 5,
        hint: "Din 11 ore, 6 au fost sâmbătă. 11 - 6 = ?"
    },
    {
        type: "story",
        text: "Ion are 16 timbre în colecție. Maria are 4 timbre. Câte timbre au împreună?",
        answer: 20,
        hint: "Adună timbrele: 16 + 4 = ?"
    },
    {
        type: "story",
        text: "Maria a desenat 19 desene. Câte desene îi mai trebuie pentru a avea 20?",
        answer: 1,
        hint: "Câte lipsesc până la 20? 20 - 19 = ?"
    },
    {
        type: "story",
        text: "Ion avea 13 bucăți de ciocolată și a mâncat 7 bucăți. Câte bucăți îi mai rămân?",
        answer: 6,
        hint: "Din 13 bucăți a mâncat 7. 13 - 7 = ?"
    },
    {
        type: "story",
        text: "Maria a citit 12 povești, iar Ion a citit 8 povești. Câte povești au citit împreună?",
        answer: 20,
        hint: "Adună poveștile: 12 + 8 = ?"
    },
    {
        type: "story",
        text: "Ion a alergat 17 metri, iar Maria a alergat 11 metri. Cu câți metri a alergat Ion mai mult?",
        answer: 6,
        hint: "Compară distanțele: 17 - 11 = ?"
    },
    {
        type: "story",
        text: "Maria are 11 lei și vrea să cumpere o jucărie de 20 de lei. Câți lei îi mai trebuie?",
        answer: 9,
        hint: "Câți lei lipsesc? 20 - 11 = ?"
    },
    {
        type: "story",
        text: "Ion și Maria au împreună 20 de pixuri. Dacă Ion are 14 pixuri, câte pixuri are Maria?",
        answer: 6,
        hint: "Din 20 pixuri, 14 sunt ale lui Ion. 20 - 14 = ?"
    },

    // Tipul 8: Limba Română - Ordonează literele (30 exerciții)
    { type: "word", scrambled: "racet", answer: "carte", hint: "Este un obiect pe care îl citești" },
    { type: "word", scrambled: "sacă", answer: "casă", hint: "Este locul unde locuiești" },
    { type: "word", scrambled: "șlacoă", answer: "școală", hint: "Este locul unde înveți" },
    { type: "word", scrambled: "mama", answer: "mama", hint: "Este persoana care te-a născut" },
    { type: "word", scrambled: "aatt", answer: "tata", hint: "Este părintele bărbat" },
    { type: "word", scrambled: "roelaf", answer: "floare", hint: "Este o plantă frumoasă și colorată" },
    { type: "word", scrambled: "eroabr", answer: "arbore", hint: "Este o plantă mare și înaltă" },
    { type: "word", scrambled: "rosaе", answer: "soare", hint: "Strălucește pe cer ziua" },
    { type: "word", scrambled: "nulă", answer: "lună", hint: "Apare pe cer noaptea" },
    { type: "word", scrambled: "păa", answer: "apă", hint: "Este un lichid pe care îl bem" },
    { type: "word", scrambled: "nipeâ", answer: "pâine", hint: "Este un aliment pe care îl mâncăm" },
    { type: "word", scrambled: "taelp", answer: "lapte", hint: "Este o băutură albă" },
    { type: "word", scrambled: "sămă", answer: "masă", hint: "Este un mobilier pe care mâncăm" },
    { type: "word", scrambled: "nuacs", answer: "scaun", hint: "Este un mobilier pe care stăm" },
    { type: "word", scrambled: "neiâc", answer: "câine", hint: "Este un animal de companie care latră" },
    { type: "word", scrambled: "cispăi", answer: "pisică", hint: "Este un animal de companie care miaună" },
    { type: "word", scrambled: "vlee", answer: "elev", hint: "Este o persoană care învață la școală" },
    { type: "word", scrambled: "ropfsreo", answer: "profesor", hint: "Este persoana care predă la școală" },
    { type: "word", scrambled: "rcpa", answer: "parc", hint: "Este locul unde ne jucăm afară" },
    { type: "word", scrambled: "ngemi", answer: "minge", hint: "Este un obiect rotund cu care ne jucăm" },
    { type: "word", scrambled: "lacăotrop", answer: "portocală", hint: "Este un fruct portocaliu" },
    { type: "word", scrambled: "răm", answer: "măr", hint: "Este un fruct roșu sau verde" },
    { type: "word", scrambled: "nănaba", answer: "banană", hint: "Este un fruct galben" },
    { type: "word", scrambled: "țespe", answer: "pește", hint: "Este un animal care trăiește în apă" },
    { type: "word", scrambled: "răsape", answer: "pasăre", hint: "Este un animal care zboară" },
    { type: "word", scrambled: "niocer", answer: "creion", hint: "Este un instrument cu care scriem" },
    { type: "word", scrambled: "teica", answer: "caiet", hint: "Este un obiect în care scriem" },
    { type: "word", scrambled: "tarce", answer: "carte", hint: "Este un obiect cu multe pagini pe care le citești" },
    { type: "word", scrambled: "neprtie", answer: "prieten", hint: "Este o persoană pe care o iubești" },
    { type: "word", scrambled: "roocul", answer: "culoare", hint: "Poate fi roșu, albastru, galben, verde..." },

    // Tipul 9: Desparte pe silabe (30 exerciții)
    { type: "syllable", word: "carte", answer: "car-te", syllables: 2 },
    { type: "syllable", word: "casă", answer: "ca-să", syllables: 2 },
    { type: "syllable", word: "școală", answer: "școa-lă", syllables: 2 },
    { type: "syllable", word: "scaun", answer: "sca-un", syllables: 2 },
    { type: "syllable", word: "masă", answer: "ma-să", syllables: 2 },
    { type: "syllable", word: "floare", answer: "floa-re", syllables: 2 },
    { type: "syllable", word: "arbore", answer: "ar-bo-re", syllables: 3 },
    { type: "syllable", word: "soare", answer: "soa-re", syllables: 2 },
    { type: "syllable", word: "lună", answer: "lu-nă", syllables: 2 },
    { type: "syllable", word: "apă", answer: "a-pă", syllables: 2 },
    { type: "syllable", word: "pâine", answer: "pâi-ne", syllables: 2 },
    { type: "syllable", word: "lapte", answer: "lap-te", syllables: 2 },
    { type: "syllable", word: "câine", answer: "câi-ne", syllables: 2 },
    { type: "syllable", word: "pisică", answer: "pi-si-că", syllables: 3 },
    { type: "syllable", word: "profesor", answer: "pro-fe-sor", syllables: 3 },
    { type: "syllable", word: "elev", answer: "e-lev", syllables: 2 },
    { type: "syllable", word: "caiet", answer: "ca-iet", syllables: 2 },
    { type: "syllable", word: "creion", answer: "cre-ion", syllables: 2 },
    { type: "syllable", word: "minge", answer: "min-ge", syllables: 2 },
    { type: "syllable", word: "portocală", answer: "por-to-ca-lă", syllables: 4 },
    { type: "syllable", word: "banană", answer: "ba-na-nă", syllables: 3 },
    { type: "syllable", word: "măr", answer: "măr", syllables: 1 },
    { type: "syllable", word: "pește", answer: "peș-te", syllables: 2 },
    { type: "syllable", word: "pasăre", answer: "pa-să-re", syllables: 3 },
    { type: "syllable", word: "prieten", answer: "pri-e-ten", syllables: 3 },
    { type: "syllable", word: "culoare", answer: "cu-loa-re", syllables: 3 },
    { type: "syllable", word: "copil", answer: "co-pil", syllables: 2 },
    { type: "syllable", word: "jucărie", answer: "ju-că-rie", syllables: 3 },
    { type: "syllable", word: "poveste", answer: "po-ves-te", syllables: 3 },
    { type: "syllable", word: "broască", answer: "broas-că", syllables: 2 }
];

let currentIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let answered = false;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

shuffleArray(exercises);

function loadExercise() {
    const exercise = exercises[currentIndex];
    const exerciseContentEl = document.getElementById('exercise-content');
    const exerciseTypeEl = document.getElementById('exercise-type');

    document.getElementById('exercise-number').textContent = `Exercițiul ${currentIndex + 1} din ${exercises.length}`;
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback').className = 'feedback';
    document.getElementById('exercise-card').className = 'exercise-card';
    document.getElementById('check-btn').textContent = 'Verifică';
    document.getElementById('progress').style.width = `${(currentIndex / exercises.length) * 100}%`;
    document.getElementById('task-hint').textContent = '';
    document.getElementById('hint-box').className = 'hint-box';
    document.getElementById('hint-text').textContent = '';
    answered = false;

    if (exercise.type === "result") {
        exerciseTypeEl.textContent = "Găsește rezultatul";
        exerciseTypeEl.className = "exercise-type result";
        exerciseContentEl.innerHTML = `
            <div class="exercise-text">
                <span>${exercise.text}</span>
                <input type="number" min="0" class="answer-input" id="answer-input" autofocus>
            </div>
        `;
    } else if (exercise.type === "missing") {
        exerciseTypeEl.textContent = "Găsește numărul lipsă";
        exerciseTypeEl.className = "exercise-type missing";
        exerciseContentEl.innerHTML = `
            <div class="exercise-text">
                <span>${exercise.parts[0]}</span>
                <input type="number" min="0" class="inline-input" id="answer-input" autofocus>
                <span>${exercise.parts[1]}</span>
            </div>
        `;
    } else if (exercise.type === "comparison") {
        exerciseTypeEl.textContent = "Completează comparația";
        exerciseTypeEl.className = "exercise-type comparison";

        const symbolDisplay = exercise.symbol === "=" ? "=" : (exercise.symbol === ">" ? ">" : "<");

        exerciseContentEl.innerHTML = `
            <div class="exercise-text">
                <span>${exercise.leftParts[0]}</span>
                <input type="number" min="0" class="inline-input" id="answer-left" autofocus>
                <span>${exercise.leftParts[1]}</span>
                <span class="comparison-symbol">${symbolDisplay}</span>
                <span>${exercise.rightParts[0]}</span>
                <input type="number" min="0" class="inline-input" id="answer-right">
                <span>${exercise.rightParts[1]}</span>
            </div>
        `;

        document.getElementById('task-hint').textContent = getComparisonHint(exercise.symbol);
    } else if (exercise.type === "table-add") {
        exerciseTypeEl.textContent = "Tabela adunării";
        exerciseTypeEl.className = "exercise-type table-add";

        let termen1Html = exercise.unknown === "termen1" ?
            `<input type="number" min="0" class="table-input" id="answer-input" autofocus>` :
            exercise.termen1;
        let termen2Html = exercise.unknown === "termen2" ?
            `<input type="number" min="0" class="table-input" id="answer-input" autofocus>` :
            exercise.termen2;
        let sumaHtml = exercise.unknown === "suma" ?
            `<input type="number" min="0" class="table-input" id="answer-input" autofocus>` :
            exercise.suma;

        exerciseContentEl.innerHTML = `
            <table class="math-table addition">
                <tr>
                    <th>Termen</th>
                    <th>Termen</th>
                    <th>Suma</th>
                </tr>
                <tr>
                    <td>${termen1Html}</td>
                    <td>${termen2Html}</td>
                    <td>${sumaHtml}</td>
                </tr>
            </table>
        `;

        document.getElementById('task-hint').textContent = "Termen + Termen = Suma";
    } else if (exercise.type === "table-sub") {
        exerciseTypeEl.textContent = "Tabela scăderii";
        exerciseTypeEl.className = "exercise-type table-sub";

        let descazutHtml = exercise.unknown === "descazut" ?
            `<input type="number" min="0" class="table-input" id="answer-input" autofocus>` :
            exercise.descazut;
        let scazatorHtml = exercise.unknown === "scazator" ?
            `<input type="number" min="0" class="table-input" id="answer-input" autofocus>` :
            exercise.scazator;
        let diferentaHtml = exercise.unknown === "diferenta" ?
            `<input type="number" min="0" class="table-input" id="answer-input" autofocus>` :
            exercise.diferenta;

        exerciseContentEl.innerHTML = `
            <table class="math-table subtraction">
                <tr>
                    <th>Descăzut</th>
                    <th>Scăzător</th>
                    <th>Diferență</th>
                </tr>
                <tr>
                    <td>${descazutHtml}</td>
                    <td>${scazatorHtml}</td>
                    <td>${diferentaHtml}</td>
                </tr>
            </table>
        `;

        document.getElementById('task-hint').textContent = "Descăzut - Scăzător = Diferență";
    } else if (exercise.type === "chain") {
        exerciseTypeEl.textContent = "Lanțul operațiilor";
        exerciseTypeEl.className = "exercise-type chain";

        let chainHtml = '<div class="chain-container">';
        for (let i = 0; i < exercise.numbers.length; i++) {
            chainHtml += `<div class="chain-circle">${exercise.numbers[i]}</div>`;
            if (i < exercise.operators.length) {
                chainHtml += `<span class="chain-operator">${exercise.operators[i]}</span>`;
            }
        }
        chainHtml += `<span class="chain-equals">=</span>`;
        chainHtml += `<input type="number" min="0" class="chain-input" id="answer-input" autofocus>`;
        chainHtml += '</div>';

        exerciseContentEl.innerHTML = chainHtml;

        document.getElementById('task-hint').textContent = "Calculează pas cu pas de la stânga la dreapta";
    } else if (exercise.type === "story") {
        exerciseTypeEl.textContent = "Problemă";
        exerciseTypeEl.className = "exercise-type comparison";

        exerciseContentEl.innerHTML = `
            <div class="story-text">${exercise.text}</div>
            <div class="exercise-text" style="margin-top: 20px;">
                <span>Răspuns:</span>
                <input type="number" min="0" class="answer-input" id="answer-input" autofocus>
            </div>
        `;
    } else if (exercise.type === "word") {
        exerciseTypeEl.textContent = "Ordonează literele";
        exerciseTypeEl.className = "exercise-type missing";

        exerciseContentEl.innerHTML = `
            <div class="word-scrambled">${exercise.scrambled}</div>
            <div class="exercise-text" style="margin-top: 20px;">
                <span>Cuvânt corect:</span>
                <input type="text" class="answer-input word-input" id="answer-input" autofocus>
            </div>
        `;

        document.getElementById('task-hint').textContent = exercise.hint;
    } else if (exercise.type === "syllable") {
        exerciseTypeEl.textContent = "Desparte pe silabe";
        exerciseTypeEl.className = "exercise-type chain";

        exerciseContentEl.innerHTML = `
            <div class="syllable-word">${exercise.word}</div>
            <div class="exercise-text" style="margin-top: 20px;">
                <span>Silabele (desparte cu liniuță -):</span>
                <input type="text" class="answer-input syllable-input" id="answer-input" autofocus placeholder="Ex: car-te">
            </div>
        `;

        document.getElementById('task-hint').textContent = exercise.hint;
    }

    // Add enter key listeners
    const inputs = document.querySelectorAll('input[type="number"], input[type="text"]');
    inputs.forEach((input, index) => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                if (exercise.type === "comparison" && index === 0) {
                    document.getElementById('answer-right').focus();
                } else {
                    checkAnswer();
                }
            }
        });
    });

    if (inputs.length > 0) {
        inputs[0].focus();
    }
}

function getComparisonHint(symbol) {
    if (symbol === "=") return "Găsește numerele astfel încât cele două părți să fie egale";
    if (symbol === ">") return "Partea stângă trebuie să fie mai mare decât partea dreaptă";
    if (symbol === "<") return "Partea stângă trebuie să fie mai mică decât partea dreaptă";
    return "";
}

function generateHint(exercise, userAnswer, userLeftAnswer, userRightAnswer) {
    if (exercise.type === "result") {
        const correctAnswer = exercise.answer;
        if (userAnswer > correctAnswer) {
            return `Răspunsul tău (${userAnswer}) este prea mare. Încearcă un număr mai mic!`;
        } else {
            return `Răspunsul tău (${userAnswer}) este prea mic. Încearcă un număr mai mare!`;
        }
    } else if (exercise.type === "missing") {
        const correctAnswer = exercise.answer;
        if (userAnswer > correctAnswer) {
            return `Numărul tău (${userAnswer}) este prea mare. Gândește-te: ce număr trebuie să pui ca să obții rezultatul corect?`;
        } else {
            return `Numărul tău (${userAnswer}) este prea mic. Gândește-te: ce număr trebuie să pui ca să obții rezultatul corect?`;
        }
    } else if (exercise.type === "comparison") {
        const leftSide = evaluateExpression(exercise.leftParts, userLeftAnswer);
        const rightSide = evaluateExpression(exercise.rightParts, userRightAnswer);

        if (exercise.symbol === "=") {
            if (leftSide > rightSide) {
                return `Partea stângă (${leftSide}) este mai mare decât partea dreaptă (${rightSide}). Trebuie să fie egale!`;
            } else {
                return `Partea stângă (${leftSide}) este mai mică decât partea dreaptă (${rightSide}). Trebuie să fie egale!`;
            }
        } else if (exercise.symbol === ">") {
            return `Partea stângă (${leftSide}) trebuie să fie MAI MARE decât partea dreaptă (${rightSide}). Acum nu este așa.`;
        } else if (exercise.symbol === "<") {
            return `Partea stângă (${leftSide}) trebuie să fie MAI MICĂ decât partea dreaptă (${rightSide}). Acum nu este așa.`;
        }
    } else if (exercise.type === "table-add") {
        let correctAnswer;
        if (exercise.unknown === "termen1") {
            correctAnswer = exercise.termen1;
            if (userAnswer > correctAnswer) {
                return `Numărul tău (${userAnswer}) este prea mare. Gândește-te: ? + ${exercise.termen2} = ${exercise.suma}`;
            } else {
                return `Numărul tău (${userAnswer}) este prea mic. Gândește-te: ? + ${exercise.termen2} = ${exercise.suma}`;
            }
        } else if (exercise.unknown === "termen2") {
            correctAnswer = exercise.termen2;
            if (userAnswer > correctAnswer) {
                return `Numărul tău (${userAnswer}) este prea mare. Gândește-te: ${exercise.termen1} + ? = ${exercise.suma}`;
            } else {
                return `Numărul tău (${userAnswer}) este prea mic. Gândește-te: ${exercise.termen1} + ? = ${exercise.suma}`;
            }
        } else {
            correctAnswer = exercise.suma;
            if (userAnswer > correctAnswer) {
                return `Suma ta (${userAnswer}) este prea mare. Cât face ${exercise.termen1} + ${exercise.termen2}?`;
            } else {
                return `Suma ta (${userAnswer}) este prea mică. Cât face ${exercise.termen1} + ${exercise.termen2}?`;
            }
        }
    } else if (exercise.type === "table-sub") {
        let correctAnswer;
        if (exercise.unknown === "descazut") {
            correctAnswer = exercise.descazut;
            if (userAnswer > correctAnswer) {
                return `Numărul tău (${userAnswer}) este prea mare. Gândește-te: ? - ${exercise.scazator} = ${exercise.diferenta}`;
            } else {
                return `Numărul tău (${userAnswer}) este prea mic. Gândește-te: ? - ${exercise.scazator} = ${exercise.diferenta}`;
            }
        } else if (exercise.unknown === "scazator") {
            correctAnswer = exercise.scazator;
            if (userAnswer > correctAnswer) {
                return `Numărul tău (${userAnswer}) este prea mare. Gândește-te: ${exercise.descazut} - ? = ${exercise.diferenta}`;
            } else {
                return `Numărul tău (${userAnswer}) este prea mic. Gândește-te: ${exercise.descazut} - ? = ${exercise.diferenta}`;
            }
        } else {
            correctAnswer = exercise.diferenta;
            if (userAnswer > correctAnswer) {
                return `Diferența ta (${userAnswer}) este prea mare. Cât face ${exercise.descazut} - ${exercise.scazator}?`;
            } else {
                return `Diferența ta (${userAnswer}) este prea mică. Cât face ${exercise.descazut} - ${exercise.scazator}?`;
            }
        }
    } else if (exercise.type === "chain") {
        const correctAnswer = exercise.answer;
        // Build the expression string for hint
        let expr = exercise.numbers[0].toString();
        for (let i = 0; i < exercise.operators.length; i++) {
            expr += ` ${exercise.operators[i]} ${exercise.numbers[i + 1]}`;
        }
        if (userAnswer > correctAnswer) {
            return `Răspunsul tău (${userAnswer}) este prea mare. Calculează pas cu pas: ${expr}`;
        } else {
            return `Răspunsul tău (${userAnswer}) este prea mic. Calculează pas cu pas: ${expr}`;
        }
    } else if (exercise.type === "story") {
        const correctAnswer = exercise.answer;
        return exercise.hint || "Citește problema cu atenție și încearcă din nou!";
    } else if (exercise.type === "word") {
        return exercise.hint || "Gândește-te bine la ordinea corectă a literelor!";
    } else if (exercise.type === "syllable") {
        return exercise.hint || "Gândește-te cum se pronunță cuvântul și folosește liniuță (-) între silabe!";
    }
    return "Mai încearcă!";
}

function getCorrectAnswer(exercise) {
    if (exercise.type === "result" || exercise.type === "missing" || exercise.type === "chain" || exercise.type === "story") {
        return exercise.answer;
    } else if (exercise.type === "word" || exercise.type === "syllable") {
        return exercise.answer.toLowerCase();
    } else if (exercise.type === "table-add") {
        if (exercise.unknown === "termen1") return exercise.termen1;
        if (exercise.unknown === "termen2") return exercise.termen2;
        return exercise.suma;
    } else if (exercise.type === "table-sub") {
        if (exercise.unknown === "descazut") return exercise.descazut;
        if (exercise.unknown === "scazator") return exercise.scazator;
        return exercise.diferenta;
    }
    return null;
}

function checkAnswer() {
    const exercise = exercises[currentIndex];
    const feedback = document.getElementById('feedback');
    const card = document.getElementById('exercise-card');
    const btn = document.getElementById('check-btn');
    const hintBox = document.getElementById('hint-box');
    const hintText = document.getElementById('hint-text');

    if (answered) {
        currentIndex++;
        if (currentIndex < exercises.length) {
            loadExercise();
        } else {
            showCompletion();
        }
        return;
    }

    if (exercise.type === "word" || exercise.type === "syllable") {
        const input = document.getElementById('answer-input');
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = getCorrectAnswer(exercise);

        if (userAnswer === '') {
            feedback.textContent = exercise.type === "word" ? 'Introdu un cuvânt!' : 'Introdu silabele!';
            feedback.className = 'feedback wrong';
            return;
        }

        if (userAnswer === correctAnswer) {
            answered = true;
            correctCount++;
            document.getElementById('correct-count').textContent = correctCount;

            const inputClass = exercise.type === "word" ? 'answer-input word-input correct' : 'answer-input syllable-input correct';
            input.className = inputClass;
            card.className = 'exercise-card correct';
            feedback.textContent = '✓ Corect! Bravo!';
            feedback.className = 'feedback correct';
            hintBox.className = 'hint-box';

            if (currentIndex < exercises.length - 1) {
                btn.textContent = 'Următorul →';
            } else {
                btn.textContent = 'Vezi rezultatul';
            }
        } else {
            wrongCount++;
            document.getElementById('wrong-count').textContent = wrongCount;

            const inputWrongClass = exercise.type === "word" ? 'answer-input word-input wrong' : 'answer-input syllable-input wrong';
            input.className = inputWrongClass;
            card.className = 'exercise-card wrong';
            feedback.textContent = '✗ Mai încearcă!';
            feedback.className = 'feedback wrong';

            hintText.textContent = generateHint(exercise, userAnswer);
            hintBox.className = 'hint-box visible';

            setTimeout(() => {
                const inputNormalClass = exercise.type === "word" ? 'answer-input word-input' : 'answer-input syllable-input';
                input.className = inputNormalClass;
                card.className = 'exercise-card';
                input.value = '';
                input.focus();
            }, 1500);
        }
    } else if (exercise.type === "result" || exercise.type === "missing" || exercise.type === "table-add" || exercise.type === "table-sub" || exercise.type === "chain" || exercise.type === "story") {
        const input = document.getElementById('answer-input');
        const userAnswer = parseInt(input.value);
        const correctAnswer = getCorrectAnswer(exercise);

        if (isNaN(userAnswer)) {
            feedback.textContent = 'Introdu un număr!';
            feedback.className = 'feedback wrong';
            return;
        }

        if (userAnswer < 0) {
            feedback.textContent = 'Numărul trebuie să fie cel puțin 0!';
            feedback.className = 'feedback wrong';
            return;
        }

        if (userAnswer === correctAnswer) {
            answered = true;
            correctCount++;
            document.getElementById('correct-count').textContent = correctCount;

            if (input.classList.contains('table-input')) {
                input.classList.add('correct');
            } else if (input.classList.contains('chain-input')) {
                input.classList.add('correct');
            } else if (input.classList.contains('inline-input')) {
                input.className = 'inline-input correct';
            } else {
                input.className = 'answer-input correct';
            }
            card.className = 'exercise-card correct';
            feedback.textContent = '✓ Corect! Bravo!';
            feedback.className = 'feedback correct';
            hintBox.className = 'hint-box';

            if (currentIndex < exercises.length - 1) {
                btn.textContent = 'Următorul →';
            } else {
                btn.textContent = 'Vezi rezultatul';
            }
        } else {
            wrongCount++;
            document.getElementById('wrong-count').textContent = wrongCount;

            if (input.classList.contains('table-input')) {
                input.classList.add('wrong');
            } else if (input.classList.contains('chain-input')) {
                input.classList.add('wrong');
            } else if (input.classList.contains('inline-input')) {
                input.className = 'inline-input wrong';
            } else {
                input.className = 'answer-input wrong';
            }
            card.className = 'exercise-card wrong';
            feedback.textContent = '✗ Mai încearcă!';
            feedback.className = 'feedback wrong';

            hintText.textContent = generateHint(exercise, userAnswer);
            hintBox.className = 'hint-box visible';

            setTimeout(() => {
                if (input.classList.contains('table-input')) {
                    input.classList.remove('wrong');
                } else if (input.classList.contains('chain-input')) {
                    input.classList.remove('wrong');
                } else if (input.classList.contains('inline-input') || input.className.includes('inline-input')) {
                    input.className = 'inline-input';
                } else {
                    input.className = 'answer-input';
                }
                card.className = 'exercise-card';
                input.value = '';
                input.focus();
            }, 1500);
        }

    } else if (exercise.type === "comparison") {
        const leftInput = document.getElementById('answer-left');
        const rightInput = document.getElementById('answer-right');
        const leftAnswer = parseInt(leftInput.value);
        const rightAnswer = parseInt(rightInput.value);

        if (isNaN(leftAnswer) || isNaN(rightAnswer)) {
            feedback.textContent = 'Completează ambele câmpuri!';
            feedback.className = 'feedback wrong';
            return;
        }

        if (leftAnswer < 0 || rightAnswer < 0) {
            feedback.textContent = 'Numerele trebuie să fie cel puțin 0!';
            feedback.className = 'feedback wrong';
            return;
        }

        const leftSide = evaluateExpression(exercise.leftParts, leftAnswer);
        const rightSide = evaluateExpression(exercise.rightParts, rightAnswer);

        let isCorrect = false;
        if (exercise.symbol === "=" && leftSide === rightSide) isCorrect = true;
        if (exercise.symbol === ">" && leftSide > rightSide) isCorrect = true;
        if (exercise.symbol === "<" && leftSide < rightSide) isCorrect = true;

        if (isCorrect) {
            answered = true;
            correctCount++;
            document.getElementById('correct-count').textContent = correctCount;
            leftInput.className = 'inline-input correct';
            rightInput.className = 'inline-input correct';
            card.className = 'exercise-card correct';
            feedback.textContent = '✓ Corect! Bravo!';
            feedback.className = 'feedback correct';
            hintBox.className = 'hint-box';

            if (currentIndex < exercises.length - 1) {
                btn.textContent = 'Următorul →';
            } else {
                btn.textContent = 'Vezi rezultatul';
            }
        } else {
            wrongCount++;
            document.getElementById('wrong-count').textContent = wrongCount;

            leftInput.className = 'inline-input wrong';
            rightInput.className = 'inline-input wrong';
            card.className = 'exercise-card wrong';
            feedback.textContent = '✗ Mai încearcă!';
            feedback.className = 'feedback wrong';

            hintText.textContent = generateHint(exercise, null, leftAnswer, rightAnswer);
            hintBox.className = 'hint-box visible';

            setTimeout(() => {
                leftInput.className = 'inline-input';
                rightInput.className = 'inline-input';
                card.className = 'exercise-card';
                leftInput.value = '';
                rightInput.value = '';
                leftInput.focus();
            }, 1500);
        }
    }
}

function evaluateExpression(parts, answer) {
    const fullExpr = parts[0] + answer + parts[1];
    const match = fullExpr.match(/(\d+)\s*([+\-])\s*(\d+)/);
    if (match) {
        const a = parseInt(match[1]);
        const op = match[2];
        const b = parseInt(match[3]);
        return op === '+' ? a + b : a - b;
    }
    return parseInt(fullExpr);
}

function showCompletion() {
    document.getElementById('game-container').className = 'game-container hidden';
    document.getElementById('completion-screen').className = 'completion-screen active';
    document.getElementById('final-score').textContent = `${correctCount} / ${exercises.length}`;
    document.getElementById('progress').style.width = '100%';

    const percentage = (correctCount / exercises.length) * 100;
    let stars = '';
    let message = '';

    if (percentage === 100) {
        stars = '⭐⭐⭐';
        message = 'Perfect! Ești un geniu al matematicii!';
    } else if (percentage >= 80) {
        stars = '⭐⭐';
        message = 'Excelent! Foarte bine!';
    } else if (percentage >= 60) {
        stars = '⭐';
        message = 'Bine! Mai exersează!';
    } else {
        stars = '';
        message = 'Continuă să exersezi! Poți mai mult!';
    }

    document.getElementById('stars').textContent = stars;
    document.getElementById('final-message').textContent = message;

    if (percentage >= 80) {
        createConfetti();
    }
}

function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#00c853', '#ffeb3b', '#ff5252'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 4000);
        }, i * 50);
    }
}

function restartGame() {
    currentIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    shuffleArray(exercises);
    document.getElementById('correct-count').textContent = '0';
    document.getElementById('wrong-count').textContent = '0';
    document.getElementById('game-container').className = 'game-container';
    document.getElementById('completion-screen').className = 'completion-screen';
    loadExercise();
}

loadExercise();
