import React from "react"
import "./css/AppMainFrame.css"

import LeftPanel from "./LeftPanel"
import TopSystemMenu from "./TopSystemMenu"
import MusicPlayer from "./MusicPlayer"

class AppMainFrame extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
        <div className="app-main-frame">
            <div className="left-control-panel">
                <LeftPanel/>
            </div>
            <div className="display-page">
                <TopSystemMenu/>
                <div id="display-browser"/>
                <div id="music-player">
                    <MusicPlayer/>
                </div>
                <div id="music-disk-page" style={{display:"hidden"}}/>
            </div>
        </div>
        )
    }
}

export default AppMainFrame