class GoodItem {
    constructor(title = "название", price = "цена", img = 'https://via.placeholder.com/150') {
        this.title = title;
        this.price = price;
        this.img = img;
    }
    render() {
        return `<div class="goods-item">
                <img class="goods-item-img" src="${this.img}" alt="plug">
                <h3 class="goods-item-title">${this.title}</h3>
                <p class="goods-item-price">${this.price} рублей</p>
                <button class="goods-item-btn">В корзину</button>
                </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [{
                title: 'Shirt',
                price: 150
            },
            {
                title: 'Socks',
                price: 50
            },
            {
                title: 'Jacket',
                price: 350
            },
            {
                title: 'Shoes',
                price: 250
            },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach((good) => {
            const goodItem = new GoodItem(good.title, good.price, good.img);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').insertAdjacentHTML('beforeend', listHtml);
    }
    calc() {
        let sum = 0;
        this.goods.forEach((good) => {
            good.price !== undefined ? sum += good.price : "Корзина пуста";
            console.log(good.price)
        });
        console.log(`Сумма всех товаров: ${sum}`);
    }
}

class CartItem { // Класс элемента корзины (анологичен классу добавляемого элемента, возможно будут еще какие-то значения на передачу: ссылка, краткое описание и т.д)
    constructor(title, price, img ) { 
        this.title = title;
        this.price = price;
        this.img = img;
    }
    render() { 
        
    }
}

class Cart { // Класс корзина
    constructor() {
        this.goods = [];
    }
    addedCartItem() { // Метод добавления товара в корзину 

    }
    delCartItem(){ // Метод удаления элемента или очестки корзины  

    }
    calcCartItems(){ // Метод подсчета суммы и количества товаров 

    }
    // Какие-то еще методы ...
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.calc();