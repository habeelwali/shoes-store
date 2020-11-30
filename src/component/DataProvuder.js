import React, { createContext , useState ,useEffect} from 'react'
export const Datacontext=createContext();
export const DataProvider = (props)=> {
    const [products, setPeoducts] = useState([
        {
            "_id": "1",
            "name": "nike",
            "img": [
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/o6ah3o2mgaxhhtrzasay/react-vision-womens-shoe-kGhsR6.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/psz41fztxaifzfpek1cc/react-vision-womens-shoe-kGhsR6.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/sbpidnrl0jsluzlp5os4/react-vision-womens-shoe-kGhsR6.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/pbjwnekvcp9cnnbmflqw/react-vision-womens-shoe-kGhsR6.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/w8nfly1zr3pecsprm4de/react-vision-womens-shoe-kGhsR6.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/byfffvyz8pqvigmdxsst/react-vision-womens-shoe-kGhsR6.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/scs0ndwvbbtciytxkgoi/react-vision-womens-shoe-kGhsR6.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/w9vcbbzobkkd0vggm7o6/react-vision-womens-shoe-kGhsR6.jpg"

                   ],
            "description": "Men's Shoes ",

           
            "content": "jhjdhfjdfdjfhfjksdjsdhfjksdfhdfhsdsdjkjksdfjsdf sdfsdfjkd djsdfdjf",
            "price": 23,
            "colour": ["red", "black", "green"],
            "size":[5,6,7,8,9],
            "count": 1
        },
        {
            "_id": "2",
            "name": "nike2",
            "img": ["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/be6750b3-14ac-4276-80d0-a9c47bdaec0f/superrep-cycle-mens-indoor-cycling-shoe-bsXw1J.jpg",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/55f14b28-f2bc-450a-a3dd-88ac55b4833a/superrep-cycle-mens-indoor-cycling-shoe-bsXw1J.jpg",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/aad3daf7-c3f1-4b78-afc4-3d69476f0d3a/superrep-cycle-mens-indoor-cycling-shoe-bsXw1J.jpg",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fa22f31b-3d30-46ac-9d7a-9bfcd8e8c25d/superrep-cycle-mens-indoor-cycling-shoe-bsXw1J.jpg",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fa7edd2b-14a9-43f6-9e18-3aa81a8c7eda/superrep-cycle-mens-indoor-cycling-shoe-bsXw1J.jpg",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a2d37d23-ed56-4fbe-9cba-bd996997af35/superrep-cycle-mens-indoor-cycling-shoe-bsXw1J.jpg",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4bcf9b2a-be79-4685-bad6-c6d20b480fd5/superrep-cycle-mens-indoor-cycling-shoe-bsXw1J.jpg",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3c4ac8ab-f989-486b-b736-fba7f4d54dc4/superrep-cycle-mens-indoor-cycling-shoe-bsXw1J.jpg"
        ],
            "description": "UI/UX designing , htmal",
            "content": "jhjdhfjdfdjfhfjksdjsdhfjksdfhdfhsdsdjkjksdfjsdf sdfsdfjkd djsdfdjf",
            "price": 23,
            "colour": ["red", "black", "green"],
            "size":[5,6,7,8,9],
            "count": 1
        },

        {
            "_id": "3",
            "name": "keybrid S2",
            "img":[
                 "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9bbbcfe5-ac47-4699-b586-2cb66ce7442d/kybrid-s2-basketball-shoe-LjMCLj.jpg",
                 "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a4905ed2-f95c-45a6-9d38-7b82d4a07bfe/kybrid-s2-basketball-shoe-LjMCLj.jpg",
                 "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4a296469-c8df-4604-80c1-16a24b1f5f73/kybrid-s2-basketball-shoe-LjMCLj.jpg",
                 "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/de0f9fb0-08c1-43c0-8cca-6d24480a8f7d/kybrid-s2-basketball-shoe-LjMCLj.jpg",
                 "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7463adea-396b-4318-aefb-10d7387adde2/kybrid-s2-basketball-shoe-LjMCLj.jpg",
                 "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/dac51107-e9a5-440e-ac1b-dbbf99f0ef8a/kybrid-s2-basketball-shoe-LjMCLj.jpg",
                 "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e3b82c87-db23-4db7-a33f-c23f874934ce/kybrid-s2-basketball-shoe-LjMCLj.jpg",
                 "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/11f20988-c408-43d1-8bb3-a200718c13d2/kybrid-s2-basketball-shoe-LjMCLj.jpg",
                ],
            "description": "Basket ball shoes",
            "content": "jhjdhfjdfdjfhfjksdjsdhfjksdfhdfhsdsdjkjksdfjsdf sdfsdfjkd djsdfdjf",
            "price": 50,
            "colour": ["red", "black", "green"],
            "size":[5,6,7,8,9],
            "count": 1
        },

        {
            "_id": "4",
            "name": "nike4",
            "img":[
                 "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/23d7a7ad-d210-416e-af02-5f57b7c17220/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
                 "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b05d8a80-7e02-4d9d-b0a5-0670140505d4/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
                 "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/afeb0d32-713d-4283-83bd-a5f2d594ec71/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
                 "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5b0e1702-2a4f-4895-b0a7-8095da4fa950/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
                 "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/619552ee-57c3-461e-936b-9ff1ebc123ee/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
                 "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7133350d-9ba0-4bec-8e5a-8ad96ab15ad4/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
                 "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e3083dbf-9218-41d3-b142-93e14f09df7d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
                 "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ebf38b6c-61b9-434a-a225-9c2d48084904/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
                ],
            "description": "Man's Running Shoes",
            "content": "jhjdhfjdfdjfhfjksdjsdhfjksdfhdfhsdsdjkjksdfjsdf sdfsdfjkd djsdfdjf",
            "price": 23,
            "colour": ["red", "black", "green"],
            "size":[5,6,7,8,9],
            "count": 1
        },

        {
            "_id": "5",
            "name": "Nike Cortez Basic Premium",
            "img": [
                "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/25e220df-0526-4bd3-8e30-8e8fc7716e66/cortez-basic-premium-mens-shoe-pVtjQG.jpg",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fe87caf7-e81f-4497-8519-2c061ad5d82d/cortez-basic-premium-mens-shoe-pVtjQG.jpg",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/42b462ba-cc0d-41c5-ba4e-47111c9eafca/cortez-basic-premium-mens-shoe-pVtjQG.jpg",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ca0174e1-909e-44e0-a991-da7c4d0d39c1/cortez-basic-premium-mens-shoe-pVtjQG.jpg",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0d503cd3-0752-4b2b-bf77-a30d97fb50f8/cortez-basic-premium-mens-shoe-pVtjQG.jpg",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7b56ec37-c999-4375-b3fe-5c959d725a63/cortez-basic-premium-mens-shoe-pVtjQG.jpg",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/98ac11a9-b0c9-4044-bb75-6c1c819d02d7/cortez-basic-premium-mens-shoe-pVtjQG.jpg",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b2ca8d17-6e2f-41d3-9724-07cc0c3d2ce1/cortez-basic-premium-mens-shoe-pVtjQG.jpg",

            ],
            "description": "Men's Shoe",
            "content": "jhjdhfjdfdjfhfjksdjsdhfjksdfhdfhsdsdjkjksdfjsdf sdfsdfjkd djsdfdjf",
            "price": 23,
            "colour": ["red", "black", "green"],
            "size":[5,6,7,8,9],
            "count": 1
        },
        {
            "_id": "6",
            "name": "Nike Air VaporMax Flyknit 3",
            "img": [
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/wxe4gb7zjiey9eejirq0/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg",
                "https://static.nike.com/a/videos/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80,so_0.79/vqdq1lb4txm5vyoo2kog/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i6xna8mfcpka89zd5we4/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/u1hmpofow0mrqdmdznbc/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/re87lg3k6cgeqqdwzuf6/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/adspkilaaaxhxqwnzir9/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg"
        ],
            "description": "Men's Shoe",
            "content": "jhjdhfjdfdjfhfjksdjsdhfjksdfhdfhsdsdjkjksdfjsdf sdfsdfjkd djsdfdjf",
            "price": 40,
            "colour": ["red", "black", "green"],
            "size":[5,6,7,8,9],
            "count": 1
        }


    ])
    
    const [cart, setCart]=useState([])
     const addCart = (id)=>{
         const check = cart.every(item =>{
             return item._id !==id
         })
         if(check){
             const data = products.filter(product =>{
                 return product._id === id
             })
             setCart([...cart, ...data])
         }
         else{
             alert ("the product has been added to the cart")  
         }

     }
     
     useEffect(()=>{
         const dataCart = JSON.parse(localStorage.getItem('dataCart')) 
         if(dataCart) setCart(dataCart)
     },[])

     useEffect(()=>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])
    
   const value={
        products:[products, setPeoducts],
        cart: [cart, setCart],
        addCart:addCart

    }
    return (
        <Datacontext.Provider value={value}>
            {props.children}
        </Datacontext.Provider>
    )
       
}
