
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { AccountCircleOutlined, AppsOutlined, HelpOutlineOutlined, Menu as MenuIcon, Search, SettingsOutlined, Tune } from '@mui/icons-material';
import styled from '@emotion/styled';
import { gmailLogo } from '../constants/constant';
import { InputBase } from '@mui/material';
import { Box } from '@mui/material';

const StyleAppBar = styled(AppBar)({
    background: "#D3D3D3",
    boxShadow: "none"
})

const SearchWrapper = styled(Box)({
    background: "#EAF1FB",
    marginLeft: 50,
    borderRadius: 10,
    minWidth: 700,
    maxWidth: 720,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    " & > div": {
        width: "100%",
        padding: "0 12px"
    }
});

const OptionWrapper = styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "end",
    gap: 20
})

const Header = ({ toggleDrawer }) => {

    return (
        <StyleAppBar position='static'>
            <Toolbar>
                <MenuIcon color='action' onClick={toggleDrawer} />
                <img src={gmailLogo} alt="Logo" style={{ width: 110, marginLeft: 15 }} />
                <SearchWrapper>
                    <Search color='action' />
                    <InputBase
                        placeholder='Search mail' />
                    <Tune color='action' />
                </SearchWrapper>

                <OptionWrapper>
                    <HelpOutlineOutlined color='action' />
                    <SettingsOutlined color='action' />
                    <AppsOutlined color='action' />
                    <AccountCircleOutlined color='action' />
                </OptionWrapper>
            </Toolbar>
        </StyleAppBar>


    )
}

export default Header;