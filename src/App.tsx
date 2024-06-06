import NavTopBar from "@/components/NavTopBar";
import Editor from "@/components/Editor";
import LeftNavigation from "@/components/LeftNavigation";

function App() {


    return (
        <div>
            <NavTopBar/>
            <LeftNavigation/>
            <div className="fixed top-8 left-56 right-0">
                <Editor/>
            </div>
        </div>
    )
}

export default App
