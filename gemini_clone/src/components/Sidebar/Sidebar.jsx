import {assets} from "../../assets/assets"
const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="top">
        <img src={assets.menu_icon} alt="" />
        <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
            <p>New Chat</p>
        </div>
    </div>
</div>
  )
}

export default Sidebar