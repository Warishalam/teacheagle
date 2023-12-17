import React from 'react'

const SignUp = () => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <form action="">
      <div className='row'>
        <div className='col-12' style={{textAlign:"left"}}>
           <label htmlFor="">Name</label>
           <input type="text" className='form-control'/>
        </div>
      </div>
      <div className='row'>
         <div className='col-12' style={{textAlign:"left"}}>
            <label htmlFor="">Email</label>
            <input type="text" className='form-control' />
         </div>
      </div>
      <div className='row'>
         <div className='col-12' style={{textAlign:"left"}}>
           <label htmlFor="">Address</label>
           <input type="text" className='form-control'/>
         </div>
      </div>
      <div className='row'>
         <div className='col-12' style={{textAlign:"left"}}>
         <label htmlFor="">Password</label>
           <input type="text" className='form-control'/>
         </div>
      </div>
      </form>
    </div>
  )
}

export default SignUp