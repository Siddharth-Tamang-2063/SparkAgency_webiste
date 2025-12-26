import { useState } from "react";

const useCustom = ()=>{
const [first, setfirst] = useState(0)
const increment=()=>{
    setfirst(first+1)
}
const decrement= ()=>{
    setfirst(first-1)
}

return{first,increment,decrement}


}
export default useCustom