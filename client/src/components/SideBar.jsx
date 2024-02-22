import { Drawer } from "@mui/material";
import styled from '@emotion/styled';
import SideBarContent from "./SideBarContent";

const SideBar = ({ openDrawer }) => {

    return (
        <Drawer
            anchor="left"
            open={openDrawer}
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true,
            }}
            variant="persistent"
            sx={{
                '& .MuiDrawer-paper': {
                    width: 222,
                    borderRight: 'none',
                    background: '#D3D3D3',
                    marginTop: '64px',
                    height: 'calc(100vh - 64px)'
                },
            }}
        >
            <SideBarContent />
        </Drawer>
    )
}

export default SideBar;
