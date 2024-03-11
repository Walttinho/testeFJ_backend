# Sistema de Gerenciamento de Clientes para Serviços de Limpeza

## Visão Geral

Este projeto é uma solução robusta e eficiente para o gerenciamento de clientes de uma empresa de serviços de limpeza. Desenvolvido com foco na centralização e otimização do processo de gestão de clientes, substituindo métodos manuais por uma plataforma digital.

## Características Principais

- **Gestão de Clientes**: Permite listar, filtrar e adicionar clientes de forma eficiente.
- **Otimização de Rotas de Serviço**: Utiliza algoritmos avançados para otimizar as rotas de serviço, maximizando a eficiência e reduzindo custos.
- **Interface de Usuário Intuitiva**: Projetada para facilitar o uso por operadores e gestores.

## Tecnologias Utilizadas

- **Linguagem de Programação**: TypeScript
- **Framework**: Node.js com Express
- **Banco de Dados**: PostgreSQL
- **Ferramentas Adicionais**: dotenv para gerenciamento de variáveis de ambiente, cors para habilitação de CORS, e pg para integração com o cliente PostgreSQL.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma para garantir uma organização clara e eficiente:

- **src/**: Contém o código-fonte principal, dividido em módulos para circuitos e clientes, facilitando a manutenção e a expansão do sistema.
- **config/**: Inclui arquivos de configuração, como a configuração do banco de dados.
- **dto/**: Diretório para Objetos de Transferência de Dados (DTOs), utilizados para a validação e transferência de dados entre camadas do sistema.
- **entities/**: Define as entidades do banco de dados, refletindo a estrutura das tabelas no PostgreSQL.

## Instalação

### Pré-requisitos

Antes de começar, certifique-se de ter instalado em seu sistema:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

### Passos de Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o ambiente**

   Crie um arquivo `.env` na raiz do projeto e preencha com as variáveis de ambiente necessárias. Você pode usar o arquivo `.env.Example` como modelo.
```bash
cp .env.Example .env
```

   Edite o arquivo `.env` e preencha com as informações do seu ambiente, como credenciais do banco de dados.

4. **Configure o banco de dados**

   Importe o arquivo `Dump.sql` para o seu banco de dados PostgreSQL para criar as tabelas necessárias.
```bash
psql -U seu_usuario -d seu_banco_de_dados < Dump.sql
```

5. **Inicie o servidor**
```bash
npm start
```

   O servidor estará rodando em `http://localhost:3000`.

### Testes

Para executar os testes, use o comando:
```bash
npm test
```

### Desenvolvimento

Para desenvolver e testar novas funcionalidades, você pode usar o comando:
```bash
npm run dev
```

Este comando iniciará o servidor em modo de desenvolvimento, com hot-reload habilitado.

## Contribuição

Contribuições são bem-vindas! Para contribuir, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch com a sua feature (`git checkout -b feature/NomeDaFeature`).
3. Faça commit das suas alterações (`git commit -am 'Adiciona alguma funcionalidade'`).
4. Faça push para a sua branch (`git push origin feature/NomeDaFeature`).
5. Abra um Pull Request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para dúvidas ou sugestões, por favor, abra uma issue ou entre em contato com os mantenedores do projeto.