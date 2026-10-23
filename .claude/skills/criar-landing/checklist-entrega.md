# Checklist de entrega

Rodar inteiro antes de dizer que a página está pronta. Item em aberto
significa não entregue.

## Conteúdo

- [ ] Nenhum `[preencher]` esquecido sem estar listado no `ENTREGA.md`
- [ ] Nenhum texto de exemplo (lorem ipsum, "Nome da Empresa")
- [ ] Nenhum dado inventado: depoimento, preço, nota, nº de clientes
- [ ] Nome do negócio escrito igual em todos os lugares
- [ ] Ano do rodapé é o ano corrente
- [ ] Textos em português do Brasil, sem erro de digitação

## Links e contato

- [ ] Link do WhatsApp abre no número certo, só dígitos, com 55
- [ ] Mensagem pré-preenchida do WhatsApp está percent-encoded
- [ ] Link do Maps abre o local correto
- [ ] Links de rede social abrem o perfil certo
- [ ] Todo link externo tem `target="_blank"` e `rel="noopener noreferrer"`
- [ ] Nenhum link quebrado ou âncora apontando para id inexistente

## Acessibilidade

- [ ] `lang="pt-BR"` no `<html>`
- [ ] Um único `<h1>`, hierarquia de headings sem pular nível
- [ ] Toda `<img>` com `alt` descritivo (decorativa: `alt=""`)
- [ ] SVG decorativo com `aria-hidden="true"`; informativo com `role="img"` e `aria-label`
- [ ] Botão só com ícone tem `aria-label`
- [ ] Contraste de texto 4.5:1 (3:1 para texto de 24 px ou mais)
- [ ] Navegação por Tab alcança todos os botões e links, com foco visível
- [ ] Área de toque mínima de 44 px
- [ ] Nenhuma informação transmitida apenas por cor

## Responsivo

- [ ] Sem rolagem horizontal em 360 px
- [ ] Menu, grades e botões reorganizam no celular
- [ ] Tabela larga dentro de caixa com `overflow-x: auto`
- [ ] Fonte do corpo com no mínimo 16 px no celular
- [ ] Testado em 360, 768 e 1440 px

## Performance

- [ ] Imagens em WebP, no máximo 1600 px de largura
- [ ] Total da pasta abaixo de 2 MB
- [ ] `width` e `height` em toda imagem (evita salto de layout)
- [ ] `loading="lazy"` fora do hero, `fetchpriority="high"` no hero
- [ ] Nenhuma biblioteca via CDN
- [ ] Nenhuma fonte carregada sem uso

## SEO

- [ ] `<title>` com negócio, atividade e cidade, até 60 caracteres
- [ ] `<meta name="description">` até 155 caracteres
- [ ] Open Graph com título, descrição e imagem
- [ ] Favicon presente
- [ ] JSON-LD `LocalBusiness` quando há endereço e horário

## Segurança e privacidade

- [ ] Nenhuma chave, senha ou acesso dentro dos arquivos
- [ ] Nenhum script de terceiro não autorizado no briefing
- [ ] Sem Analytics ou pixel se o briefing não pediu
- [ ] Com formulário, Analytics ou pixel: `privacidade.html` existe e
      está linkada no rodapé
- [ ] Aviso de cookies só libera o script após aceite
- [ ] Formulário aponta para serviço externo, com honeypot e `<label>`
- [ ] Nenhum dado pessoal de cliente final no código
- [ ] `_headers` com CSP gerado, se a hospedagem suportar

## Entrega

- [ ] `index.html` abre com duplo clique, sem servidor
- [ ] Nenhum caminho absoluto de disco no HTML
- [ ] `ENTREGA.md` com lacunas, passos de publicação e o que testar
- [ ] Nada que exija pagamento recorrente feito em nome do prestador
