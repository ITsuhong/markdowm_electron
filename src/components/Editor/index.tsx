import {useState} from 'react';
import {MdEditor} from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

const Editor = () => {
    const [text, setText] = useState('hello md-editor-rt！');
    return <div className="h-screen pr-1 w-full">
        <MdEditor modelValue={text} onChange={setText} footers={[]} className="h-full"/>
    </div>
}
export default Editor;