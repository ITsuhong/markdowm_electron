import {ipcMain, app, dialog} from "electron";
import fs from "fs";

export default function () {
    ipcMain.on('app-exit', () => {
        // 所有窗口都将立即被关闭，而不询问用户，而且 before-quit 和 will-quit 事件也不会被触发。
        app.exit()
    })
    ipcMain.on('window-max', () => {
        if (global.mainWindow.isMaximized()) {
            global.mainWindow.restore()
        } else {
            global.mainWindow.maximize()
        }
    })
    ipcMain.on('window-min', () => {
        global.mainWindow.minimize()
    })
    ipcMain.on('save-file', (_, args) => {
        dialog.showSaveDialog({
            title: '保存文件',
            defaultPath: 'test.md',
            filters: [
                {name: 'markdown', extensions: ['md']}
            ]
        }).then((res: Electron.SaveDialogReturnValue) => {
            // console.log(r)
            if (res.filePath) {
                fs.writeFileSync(res.filePath, args)
            }


        })
    })

    ipcMain.on("open-file", () => {
        dialog.showOpenDialog({
            title: '请选择文件',
            filters: [
                {name: "", extensions: ['md']}
            ]
        }).then((res: Electron.OpenDialogReturnValue) => {
            // console.log(res)
            const result = fs.readFileSync(res.filePaths[0], 'utf-8');
            mainWindow.webContents.send('fileValue', result)
        })
    })
}