import React from 'react'

const MenuItem = (props) => {
    return (
      
        <React.Fragment>
        
            <div className="flex justify-between items-center">
                <span className='mx-2'>    <p className='font-cormant font-bold text-3xl text-golden'>{props.title}</p>       </span>
                <span className='mx-2'>    <hr className='w-32'/>       </span>
                <span className='mx-2'>    <p className='font-cormant font-semibold text-xl'>{props.price}</p>       </span>
            
            </div>

            <div className="flex justify-between mt-2 mb-8">
                <span className='mx-2'>    <p className='font-poppins font- text-xl'>{props.tags}</p>       </span>
    
            </div>
            
        </React.Fragment>
      
  )
}

export default MenuItem