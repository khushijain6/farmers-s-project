import React from 'react'
import './LoginRegister.css'

import Button from '@mui/material/Button';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HowToRegIcon from '@mui/icons-material/HowToReg';
function LoginRegister() {
  return (
    <>
      <div className='heading'>
        <div>LOGIN/REGISTRATION</div>    
      </div>
      <div className='image-box'>
        <div className='imagebox'>
          <ManageAccountsIcon  sx={{fontSize:{xs:180,sm:250,md:330,lg:340,xl:340}}}/>
          <br/>
          <div className='ok'>
            <Button variant="contained"  sx={{bgcolor:"#55d483", marginLeft:{xs:2,sm:5,md:10,lg:10,xl:10} ,padding: "12px 35px",fontSize:"17px"}} >
                  Register 
            </Button>
          </div>
        </div>

        <div className='imagebox'>
          <HowToRegIcon sx={{fontSize:{xs:180,sm:250,md:330,lg:340,xl:340}}}/>
          <br/>
          <div className='ok'>
            <Button variant="contained"  sx={{bgcolor:"#55d483", marginLeft:{xs:4,sm:5,md:10,lg:10,xl:10} ,padding: "12px 35px",fontSize:"17px"}} >
                  Login
            </Button>
          </div>
       
          
        </div>

      </div>
    </>
  )
}

export default LoginRegister