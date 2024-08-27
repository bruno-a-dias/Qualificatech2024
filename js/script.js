function finalizarQuiz() {
    // Respostas corretas
    const respostasCorretas = {
        q1: 'A',
        q2: 'C',
        q3: 'B',
        q4: 'C',
        q5: 'B',
        q6: 'B',
        q7: 'C',
        q8: 'D',
        q9: 'C',
        q10: 'B',
        q11: 'C',
        q12: 'C',
        q13: 'B',
        q14: 'B',
        q15: 'C',
        q16: 'B',
        q17: 'C',
        q18: 'B',
        q19: 'B',
        q20: 'B',
        q21: 'C',
        q22: 'C',
        q23: 'C',
        q24: 'B',
        q25: 'C',
        q26: 'C',
        q27: 'C',
        q28: 'B',
        q29: 'C',
        q30: 'B'
    };

    let acertos = 0;
    let erros = 0;

    // Loop para verificar respostas
    for (let i = 1; i <= Object.keys(respostasCorretas).length; i++) {
        const resposta = document.querySelector(`input[name="q${i}"]:checked`);

        if (resposta) {
            const valorResposta = resposta.value;
            const questaoDiv = resposta.parentElement.parentElement;

            if (valorResposta === respostasCorretas[`q${i}`]) {
                questaoDiv.classList.add('correct');
                acertos++;
            } else {
                questaoDiv.classList.add('incorrect');
                erros++;
            }
        } else {
            // Se não há resposta selecionada, contar como erro
            erros++;
            const questaoDiv = document.querySelector(`.question:nth-child(${i})`);
            questaoDiv.classList.add('incorrect');
        }
    }

    // Calcular percentual de acertos
    const totalQuestoes = Object.keys(respostasCorretas).length;
    const percentualAcerto = Math.round((acertos / totalQuestoes) * 100);
    const percentualElement = document.getElementById('percentualAcerto');

    // Definir a cor do percentual e a mensagem final com base no percentual de acertos
    let mensagemFinal = '';
    if (percentualAcerto >= 70) {
        percentualElement.classList.add('aprovado');
        mensagemFinal = 'Parabéns, você foi Aprovado!';
    } else if (percentualAcerto >= 60) {
        percentualElement.classList.add('quase');
        mensagemFinal = 'Se esforce, foi quase... mas ainda reprovado!';
    } else {
        percentualElement.classList.add('reprovado');
        mensagemFinal = 'Reprovado.';
    }

    // Mostrar resultados
    document.getElementById('resultadoTexto').textContent = `Você acertou ${acertos} questões e errou ${erros} questões.`;
    document.getElementById('totalAcertosErros').textContent = `Total de Acertos: ${acertos} | Total de Erros: ${erros}`;
    percentualElement.textContent = `${percentualAcerto}%`;
    document.getElementById('mensagemFinal').textContent = mensagemFinal;

    document.getElementById('resultados').style.display = 'block';
}
