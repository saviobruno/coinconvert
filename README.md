# 💱 CoinConvert

Conversor de moedas simples e rápido, que usa cotações de referência atualizadas para converter valores entre Real, Dólar, Euro e Libra.

<!-- Adicione um print do projeto aqui: -->
<!-- ![Preview do CoinConvert](preview.png) -->

🔗 **Demo:** [SEU_LINK_DO_GITHUB_PAGES](SEU_LINK_DO_GITHUB_PAGES)

---

## ✨ Funcionalidades

- Conversão entre **BRL, USD, EUR e GBP**
- Cotação em tempo real via API pública
- Botão para **inverter as moedas** de origem e destino
- Validação de entrada (valor vazio, zero ou negativo)
- Formatação de moeda no padrão brasileiro (`pt-BR`)
- Exibição da **data da cotação** utilizada
- Tratamento de erros de conexão e de resposta da API
- Interface responsiva, adaptada para celular e desktop

## 🛠️ Tecnologias

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>

- **HTML5** para a estrutura da página
- **CSS3** para o layout e a responsividade
- **JavaScript (vanilla)** para a lógica, com `fetch` e `async/await`
- **[Frankfurter API](https://frankfurter.dev/)** para as cotações (gratuita e sem necessidade de chave)

## 📁 Estrutura do projeto

```
coinconvert/
├── index.html   # Estrutura da página
├── style.css    # Estilos e responsividade
└── script.js    # Lógica de conversão e consumo da API
```

## ▶️ Como executar

Não é preciso instalar nada. Basta clonar o repositório e abrir o arquivo no navegador:

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git

# Entre na pasta
cd NOME_DO_REPOSITORIO
```

Depois, abra o `index.html` com um duplo clique ou use uma extensão como o **Live Server** do VS Code.

> ⚠️ É necessário ter conexão com a internet, pois as cotações são buscadas na API.

## ⚙️ Como funciona

1. O usuário informa o valor e escolhe as moedas de origem e destino.
2. O script valida o valor digitado.
3. Se as moedas forem iguais, o valor é apenas formatado, sem consultar a API.
4. Caso contrário, é feita uma requisição à Frankfurter API:

   ```
   GET https://api.frankfurter.dev/v1/latest?base=USD&symbols=BRL
   ```

5. A taxa retornada é multiplicada pelo valor e o resultado é exibido formatado, junto com a data da cotação.

## 🚀 Possíveis melhorias

- [ ] Adicionar mais moedas
- [ ] Criar um modo escuro
- [ ] Mostrar um histórico das últimas conversões
- [ ] Exibir um gráfico da variação da cotação
- [ ] Transformar em PWA para uso offline

## 👨‍💻 Autor

**Sávio Bruno**
Estudante de Ciência da Computação na UFC

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](SEU_LINK_LINKEDIN)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SEU_USUARIO)
