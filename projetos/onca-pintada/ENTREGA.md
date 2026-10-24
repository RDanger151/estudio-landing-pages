# Entrega — Onça-pintada

Página de demonstração, modo livre. Não representa nenhuma instituição,
projeto de conservação ou empresa, e não tem contato porque não há
negócio por trás. A marcação está no comentário do topo do HTML e no
rodapé da página.

Os dados sobre o animal são reais. Cada número da página sai de uma das
quatro fontes listadas no rodapé, consultadas em 24 de outubro de 2026.

## O que está na pasta

```
site/
  index.html        a página inteira, com o CSS embutido
  favicon.svg
  img/og.svg        imagem de compartilhamento, vetor
  img/og.png        a mesma, 1200x630, é esta que as redes leem
```

## Lacunas

Nenhum `[preencher]`. A página está completa.

Um ponto a saber: **a onça é um desenho vetorial, não uma fotografia.**
O agente não gera imagem. O SVG foi feito para este projeto e está
inline no HTML, posicionado para atravessar a borda entre o topo e a
seção da mordida.

Para trocar por uma foto real em PNG com fundo transparente, substitua o
bloco `<svg class="onca">` por:

```html
<img class="onca" src="img/onca.png" width="430" height="567"
     alt="Onça-pintada de frente, da cabeça ao peitoral">
```

O CSS da classe `.onca` já cuida do posicionamento e do comportamento no
celular, então nada mais precisa mudar. Use uma imagem de pelo menos
900 px de largura, com direitos de uso verificados.

## Como publicar

A pasta `site/` é estática: não precisa de servidor, banco nem build.

1. **Netlify Drop** — arraste a pasta `site/` em app.netlify.com/drop.
   Sai no ar em segundos, com https automático.
2. **Cloudflare Pages ou GitHub Pages** — aponte para a pasta `site/`.
3. **FTP** — suba o conteúdo de `site/` para a raiz do domínio.

Domínio: aponte um registro `A` ou `CNAME` conforme a hospedagem
indicar. Confirme que o endereço final abre em `https`.

## Antes de publicar, confira

- [ ] A página abre no celular sem rolagem lateral
- [ ] Os quatro links de fonte abrem em aba nova e funcionam
- [ ] A onça atravessa a borda entre as duas primeiras seções
- [ ] A imagem de compartilhamento aparece ao colar o link no WhatsApp
      (depende do caminho absoluto; veja abaixo)

## Ajuste pendente

`og:image` está como caminho relativo (`img/og.png`). Algumas redes
sociais exigem URL absoluta. Depois de definir o domínio, troque por:

```html
<meta property="og:image" content="https://SEUDOMINIO/img/og.png">
```

Adicione também `<meta property="og:url" content="https://SEUDOMINIO/">`.

## Sem rastreamento

A página não tem Analytics, pixel, cookie nem formulário. Não coleta
dado de ninguém, e por isso não precisa de política de privacidade nem
de aviso de cookies. Se algum desses for adicionado depois, as duas
coisas passam a ser obrigatórias.
