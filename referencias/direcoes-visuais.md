# Direções visuais

Seis direções prontas. O agente escolhe **uma** por cliente, declara em
uma linha qual escolheu e segue os valores. Nunca misturar duas.

Se o briefing trouxe cores ou fontes da marca, elas substituem a paleta
e a tipografia da direção; o resto (ritmo, forma, composição) continua.

Registre em `clientes/<cliente>/DIRECAO.txt` qual foi usada, para não
repetir a mesma em clientes do mesmo ramo na mesma cidade.

---

## 1. Artesanal

Para cafeteria, padaria, cervejaria, brechó, floricultura, tatuagem.

- Fundo `#FBF7F0`, texto `#2B2118`, acento `#9C5B2C`, apoio `#E3D5C0`
- Display: Fraunces ou Bitter · Corpo: DM Sans
- Raio 20 px, sem sombra, divisores de 1 px em tom terroso
- Espaçamento generoso (seções de 96 px), títulos grandes em serifada
- Composição assimétrica: texto à esquerda, imagem em círculo ou arco
- Marca registrada: um elemento desenhado em SVG com traço

## 2. Minimalista clínico

Para clínica, dentista, advocacia, contabilidade, laboratório.

- Fundo `#FFFFFF`, texto `#111827`, acento `#1D4ED8`, apoio `#F3F4F6`
- Display e corpo: Inter (pesos 600 e 400)
- Raio 8 px, borda de 1 px `#E5E7EB`, sombra só em elemento flutuante
- Grade de 12 colunas, alinhamento à esquerda, muito espaço em branco
- Nada de curva decorativa; a hierarquia vem só do tamanho do texto
- Marca registrada: números grandes para dados objetivos

## 3. Noturno premium

Para barbearia masculina, academia, estúdio de som, bar, car detailing.

- Fundo `#0F0F11`, texto `#F4F4F5`, acento `#C8A24A`, apoio `#1C1C20`
- Display: Oswald ou Archivo (maiúsculas, espaçamento alargado)
- Corpo: Inter
- Raio 4 px, bordas de 1 px em `#2A2A30`
- Fotos grandes com camada escura por cima para contraste do texto
- Marca registrada: títulos em maiúsculas com linha fina abaixo
- Cuidado: texto corpo nunca abaixo de `#A1A1AA` sobre o fundo escuro

## 4. Solar vibrante

Para açaí, sorveteria, parque, escola infantil, turismo, festa.

- Fundo `#FFFDF6`, texto `#1F2937`, acento `#EA580C`, apoio `#FDE68A`
- Display: Nunito ou Baloo 2 · Corpo: Nunito Sans
- Raio 24 px, blocos de cor cheia, sem borda
- Seções alternando fundo claro e fundo de cor
- Composição centralizada, botões grandes e redondos
- Marca registrada: formas orgânicas em SVG no fundo das seções

## 5. Técnico direto

Para serralheria, assistência técnica, dedetizadora, transportadora, TI.

- Fundo `#F8FAFC`, texto `#0F172A`, acento `#0E7490`, apoio `#E2E8F0`
- Display e corpo: IBM Plex Sans
- Raio 6 px, linhas de 1 px, cantos vivos
- Informação em tabelas e listas; pouca foto, muito dado
- Telefone e WhatsApp visíveis no topo e no rodapé
- Marca registrada: faixa de atendimento ou área de cobertura destacada

## 6. Editorial calmo

Para psicólogo, nutricionista, yoga, consultoria, arquitetura.

- Fundo `#F7F6F3`, texto `#23221F`, acento `#4F6B57`, apoio `#DDE3DA`
- Display: Lora · Corpo: Source Sans 3
- Raio 2 px, praticamente sem borda; separação por espaço
- Coluna de texto estreita (máx. 65 caracteres por linha)
- Uma foto grande e tranquila; nada de colagem
- Marca registrada: frase de destaque em itálico, isolada numa seção

---

## Como escolher

1. O ramo aponta a direção (listas acima).
2. Se as referências do briefing contradizem, as referências ganham.
3. Se o campo `evitar` do briefing exclui a direção óbvia, pegue a
   segunda mais próxima.
4. Em dúvida entre duas, escolha a de maior contraste com o que os
   concorrentes citados no briefing usam.

## Proibido em qualquer direção

- Gradiente de três ou mais cores
- Card com borda colorida só à esquerda
- Emoji como ícone
- Sombra forte em todos os blocos
- Texto sobre foto sem camada de contraste
- Mais de duas famílias tipográficas
- Animação que não seja um `transition` curto em hover
