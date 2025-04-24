# 🛒 Carrinho de Compras


![Captura de tela 2025-04-24 094100](https://github.com/user-attachments/assets/214f77bc-6a1e-4701-ad30-a0d90965bbf3)

Projeto simples de carrinho de compras desenvolvido com **ReactJS** e **Vite**. Consiste em uma página inicial com listagem de produtos, onde é possível adicionar itens ao carrinho e visualizar os produtos adicionados em uma página separada.

## ✨ Funcionalidades

- Listagem de produtos (consumidos via `json-server`)
- Adicionar e remover produtos do carrinho
- Visualização do carrinho com todos os itens selecionados
- Gerenciamento de estado global com **Context API**

## 🧪 Tecnologias

- [ReactJS](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Context API](https://reactjs.org/docs/context.html)
- [json-server](https://github.com/typicode/json-server)

## 🚀 Instalação e Execução

1. **Clone o repositório:**

```bash
git clone https://github.com/luanraffaell/devPetCart.git
cd devPetCart
```
2. **Instale as dependências:**
```bash
npm install
```
3. **Inicie o json-server:**
```bash
json-server --watch db.json --port 3000
```
4. **Inicie a aplicação:**
```bash
npm run dev
```
Acesse no navegador: `http://localhost:5173`

**🧩 Exemplo de `db.json`**
```json
{
    "products": [
        {
            "id": 1,
            "brand": "Premier Pet",
            "title": "Ração Premier Fórmula para Cães Adultos",
            "description": "Indicadas para cães sênior, envelhecimento saudável, suporte diferenciado para ossos e articulações, saúde renal e digestiva, saúde do sistema imunológico e saúde do sistema cardiovascular.",
            "price": 150.00,
            "cover": "https://premierpet.com.br/wp-content/uploads/2022/10/racao-premier-formula-caes-senior-porte-grande-gigante-frango.png"
        },
        {
            "id": 2,
            "brand": "Royal Canin",
            "title": "Ração Royal Canin Maxi para cães adultos",
            "description": "Ração Royal Canin Maxi para cães adultos, com 25 kg, 15 kg e 10 kg.",
            "price": 319.00,
            "cover": "https://m.media-amazon.com/images/I/51XQFG1VUYL._AC_SL1200_.jpg"
        }]
}
```
