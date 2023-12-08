import React, {useEffect} from 'react'

interface IHeadInterface{
    title:string;
    description:string;
}

const Head = ({title, description}: IHeadInterface) => {

  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
  
  return (
    <></>
  )
}

export default Head