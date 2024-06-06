import {useState} from "react"
import {Dropdown} from "antd"
import classNames from "classnames"

const LeftNavigation = () => {
    const [selectedType, setSelectType] = useState(0)
    const handleOptionClick = (action: string) => {
        switch (action) {
            case 'file':
                window.ipcRenderer.send('open-file')
                break;
            default:
                break
        }
    }
    return <div className=" border-r-2 border-[#e8e8e8] fixed top-8 bottom-0 w-56 bg-[#fafafa]">
        <div className="flex items-center justify-between px-2 ">
            <Dropdown
                menu={{
                    items: [{
                        key: '1',
                        label: (
                            <a onClick={() => handleOptionClick('file')} target="_blank" rel="noopener noreferrer">
                                打开...
                            </a>
                        ),
                    }, {
                        key: '2',
                        label: (
                            <a target="_blank" rel="noopener noreferrer">
                                打开文件夹
                            </a>
                        ),
                    },
                        {
                            key: '3',
                            label: (
                                <a target="_blank" rel="noopener noreferrer">
                                    另存为
                                </a>
                            ),
                        }],
                }}
                placement="bottomLeft">
                <div className="not-drag text-sm px-2 py-1 rounded-mds hover:bg-[#f3f3f3] ">文件</div>
            </Dropdown>

            <div className="not-drag text-sm px-2  py-1 rounded-mds hover:bg-[#f3f3f3] ">主题</div>
            <div className="not-drag text-sm px-2  py-1 rounded-mds hover:bg-[#f3f3f3] ">换肤</div>
            <div className="not-drag text-sm px-2  py-1 rounded-mds hover:bg-[#f3f3f3] ">帮助</div>
        </div>
        <div className="p-3 flex items-center justify-between">
            <div onClick={() => setSelectType(0)}
                 className={classNames("w-1/2 py-2  text-center not-drag border-b-4 border-transparent", {"font-black border-b-black": selectedType === 0})}>文件
            </div>
            <div onClick={() => setSelectType(1)}
                 className={classNames("w-1/2 py-2  text-center not-drag border-b-4 border-transparent", {"font-black border-b-black": selectedType === 1})}>大纲
            </div>
        </div>

    </div>
}
export default LeftNavigation