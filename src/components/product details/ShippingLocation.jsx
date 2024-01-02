import React from 'react'

export const ShippingLocation = () => {
  return (
    <div className='flex items-center gap-[20px] font-bold'>
        <p className='md:text-[14px]'>Shipping</p>
        <select name="" id="" className='md:text-[12px]'>
            <option value="">Free Shipping To Vitoria Territory</option>
            <option value="">Shipping To Lagos Island</option>
            <option value="">Shipping to port-harcourt</option>
            <option value="">Shipping to Ikeja</option>
        </select>
    </div>
  )
}
