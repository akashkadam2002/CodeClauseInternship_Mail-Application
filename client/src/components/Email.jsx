import { Star, StarBorder } from "@mui/icons-material";
import { Box, Typography, Checkbox, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";

const Wrapper = styled(Box)({
    padding: '0 0 0 10px',
    background: '#e4ffff',
    display: "flex",
    alignItems: "center",
    cursor: 'pointer',
    '& > div': {
        display: 'flex',
        width: '100%',
    },

    '& > p': {
        fontSize: '14px'
    }
})

const Indicator = styled(Typography)({
    fontSize: '12px !important',
    background: '#ddd',
    color: '#222',
    borderRadius: '4px',
    marginRight: '6px',
    padding: '0 4px'
})

const Date = styled(Typography)({
    marginLeft: 'auto',
    marginRight: 20,
    fontSize: 13,
    color: '#5F6368'
})

const Email = ({ email, selectedEmails, setRefreshScreen, setSelectedEmails }) => {

    const navigate = useNavigate();

    const toggleStarredService = useApi(API_URLS.toggleStarredMails)

    const toggleStarredMails = () => {
        toggleStarredService.call({ id: email._id, value: !email.starred })
        setRefreshScreen(prevState => !prevState);
    }

    const onValueChange = () => {
        if (selectedEmails.includes(email._id)) {
            setSelectedEmails(prevState => prevState.filter(id => id != email._id));
        }
        else {
            setSelectedEmails(prevState => [...prevState, email._id])
        }
    }

    return (
        <Wrapper>
            <Checkbox
                size="small"
                checked={selectedEmails.includes(email._id)}
                onChange={() => onValueChange()}
            />
            {
                email.starred ?
                    <Star fontSize="small" style={{ marginRight: 10, color: 'gold' }} onClick={() => toggleStarredMails()} />
                    :
                    <StarBorder fontSize="small" style={{ marginRight: 10 }} onClick={() => toggleStarredMails()} />

            }

            <Box onClick={() => navigate(routes.view.path, { state: { email: email } })}>
                <Typography style={{ width: 200, overflow: "hidden" }}> {email.name} </Typography>
                <Indicator>Inbox</Indicator>
                <Typography>{email.subject} {email.body && '-'} {email.body}</Typography>
                <Date>
                    {(new window.Date(email.date)).getDate()}
                    {(new window.Date(email.date)).toLocaleString('default', { month: 'long' })}
                </Date>
            </Box>
        </Wrapper>
    )
}

export default Email;


