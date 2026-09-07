# ECAPX — Product Studio

Primeira versão visual em Next.js App Router, TypeScript strict e Tailwind CSS 4.

## Executar

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

`npm run build` gera uma exportação estática em `out/`. O desenvolvimento roda em http://localhost:3000. Não há CMS, banco, autenticação, painel, coleta de dados ou formulários.

## Estrutura

- `src/app`: layout compartilhado, Home, 404, estilos e metadados.
- `src/components`: marca provisória, header, footer e apresentação de produtos.
- `src/data/site.ts`: navegação, produtos e processo em dados locais tipados.
- `public/fonts`: arquivos oficiais Chillax, Poppins e PT Mono Bold, carregados com `next/font/local`.
- `public/brand`: PNGs originais do logo ECAPX e do Wing X, sem alteração dos arquivos de origem.

## Direção

“Da complexidade ao movimento”: abertura tipográfica, X geométrico, portfólio assimétrico, alternância entre preto e branco e capítulo laranja dedicado à conexão com a XPACE. Motion curto, sem scroll artificial e com respeito a `prefers-reduced-motion`. Conteúdo em Server Components; somente a navegação mobile requer um pequeno componente cliente para fechamento e Escape.

## Pendências editoriais e de marca

Os arquivos oficiais de identidade foram fornecidos depois da primeira revisão. A versão atual usa Chillax em títulos maiúsculos, PT Mono Bold em detalhes maiúsculos e Poppins no corpo. A paleta principal é preto #000000, branco #FFFFFF e laranja #FF5200; os tons secundários remetem ao roxo #6324B2 e rosa #EB00BC.

O Wing X e o lettering vêm dos PNGs oficiais. O CSS enquadra suas margens transparentes sem deformar o desenho. O logo sobre preto usa lettering branco e mantém o Wing X laranja; sobre laranja, usa versão monocromática preta para contraste. A animação repete o símbolo original em camadas com deslocamento e opacidade. Os arquivos `/docs` continuam não disponíveis.

Os dois produtos são reais e seus links foram informados pelo solicitante. A descrição da XTAGE foi baseada em https://www.xtage.app/. A página da XPACEBox não pôde ser inspecionada; por isso seu texto apenas a identifica como integrante do portfólio. Não há funcionalidades, métricas ou resultados inventados. As apresentações gráficas dos cards são composições editoriais, não capturas dos aplicativos ou interfaces prometidas.

Repositório informado pelo usuário: https://github.com/jonathanfferreira/ecapx.

Não foi fornecido um contato institucional: nenhum email ou WhatsApp foi inventado. CTAs conduzem ao portfólio e aos sites dos produtos. Incluir um canal real em etapa posterior.

A versão de revisão tem `noindex, nofollow`. Para o lançamento, validar conteúdo, identidade, links, domínio e atualizar metadados de indexação.

## Verificação de interface

Com o site rodando e Chrome instalado, execute `npm run verify`. A auditoria Playwright + axe verifica larguras de 320, 390, 768, 1024 e 1440 px, fontes carregadas, imagens, menu por teclado, acordeão, redução de movimento, links de portfólio e ampliação de texto. Os relatórios e capturas ficam em `verification/`, ignorada pelo Git. `ECAPX_URL` permite apontar para outro endereço local.

Para revisar o build estático: `npm run build` e `npm start`.
