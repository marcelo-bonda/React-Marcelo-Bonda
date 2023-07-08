

const products =[
    {id:'1', nombre:'Juego de tasas', precio: 4500, category:'Bazar y hogar',img:'https://m.media-amazon.com/images/I/41Ng7NGBCgL._AC_SX466_.jpg',stock:29},
    {id:'2',nombre:'Elefante escurridor', precio:3400, category:'Bazar y hogar', img:'https://decomoda-mayorista.com.ar/wp-content/uploads/2023/02/WhatsApp-Image-2021-02-08-at-19.46.28-3.jpeg',stock:31},
    {id:'3',nombre:'Porta esponja Homero', precio:2500,category:'Bazar y hogar',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIRm6t_0PYgwG11VmOMJB-60CTu_Vx1h5AX0d65GreKmSnl0lf0x3Pwbvi8Q3qYi-zYKw&usqp=CAU',stock:21},
    {id:'4',nombre:'Tazon Stich', precio:3500,category:'Bazar y hogar',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr41PvK3x6oN8GkEdEkaRHllc3BYz_moEq8Q&usqp=CAU',stock:16},
    {id:'5',nombre:'porta celular',precio:200 ,category:'Oficina',img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/064/046/products/134420659_450771425946681_3340576099689066769_n1-882ccd49bbe947ccc116120319789778-640-0.webp', stock:45 },
    {id:'6',nombre:'monedero los borbotones',precio:2500 ,category:'Accesorios',img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/064/046/products/37866190_1945828535469739_2061127656862121984_n-min1-d5be5456b6fb41258915357432992909-640-0.webp', stock:35 },
    {id:'7',nombre:'pizzarra magica',precio:3700 ,category:'Para los mas chicos',img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/064/046/products/pizarra-2-min1-2546c308ec4cbc092d16842499925560-640-0.webp', stock:7 },
    {id:'8',nombre:'trencito imantado',precio:5500 ,category:'Para los mas chicos',img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/064/046/products/trencito-3-min-min1-14637696872b84c55116602563431303-640-0.webp', stock: 23}

]


export const getProducts= () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },1500)
    })
}

export const getProductById = (productId)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=>prod.id===productId))
        },500)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 500);
    });
};