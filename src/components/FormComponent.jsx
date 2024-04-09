import React from 'react'
import {Form, Input,Button, message} from "antd"

const FormComponent = () => {
    const onFinish = (e) =>{
        console.log(e)
        setTimeout(() => {
            message.success("Login successful")
        }, 1000);
    }

  return (
    <div className='flex justify-center mt-10'>
      <Form className='w-[400px]' onFinish={onFinish}>
        <Form.Item label="Username" name='username'>
            <Input placeholder='Username'></Input>
        </Form.Item>

        <Form.Item label="Password" name='password'>
            <Input.Password placeholder='Password'></Input.Password>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>LOGIN</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default FormComponent
