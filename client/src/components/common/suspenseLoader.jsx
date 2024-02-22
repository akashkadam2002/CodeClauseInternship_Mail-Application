import { CircularProgress } from "@mui/material";
import { Box, Typography } from "@mui/material";

const SuspenseLoader = () => {
    return (
        <Box>
            <CircularProgress />
            <Typography>Loading...</Typography>
        </Box>
    )
}

export default SuspenseLoader;