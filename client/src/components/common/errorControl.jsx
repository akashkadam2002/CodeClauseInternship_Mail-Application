import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";


const errorControl = () => {
    return (
        <Box style={{ marginLeft: 230 }}>
            <Typography>
                There was an error loading this page
            </Typography>
        </Box>
    )
}

export default errorControl;