const btnDice = document.querySelector(".btn-dice");
const textAdvice = document.querySelector(".advice-text");
const idAdvice = document.querySelector(".advice-id");

async function fetchAdvice() {
    // Atualiza a mensagem de carregamento
    textAdvice.textContent = "Loading..."; // Mensagem temporária
    idAdvice.textContent = "ADVICE #--"; // Limpa o ID

    // desabilita o botão enquanto a requisição está em andamento
    if (btnDice) {
        btnDice.disabled = true;
        btnDice.setAttribute("aria-disabled", "true");
    }

    try {
        const res = await fetch("https://api.adviceslip.com/advice", {
            cache: "no-cache",
        });
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const data = await res.json();
        const slip = data.slip;
        if (!slip) throw new Error("Resposta inválida da API");

         // Atualiza o texto assim que a resposta chega
        idAdvice.textContent = `ADVICE #${slip.id}`;
        textAdvice.textContent = `"${slip.advice}"`;
    } catch (err) {
        console.error("fetchAdvice error:", err);
        idAdvice.textContent = "ADVICE #--";
        textAdvice.textContent = "Erro ao carregar conselho. Tente novamente.";
    } finally {
        // Reabilita o botão independente do resultado
        if (btnDice) {
            btnDice.disabled = false;
            btnDice.setAttribute("aria-disabled", "false");
        }
    }
}

// Vincula o botão e carrega um conselho ao iniciar
if (btnDice) btnDice.addEventListener("click", fetchAdvice);
