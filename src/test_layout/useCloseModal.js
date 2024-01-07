import React, { useEffect } from 'react'
import { useModal } from './zustand'

function useCloseModal(statusClose) {

    const {CloseAllModal} = useModal(state=>state)
    
    useEffect(()=>{

        if(statusClose){
            CloseAllModal()
        }
    },[statusClose , CloseAllModal])

  return true
}

export default useCloseModal