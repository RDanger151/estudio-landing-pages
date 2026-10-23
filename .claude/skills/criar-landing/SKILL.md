---
name: criar-landing
description: Do formulário do cliente até a landing page pronta. Use quando o usuário pedir para criar, gerar ou refazer a landing page de um cliente, ou apontar para um formulário ou briefing preenchido.
---

# Criar landing page

Três fases, em sequência, numa única sessão. Não pergunte permissão
entre as fases; apenas execute e relate em uma linha ao final de cada.

Economia: cada arquivo é lido **uma vez**. Não releia o que você acabou
de escrever, não tire screenshot, não abra navegador, não rode build, não
imprima o conteúdo dos arquivos no chat. A revisão é do subagente, não
sua.

## Fase 1 — Formulário → briefing

Entrada possível: PDF, DOCX, texto colado no chat, ou um
`briefing.md` já preenchido (nesse caso pule para a fase 2).

1. Leia o formulário uma vez. Em PDF ou DOCX, use `Read` direto.
2. Escreva `clientes/<cliente>/briefing.md` seguindo exatamente o
   formato de `clientes/exemplo-cafeteria/briefing.md`: as dez seções,
   os mesmos nomes de campo.
3. Campo que o cliente deixou em branco vira `[preencher]`. Nunca
   complete por dedução, nem o nome do bairro, nem o horário "provável".
4. Normalize só o que é mecânico:
   - WhatsApp → só dígitos, começando em `55`
   - preços → `R$ 0,00`
   - horários → `Seg a Sex, 8h às 18h`
5. Imprima no chat **apenas** a lista de campos que ficaram
   `[preencher]`, uma linha cada. Nada mais.

Se faltar algo que muda a estrutura da página — nenhum serviço listado,
nenhum contato, nenhuma seção marcada — pare e pergunte. Lacuna de
detalhe não interrompe.

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

- Inventar depoimento, preço, nota, nº de clientes, tempo de mercado,
  prêmio ou fornecedor. Sem dado → `[preencher: <campo>]` visível.
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
