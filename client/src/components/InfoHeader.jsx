import {Typography, Box , styled} from '@mui/material';


const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

const Container=styled(Box)`
background:#f44336;
color:#fff;
display:flex;
align-items: center;
justify-content: space-around;
border-radius:10px;
height:48px,
margin-bottome:30px;
`
const Image=styled("img")({
    height:34,
    marginTop:10,
    marginBottom:10
})

const Text=styled(Typography)`
font-size:14px;
font-weight:300;
margin-left:10px;
`

const InfoHeader=()=>{
    return( 
        <Container>
            <Text>
                for best experience use in smartphone
            </Text>
            <Box style={{display:'flex'}}>
                <Image src={appleStore} alt="ios" />
                <Image src={googleStore} alt="android" />
            </Box>
        </Container>
    )
}

export default InfoHeader;