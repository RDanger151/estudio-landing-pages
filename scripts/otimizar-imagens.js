#!/usr/bin/env node
/**
 * Otimiza as imagens de um cliente.
 *
 *   node scripts/otimizar-imagens.js clientes/padaria-sol
 *
 * Lê clientes/<cliente>/assets/ e escreve clientes/<cliente>/site/img/
 * em WebP, no máximo 1600 px de largura, qualidade 80. Mantém um JPG de
 * fallback para cada arquivo.
 *
 * Requer: npm install sharp
 */

const fs = require('fs');
const path = require('path');

const LARGURA_MAX = 1600;
const QUALIDADE = 80;
const EXTENSOES = ['.jpg', '.jpeg', '.png', '.webp', '.tif', '.tiff'];

const pastaCliente = process.argv[2];

if (!pastaCliente) {
  console.error('Uso: node scripts/otimizar-imagens.js clientes/<cliente>');
  process.exit(1);
}

let sharp;
try {
  sharp = require('sharp');
} catch {
  console.error('sharp não encontrado. Rode: npm install sharp');
  process.exit(1);
}

const entrada = path.join(pastaCliente, 'assets');
const saida = path.join(pastaCliente, 'site', 'img');

if (!fs.existsSync(entrada)) {
  console.error(`Pasta não encontrada: ${entrada}`);
  process.exit(1);
}

fs.mkdirSync(saida, { recursive: true });

const arquivos = fs
  .readdirSync(entrada)
  .filter((f) => EXTENSOES.includes(path.extname(f).toLowerCase()));

if (arquivos.length === 0) {
  console.log(`Nenhuma imagem em ${entrada}.`);
  process.exit(0);
}

const slug = (nome) =>
  path
    .basename(nome, path.extname(nome))
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

(async () => {
  for (const arquivo of arquivos) {
    const origem = path.join(entrada, arquivo);
    const nome = slug(arquivo);

    const base = sharp(origem).rotate().resize({
      width: LARGURA_MAX,
      withoutEnlargement: true,
    });

    const { width, height } = await base
      .clone()
      .webp({ quality: QUALIDADE })
      .toFile(path.join(saida, `${nome}.webp`));

    await base
      .clone()
      .jpeg({ quality: QUALIDADE, mozjpeg: true })
      .toFile(path.join(saida, `${nome}.jpg`));

    console.log(`${arquivo} -> ${nome}.webp (${width}x${height}) + .jpg`);
  }

  console.log(`\n${arquivos.length} imagem(ns) em ${saida}`);
  console.log('Use os atributos width e height exibidos acima no HTML.');
})().catch((erro) => {
  console.error(erro.message);
  process.exit(1);
});
