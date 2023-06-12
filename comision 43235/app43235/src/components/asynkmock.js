

const products =[
    {id:'1', nombre:'Juego de tasas', precio: 4500, categoria:'Bazar y hogar',img:'https://m.media-amazon.com/images/I/41Ng7NGBCgL._AC_SX466_.jpg'},
    {id:'2',nombre:'Elefante escurridor', precio:3400, categoria:'Bazar y hogar', img:'https://decomoda-mayorista.com.ar/wp-content/uploads/2023/02/WhatsApp-Image-2021-02-08-at-19.46.28-3.jpeg'},
    {id:'3',nombre:'Porta esponja Homero', precio:2500,categoria:'Bazar y hogar',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIRm6t_0PYgwG11VmOMJB-60CTu_Vx1h5AX0d65GreKmSnl0lf0x3Pwbvi8Q3qYi-zYKw&usqp=CAU'},
    {id:'4',nombre:'Tazon Stich', precio:3500,categoria:'Bazar y hogar',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr41PvK3x6oN8GkEdEkaRHllc3BYz_moEq8Q&usqp=CAU'}
]


export const getProducts= () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },1500)
    })
}