# Atividade Para casa!

Para casa ficam as seguintes rotas das demandas de negócio:

### [GET] "/estados/todos"

Retorna lista completa de estados-cidades

### [GET] "/estados/{sigla}"

Retorna nome, sigla e cidades de uma sigla especifica

O exercício para casa devera ser feito dentro da pasta servidor-para-casa. Lá você devera criar um novo servidor e configurar sua porta e criar essas duas rotas. 

```bash
		\--📂 On11-TodasEmTech-s7-API-GET
			|
			\--📂meu-primeiro-servidor
			|
			\--📂meu-primeiro-servidor
			|				
			**\--📂servidor-para-casa
			    |   server.js
			    📂---data
			    |       estados-cidades.json**
```

Observe que o json de estados-cidades, está um pouco mais simples! **O foco desse exercício é que vocês consigam entender bem quais são os comandos necessários para criar um servidor com node.js**

# Execução do Projeto

* Em seu terminal - o que você escolher -  dentro da sua pasta, faça a sequência de instalação: /n

** npm init - cria o arquivo packeage.json
** npm i express - instala os pacotes
** npm i nodemon - roda o projeto sem a necessidade de reiniciá-lo
** alterar no packeage.json o start para: nodemon server.js

## Programa

* O programa roda na plataforma **Postman** que é uma ferramenta que dá suporte a documentação das requisições
feitas pela API. 

* No programa é possível mostrar a lista completa de todos os estados e fazer uma seleção apenas com 
a sigla do estado o que irá retornar também o nome de todas as cidades.



