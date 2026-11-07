# Diário de bordo: página de Notícias

**Data:** 04/11/2026
**Arquivo:** `noticias.html`

## O que foi feito
1. Partindo do arquivo original da página (vitrine em destaque, 5 cards com ilustração e 6 matérias completas), mantive o mesmo layout, estrutura e conteúdo.
2. Troquei todas as cores pela paleta do grupo (README do repositório `aleezin1/grupo-exito-condominios`), usando variáveis CSS no `:root`: navy, ciano elétrico, teal, ciano suave, fundos, bordas e textos.
3. Recolori também as ilustrações (SVG embutidas) para combinar com a paleta.
4. A página é só o conteúdo de notícias, sem header, menu e rodapé do site. O responsável vai encaixá-la no site depois.
5. A troca entre a lista e as matérias funciona sem JavaScript (radio + label + seletor `:checked`).

## Pendências / decisões
- Sem header, nav e footer porque serão os do site (compartilhados pelo grupo).
- "Ver notícias mais antigas" não é link (não existe página de destino).
- Imagens embutidas no HTML (base64): não há arquivos de imagem para renomear.
- Segundo o README, os textos e as notícias do projeto são fictícios.

## Aprendizados
- Variáveis CSS (`--ciano-eletrico`) permitem mudar a cor do site em um só lugar.
- O truque do `<input type="radio">` + `<label for>` + `:checked ~` troca de tela só com CSS.
- `article` marca conteúdo independente (cada notícia); `section` agrupa partes da página.
