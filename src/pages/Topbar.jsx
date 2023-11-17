import { Box } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Topbar = () => {
  return (
    <Box  position={'fixed'} zIndex={5}  height={40} width={'100%'} backgroundColor='#E9EEEE' display={'flex'} justifyContent={'space-between'} alignItems={'center'} px={{lg:"2rem",xs:'1rem'}}>
        <Box fontSize={{lg:16,xs:13}}>
          (000)999-898-999 | info@triso.com
        </Box>
        <Box display={'flex'} gap={2} alignItems={'center'}>
          <Box><LinkedInIcon fontSize="small" sx={{ color:"#2D2727"}}/></Box>
          <Box><InstagramIcon fontSize="small" sx={{ color:"#2D2727"}}/></Box>
          <Box><TwitterIcon fontSize="small" sx={{ color:"#2D2727"}}/></Box>
          |
          <Box display={'flex'}><Box fontSize={15} mt={.2}> EUR</Box> <KeyboardArrowDownIcon fontSize="small" /></Box>
        </Box>
      </Box>
  )
}

export default Topbar