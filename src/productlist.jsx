import { FemaleproductsList } from "./products"

export const Productlist = ()=>{
return(
    <div>
        {
               FemaleproductsList.map((product)=>{
                return(
                <div key={product.id}  className="h-[100px] flex flex-col gap-[2em] p-[2em] w-full bg-blue " >
                <p>{product.price}</p>
                <div className="border border-black h-[200px] w-[50%] " >
                <img src={product.image} alt={product.title} />
                </div>
                </div>
                )
                })
        }
    </div>
)
}