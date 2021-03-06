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

const $goodsList = document.querySelector('.goods-list'); //нашли элемент на странице и поместили в переменную 

const renderGoodsItem = ({title, price}) => { //принимаем объект товаров и создаем html-код  
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list = goods) => { 
    let goodsList = list.map(item => renderGoodsItem(item)).join(''); // проходим по массиву goods 

    $goodsList.insertAdjacentHTML('beforeend', goodsList); // добавляем на страницу
}

renderGoodsList(); 