import React from 'react'
import { QuestionMark } from './icons'
import Button from './Button'

const NeedHelp = () => {
  return (
    <div className='flex flex-col items-center gap-4 px-[41px] py-6 bg-white rounded shadow'>
        <div className="flex flex-col items-center gap-1">
            <QuestionMark />
            <h3 className="text-sm font-semibold bg-cta-gradient bg-clip-text text-transparent">Need help?</h3>
            <p className="text-[12px] text-[#666666] font-medium text-center">We're readily available to provide help</p>
        </div>
        
        <Button variant="outline" colorScheme="primary">Get help</Button>
    </div>
  )
}

export default NeedHelp