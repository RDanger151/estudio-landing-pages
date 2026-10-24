# Estúdio de Landing Pages

Gera landing pages estáticas para clientes a partir do formulário de
briefing preenchido. Uma pasta por cliente.

## O ciclo

Dois modos de entrada, um comando cada.

**Modo cliente** — negócio real, a partir do formulário preenchido:

```
cria a landing do cliente padaria-sol a partir de clientes/padaria-sol/formulario.pdf
```

**Modo livre** — tema solto, sem cliente:

```
faz uma landing page de uma clínica veterinária de bairro
```

O que acontece nos dois: a skill `criar-landing` monta o `briefing.md`
(lendo o formulário, ou inventando a marca e o conteúdo no modo livre),
escolhe uma direção visual com a skill `frontend-design`, monta o
`index.html`, chama o subagente `revisor-landing` e gera o `ENTREGA.md`.
Você revisa o resultado, não o processo.

A diferença entre os modos é só o que pode ser inventado. Modo cliente
não inventa nada e usa `[preencher]`; modo livre inventa tudo, com marca
de invenção própria, contato fictício e marcação de demonstração.

## Estrutura

```
clientes/<cliente>/
  formulario.pdf     # o formulário que o cliente devolveu
  briefing.md         # gerado pelo agente a partir do formulário
  assets/             # fotos e logo originais
  site/
    index.html        # a página (arquivo único)
    img/              # imagens otimizadas
    favicon.svg
    privacidade.html  # só se houver formulário, Analytics ou pixel
    _headers          # CSP, só vale em Netlify/Cloudflare
  DIRECAO.txt         # direção visual usada
  ENTREGA.md          # instruções de publicação para o cliente

projetos/<nome>/        # modo livre: mesma estrutura, sem formulario.pdf
                        # fica versionado (marca e conteúdo fictícios)

referencias/{direcoes-visuais.md,sem-fotos.md,formulario-cliente.md}
.claude/skills/criar-landing/{SKILL.md,checklist-entrega.md}
.claude/agents/revisor-landing.md
```

## Comandos

- Prévia: `npx serve clientes/<cliente>/site`
- Imagens: `node scripts/otimizar-imagens.js clientes/<cliente>`
- Links: `npx linkinator clientes/<cliente>/site/index.html`

## Stack

HTML único, CSS embutido, JavaScript só quando indispensável. Sem
framework, sem build, sem CDN. O cliente precisa abrir o `index.html`
com duplo clique e subir a pasta em qualquer hospedagem estática.

## Regras invioláveis

1. **Nunca inventar conteúdo.** Dado ausente vira `[preencher: campo]`.
   Proibido criar depoimento, preço, nota, nº de clientes, anos de
   mercado, prêmio ou fornecedor.
2. **Nunca inventar imagem.** Foto que vem depois: bloco rotulado
   `[foto: descrição]`. Cliente que não quer foto: página desenhada sem
   imagem, por `referencias/sem-fotos.md`, sem retângulo cinza. Banco de
   imagens só com autorização escrita no briefing.
3. **Nada de rastreamento por padrão.** Analytics, pixel e cookies só se
   o briefing marcou; nesse caso a página ganha `privacidade.html` e
   aviso de cookies com aceite.
4. **Formulário só por serviço externo.** Nunca escrever backend.
5. **Sem segredo no repositório.** Nenhuma senha, chave ou acesso de FTP
   versionado.
6. **Cada página é visualmente distinta.** Uma direção de
   `referencias/direcoes-visuais.md` por cliente, registrada em
   `DIRECAO.txt`. Repetir layout entre clientes é defeito.
7. **Quem constrói não revisa.** A aprovação final é do subagente
   `revisor-landing`.
8. **Nada com cara de IA.** A skill `frontend-design` é invocada antes de
   escrever CSS, e os tells listados em `referencias/direcoes-visuais.md`
   são proibidos a menos que o briefing os peça.

## Economia de contexto

Importa tanto quanto a qualidade: sessão longa é sessão caríssima.

- Cada arquivo é lido uma vez. Não releia o que você mesmo escreveu.
- Escreva o `index.html` completo de uma vez, não seção por seção.
- Nada de screenshot, navegador, build, Playwright ou servidor de
  prévia. A conferência é do checklist, por leitura.
- Não imprima conteúdo de arquivo no chat. Relate caminhos e resultados.
- No chat: só a lista de `[preencher]`, a direção escolhida, o veredito
  do revisor e o caminho da pasta.
- `Grep` e `Glob` antes de `Read` quando procurar algo em arquivo grande.
- Uma única chamada ao subagente revisor por rodada.
- Correção pedida pelo usuário: `Edit` pontual, nunca reescrever o
  arquivo inteiro.

## Convenções de código

- HTML semântico; `lang="pt-BR"`; um único `<h1>`
- `<button>` e `<a href>` reais, nunca `onClick` em `div`
- Toda imagem com `alt`, `width`, `height`
- Contraste 4.5:1; área de toque 44 px
- Mobile primeiro: funciona em 360 px sem rolagem horizontal
- Espaçamento em múltiplos de 4 px
- Fontes via Google Fonts com `display=swap`, no máximo duas famílias

## Fora do escopo

Loja virtual, login, agendamento, CMS, blog, múltiplos idiomas. Se o
briefing pedir, avise que é outro projeto.
