import React from 'react'
import {Table} from "antd"

const TableComponent = () => {
    const data =[
        {
            name:"Goyega",
            age:23,
            address:"no 3 southgate",
            key:"1"
        },
        {
            name:"Ariyo",
            age:20,
            address:"no 1 southgate",
            key:"2"
        },
        {
            name:"Funmilola",
            age:13,
            address:"no 2 southgate",
            key:"3"
        },
        
    ]

    const columns =[

        {
            title:"Name",
            dataIndex:"name",
            key:"key"
        },

        {
            title:"Age",
            dataIndex:"age",
            key:"key"
        },

        {
            title:"Address",
            dataIndex:"address",
            key:"key"
        },
    ]

  return (
    <div>
      <Table 
      className='w-[500px] flex justify-center'
        dataSource={data}
        columns={columns}
      >

      </Table>
    </div>
  )
}

export default TableComponent
