import React from 'react'
import { Button, Slider, TextField, Typography } from '@mui/material'

const Product = (props) => {
  return (
    <div style={{textAlign: "center", marginTop: "15%"}}>
      <TextField variant="filled" label="Product Name" value={props.name}/> <br /><br />
      <TextField variant="filled" label="Image" value={props.age}/> <br /><br />
      <TextField variant="filled" label="Price" value={props.email}/> <br /><br />
      <TextField variant="filled" label="Category" value={props.father}/> <br /><br />
      <Button variant='contained'>ADD</Button>
    </div>
  )
}

export default Product
