import React from 'react'
import { BsShop } from 'react-icons/bs'

const ShopHeading = () => {
  return (
    <h2 className="text-3xl pt-2 md:pt-2 md:text-4xl font-bold flex justify-center ">
    INVENTORY
    <span className="ml-2">
         <BsShop />
    </span>
</h2>
  )
}

export default ShopHeading