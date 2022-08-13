const articles = [
    {
        id:1,
        autor: 'Sabrina Bezerra',
        title: 'Por que o TikTok está de olho nas pequenas empresas',
        description: 'O TikTok lançou um novo programa focado em pequenas e médias empresas (PMEs), o “Follow Me”. O objetivo é ensinar gratuitamente como usar a rede social — de dicas práticas ao uso do recurso campanha — para alavancar os resultados.'
    },
    {
        id:2,
        autor: 'Leandro Miguel Souza',
        title: 'Em fusão com a Alpha Capital, Semantix agora faz parte da Nasdaq',
        description: 'A empresa está fechando a sua fusão com a Alpha Capital, Companhia com Propósito Especial de Aquisição (mas você pode chamar de SPAC), que levantou US$ 230 milhões para o negócio.'
    }
];

function getArticles () {
    return articles;
}

function getArticleById (articleId){
    return articles.find(article => {
        return article.id === Number(articleId)
    });
}

export {getArticles, getArticleById};