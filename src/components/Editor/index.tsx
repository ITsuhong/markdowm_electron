import {useState, useEffect, useRef} from 'react';
import {MdEditor} from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

const Editor = () => {
    const [text, setText] = useState('');
    const textRef = useRef(text);
    const saveFileHandler = () => {
        window.ipcRenderer.send('save-file', textRef.current);
    };
    useEffect(() => {
        textRef.current = text;
    }, [text]);
    useEffect(() => {
        window.ipcRenderer.on('save-file', saveFileHandler)
        window.ipcRenderer.on('fileValue', (_, args) => {
            setText(args)
        })
    }, []);

    return <div className="h-screen pr-1 w-full">
        <MdEditor modelValue={text} onChange={(modelValue) => {
            setText(modelValue);
        }} footers={[]} className="h-full"/>
    </div>
}
export default Editor;