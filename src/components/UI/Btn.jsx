import React from 'react'
import pencilIcon from '../../assets/images/pencil.svg'
import { useNotesStore } from '../../store'

const Btn = () => {
    const setModal = useNotesStore(state => state.setModal)
  return (
    <button className='addBtn' onClick={() => setModal(true)}>
        <img src={pencilIcon} alt="" />
    </button>
  )
}

export default Btn
