import React from 'react'
import {Select} from "antd"

export const SelectComponent = () => {
    const fruits = ["banana",'orange','mango',"cherry"]
  return (
    <div>
        <p>What is your favorite food</p>
        {/* add mode = "multple" as a prop to select multiple options */}
        <Select placeholder="select fruits?" style={{width:"50%"}}>
            {fruits.map((fruit,index)=>{
                return <Select.Option key={index} valu={fruit}>
                        {fruit}
                </Select.Option>
            })}
        </Select>
    </div>
  )
}
