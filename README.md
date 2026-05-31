# Frontend Mentor - Advice Generator App

Esta é uma solução para o [desafio Advice generator app no Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Os desafios do Frontend Mentor me ajudam a melhorar minhas habilidades de codificação construindo projetos realistas.

## Sumário

- [Visão Geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [O que aprendi](#o-que-aprendi)
- [Como executar](#como-executar)
- [Autor](#autor)

## Visão Geral

### O desafio

Os usuários devem ser capazes de:

- Visualizar o layout ideal para o aplicativo, dependendo do tamanho da tela do dispositivo.
- Ver os estados de *hover* para todos os elementos interativos na página.
- Gerar um novo conselho clicando no ícone do dado.

### Screenshot

![Design Preview](./design/desktop-design.jpg)

### Links

- Repositório: [https://github.com/alanborgesdev/advice-generator-app](https://github.com/alanborgesdev/advice-generator-app)
- Deploy: [https://alanborgesdev.github.io/advice-generator-app/](https://alanborgesdev.github.io/advice-generator-app/)

## Meu processo

### Tecnologias utilizadas

- Marcadores HTML5 semânticos
- Propriedades personalizadas de CSS (Variáveis)
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- [Advice Slip API](https://api.adviceslip.com/)

### O que aprendi

Neste projeto, reforcei meus conhecimentos em consumo de APIs externas utilizando `fetch` com `async/await`. Também pratiquei a manipulação do DOM para atualizar dinamicamente o conteúdo da página e o uso da tag `<picture>` para alternar entre imagens de divider para mobile e desktop.

```javascript
async function fetchAdvice() {
    try {
        const res = await fetch("https://api.adviceslip.com/advice", {
            cache: "no-cache",
        });
        const data = await res.json();
        const slip = data.slip;

        idAdvice.textContent = `ADVICE #${slip.id}`;
        textAdvice.textContent = `"${slip.advice}"`;
    } catch (err) {
        console.error("Erro ao buscar conselho:", err);
    }
}
```

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/alanborgesdev/advice-generator-app.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd advice-generator-app
   ```
3. Abra o arquivo `index.html` no seu navegador de preferência.

## Autor

- Este projeto foi desenvolvido por **[Alan Borges](https://github.com/alanborgesdev)**.
