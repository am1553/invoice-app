import React, { useState } from 'react'
import { Label } from '../../../components/form/Label'
import { NumberInput } from '../../../components/form/NumberInput'
import { TextField } from '../../../components/form/TextField'
import BinIcon from '../../../assets/icon-delete.svg'
function NewItem() {
    const [total, setTotal] = useState(0)
  return (
    <div className='flex flex-col gap-4'>
        <TextField label={"Item Name"}/>

        <div className="flex gap-4">
            <div className="">
                <Label label={"Qty."}/>
                <NumberInput />
            </div>

            <div className="">
                <Label label={"Price"}/>
                <NumberInput />
            </div>

            <div className="">
                <Label label={"Total"}/>
                <NumberInput value={total} isDisabled={true}/>
            </div>
            
            <button className='flex items-end mb-4'><img src={BinIcon} alt="" className='h-4 w-5'/></button>
        </div>
    </div>
  )
}

export default NewItem