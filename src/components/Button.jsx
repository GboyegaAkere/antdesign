import React from 'react'
import { DatePicker, Button } from 'antd';
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

const ButtonComponent = () => {
    const [loading, setLoading] =React.useState(false)

    const handleClicked = (e) => {
        console.log("button clicked")
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }

  return (
    <div className='flex flex-1 justify-center gap-6 mt-4'>
        <Button 
            icon={<StarFilled/>} 
            type='primary' 
            loading={loading}  
            style={{backgroundColor:"orange", color:"purple"}}
            onClick={handleClicked}>Submit
        </Button>
    </div>
  )
}

export default ButtonComponent
