const products = [
    {
id: '1',
name: 'Amanda',
price: 1000,
category: 'yerbas',
img: 'https://www.rimoldimayorista.com.ar/datos/uploads/mod_catalogo/31308/amanda-yerba-1kg-603e32162285d.jpg',
stock: 15,
description:'yerba amanda',
    },
    {id: '2', name:'cachamate', price: 1000, category: 'yerbas', img: 'https://perobienargentino.com/cdn/shop/products/CachamateYerbaMateMezcladeHierbasx1kg_600x.png?v=1608649566', stock: 15, description:'yerba cachamate', },
    {id: '3', name:'canarias', price: 1000, category: 'yerbas', img: 'https://apolomates.com.ar/wp-content/uploads/2021/11/canarias-medio-1.jpg', stock: 15, description:'yerba canarias', },
   
    {id: '4', name:'chango', price: 250, category: 'endulzantes', img: 'https://www.chango.com.ar/uploads/productos/producto1/img_out.jpg', stock: 15, description:'azucar chango', },
    {id: '5', name:'ledesma', price: 250, category: 'endulzantes', img: 'https://www.ganaderapanamericana.com/media/catalog/product/cache/30c6e1524676c3c53ef0ea5e357eeac9/a/z/azucar_-_3352_7.png', stock: 15, description:'azucar ledesma', },

    {id: '6', name:'cuero', price: 550, category: 'mates', img: 'https://http2.mlstatic.com/D_NQ_NP_888935-MLA54946465966_042023-O.webp', stock: 15, description:'mate de cuero', },
    {id: '7', name:'plastico', price: 350, category: 'mates', img: 'https://fonditaargentina.com/wp-content/uploads/2023/02/MA-URB-ROJ-1.jpg', stock: 15, description:'mate de plastico', },
    {id: '8', name:'vidrio', price: 450, category: 'mates', img: 'https://http2.mlstatic.com/D_NQ_NP_937617-MLA70306647653_072023-O.webp', stock: 15, description:'mate de vidrio', },
]

export const getProducts = () =>{
    return new Promise ((resolve) => {
        setTimeout(() => {  
            resolve(products)
        
        }, 500)
    } )
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 500)
    })
}