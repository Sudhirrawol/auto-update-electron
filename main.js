let {app,BrowserWindow}=require("electron");

let path=require("path");

let {autoUpdater}=require("electron-updater");

let log =require("electron-log");
log.transports.file.resolvePath=()=>path.join("C:\Users\User\Desktop\electronJsFile\electronjs","logs/main.log");

log.info("Hello Log");
log.warn("Some Problems Appears");

function createWindow(){
    let win=new BrowserWindow({height:600,width:600});
    console.log(path.join(__dirname,"./index.html"));
    win.loadFile(path.join(__dirname,"./index.html"));
}

app.on("ready",()=>{
    createWindow();
    autoUpdater.checkForUpdatesAndNotify();
});
autoUpdater.on("update-available",()=>{
log.info("update-available");
});
autoUpdater.on("checking-for-update",()=>{
    log.info("checking-for-update");
});
autoUpdater.on("download-progress",()=>{
    log.info("download-progress");
});
autoUpdater.on("update-downloaded",()=>{
    log.info("update-downloaded")
})