exports.getPrices=function getPrices()
{
    return { banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 };
}

exports.countArticles=function countArticles()
{
    return [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ].length;
}