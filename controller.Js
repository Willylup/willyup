document.addEventListener('DOMContentLoaded', function() { // Adiciona um evento que é acionado quando o conteúdo do documento foi completamente carregado
    const magicButton = document.getElementById('magicButton'); // Seleciona o botão com o ID 'magicButton'
    const heartButton = document.getElementById('heartButton'); // Seleciona o botão com o ID 'heartButton'
    const changeFontButton = document.getElementById('changeFontButton'); // Seleciona o botão com o ID 'changeFontButton'
    const heartsDiv = document.getElementById('hearts'); // Seleciona a div com o ID 'hearts'
    const listSection = document.querySelector('.list'); // Seleciona a seção com a classe 'list'

    const fonts = ['Arial, sans-serif', 'Courier New, monospace', 'Georgia, serif', 'Times New Roman, serif', 'Verdana, sans-serif']; // Define uma lista de diferentes fontes
    let currentFontIndex = 0; // Inicializa o índice da fonte atual

    magicButton.addEventListener('click', function() { // Adiciona um evento de clique ao botão 'magicButton'
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Gera uma cor aleatória
        document.body.style.backgroundColor = randomColor; // Define a cor de fundo do corpo do documento para a cor aleatória gerada
    });
    
    heartButton.addEventListener('click', function() { // Adiciona um evento de clique ao botão 'heartButton'
        for (let i = 0; i < 10; i++) { // Loop para criar 10 corações
            const heart = document.createElement('div'); // Cria um novo elemento div
            heart.className = 'heart'; // Adiciona a classe 'heart' ao novo elemento
            heart.textContent = '❤️'; // Define o conteúdo de texto do novo elemento como um coração
            heart.style.left = `${Math.random() * 100}vw`; // Define a posição horizontal aleatória do coração
            heart.style.fontSize = `${Math.random() * 2 + 1}em`; // Define um tamanho de fonte aleatório para o coração
            heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Define uma duração de animação aleatória para o coração
            heartsDiv.appendChild(heart); // Adiciona o novo coração à div 'hearts'
            
            setTimeout(() => { // Define um tempo para executar uma função após 5 segundos
                heart.remove(); // Remove o coração após 5 segundos
            }, 5000); // Tempo em milissegundos (5 segundos)
        }
    });

    changeFontButton.addEventListener('click', function() { // Adiciona um evento de clique ao botão 'changeFontButton'
        currentFontIndex = (currentFontIndex + 1) % fonts.length; // Incrementa o índice da fonte atual e reinicia se atingir o final da lista
        listSection.style.fontFamily = fonts[currentFontIndex]; // Define a família de fontes da seção da lista para a próxima fonte na lista
    });
});