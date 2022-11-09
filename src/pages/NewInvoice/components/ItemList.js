import React from 'react'
import NewItem from './NewItem'
import {AddNewItemButton} from '../../../components/ui/Buttons'

function ItemList() {

    return (
        <div className='flex flex-col gap-8'>
            <h3 className='text-h3 font-bold'>Item List</h3>

            <NewItem />
            <NewItem />

            <div className='mt-10 mx-auto'>
                <AddNewItemButton />
            </div>
        </div>
    )
}

export default ItemList