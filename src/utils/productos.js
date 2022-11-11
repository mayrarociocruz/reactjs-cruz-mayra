const products =[
    {
        id: 95,
        stock: 5, 
        articulo: "Botas Converse Weapon CX 75TH Anniversary Crudo",
        precio: 35499, 
        imagen: ["https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/b/o/botas-converse-weapon-cx-75th-anniversary-crudo-200010172657001-1.jpg"], 
        categoryId: "nuevo",

    },
    {
        id: 96, 
        stock: 1, 
        articulo:"Zapatillas Hovr Phantom 2 Under Armour",
        precio: 45999,
        imagen:["https://http2.mlstatic.com/D_NQ_NP_959952-MLA49644038641_042022-W.jpg"], 
        categoryId:"zapatillas"
    },
    {
        id: 97, 
        stock: 3, 
        articulo: "Zapatillas Puma RS Fast Limiter De Hombre",
        precio: 34599, 
        imagen:["https://woker.vtexassets.com/arquivos/ids/294093-800-800?v=637949571224230000&width=800&height=800&aspect=true"], 
        categoryId:"zapatillas"
    },
    {
        id: 98, 
        stock: 6, 
        articulo: "Nike Dunk Low Retro Animal Pack Zebra", 
        precio:63560,
        imagen:["https://images.stockx.com/images/Nike-Dunk-Low-Retro-Animal-Pack-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1655475823"], 
        categoryId:"urbanas"
    },
    { 
        id:99, 
        stock:1, 
        articulo:"Zapatillas adidas Ozelia De Mujer", 
        precio:34999, 
        imagen:["https://woker.vtexassets.com/arquivos/ids/285956-800-800?v=637925573785200000&width=800&height=800&aspect=true"], 
        categoryId:"nuevo"
    },
    { 
        id:100,
        stock:1, 
        articulo:"Nike Dunk High 1985 Red Acid Wash",
        precio: 48999,
        imagen:["https://images.stockx.com/images/Nike-Dunk-High-1985-Acid-Wash-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1630349550"], 
        categoryId:"urbanas"
    },
    { 
        id:101, 
        stock: 1,
        articulo: "Zapatillas Adidas Originals Superstar", 
        precio: 23000, 
        imagen:["https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/1/0/10001efv3374001-1.jpg"], 
        categoryId: "urbanas"
    },
    { 
        id:102, 
        stock: 1, 
        articulo: "Zapatillas Nike Air Force 1 07 Lv8 Nba", 
        precio: 36000, 
        imagen:["https://cdn.flightclub.com/TEMPLATE/156034/1.jpg"], 
        categoryId: "urbanas"
    },
    { 
        id:103,
        stock: 1, 
        articulo: "Jordan 1 Retro Low Slip Desert Ore Light Cream", 
        precio: 40000, 
        imagen: ["https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwbe1df35c/products/NI_AV3918-200/NI_AV3918-200-1.JPG"], 
        categoryId:"urbanas" 
    },
    { 
        id:104, 
        stock: 1, 
        articulo: "Zapatillas Vans Old Skool Hi -Sk8-Hi", 
        precio: 23800, 
        imagen:["https://d3ugyf2ht6aenh.cloudfront.net/stores/001/245/791/products/e36b6f29-14e3-4798-874f-704706acde6e-7dd65cc9febc5d5d2c16516268559860-1024-1024.jpg"], 
        categoryId: "urbanas"
    },
    { 
        id:105,
        stock: 1,
        articulo: "Zapatillas Nike Air Max Sasha", 
        precio: 17000, 
        imagen: ["https://www.thenextsole.com/storage/images/916783-004.png"], 
        categoryId: "zapatillas"
    },
    { 
        id:106, 
        stock: 1, 
        articulo: "Reebok Royal Turbo Impulse", 
        precio: 21000, 
        imagen: ["https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-reebok-royal-turbo-impuls-mujer-blanca-111010eg9449001-1.jpg"], 
        categoryId: "zapatillas"
    },
    //{ "id":107, "cantidad": 1, "articulo": "Zapatillas Nike Running Nike Renew Rival", "precio": 17900, "imagen":"https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw2664173d/products/NI_BV0799-300/NI_BV0799-300-1.JPG", "categoria": "zapatillas"},
    //{ "id":108, "cantidad": 1, "articulo":"Zapatilla Puma Vikky Staked Stud Negro/tachas", "precio": 17000, "imagen":"https://http2.mlstatic.com/D_NQ_NP_907709-MLA31024512629_062019-O.jpg", "categoria": "urbanas"},
    //{ "id":109, "cantidad": 1, "articulo":"Zapatillas Puma basket mujer platform trace", "precio": 17000, "imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRn7ln1C7ViP27gU373VG5MQ1btR3ENenhw&usqp=CAU", "categoria": "urbanas"},
    //{ "id":110, "cantidad": 1, "articulo":"Zapatillas Puma Nrgy Rupture" , "precio": 12600 , "imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMPZzx85eL76BxwZCA6JGSNpljgCSSn-_4Q&usqp=CAU", "categoria": "zapatillas"},
    //{ "id":111, "cantidad": 1, "articulo":"Zapatillas Nike Ebernon Mid Negras" , "precio": 31000, "imagen":"https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/5/1/510010aq1773002-1.jpg", "categoria": "urbanas" },
    //{ "id":112, "cantidad": 1, "articulo":"Camiseta Titular Argentina 22 Celeste y Blanca Adidas" , "precio": 17000, "imagen":"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/611f58bb7b4444bbb62eaeca012c57dd_9366/Camiseta_Titular_Argentina_22_Blanco_HF1495_01_laydown.jpg", "categoria": "nuevo"},
    { 
        id:113, 
        stock: 1, 
        articulo:"Botines Adidas X SPEEDPORTAL.1 FG VERDE" , 
        precio: 62999, 
        imagen:["https://assets.adidas.com/images/w_600,f_auto,q_auto/0104cd8e08ce4ded9d22ae9b010ec3a3_9366/X_SPEEDPORTAL.1_FG_Verde_GW8426_22_model.jpg"], 
        categoryId:"nuevo" 
    },
    //{ "id":114, "cantidad": 1, "articulo": "Zapatillas Adidas Originals Superstar Rich Mnisi Ot Tech Mujer", "precio": 38000, "imagen":"https://newsport.vteximg.com.br/arquivos/ids/13852204-1000-1000/GW0523-A.jpg?v=637921939524600000", "categoria":"nuevo" },
    //{ "id":115, "cantidad": 1, "articulo": "Zapatillas Adidas Originals Zx Wavian Rich Mnisi Mujer" , "precio": 38999, "imagen":"https://newsport.vteximg.com.br/arquivos/ids/14033352-1000-1000/GW0517-A.jpg?v=637940157908370000", "categoria": "nuevo"},
    { 
        id:116, 
        stock:1, 
        articulo: "Zapatillas Adidas Ozelia De Hombre", 
        precio: 32999, 
        imagen: ["https://woker.vtexassets.com/arquivos/ids/294153-800-800?v=637949590679970000&width=800&height=800&aspect=true"], 
        categoryId: "nuevo" 
    },
    {
        id: 117, 
        stock:1, 
        articulo:"Zapatillas Adidas Ozelia De Mujer", 
        precio: 30999, 
        imagen:["https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/edb901c9539f4bb983c5adf700ec8646_9366/Zapatillas_Ozelia_Blanco_GY8544_01_standard.jpg"], 
        categoryId:"nuevo"
    },
    //{"id":118, "cantidad":1, "articulo":"Camiseta Alternativa Argentina 22 Adidas Legacy Indigo", "precio":16999, "imagen":"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/86efe3125fa24a04aa32aef900f59392_9366/Camiseta_Alternativa_Argentina_22_Azul_HB9220_01_laydown.jpg", "categoria":"nuevo"}
]

module.exports = {
    products,
  }