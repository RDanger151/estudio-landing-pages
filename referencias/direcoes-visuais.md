# Direções visuais

Seis direções. O agente escolhe **uma** por cliente, declara qual em uma
linha e registra em `clientes/<cliente>/DIRECAO.txt`. Nunca misturar
duas.

Estas direções são ponto de partida, não gabarito. Cada uma traz uma
**ideia estrutural** além da paleta — é a estrutura que diferencia as
páginas, não a cor. Se o briefing trouxe cores, fontes ou referências da
marca, elas substituem a paleta e a tipografia; a ideia estrutural
continua.

Antes de escrever CSS, leia a seção **Tells de IA** no fim deste arquivo
e invoque a skill `frontend-design`.

---

## 1. Ofício

Para padaria, cafeteria, cervejaria, marcenaria, floricultura.

- Ground `#2F3822` (oliva profundo), texto `#EDEAD9`, acentos
  `#C8A531` (mostarda) e `#8C9B6E` (verde seco)
- Display: Bricolage Grotesque ou Instrument Serif · Corpo: Inter
- Raios diferentes por função: 0 em faixas, 999 px em botões
- **Estrutura:** faixas horizontais de alturas desiguais, cada uma de
  uma cor da paleta. Cardápio ou lista de produtos como ledger: item à
  esquerda, régua pontilhada, preço à direita
- Sem sombra em nenhum elemento

## 2. Ficha técnica

Para clínica, dentista, advocacia, contabilidade, laboratório.

- Ground `#FFFFFF`, texto `#15202B`, acento `#1F4E79`, apoio `#DDE4EA`
- Display e corpo: Public Sans (ou Source Sans 3), pesos 600 e 400
- Raio 0 em tudo; separação por régua de 1 px `#C9D3DB`
- **Estrutura:** duas colunas assimétricas (38% / 62%), rótulo à
  esquerda e conteúdo à direita, como uma ficha. Serviços em tabela de
  verdade, não em cards. Nenhum card na página
- Sem sombra, sem ícone decorativo

## 3. Vitrine noturna

Para barbearia, academia, estúdio, bar, estética automotiva.

- Ground `#1A2432` (azul-ardósia escuro), texto `#E8E6E1`, acentos
  `#B08A4A` (latão) e `#C97E6D` (rosa queimado)
- Display: Anton ou Archivo Expanded · Corpo: Karla
- Raio 2 px; bordas `#2C3A4C`
- **Estrutura:** título sangrando nas duas margens no hero, conteúdo
  depois em medida estreita e centralizada (máx. 620 px). O contraste
  entre a largura total e a coluna estreita é o efeito
- Dois acentos, não um — um acento solitário sobre fundo escuro é tell
- Texto de corpo nunca abaixo de `#C9C6C0`

## 4. Mercado solar

Para açaí, sorveteria, lanchonete, parque, escola infantil, turismo.

- Ground `#FFFCF2`, texto `#2A2118`, acentos `#E05A2B` (laranja),
  `#F2B705` (amarelo) e `#4C7A5D` (verde)
- Display: Rubik ou Kumbh Sans · Corpo: Rubik
- Raios variados de propósito: 32 px em blocos grandes, 8 px em
  pequenos, 999 px em botões
- **Estrutura:** grade deslocada — blocos de larguras diferentes que não
  alinham na mesma coluna. Preços em numeral de display
- Nada de gradiente; as cores entram em áreas chapadas

## 5. Operação

Para serralheria, assistência técnica, dedetizadora, transportadora,
chaveiro, TI.

- Ground `#F4F6F7`, texto `#101820`, acento `#0B6E6E`, apoio `#D4DBDE`
- Display: Archivo Condensed · Corpo: Archivo
- Raio 4 px, cantos vivos, régua de 1 px
- **Estrutura:** a informação é o protagonista — tabela de serviços,
  área de cobertura e horário de atendimento ocupam o centro da página.
  Telefone e WhatsApp fixos no topo
- Sem monoespaçada em rótulos pequenos (é tell); use Archivo em peso 600

## 6. Consultório sereno

Para psicólogo, nutricionista, yoga, fisioterapia, arquitetura.

- Ground `#EDEFEA` (cinza-verde frio, não creme), texto `#23262A`,
  acentos `#44614F` e `#A8B2A0`
- Display: Newsreader · Corpo: Figtree
- Raio 0; nenhuma borda, separação só por espaço
- **Estrutura:** coluna única de 60 a 65 caracteres, centralizada, com
  muito espaço vertical. Uma única frase em tamanho de display isolada
  numa seção inteira
- Nenhum card, nenhuma grade de três colunas

---

## Como escolher

1. O ramo aponta a direção.
2. Referências do briefing ganham da lista.
3. Se o campo `evitar` do briefing exclui a direção óbvia, pegue a
   segunda mais próxima.
4. Entre duas, escolha a de maior contraste com os concorrentes citados.
5. Não repita a mesma direção em dois clientes do mesmo ramo na mesma
   cidade — confira os `DIRECAO.txt` existentes com `Grep`.

## Tells de IA — proibidos em qualquer direção

Estes são os padrões que fazem uma página parecer gerada. Valem acima da
direção escolhida.

**Paleta e composição**

- Fundo creme quente (perto de `#F4F1EA`) com serifada de alto contraste
  e acento terracota ou argila (perto de `#D97757`)
- Fundo quase preto com um único acento verde-ácido ou vermelhão
- Preto "amaciado" (`#0B0B0B`, `#111`) no lugar de preto de verdade
- Lavagem de gradiente como decoração
- Tudo picado em cards idênticos, mesmo raio em todos os elementos
  independente da hierarquia, e a mesma sombra cinza suave
  (`rgba(0,0,0,.1)`) embaixo de cada um
- Card com borda colorida só na lateral esquerda

**Tipografia**

- Destacar uma só palavra do título em itálico, negrito ou outra cor
- Rótulo em CAIXA ALTA com espaçamento alargado acima de cada seção
- Rótulo acima de conteúdo que já se explica
- `PALAVRA — fragmento` com travessão espaçado
- Metadados juntados por ponto médio (`A · B · C`)
- Monoespaçada em rótulos pequenos de dado
- `→` colado no fim de texto de link ou botão

**Estrutura e movimento**

- Marcadores numerados `01 / 02 / 03` em conteúdo que não é sequência
- Entrada com fade e subida em cada seção durante o scroll
- `transition` em hover de todos os cards
- Emoji como ícone
- Ícone de biblioteca repetido em cada bloco

**Cópia**

- "Qualidade e tradição", "Excelência em atendimento", "Soluções sob
  medida" e afins: adjetivo sem fato
- Mais de duas famílias tipográficas

Cada um desses pode ser legítimo se o briefing pediu. O problema é usá-lo
por falta de decisão. Gaste a ousadia em **um** lugar da página e deixe o
resto disciplinado.
