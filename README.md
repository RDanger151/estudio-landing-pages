# Estúdio de Landing Pages

Agente para Claude Code que transforma um formulário de briefing
preenchido em uma landing page estática pronta para entrega.

Um comando por cliente:

```bash
cria a landing do cliente padaria-sol a partir de clientes/padaria-sol/formulario.pdf
```

O agente lê o formulário, escreve o briefing estruturado, escolhe uma
direção visual, monta a página, chama um subagente revisor e gera as
instruções de publicação.

## O que tem aqui

| Arquivo | Papel |
|---|---|
| `CLAUDE.md` | contexto do projeto, regras invioláveis e economia de contexto |
| `.claude/skills/criar-landing/SKILL.md` | as três fases: formulário → briefing → página |
| `.claude/skills/criar-landing/checklist-entrega.md` | checklist de qualidade, acessibilidade, SEO e segurança |
| `.claude/agents/revisor-landing.md` | subagente que revisa sem ter participado da construção |
| `referencias/direcoes-visuais.md` | seis direções visuais com paleta, tipografia e forma |
| `clientes/exemplo-cafeteria/briefing.md` | formato que o agente gera e consome |

## Como usar

1. Clone o repositório e abra o Claude Code na raiz.

   ```bash
   git clone https://github.com/<usuario>/estudio-landing-pages.git
   cd estudio-landing-pages
   claude
   ```

2. Crie a pasta do cliente e coloque o formulário preenchido e as fotos.

   ```
   clientes/padaria-sol/
     formulario.pdf
     assets/          # fotos e logo
   ```

3. Peça a página. O agente devolve `clientes/padaria-sol/site/` pronto,
   mais um `ENTREGA.md` com as instruções de publicação e a lista do que
   ficou faltando.

4. Entregue a pasta `site/` ao cliente. É HTML estático: abre com duplo
   clique e sobe em qualquer hospedagem.

## O formulário do cliente

O repositório traz o formato que o agente consome
(`clientes/exemplo-cafeteria/briefing.md`). O formulário que vai ao
cliente cobre nove blocos: dados do negócio, objetivo da página, contato
e conversão, conteúdo e textos, identidade visual e fotos, estrutura das
seções, domínio e hospedagem, rastreamento e LGPD, prazos e condições.

## Princípios

- **Nada inventado.** Dado ausente aparece como `[preencher: campo]` na
  página. O agente não cria depoimento, preço, nota, número de clientes
  nem tempo de mercado.
- **Sem rastreamento por padrão.** Analytics, pixel e cookies só entram
  se o briefing autorizou; nesse caso a página ganha política de
  privacidade e aviso de cookies com aceite.
- **Sem backend.** Formulário autorizado vai para serviço externo. Nada
  de servidor para manter.
- **Quem constrói não revisa.** A aprovação é de um subagente que vê
  apenas o resultado final, o briefing e o checklist.
- **Cada cliente com visual próprio.** Uma direção por cliente,
  registrada em `DIRECAO.txt`, para as páginas não saírem iguais.
- **Hospedagem e domínio são do cliente**, no CPF ou CNPJ dele. O
  serviço é a criação da página.

## Stack

HTML único com CSS embutido. Sem framework, sem build, sem CDN. A saída
é uma pasta que funciona em qualquer hospedagem estática: Netlify,
Cloudflare Pages, GitHub Pages, ou FTP comum.

## Requisitos

- [Claude Code](https://claude.com/claude-code)
- Node.js 18 ou superior, apenas para otimizar imagens

## Licença

MIT. Veja [LICENSE](LICENSE).
