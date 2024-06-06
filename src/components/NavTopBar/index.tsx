import Logo from "@/assets/logo.png"

const NavTopBar = () => {

    const handleOptionClick = (action: string) => {
        switch (action) {
            case "hide":
                window.ipcRenderer.send('window-min')
                break;
            case 'max':
                window.ipcRenderer.send('window-max')
                break;
            case "close":
                window.ipcRenderer.send('app-exit')
                break;
            default:
                break;
        }
    }
    return <div className="bg-[#f1f4f5] w-screen drag text-white h-8 pl-3 flex items-center justify-between">
        <view className="flex items-center">
            <img src={Logo} alt="" className="h-6"/>
            <view className="text-[#9b9b9b] ml-2">不知道什么笔记</view>
        </view>
        <div className="flex items-center">
            <div onClick={() => handleOptionClick('hide')}
                 className="h-8 flex items-center px-3 text-[#929292] hover:bg-[#e8e8e8] not-drag">
                <i className="iconfont icon-zuixiaohua3 "></i>
            </div>
            <div onClick={() => handleOptionClick('max')}
                 className="h-8 flex items-center px-3 text-[#929292] hover:bg-[#e8e8e8] not-drag">
                <i className="iconfont icon-3zuidahua-1 text-[100rpx"></i>
            </div>
            <div onClick={() => handleOptionClick('close')}
                 className="h-8 flex items-center px-3 text-[#929292] hover:bg-[#c42b1c] hover:text-white not-drag">
                <i className="iconfont icon-ego-close text-[100rpx"></i>
            </div>
        </div>
    </div>
}
export default NavTopBar