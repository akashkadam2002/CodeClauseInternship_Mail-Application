import { ArrowBack, Delete } from "@mui/icons-material";
import { Box, Container, Typography, styled } from "@mui/material";
import { useLocation, useOutletContext } from "react-router-dom";
import { emptyProfilePic } from '../constants/constant';
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";

const IconWrapper = styled(Box)({
    padding: 15,

})

const Subject = styled(Typography)({
    fontSize: 22,
    margin: '10px 0 20px 75px',
})

const Indicator = styled(Box)({
    fontSize: 12,
    background: "#ddd",
    color: '#222',
    borderRadius: '4px',
    marginLeft: '6px',
    padding: '2px 4px',
    alignSelf: 'center',
})

const Containe = styled(Box)({
    marginLeft: 15,
    width: '100%',
    '& > div': {
        display: 'flex',
        '& > p > span': {
            fontSize: 12,
            color: '#5E5E5E'
        }
    }
})

const Date = styled(Typography)({
    margin: '0 50px 0 auto',
    fontSize: 12,
    color: '#5E5E5E'
})

const Image = styled('img')({
    borderRadius: '50%',
    width: 40,
    height: 40,
    margin: '5px 10px 0 10px',
    backgroundColor: '#cccdfa'
});


const ViewEmail = () => {

    const { openDrawer } = useOutletContext();

    const { state } = useLocation();
    const { email } = state;

    const moveEmailsToBin = useApi(API_URLS.moveEmailsToBin);

    const deleteEmail = () => {
        moveEmailsToBin.call([email._id]);
        window.history.back();
    }

    return (
        <Box style={openDrawer ? { marginLeft: 230 } : { width: "100%" }}>
            <IconWrapper>
                <ArrowBack fontSize='small' color="action" onClick={() => window.history.back()} />
                <Delete fontSize='small' color="action" style={{ marginLeft: 40 }} onClick={() => deleteEmail()} />
            </IconWrapper>
            <Box>
                <Subject>
                    {email.subject}   <Indicator component="span" >Inbox</Indicator>
                </Subject>
            </Box>
            <Box style={{ display: 'flex' }}>
                <Image src={emptyProfilePic} alt="dp" />
                <Containe >
                    <Box>
                        <Typography style={{ marginTop: 13 }}>{email.name}
                            <Box component="span">&nbsp;&#60;{email.to}&#62;</Box>
                        </Typography>
                        <Date>
                            {(new window.Date(email.date)).getDate()}&nbsp;
                            {(new window.Date(email.date)).toLocaleString('default', { month: 'long' })}&nbsp;
                            {(new window.Date(email.date)).getFullYear()}
                        </Date>
                    </Box>
                    <Typography>{email.body}</Typography>
                </Containe>
            </Box>
        </Box>
    )
}

export default ViewEmail;