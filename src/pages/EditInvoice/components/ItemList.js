import React, { useEffect } from 'react'
import NewItem from './NewItem'
import {AddNewItemButton} from '../../../components/ui/Buttons'

function ItemList({setItemList, itemList, invoice}) {


    const handleAddItem = () => {
        const newItemList = [...itemList, []]
        setItemList(newItemList)
    }

    const handleItemChange = (value, i) => {
        const itemData = [...itemList]
        itemData[i] = value
        setItemList(itemData)
    }

    const handleItemDelete = (i) => {
        const itemData = [...itemList]
        itemData.splice(i, 1)
        console.log(itemData)
        setItemList(itemData)
    }
    

    return (
        <div className='flex flex-col gap-8'>
            <h3 className='text-h3 font-bold'>Item List</h3>
                {
                    itemList.map((item, i) => {
                        return(
                            <NewItem item={item} key={i} onDelete={() => handleItemDelete(i)} onChange={(value) => handleItemChange(value, i)}/>
                        )
                    })
                }
            <div className='mt-10 mx-auto'>
                <AddNewItemButton onClick={handleAddItem}/>
            </div>
        </div>
    )
}

export default ItemList