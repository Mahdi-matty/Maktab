import SideNav from "../compoenents/sidenav"

export default function ProfilePage(){
    const token = localStorage.getItem('token')
    return (
        <>
        <SideNav />
        </>
    )
}