const goods = [{
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

const $goodsList = document.querySelector('.goods-list'); // Нашли элемент на странице и поместили в переменную 

const renderGoodsItem = ({title, price}) => { // Принимаем объект товаров и создаем html-код  
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list = goods) => { 
    let goodsList = list.map(item => renderGoodsItem(item)).join(''); // Проходим по массиву goods 

    $goodsList.insertAdjacentHTML('beforeend', goodsList); // Добавляем на страницу
}

renderGoodsList(); 