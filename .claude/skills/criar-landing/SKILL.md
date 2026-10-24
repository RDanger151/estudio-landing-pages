---
name: criar-landing
description: Do formulário do cliente até a landing page pronta. Use quando o usuário pedir para criar, gerar ou refazer a landing page de um cliente, ou apontar para um formulário ou briefing preenchido.
---

# Criar landing page

Três fases, em sequência, numa única sessão. Não pergunte permissão
entre as fases; apenas execute e relate em uma linha ao final de cada.

Duas entradas servem: o formulário de um cliente real (modo `cliente`,
pasta `clientes/`) ou um pedido solto do usuário sobre qualquer tema
(modo `livre`, pasta `projetos/`). O modo muda o que pode ser inventado;
tudo o mais é igual. Onde este arquivo diz `clientes/<cliente>/`, leia
`projetos/<nome>/` no modo livre.

Economia: cada arquivo é lido **uma vez**. Não releia o que você acabou
de escrever, não tire screenshot, não abra navegador, não rode build, não
imprima o conteúdo dos arquivos no chat. A revisão é do subagente, não
sua.

## Fase 1 — Entrada → briefing

### 1.0 Identifique o modo

Duas entradas possíveis. A diferença decide se inventar é proibido ou
esperado, então classifique antes de qualquer coisa.

**Modo `cliente`** — há um negócio real por trás. Sinais: formulário
preenchido em PDF, DOCX ou texto; o usuário nomeia um cliente; dados de
contato reais; pasta em `clientes/`.

**Modo `livre`** — não há cliente real. Sinais: um pedido solto no chat
("faz uma landing de petshop", "quero um site sobre adoção de animais"),
um tema sem negócio nomeado, ou o usuário diz que é teste, estudo, demo
ou portfólio. Pasta em `projetos/`.

Em caso de dúvida, pergunte em uma linha: "isso é para um cliente real ou
é projeto seu?". Grave a resposta no campo `modo` do briefing.

### 1.1 Modo cliente

1. Leia o formulário uma vez. Em PDF ou DOCX, use `Read` direto.
2. Escreva `clientes/<cliente>/briefing.md` no formato de
   `clientes/exemplo-cafeteria/briefing.md`: as dez seções, os mesmos
   nomes de campo, `modo: cliente`.
3. Campo em branco vira `[preencher]`. **Nunca** complete por dedução,
   nem o bairro, nem o horário "provável", nem o preço de mercado.
4. Normalize só o que é mecânico:
   - WhatsApp → só dígitos, começando em `55`
   - preços → `R$ 0,00`
   - horários → `Seg a Sex, 8h às 18h`
5. Imprima no chat **apenas** a lista de campos `[preencher]`, uma linha
   cada.

Se faltar algo que muda a estrutura — nenhum serviço, nenhum contato,
nenhuma seção marcada — pare e pergunte. Lacuna de detalhe não
interrompe.

### 1.2 Modo livre

Aqui você é o cliente e o redator. Preencha o briefing inteiro,
inventando o que falta, de forma coerente.

1. A partir do pedido, decida e registre: nome fictício do negócio, ramo,
   cidade, público, diferencial, tom de voz. Um negócio concreto, não uma
   categoria — "Pelo & Casco, clínica veterinária de bairro em Olinda",
   não "petshop genérico".
2. Escreva `projetos/<nome>/briefing.md` no mesmo formato, com
   `modo: livre`. Preencha as dez seções: serviços com preços
   plausíveis, FAQ, história, motivos, horários, formas de pagamento.
3. Decida o estado das fotos: sem imagens fornecidas, trate como **não
   vai ter foto** e desenhe sem imagem (fase 2.1), a menos que o usuário
   diga que vai mandar.
4. Três regras que valem sempre no modo livre:
   - **Marca fictícia de invenção própria.** Nunca o nome, logo, cores
     ou textos de um negócio real existente.
   - **Contato visivelmente fictício:** `(00) 00000-0000`, endereço
     `Rua Exemplo, 100`, `@exemplo`. Nunca um telefone, CNPJ ou endereço
     que possa ser de alguém de verdade.
   - **Marcar como demonstração:** comentário no topo do HTML e uma
     linha no `ENTREGA.md` dizendo que a marca e o conteúdo são
     fictícios.
5. Imprima no chat, em até cinco linhas, o que você decidiu: nome, ramo,
   cidade, público e o ângulo da página. Se o usuário tiver pedido algo
   específico (tom, seções, paleta), confirme que entrou.

Nada de `[preencher]` no modo livre: se você inventou a marca, invente o
resto também. Pergunte apenas se o pedido for contraditório.

### 1.3 Briefing já pronto

Se o usuário apontar um `briefing.md` já preenchido, leia o campo `modo`
e vá direto para a fase 2.

## Fase 2 — Briefing → página

### 2.1 Decida o estado das fotos

Antes de qualquer coisa, classifique (detalhes em
`referencias/sem-fotos.md`):

- **vai ter foto** — arquivos em `assets/`
- **foto vem depois** — o cliente disse que envia; use bloco rotulado
  `[foto: descrição]` nas medidas finais
- **não vai ter foto** — o cliente marcou que não quer, ou não tem e não
  vai ter

No terceiro caso, **leia `referencias/sem-fotos.md`** e desenhe uma
página que não pede imagem: tipografia como elemento gráfico, campos de
cor, desenho em SVG próprio, cardápio ou tabela como protagonista. Nenhum
retângulo cinza, nenhum espaço reservado, nenhuma foto de banco sem
autorização escrita. A página está completa e o `ENTREGA.md` não lista
foto como pendência.

### 2.2 Direção visual, em dois passos

1. Leia `referencias/direcoes-visuais.md`, inclusive a seção **Tells de
   IA**, e escolha **uma** direção pelo ramo. Confira os `DIRECAO.txt`
   existentes com `Grep` para não repetir a direção em outro cliente do
   mesmo ramo.
2. **Invoque a skill `frontend-design`** e siga o processo dela.
3. Escreva um plano curto (nas suas linhas de trabalho, não no chat e
   não em arquivo): paleta de 4 a 6 hex nomeados, as tipografias e seus
   papéis, o conceito de layout em uma frase, e o que será o elemento
   memorável da página.
4. Revise o plano contra o briefing: se alguma parte dele é o que você
   produziria para qualquer negócio do mesmo ramo, troque essa parte.
   Gaste a ousadia em um lugar só e mantenha o resto disciplinado.
5. Grave a direção em `clientes/<cliente>/DIRECAO.txt` e declare em uma
   linha no chat.

### 2.3 Construa

1. Se houver fotos, otimize `assets/` para `site/img/`: WebP, máximo
   1600 px de largura, qualidade 80. Um comando, não um script.
2. Escreva `clientes/<cliente>/site/index.html` **de uma vez**, completo.
   CSS em `<style>` no `<head>`. Sem framework, sem CDN, sem build.
3. Atenção à especificidade dos seletores: classes de seção e de
   elemento se anulam com facilidade em `padding` e `margin`.

### Seções, na ordem (só as marcadas no briefing)

`header` → `hero` → serviços → sobre → galeria → depoimentos → FAQ
(`<details>`) → visite → `footer` → botão flutuante de WhatsApp.

### Obrigatório

```html
<html lang="pt-BR">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="referrer" content="strict-origin-when-cross-origin">
<title>Negócio — atividade, cidade</title>
<meta name="description" content="Até 155 caracteres, com a cidade.">
<meta property="og:title"><meta property="og:description">
<meta property="og:image" content="img/og.jpg"><meta property="og:type" content="website">
<link rel="icon" href="favicon.svg">
```

Mais `application/ld+json` com `LocalBusiness` quando houver endereço e
horários.

- WhatsApp: `https://wa.me/55DDDNUMERO?text=<mensagem percent-encoded>`
- Todo link externo: `target="_blank" rel="noopener noreferrer"`
- Toda `<img>`: `alt`, `width`, `height`; `loading="lazy"` fora do hero;
  `fetchpriority="high"` no hero
- `<button>` e `<a href>` reais; nunca `onClick` em `div`
- Contraste 4.5:1; área de toque 44 px; sem rolagem horizontal em 360 px
- Um único `<h1>`

### Nunca

- **Modo cliente:** inventar depoimento, preço, nota, nº de clientes,
  tempo de mercado, prêmio ou fornecedor. Sem dado →
  `[preencher: <campo>]` visível.
- **Modo livre:** usar o nome, a marca, as cores ou os textos de um
  negócio real; pôr contato que possa ser de alguém de verdade; omitir a
  marcação de que é demonstração.
- Inventar imagem, ou usar banco de imagens sem autorização escrita no
  briefing. Foto que vem depois → bloco rotulado `[foto: descrição]`;
  cliente que não quer foto → página desenhada sem imagem (2.1).
- Qualquer tell da seção **Tells de IA** de `direcoes-visuais.md` que o
  briefing não tenha pedido.
- Analytics, pixel, cookie ou formulário que o briefing não marcou.
- Escrever backend. Formulário autorizado vai para serviço externo
  (Formspree, Google Forms, Netlify Forms) com `<label>`, `required` e
  campo honeypot.
- Chave, senha ou acesso de hospedagem dentro do projeto.

Se o briefing marcou formulário, Analytics ou pixel: gere também
`site/privacidade.html` e um aviso de cookies que só dispara o script
após o aceite, linkado no rodapé. Gere `site/_headers` com CSP
restritiva e anote no `ENTREGA.md` que ele só vale em Netlify e
Cloudflare Pages.

## Fase 3 — Revisão e entrega

1. Chame o subagente `revisor-landing` passando a pasta do cliente.
   Uma chamada, sem contexto extra.
2. Corrija **todos os bloqueantes** que ele apontar. Ajustes: corrija os
   de uma linha; os demais vão para o `ENTREGA.md`.
3. Se ele reprovar duas vezes seguidas, pare e relate ao usuário o que
   não conseguiu resolver.
4. Escreva `clientes/<cliente>/ENTREGA.md`:
   - lacunas `[preencher]` que sobraram, por seção
   - como publicar: arrastar a pasta `site/` no Netlify Drop, subir por
     FTP, ou `git push` para o GitHub Pages
   - como apontar o domínio (registro de A ou CNAME)
   - conferir que o endereço final abre em `https`
   - o que o cliente deve testar antes de aprovar
   - ajustes pendentes do revisor
5. Encerre com, no máximo, cinco linhas no chat: direção visual
   escolhida, veredito do revisor, quantas lacunas sobraram, caminho da
   pasta. Nada de resumo da página.

Hospedagem e domínio são do cliente. Não crie conta no nome dele nem
assuma custo recorrente.
