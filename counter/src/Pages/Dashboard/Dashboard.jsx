import React ,{useEffect}from 'react'
import App from '../../App'

export default function Dashboard() {

    useEffect(() => {
    console.log("first")
    }, [])

    const getDemo = () => {
      console.log("demo")
    }
    
  return (
    <div className='Dashboard'>
      <App onTopClick={getDemo} name="DASHBOARD" subContent="This is dashboard" > 
        <p>Dasboardssssssssss</p>
        <p>df</p>
        <p>sdfd</p>
        <p>df</p>
        <p>Dasboardssssssssss</p>
        <p>Dasboardssssssssss</p>
        <p>Dasboardssssssssss</p>
        <p>Dasboardssssssssss</p>
        <p>Dasboardssssssssss</p>
      
      </App>
      
    </div>
  )
}
