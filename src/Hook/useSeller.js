import { useEffect, useState } from "react"

const useSeller=(email)=>{
    const [isSeller, setSeller]=useState(false);
    const [isSellerLoading,  setIsSellerLoading]=useState(true);

    useEffect(()=>{
        if(email){
            fetch(`https://best-buy-server-three.vercel.app/users/seller/${email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log('seller',data);
                setSeller(data.isSeller)
                setIsSellerLoading(false)
            })
        }
    },[email])
    return [isSeller, isSellerLoading]
}

export default useSeller;