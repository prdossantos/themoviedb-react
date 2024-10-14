# The Movie Database (TMDb) - React Project

## Project Overview

Este projeto foi criado com o objetivo principal de testar a integração e o desempenho do **Vite**, **React** e **Tailwind CSS** em um ambiente real de desenvolvimento. Para realizar esses testes, utilizamos a API do The Movie Database (TMDb) para fornecer dados de filmes, permitindo que os usuários explorem uma lista de filmes populares e visualizem detalhes específicos de cada um.

A escolha da API de filmes oferece um caso de uso prático para avaliar a eficiência do Vite como bundler e a flexibilidade do Tailwind CSS para estilização responsiva e personalizada. Com isso, conseguimos explorar as capacidades dessas ferramentas em um projeto funcional, facilitando a análise de desempenho e a experiência de desenvolvimento com essas tecnologias.

### Versão

**Versão atual:** 0.0.0

## Estrutura do Projeto

- **Public**: Contém arquivos públicos e assets estáticos.
- **Src**: Contém o código principal do projeto.
  - **assets**: Ícones e outros assets gráficos.
  - **components**: Componentes reutilizáveis como `MovieCard` e `MovieList`, que seguem o padrão de Atomic Design.
  - **pages**: Páginas principais, incluindo `Home` e `MovieDetails`.
  - **store**: Gerenciamento de estado usando Jotai e armazenamento em cache.
  - **styles**: Arquivos de estilo, incluindo o principal `index.css`.
  - **setupTests.ts**: Configuração de ambiente para testes.

## Configuração Inicial

1. **Copiar o Arquivo `.env`**:

   - Duplique o arquivo `.env.example` e renomeie-o para `.env`.
   - No arquivo `.env`, adicione a chave da API do TMDb (The Movie Database) fornecida por sua conta TMDb.

   Exemplo:

   ```plaintext
   VITE_TMDB_API_KEY=YOUR_API_KEY
   VITE_TMDB_API_URL=https://api.themoviedb.org/3
   ```

## Como Executar o Projeto

1. **Instale as dependências**:
   ```bash
   npm install
   ```
2. **Execute o projeto em desenvolvimento:**:
   ```bash
   npm run dev
   ```
3. **Executar testes:**:
   ```bash
   npm run test
   ```

## Cache de Dados

Para otimizar o carregamento e reduzir requisições redundantes à API, o projeto utiliza um sistema de cache gerenciado com átomos do **Jotai**.

1. **Cache de Lista de Filmes**:

   - Armazenado no `moviesCacheAtom`, este cache salva os dados de cada página de listagem de filmes.
   - Evita novas requisições para páginas já carregadas, melhorando o desempenho e reduzindo o tempo de carregamento.

2. **Cache de Detalhes do Filme**:
   - Armazenado no `movieDetailsCacheAtom`, este cache salva os detalhes de cada filme individual usando o ID do filme como chave.
   - Quando o usuário acessa um filme que já foi consultado, os dados são exibidos imediatamente do cache, sem necessidade de nova requisição à API.

Esses caches são acessados e atualizados automaticamente pelos componentes de página (`Home` e `MovieDetails`), garantindo uma experiência de navegação mais rápida e eficiente para o usuário.

## Bibliotecas e Dependências

### Dependências Principais

- **React**: Biblioteca para construção da interface.
- **React DOM**: Renderização para o DOM.
- **React Router DOM**: Navegação entre as páginas.
- **Jotai**: Gerenciamento de estado simples e eficiente.

### Dependências de Desenvolvimento

- **Vite**: Bundler rápido e otimizado, que facilita o desenvolvimento e a build.
- **Tailwind CSS**: Framework CSS para design responsivo e estilização rápida.
- **Jest**: Framework de testes unitários.
- **Testing Library**: Utilizado para testes de componentes React.
- **TypeScript**: Superset de JavaScript com tipagem estática.

### Scripts Importantes

- **dev**: Inicia o projeto em modo de desenvolvimento.
- **build**: Compila o projeto para produção.
- **lint**: Executa o ESLint para identificar problemas de sintaxe e estilo.
- **test**: Roda os testes unitários.
- **watch**: Roda os testes no modo de observação.
- **format**: Formata o código utilizando o Prettier.
- **format:check**: Verifica o formato do código sem alterá-lo.

## Boas Práticas

1. **Atomic Design**: Componentes são organizados e divididos em átomos, garantindo reutilização e modularidade.
2. **Uso de Hooks**: `useEffect` e `useState` para gerenciamento do ciclo de vida dos componentes.
3. **Gerenciamento de Estado com Jotai**: Simplifica o gerenciamento de dados no aplicativo e facilita a implementação de cache.
4. **Testes Unitários e E2E**: Garantir qualidade do código com testes abrangentes.
5. **ESLint e Prettier**: Manter o código limpo e consistente.

## Melhorias Futuras

1. **Adicionar Suporte para Testes E2E**: Utilizar Playwright para cobrir fluxos completos de navegação.
2. **Integração CI/CD**: Configurar pipeline para automação de testes e deploy.
3. **Acessibilidade**: Melhorar a acessibilidade do projeto.
4. **Documentação de API**: Melhorar o mapeamento de endpoints da API para facilitar futuras integrações e manutenção.
