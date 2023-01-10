import React from 'react'

const Button = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {
  return (
    <button className='bg-pink-400 text-white py-2 px-6 rounded md:ml-8 hover:bg-pink-600 duration-500'>
      {props.children}
    </button>
  )
}

export default Button