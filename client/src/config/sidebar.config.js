
import { DeleteOutline, InsertDriveFileOutlined, MailOutlined, Photo, SendOutlined, StarOutline } from "@mui/icons-material";
import { routes } from "../routes/routes";

export const SIDEBAR_DATA = [
    {
        name: 'inbox',
        title: 'Inbox',
        icon: Photo,
        path: routes.emails.path
    },

    {
        name: 'starred',
        title: 'Starred',
        icon: StarOutline,
        path: routes.emails.path
    },
    {
        name: 'sent',
        title: 'Sent',
        icon: SendOutlined,
        path: routes.emails.path
    },
    {
        name: 'drafts',
        title: 'Drafts',
        icon: InsertDriveFileOutlined,
        path: routes.emails.path
    },
    {
        name: 'bin',
        title: 'Bin',
        icon: DeleteOutline,
        path: routes.emails.path
    },
    {
        name: 'allMail',
        title: 'All Mail',
        icon: MailOutlined,
        path: routes.emails.path
    }
];