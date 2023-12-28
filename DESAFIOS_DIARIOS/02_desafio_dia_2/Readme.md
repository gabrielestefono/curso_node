# Desafio de Import e Export com Node.js

**Objetivo do Desafio:** Criar dois módulos em Node.js: um para definir funções e outro para importá-las e utilizá-las.

#### Parte 1: Criar o Módulo de Exportação

1. **Nome do Arquivo:** `matematica.js`

2. **Conteúdo do Arquivo:**
   - Defina duas funções:
     - `soma(a, b)` que retorna a soma de `a` e `b`.
     - `multiplica(a, b)` que retorna o produto de `a` e `b`.

3. **Exportando as Funções:**
   - Utilize `module.exports` para tornar as funções `soma` e `multiplica` disponíveis para serem importadas.

#### Parte 2: Criar o Módulo de Importação

1. **Nome do Arquivo:** `principal.js`

2. **Conteúdo do Arquivo:**
   - Importe as funções do arquivo `matematica.js`.
   - Use as funções importadas para realizar algumas operações, como:
     - Somar dois números.
     - Multiplicar dois números.

3. **Importando as Funções:**
   - Utilize `require('./matematica')` para acessar as funções exportadas.

#### Testando Seu Código

1. **Executando `principal.js`:**
   - No terminal, navegue até o diretório que contém seus arquivos.
   - Execute o comando `node principal.js` para ver os resultados das operações matemáticas.

### Dicas Adicionais

- Certifique-se de que os nomes dos arquivos estão corretos e estão no mesmo diretório.
- Revise a sintaxe do `require` e do `module.exports` se tiver dificuldades.
- Experimente com diferentes valores nas funções para testar sua implementação.