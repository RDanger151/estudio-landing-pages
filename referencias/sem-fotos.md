# Páginas sem fotos

Muito cliente não tem foto boa e não vai tirar. Uma página sem foto não
é uma página incompleta: é uma página em que a tipografia, a cor e a
estrutura fazem o trabalho que a imagem faria.

O erro a evitar é entregar o layout que pedia foto, com retângulos
cinzas no lugar dela.

## Os três estados — identifique antes de desenhar

Leia o campo de fotos do briefing e classifique:

| Estado | Como aparece no briefing | O que fazer |
|---|---|---|
| **Vai ter foto** | fotos em `assets/` | layout com imagem, normal |
| **Foto vem depois** | cliente disse que envia depois | layout com imagem + bloco rotulado `[foto: descrição]` nas medidas finais |
| **Não vai ter foto** | cliente marcou que não quer, ou disse que não tem e não vai ter | **redesenhe sem imagem.** Nenhum placeholder, nenhum espaço reservado |

No terceiro caso o `ENTREGA.md` não lista foto como pendência. A página
está completa.

## Como preencher o espaço de uma foto

Escolha **uma ou duas** destas estratégias por página, não todas.

### 1. Tipografia como imagem

O recurso mais forte. O título do hero vira o elemento visual: tamanho
grande (72 a 140 px no desktop), peso decidido, quebra de linha
controlada à mão, e a palavra que carrega o negócio ocupando uma linha
inteira. Nada de destacar uma palavra em cor ou itálico — isso é o tell
mais comum de página gerada.

Funciona bem com uma frase curta e concreta. "Pão feito às quatro da
manhã" vale mais que "Qualidade e tradição".

### 2. Campos de cor

Divida a página em faixas horizontais de cor cheia, de larguras
diferentes. A cor é o conteúdo visual. Funciona com paleta de três a
quatro tons do mesmo croma, nunca com gradiente.

O ritmo vem das alturas desiguais: uma faixa alta para o hero, uma baixa
para a chamada, uma média para os serviços.

### 3. Dado em tamanho grande

Se o negócio tem números reais e verificados no briefing (anos de
atuação, variedades de pão, cadeiras na barbearia, cidades atendidas),
um número grande é um elemento gráfico legítimo. Em tamanho de display,
com o rótulo pequeno embaixo.

Só com número que o cliente informou. Número inventado é proibido.

### 4. Desenho em SVG

Um desenho simples, com traço, feito de formas geométricas: uma xícara,
uma tesoura, um dente, uma folha. Vetor próprio, inline no HTML, na cor
de acento. Um por página, no hero ou repetido pequeno como marcador de
seção.

Nunca ícone de biblioteca espalhado em todos os blocos, nunca emoji.

### 5. Padrão geométrico

Faixa de listras, grade de pontos, xadrez, meia-tela diagonal — em CSS,
com `repeating-linear-gradient` ou `background-image` de SVG inline. Em
contraste baixo, como textura de fundo de uma seção só.

### 6. A lista como estrutura

Cardápio, tabela de preços e horários, bem tipografados, com régua fina
entre as linhas e os valores alinhados à direita, são bonitos por conta
própria. Uma barbearia ou cafeteria pode ter o cardápio como protagonista
do hero, no lugar da foto.

### 7. Logo ampliado

Se o cliente tem logo em vetor, ele pode aparecer grande, recortado na
borda da seção, como marca d'água em tom sobre tom. Só com SVG ou PNG
de boa resolução.

## Ajustes de layout que a ausência de foto exige

- **Medida de texto mais estreita.** Sem imagem ao lado, a coluna de
  texto tende a esticar. Limite em 65 a 70 caracteres.
- **Mais respiro vertical.** Seções de 120 a 160 px em vez de 96 px: o
  espaço vazio passa a ser elemento de composição.
- **Assimetria.** Sem foto, o layout centralizado fica monótono. Desloque
  o título, use margens desiguais, deixe uma coluna vazia de propósito.
- **Contraste de escala.** A diferença entre o maior e o menor texto
  precisa ser maior que numa página com imagem: é o que cria hierarquia.
- **Cor nos blocos de conteúdo.** Com imagem, os blocos podem ser
  neutros. Sem imagem, dê cor própria a pelo menos uma seção.

## O que não fazer

- Retângulo cinza, moldura vazia ou ícone de imagem no lugar da foto
- Foto de banco de imagens sem o cliente ter autorizado por escrito
- Ilustração genérica de banco (pessoas em cores planas, "corporate
  memphis")
- Textura ou padrão em todas as seções: uma só
- Encher o espaço com mais texto do que o briefing deu
- Deixar o hero só com título e botão, sem nenhum recurso visual
