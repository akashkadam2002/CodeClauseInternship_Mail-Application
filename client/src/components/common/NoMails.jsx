import styled from "@emotion/styled";
import { Box, Divider, Typography } from "@mui/material";

const Component = styled(Box)({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 50,
    opacity: ".8",
    width: "100%"
})

const StyleDivider = styled(Divider)({
    width: "100%",
    marginTop: 10
})

const NoMails = ({ message }) => {
    return (
        <Component>
            <Typography>{message.heading}</Typography>
            <Typography>{message.subHeading}</Typography>
            <StyleDivider />
        </Component>
    )
}

export default NoMails;