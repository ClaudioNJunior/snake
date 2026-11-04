# Snake

Jogo estático servido em https://snake.nastasi.dev/.

## Instalar

- Android/Chrome e PC/Chrome ou Edge: opção de instalar aplicativo no menu do navegador.
- iPhone/iPad: Compartilhar > Adicionar à Tela de Início.
- Safari no Mac: Arquivo > Adicionar ao Dock, quando disponível.

Depois do primeiro acesso com internet e da instalação do service worker, o jogo e sua fonte funcionam offline. A instalação final depende do navegador e da confirmação do usuário. A partida pausa ao sair da tela.

## Publicar e atualizar

Publique `snake.html` como a página inicial `/`, junto de `assets/`, `manifest.webmanifest`, `pwa.js` e `sw.js` na mesma raiz HTTPS. O service worker deve ser servido como JavaScript e o manifesto como JSON/webmanifest. A hospedagem já usa `/` para servir o jogo; `/snake.html` não é necessário em produção.

Ao mudar arquivos armazenados offline, incremente `CACHE_NAME` em `sw.js`. A atualização fica pronta para a próxima abertura depois que as janelas antigas do jogo forem fechadas. Não há atualização forçada no meio de uma partida.

A fonte Bytesized é distribuída sob SIL OFL 1.1; licença em `assets/bytesized-OFL.txt`.
