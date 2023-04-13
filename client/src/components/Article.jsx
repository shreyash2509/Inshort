import {Box,Card,CardContent,Button,Typography,styled,Grid,Paper} from '@mui/material';


const CardBox=styled(CardContent)`
padding:8px;
padding-bottom:4px!important;

`
const Text=styled(Typography)`
font-weight:300;
`

const Image=styled('img')({
    height:268,
    width:'88%',
    objectFit:'cover',
    borderRadius:5,
})

const Item=styled(Paper)`
box-shadow:none;
`
const Component=styled(Card)`
margin-bottom:20px,
box-shadow:0 2px 5px 0 rgb(0 0 0 /16%),0 2px 10px 0 rgb(0 0 0 /12%);
`

const RightContainer=styled(Grid)`
margin:5px 0 0 -25px;
display:flex;
flex-directioon:column;
`
const Description=styled(Typography)`
line-height:22px;
`
const MainCont=styled(Grid)`
display:flex;
flex-wrap:wrap;
`

const Article=({data})=>{
    return (
        <p>
            <Component>
                <CardBox>
                    <Grid container>
                        <Grid Item lg={5} sm={5} xs={5}>
                                <Image src={data.url} alt={data.title} />
                        </Grid>
                        <RightContainer Item lg={7} md={7} sm={7} xs={12}>
                            <Item>
                            <Text variant="h4">{data.title}</Text>
                            <b>Short</b> by {data.author}/{new Date(data.timestamp).toDateString()}
                            <Description>{data.description}</Description>
                            <Typography>Read more<a href={data.link}> {data.publisher}</a></Typography>
                            </Item>
                        </RightContainer>
                    </Grid>
                </CardBox>
            </Component>
        </p>
    )
}



export default Article;