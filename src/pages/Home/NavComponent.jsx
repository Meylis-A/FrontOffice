import SimpleBarScroll from "../../components/third-party/SimpleBar"
import Navigation from "../../layout/MainLayout/Drawer/DrawerContent/Navigation"

const NavComponent=()=>{
    return (
        <SimpleBarScroll
sx={{
    '& .simplebar-content': {
        display: 'flex',
        flexDirection: 'column'
    }
}}
>
<Navigation />
</SimpleBarScroll>
    )
}

export default NavComponent