const exercises = [
    // Tipul 1: Gaseste rezultatul (30 exercitii)
    { type: "result", text: "8 + 1 - 5 =", answer: 4 },
    { type: "result", text: "6 - 3 + 4 =", answer: 7 },
    { type: "result", text: "9 - 6 + 2 =", answer: 5 },
    { type: "result", text: "4 + 5 - 7 =", answer: 2 },
    { type: "result", text: "7 - 4 + 3 =", answer: 6 },
    { type: "result", text: "10 - 8 + 5 =", answer: 7 },
    { type: "result", text: "3 + 6 - 4 =", answer: 5 },
    { type: "result", text: "8 - 5 + 2 =", answer: 5 },
    { type: "result", text: "5 + 4 - 6 =", answer: 3 },
    { type: "result", text: "9 - 7 + 6 =", answer: 8 },
    { type: "result", text: "7 + 2 - 4 =", answer: 5 },
    { type: "result", text: "6 - 2 + 5 =", answer: 9 },
    { type: "result", text: "10 - 5 + 3 =", answer: 8 },
    { type: "result", text: "4 + 4 - 2 =", answer: 6 },
    { type: "result", text: "8 - 6 + 7 =", answer: 9 },
    { type: "result", text: "5 + 3 - 1 =", answer: 7 },
    { type: "result", text: "9 - 4 + 2 =", answer: 7 },
    { type: "result", text: "3 + 5 - 6 =", answer: 2 },
    { type: "result", text: "7 - 3 + 4 =", answer: 8 },
    { type: "result", text: "6 + 3 - 8 =", answer: 1 },
    { type: "result", text: "5 + 4 - 3 =", answer: 6 },
    { type: "result", text: "9 - 5 + 1 =", answer: 5 },
    { type: "result", text: "7 + 2 - 6 =", answer: 3 },
    { type: "result", text: "8 - 4 + 3 =", answer: 7 },
    { type: "result", text: "6 + 1 - 4 =", answer: 3 },
    { type: "result", text: "10 - 7 + 4 =", answer: 7 },
    { type: "result", text: "4 + 3 - 5 =", answer: 2 },
    { type: "result", text: "9 - 8 + 6 =", answer: 7 },
    { type: "result", text: "5 + 5 - 8 =", answer: 2 },
    { type: "result", text: "7 - 6 + 9 =", answer: 10 },

    // Tipul 2: Gaseste numarul lipsa (20 exercitii)
    { type: "missing", parts: ["", " + 3 = 7"], answer: 4, position: 0 },
    { type: "missing", parts: ["5 + ", " = 9"], answer: 4, position: 1 },
    { type: "missing", parts: ["", " - 2 = 6"], answer: 8, position: 0 },
    { type: "missing", parts: ["10 - ", " = 4"], answer: 6, position: 1 },
    { type: "missing", parts: ["", " + 5 = 8"], answer: 3, position: 0 },
    { type: "missing", parts: ["7 - ", " = 3"], answer: 4, position: 1 },
    { type: "missing", parts: ["", " + 6 = 10"], answer: 4, position: 0 },
    { type: "missing", parts: ["9 - ", " = 5"], answer: 4, position: 1 },
    { type: "missing", parts: ["", " + 2 = 5"], answer: 3, position: 0 },
    { type: "missing", parts: ["8 - ", " = 2"], answer: 6, position: 1 },
    { type: "missing", parts: ["", " + 7 = 9"], answer: 2, position: 0 },
    { type: "missing", parts: ["6 + ", " = 10"], answer: 4, position: 1 },
    { type: "missing", parts: ["", " - 4 = 5"], answer: 9, position: 0 },
    { type: "missing", parts: ["10 - ", " = 7"], answer: 3, position: 1 },
    { type: "missing", parts: ["", " + 1 = 6"], answer: 5, position: 0 },
    { type: "missing", parts: ["4 + ", " = 7"], answer: 3, position: 1 },
    { type: "missing", parts: ["", " - 3 = 4"], answer: 7, position: 0 },
    { type: "missing", parts: ["9 - ", " = 2"], answer: 7, position: 1 },
    { type: "missing", parts: ["", " + 4 = 10"], answer: 6, position: 0 },
    { type: "missing", parts: ["8 - ", " = 5"], answer: 3, position: 1 },

    // Tipul 3: Comparatii (15 exercitii)
    { type: "comparison", leftParts: ["", " + 2"], symbol: "=", rightParts: ["3 + ", ""], answers: [5, 4], leftAnswer: 5, rightAnswer: 4 },
    { type: "comparison", leftParts: ["4 + ", ""], symbol: "=", rightParts: ["", " + 3"], answers: [3, 4], leftAnswer: 3, rightAnswer: 4 },
    { type: "comparison", leftParts: ["", " + 1"], symbol: "=", rightParts: ["2 + ", ""], answers: [6, 5], leftAnswer: 6, rightAnswer: 5 },
    { type: "comparison", leftParts: ["8 - ", ""], symbol: "=", rightParts: ["", " + 1"], answers: [5, 2], leftAnswer: 5, rightAnswer: 2 },
    { type: "comparison", leftParts: ["", " + 4"], symbol: "=", rightParts: ["5 + ", ""], answers: [3, 2], leftAnswer: 3, rightAnswer: 2 },
    { type: "comparison", leftParts: ["", " + 5"], symbol: ">", rightParts: ["2 + ", ""], answers: [4, 3], leftAnswer: 4, rightAnswer: 3 },
    { type: "comparison", leftParts: ["7 + ", ""], symbol: ">", rightParts: ["", " + 2"], answers: [2, 5], leftAnswer: 2, rightAnswer: 5 },
    { type: "comparison", leftParts: ["", " + 3"], symbol: ">", rightParts: ["1 + ", ""], answers: [6, 4], leftAnswer: 6, rightAnswer: 4 },
    { type: "comparison", leftParts: ["9 - ", ""], symbol: ">", rightParts: ["", " + 1"], answers: [2, 3], leftAnswer: 2, rightAnswer: 3 },
    { type: "comparison", leftParts: ["", " + 6"], symbol: ">", rightParts: ["3 + ", ""], answers: [3, 2], leftAnswer: 3, rightAnswer: 2 },
    { type: "comparison", leftParts: ["", " + 1"], symbol: "<", rightParts: ["5 + ", ""], answers: [2, 3], leftAnswer: 2, rightAnswer: 3 },
    { type: "comparison", leftParts: ["3 + ", ""], symbol: "<", rightParts: ["", " + 2"], answers: [2, 6], leftAnswer: 2, rightAnswer: 6 },
    { type: "comparison", leftParts: ["", " + 2"], symbol: "<", rightParts: ["4 + ", ""], answers: [1, 3], leftAnswer: 1, rightAnswer: 3 },
    { type: "comparison", leftParts: ["5 - ", ""], symbol: "<", rightParts: ["", " + 3"], answers: [3, 4], leftAnswer: 3, rightAnswer: 4 },
    { type: "comparison", leftParts: ["", " + 4"], symbol: "<", rightParts: ["6 + ", ""], answers: [1, 2], leftAnswer: 1, rightAnswer: 2 },

    // Tipul 4: Tabela adunare (20 exercitii)
    { type: "table-add", termen1: 3, termen2: 4, suma: 7, unknown: "termen1" },
    { type: "table-add", termen1: 5, termen2: 2, suma: 7, unknown: "termen2" },
    { type: "table-add", termen1: 6, termen2: 3, suma: 9, unknown: "suma" },
    { type: "table-add", termen1: 2, termen2: 5, suma: 7, unknown: "termen1" },
    { type: "table-add", termen1: 4, termen2: 4, suma: 8, unknown: "termen2" },
    { type: "table-add", termen1: 1, termen2: 8, suma: 9, unknown: "suma" },
    { type: "table-add", termen1: 7, termen2: 2, suma: 9, unknown: "termen1" },
    { type: "table-add", termen1: 3, termen2: 6, suma: 9, unknown: "termen2" },
    { type: "table-add", termen1: 5, termen2: 5, suma: 10, unknown: "suma" },
    { type: "table-add", termen1: 4, termen2: 3, suma: 7, unknown: "termen1" },
    { type: "table-add", termen1: 2, termen2: 6, suma: 8, unknown: "termen2" },
    { type: "table-add", termen1: 8, termen2: 1, suma: 9, unknown: "suma" },
    { type: "table-add", termen1: 6, termen2: 4, suma: 10, unknown: "termen1" },
    { type: "table-add", termen1: 3, termen2: 5, suma: 8, unknown: "termen2" },
    { type: "table-add", termen1: 7, termen2: 3, suma: 10, unknown: "suma" },
    { type: "table-add", termen1: 1, termen2: 6, suma: 7, unknown: "termen1" },
    { type: "table-add", termen1: 4, termen2: 2, suma: 6, unknown: "termen2" },
    { type: "table-add", termen1: 2, termen2: 3, suma: 5, unknown: "suma" },
    { type: "table-add", termen1: 5, termen2: 4, suma: 9, unknown: "termen1" },
    { type: "table-add", termen1: 6, termen2: 2, suma: 8, unknown: "termen2" },

    // Tipul 5: Tabela scadere (20 exercitii)
    { type: "table-sub", descazut: 9, scazator: 4, diferenta: 5, unknown: "descazut" },
    { type: "table-sub", descazut: 8, scazator: 3, diferenta: 5, unknown: "scazator" },
    { type: "table-sub", descazut: 10, scazator: 6, diferenta: 4, unknown: "diferenta" },
    { type: "table-sub", descazut: 7, scazator: 2, diferenta: 5, unknown: "descazut" },
    { type: "table-sub", descazut: 9, scazator: 5, diferenta: 4, unknown: "scazator" },
    { type: "table-sub", descazut: 8, scazator: 2, diferenta: 6, unknown: "diferenta" },
    { type: "table-sub", descazut: 10, scazator: 3, diferenta: 7, unknown: "descazut" },
    { type: "table-sub", descazut: 6, scazator: 4, diferenta: 2, unknown: "scazator" },
    { type: "table-sub", descazut: 9, scazator: 7, diferenta: 2, unknown: "diferenta" },
    { type: "table-sub", descazut: 8, scazator: 5, diferenta: 3, unknown: "descazut" },
    { type: "table-sub", descazut: 10, scazator: 4, diferenta: 6, unknown: "scazator" },
    { type: "table-sub", descazut: 7, scazator: 3, diferenta: 4, unknown: "diferenta" },
    { type: "table-sub", descazut: 9, scazator: 6, diferenta: 3, unknown: "descazut" },
    { type: "table-sub", descazut: 10, scazator: 8, diferenta: 2, unknown: "scazator" },
    { type: "table-sub", descazut: 8, scazator: 4, diferenta: 4, unknown: "diferenta" },
    { type: "table-sub", descazut: 6, scazator: 1, diferenta: 5, unknown: "descazut" },
    { type: "table-sub", descazut: 9, scazator: 3, diferenta: 6, unknown: "scazator" },
    { type: "table-sub", descazut: 7, scazator: 5, diferenta: 2, unknown: "diferenta" },
    { type: "table-sub", descazut: 10, scazator: 2, diferenta: 8, unknown: "descazut" },
    { type: "table-sub", descazut: 8, scazator: 6, diferenta: 2, unknown: "scazator" },

    // Tipul 6: Lant de operatii (20 exercitii)
    // 2+3+1-4+2-1 = 3
    { type: "chain", numbers: [2, 3, 1, 4, 2, 1], operators: ["+", "+", "-", "+", "-"], answer: 3 },
    // 5-2+3+1-2+4 = 9
    { type: "chain", numbers: [5, 2, 3, 1, 2, 4], operators: ["-", "+", "+", "-", "+"], answer: 9 },
    // 1+4+2-3+1-2 = 3
    { type: "chain", numbers: [1, 4, 2, 3, 1, 2], operators: ["+", "+", "-", "+", "-"], answer: 3 },
    // 6-3+2+1-3+2 = 5
    { type: "chain", numbers: [6, 3, 2, 1, 3, 2], operators: ["-", "+", "+", "-", "+"], answer: 5 },
    // 3+2-4+1+2-3 = 1
    { type: "chain", numbers: [3, 2, 4, 1, 2, 3], operators: ["+", "-", "+", "+", "-"], answer: 1 },
    // 4+1+3-2+1-2 = 5
    { type: "chain", numbers: [4, 1, 3, 2, 1, 2], operators: ["+", "+", "-", "+", "-"], answer: 5 },
    // 7-4+2-3+1+2 = 5
    { type: "chain", numbers: [7, 4, 2, 3, 1, 2], operators: ["-", "+", "-", "+", "+"], answer: 5 },
    // 2+5+1-2+3-1 = 8
    { type: "chain", numbers: [2, 5, 1, 2, 3, 1], operators: ["+", "+", "-", "+", "-"], answer: 8 },
    // 8-3-2+1+4-3 = 5
    { type: "chain", numbers: [8, 3, 2, 1, 4, 3], operators: ["-", "-", "+", "+", "-"], answer: 5 },
    // 1+2+3-4+2-1 = 3
    { type: "chain", numbers: [1, 2, 3, 4, 2, 1], operators: ["+", "+", "-", "+", "-"], answer: 3 },
    // 5+1-2+3-2+1 = 6
    { type: "chain", numbers: [5, 1, 2, 3, 2, 1], operators: ["+", "-", "+", "-", "+"], answer: 6 },
    // 3+4-1+2-3+2 = 7
    { type: "chain", numbers: [3, 4, 1, 2, 3, 2], operators: ["+", "-", "+", "-", "+"], answer: 7 },
    // 6-2+1+3-2+1 = 7
    { type: "chain", numbers: [6, 2, 1, 3, 2, 1], operators: ["-", "+", "+", "-", "+"], answer: 7 },
    // 4+3-2+1+2-4 = 4
    { type: "chain", numbers: [4, 3, 2, 1, 2, 4], operators: ["+", "-", "+", "+", "-"], answer: 4 },
    // 2+1+4-3+2-1 = 5
    { type: "chain", numbers: [2, 1, 4, 3, 2, 1], operators: ["+", "+", "-", "+", "-"], answer: 5 },
    // 7-2+3-1+2-3 = 6
    { type: "chain", numbers: [7, 2, 3, 1, 2, 3], operators: ["-", "+", "-", "+", "-"], answer: 6 },
    // 1+3+2-4+1-2 = 1
    { type: "chain", numbers: [1, 3, 2, 4, 1, 2], operators: ["+", "+", "-", "+", "-"], answer: 1 },
    // 5-3+1+2-4+2 = 3
    { type: "chain", numbers: [5, 3, 1, 2, 4, 2], operators: ["-", "+", "+", "-", "+"], answer: 3 },
    // 4+2-3+1+2-1 = 5
    { type: "chain", numbers: [4, 2, 3, 1, 2, 1], operators: ["+", "-", "+", "+", "-"], answer: 5 },
    // 3+3-2+1-4+2 = 3
    { type: "chain", numbers: [3, 3, 2, 1, 4, 2], operators: ["+", "-", "+", "-", "+"], answer: 3 }
];

let currentIndex = 0;
let correctCount = 0;
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

    document.getElementById('exercise-number').textContent = `Exercitiul ${currentIndex + 1} din ${exercises.length}`;
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback').className = 'feedback';
    document.getElementById('exercise-card').className = 'exercise-card';
    document.getElementById('check-btn').textContent = 'Verifica';
    document.getElementById('progress').style.width = `${(currentIndex / exercises.length) * 100}%`;
    document.getElementById('task-hint').textContent = '';
    document.getElementById('hint-box').className = 'hint-box';
    document.getElementById('hint-text').textContent = '';
    answered = false;

    if (exercise.type === "result") {
        exerciseTypeEl.textContent = "Gaseste rezultatul";
        exerciseTypeEl.className = "exercise-type result";
        exerciseContentEl.innerHTML = `
            <div class="exercise-text">
                <span>${exercise.text}</span>
                <input type="number" min="0" class="answer-input" id="answer-input" autofocus>
            </div>
        `;
    } else if (exercise.type === "missing") {
        exerciseTypeEl.textContent = "Gaseste numarul lipsa";
        exerciseTypeEl.className = "exercise-type missing";
        exerciseContentEl.innerHTML = `
            <div class="exercise-text">
                <span>${exercise.parts[0]}</span>
                <input type="number" min="0" class="inline-input" id="answer-input" autofocus>
                <span>${exercise.parts[1]}</span>
            </div>
        `;
    } else if (exercise.type === "comparison") {
        exerciseTypeEl.textContent = "Completeaza comparatia";
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
        exerciseTypeEl.textContent = "Tabela adunarii";
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
        exerciseTypeEl.textContent = "Tabela scaderii";
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
                    <th>Descazut</th>
                    <th>Scazator</th>
                    <th>Diferenta</th>
                </tr>
                <tr>
                    <td>${descazutHtml}</td>
                    <td>${scazatorHtml}</td>
                    <td>${diferentaHtml}</td>
                </tr>
            </table>
        `;

        document.getElementById('task-hint').textContent = "Descazut - Scazator = Diferenta";
    } else if (exercise.type === "chain") {
        exerciseTypeEl.textContent = "Lantul operatiilor";
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

        document.getElementById('task-hint').textContent = "Calculeaza pas cu pas de la stanga la dreapta";
    }

    // Add enter key listeners
    const inputs = document.querySelectorAll('input[type="number"]');
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
    if (symbol === "=") return "Gaseste numerele astfel incat cele doua parti sa fie egale";
    if (symbol === ">") return "Partea stanga trebuie sa fie mai mare decat partea dreapta";
    if (symbol === "<") return "Partea stanga trebuie sa fie mai mica decat partea dreapta";
    return "";
}

function generateHint(exercise, userAnswer, userLeftAnswer, userRightAnswer) {
    if (exercise.type === "result") {
        const correctAnswer = exercise.answer;
        if (userAnswer > correctAnswer) {
            return `Raspunsul tau (${userAnswer}) este prea mare. Incearca un numar mai mic!`;
        } else {
            return `Raspunsul tau (${userAnswer}) este prea mic. Incearca un numar mai mare!`;
        }
    } else if (exercise.type === "missing") {
        const correctAnswer = exercise.answer;
        if (userAnswer > correctAnswer) {
            return `Numarul tau (${userAnswer}) este prea mare. Gandeste-te: ce numar trebuie sa pui ca sa obtii rezultatul corect?`;
        } else {
            return `Numarul tau (${userAnswer}) este prea mic. Gandeste-te: ce numar trebuie sa pui ca sa obtii rezultatul corect?`;
        }
    } else if (exercise.type === "comparison") {
        const leftSide = evaluateExpression(exercise.leftParts, userLeftAnswer);
        const rightSide = evaluateExpression(exercise.rightParts, userRightAnswer);

        if (exercise.symbol === "=") {
            if (leftSide > rightSide) {
                return `Partea stanga (${leftSide}) este mai mare decat partea dreapta (${rightSide}). Trebuie sa fie egale!`;
            } else {
                return `Partea stanga (${leftSide}) este mai mica decat partea dreapta (${rightSide}). Trebuie sa fie egale!`;
            }
        } else if (exercise.symbol === ">") {
            return `Partea stanga (${leftSide}) trebuie sa fie MAI MARE decat partea dreapta (${rightSide}). Acum nu este asa.`;
        } else if (exercise.symbol === "<") {
            return `Partea stanga (${leftSide}) trebuie sa fie MAI MICA decat partea dreapta (${rightSide}). Acum nu este asa.`;
        }
    } else if (exercise.type === "table-add") {
        let correctAnswer;
        if (exercise.unknown === "termen1") {
            correctAnswer = exercise.termen1;
            if (userAnswer > correctAnswer) {
                return `Numarul tau (${userAnswer}) este prea mare. Gandeste-te: ? + ${exercise.termen2} = ${exercise.suma}`;
            } else {
                return `Numarul tau (${userAnswer}) este prea mic. Gandeste-te: ? + ${exercise.termen2} = ${exercise.suma}`;
            }
        } else if (exercise.unknown === "termen2") {
            correctAnswer = exercise.termen2;
            if (userAnswer > correctAnswer) {
                return `Numarul tau (${userAnswer}) este prea mare. Gandeste-te: ${exercise.termen1} + ? = ${exercise.suma}`;
            } else {
                return `Numarul tau (${userAnswer}) este prea mic. Gandeste-te: ${exercise.termen1} + ? = ${exercise.suma}`;
            }
        } else {
            correctAnswer = exercise.suma;
            if (userAnswer > correctAnswer) {
                return `Suma ta (${userAnswer}) este prea mare. Cat face ${exercise.termen1} + ${exercise.termen2}?`;
            } else {
                return `Suma ta (${userAnswer}) este prea mica. Cat face ${exercise.termen1} + ${exercise.termen2}?`;
            }
        }
    } else if (exercise.type === "table-sub") {
        let correctAnswer;
        if (exercise.unknown === "descazut") {
            correctAnswer = exercise.descazut;
            if (userAnswer > correctAnswer) {
                return `Numarul tau (${userAnswer}) este prea mare. Gandeste-te: ? - ${exercise.scazator} = ${exercise.diferenta}`;
            } else {
                return `Numarul tau (${userAnswer}) este prea mic. Gandeste-te: ? - ${exercise.scazator} = ${exercise.diferenta}`;
            }
        } else if (exercise.unknown === "scazator") {
            correctAnswer = exercise.scazator;
            if (userAnswer > correctAnswer) {
                return `Numarul tau (${userAnswer}) este prea mare. Gandeste-te: ${exercise.descazut} - ? = ${exercise.diferenta}`;
            } else {
                return `Numarul tau (${userAnswer}) este prea mic. Gandeste-te: ${exercise.descazut} - ? = ${exercise.diferenta}`;
            }
        } else {
            correctAnswer = exercise.diferenta;
            if (userAnswer > correctAnswer) {
                return `Diferenta ta (${userAnswer}) este prea mare. Cat face ${exercise.descazut} - ${exercise.scazator}?`;
            } else {
                return `Diferenta ta (${userAnswer}) este prea mica. Cat face ${exercise.descazut} - ${exercise.scazator}?`;
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
            return `Raspunsul tau (${userAnswer}) este prea mare. Calculeaza pas cu pas: ${expr}`;
        } else {
            return `Raspunsul tau (${userAnswer}) este prea mic. Calculeaza pas cu pas: ${expr}`;
        }
    }
    return "Mai incearca!";
}

function getCorrectAnswer(exercise) {
    if (exercise.type === "result" || exercise.type === "missing" || exercise.type === "chain") {
        return exercise.answer;
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

    if (exercise.type === "result" || exercise.type === "missing" || exercise.type === "table-add" || exercise.type === "table-sub" || exercise.type === "chain") {
        const input = document.getElementById('answer-input');
        const userAnswer = parseInt(input.value);
        const correctAnswer = getCorrectAnswer(exercise);

        if (isNaN(userAnswer)) {
            feedback.textContent = 'Introdu un numar!';
            feedback.className = 'feedback wrong';
            return;
        }

        if (userAnswer < 0) {
            feedback.textContent = 'Numarul trebuie sa fie cel putin 0!';
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
                btn.textContent = 'Urmatorul →';
            } else {
                btn.textContent = 'Vezi rezultatul';
            }
        } else {
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
            feedback.textContent = '✗ Mai incearca!';
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
            feedback.textContent = 'Completeaza ambele campuri!';
            feedback.className = 'feedback wrong';
            return;
        }

        if (leftAnswer < 0 || rightAnswer < 0) {
            feedback.textContent = 'Numerele trebuie sa fie cel putin 0!';
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
                btn.textContent = 'Urmatorul →';
            } else {
                btn.textContent = 'Vezi rezultatul';
            }
        } else {
            leftInput.className = 'inline-input wrong';
            rightInput.className = 'inline-input wrong';
            card.className = 'exercise-card wrong';
            feedback.textContent = '✗ Mai incearca!';
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
        message = 'Perfect! Esti un geniu al matematicii!';
    } else if (percentage >= 80) {
        stars = '⭐⭐';
        message = 'Excelent! Foarte bine!';
    } else if (percentage >= 60) {
        stars = '⭐';
        message = 'Bine! Mai exerseaza!';
    } else {
        stars = '';
        message = 'Continua sa exersezi! Poti mai mult!';
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
    shuffleArray(exercises);
    document.getElementById('correct-count').textContent = '0';
    document.getElementById('game-container').className = 'game-container';
    document.getElementById('completion-screen').className = 'completion-screen';
    loadExercise();
}

loadExercise();
