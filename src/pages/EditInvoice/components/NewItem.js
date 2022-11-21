import React, { useEffect, useState } from 'react'
import { Label } from '../../../components/form/Label'
import { NumberInput } from '../../../components/form/NumberInput'
import { TextField } from '../../../components/form/TextField'
import BinIcon from '../../../assets/icon-delete.svg'


function NewItem({onChange, onDelete, item}) {
    console.log(item)
    const [itemName, setItemName] = useState(item.item_name)
    const [quantity, setQuantity] = useState(item.quantity)
    const [price, setPrice] = useState(item.price)
    const [total, setTotal] = useState(item.total)

    useEffect(() => {
        setTotal(price * quantity)
    }, [price, quantity])



    useEffect(() => {
        const itemData = {
            item_name: itemName,
            quantity: quantity,
            price: price,
            total: total
        }
        onChange(itemData)
    }, [
    itemName,
    quantity,
    price,
    total])

  return (
    <div className='flex flex-col gap-4'>
        <TextField defaultValue={itemName} label={"Item Name"} onChange={e => setItemName(e.target.value)}/>

        <div className="flex gap-4">
            <div className="">
                <Label label={"Qty."}/>
                <NumberInput noDecimal={true} defaultValue={quantity} onChange={e => setQuantity(e.target.value)}/>
            </div>

            <div className="">
                <Label label={"Price"}/>
                <NumberInput defaultValue={price} onChange={e => setPrice(e.target.value)}/>
            </div>

            <div className="">
                <Label label={"Total"}/>
                <input 
                    type="number"
                    value={total.toFixed(2)}
                    readOnly
                    className={`h-12 w-full text-h4 font-bold bg-white bg-opacity-0 outline-none`}/>
            </div>
            
            <button 
                className='flex items-end mb-4' 
                onClick={onDelete}>
                    <img src={BinIcon} alt="" className='h-4 w-5'/>
            </button>
        </div>
    </div>
  )
}

export default NewItem