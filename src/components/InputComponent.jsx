import React from 'react'
import { Input} from 'antd';
import { UserOutlined} from '@ant-design/icons';

export const InputComponent = () => {
  return (
    <div>
        <Input 
        prefix={<UserOutlined/>}
        maxLength={50}
        allowClear
        placeholder='First Name'>

        </Input>
    </div>
  )
}
