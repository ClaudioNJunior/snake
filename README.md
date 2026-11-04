# Snake

Esse jogo começou como uma prova de conceito para testar como funcionaria um grid em um jogo da cobrinha: desenhar as células, movimentar a cobra e lidar com as colisões.

Foi feito com HTML, CSS e JavaScript puro, com visual inspirado nos jogos de celulares antigos. Algumas partes do código tiveram assistência de IA durante o desenvolvimento.

[Jogar em snake.nastasi.dev](https://snake.nastasi.dev/)

## Controles

- **Mover:** setas ou WASD no teclado; deslizar o dedo na tela no celular.
- **Pausar:** espaço ou P.
- **Reiniciar:** R.
- **Dificuldade:** teclas de 1 a 5 ou os botões na tela.

Os atalhos de pausa e reinício na tela também podem ser tocados ou clicados.

## Instalar

O jogo pode ser instalado como PWA pelo menu do navegador. No iPhone e iPad, use **Compartilhar > Adicionar à Tela de Início**. A opção disponível depende do navegador.

Depois do primeiro acesso com internet e do armazenamento dos arquivos, também funciona offline.

## Código

O jogo está em `snake.html`. Não tem backend nem etapa de build.

Para publicar, sirva esse arquivo como a página inicial `/`, junto de `assets/`, `manifest.webmanifest`, `pwa.js` e `sw.js`, em HTTPS. Ao alterar arquivos armazenados offline, incremente `CACHE_NAME` em `sw.js`.

A fonte [Bytesized](https://fonts.google.com/specimen/Bytesized) usa a licença SIL OFL 1.1, disponível em [`assets/bytesized-OFL.txt`](assets/bytesized-OFL.txt).
