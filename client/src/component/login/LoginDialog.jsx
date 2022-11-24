import { useState,useContext } from 'react';
import { Box,Button, Dialog, TextField, Typography ,styled} from '@mui/material';

import { authenticateSignup } from '../../service/api.js';
import { DataContext } from '../../context/DataProvider.jsx';
const Component = styled(Box)`
display:flex;
height:70vh;
width:80vh;
`;
const Image = styled(Box)`
  background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:83%;
width:20%;
padding:45px 35px;
& > p,& > h5{
    color:#FFFFFF;

    font-weight:600;
}
`;
const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
& > div,& > button,& > p{
    margin-top:20px;
}
`
const LoginButton = styled(Button)`
text-transform:none;
background:#FB641B;
color:#fff;
height:48px;
border-radius:3px;
`
const RequestOTP = styled(Button)`
text-transform:none;
background:#fff;
color:#3874f0;
height:48px;
border-radius:3px;
box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`
const Text = styled(Typography)`
font-size:12px;
color:#878787;
`
const CreateAccount = styled(Typography)`
font-size:14px;
text-align:center;
color:#2874f0;
cursor:pointer;
`
const accountInitialValue = 
{
    login: {
        view: 'login',
        heading: 'Login',
        subHeading:'Get access to your Orders,Wishlist and Recommendations'
    },
    signup:
    {
        view: 'Signup',
         heading: 'Signup',
        subHeading:'Signup With your mobile number to get started'
    }
}
const LoginDialog = ({open,setOpen }) =>
{
    const [signup,setSignup] = useState();
    const [account, setAccount] = useState(accountInitialValue.login);
    const { sAccount } = useContext(DataContext);
    const toggleSignup = () =>
    {
        setAccount(accountInitialValue.signup);
    }
    const onInputChange = (e) =>
    {
        setSignup({ ...signup,[e.target.name]: e.target.value })
        console.log(signup);
    }

    const handleClose = () => {
        setOpen(false);
        setAccount(accountInitialValue.login)
    };
    const signupUser = async () =>
    {
        let response = await authenticateSignup(signup)
        if (!response)
            return;
        handleClose();
        sAccount(signup.firstname);
    
    }
    return(
        <Dialog open={open} onClose={handleClose}>
            <Component>
                <Image>
                    <Typography variant="h5">{account.heading}</Typography>
                    <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                </Image>
                {
                    account.view ==='login'?
                    <Wrapper>
                        <TextField variant='standard' label="Enter Email/Mobile Number" />
                        <TextField variant='standard' label="Enter Password" />
                        <Text>By continuing,you agree to Flipkart's terms of use and Privacy Policy</Text>
                        <LoginButton>Login</LoginButton>
                        <Typography style={{ textAlign: 'center' }}>OR</Typography>
                        <RequestOTP>Request OTP</RequestOTP>
                        <CreateAccount onClick={()=>toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="firstname" label="Enter FirstName" />
                        <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="lastname" label="Enter LastName" />
                        <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="username" label="Enter Username" />
                        <TextField variant='standard'onChange={(e)=>onInputChange(e)} name="email"  label="Enter Email" />
                        <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="password" label="Enter Password" />
                        <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="phone" label="Enter Phone" />
                        <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
                    </Wrapper>
}

            </Component>
        </Dialog>
    )
}

export default LoginDialog;