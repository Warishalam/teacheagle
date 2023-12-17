import React from 'react'
import MUIDataTable from "mui-datatables";

const Manager_dashboard = () => {
  const columns = [
    {
     name: "product",
     label: "Product item",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "description",
     label: "Description",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "weight",
     label: "Weight",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "price",
     label: "Price",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "button",
     label: "ACtion",
     options: {
      filter: true,
      sort: true,
      customBodyRender:()=>{
         return(
            <div style={{display:"flex",gap:"20px"}}>
              <button type='button' className='btn btn-primary btn-sm'>EDIT</button>
              <button type='button' className='btn btn-primary btn-sm'>DELETE</button>
            </div>
         )
      }
     }
    },
    {
     name: "add",
     label: "Add new",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "customer",
     label: "Customer",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "update",
     label: "Update each order status if required",
     options: {
      filter: true,
      sort: true,
     }
    },
   ];
   const data = [
    { product: "Joe James", description: "Test Corp", weight: "Yonkers", price: "NY" ,button:"" ,add:"",customer:"Warish"},
    { product: "John Walsh", description: "Test Corp", weight: "Hartford", price:"", button:"", add:"",customer:"Aarif"},
    { product: "Bob Herm", description: "Test Corp", weight: "Tampa", price: "FL",button:"",add:"",customer:"Shah Rukh" },
    { product: "James Houston", description: "Test Corp", weight: "Dallas", price: "TX", button:"",add:"",},
   ];
   const options = {
    filterType: 'checkbox',
  };
  return (
    <div>
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={{
           
          options: options,
        selectableRows: "none",
        viewColumns: false,
        print: false,
        download: false,
        search: false,
        responsive: "standard",
        filter: false,
        rowsPerPageOptions: "",
        fixedHeader:"true",
        tableBodyMaxHeight: "430px",
        textLabels: {
          body: {
            noMatch: 'Data not available',
          }
        }
         }}
      />
    </div>
  )
}

export default Manager_dashboard