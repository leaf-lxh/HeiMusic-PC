import React from "react"

import Typography from "@material-ui/core/Typography"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import Button from "@material-ui/core/Button"

import MusicListDisplay from  "./MusicListDisplay"
import ReactDOM from "react-dom"
import "./css/LeftPanel.css"


class LeftPanel extends React.Component{
    constructor(props){
        super(props)
        this.currentSelectedBtnId = null
        this.tid = null
    }
    render(){
        return (
            <>
                <div className="left-panel-logo-wrap">
                    <img className="left-panel-logo" src="logo.jpg"/>
                    <div className="left-panel-appname">HeiMusic!</div>
                    
                </div>
                <ExpansionPanel classes={{root:"panel"}}  elevation={0} expanded={true}>
                    <ExpansionPanelSummary classes={{root: "panel-summary", content: "panel-summary-text"}}>
                        <Typography classes={{root:"panel-summary-text"}}>我的音乐</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails classes={{root:"panel-detail"}}>
                            <Button classes={{root: "panel-button", label: "panel-button-content"}} id={"songlist-690775148"} onClick={this.ListBtnOnclick.bind(this, 690775148)}>我喜欢的音乐</Button>
                            <Button classes={{root: "panel-button", label: "panel-button-content"}} id={2}>下载管理</Button>
                            <Button classes={{root: "panel-button", label: "panel-button-content"}} id={3}>设置</Button>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel classes={{root:"panel"}} elevation={0}  className="panel-music-list" defaultExpanded={true}>
                    <ExpansionPanelSummary classes={{root: "panel-summary", content: "panel-summary-text"}}>
                        <Typography classes={{root:"panel-summary-text"}}>创建的歌单</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails classes={{root:"panel-detail"}} className="panel-music-list-details" >
                            <Button classes={{root: "panel-button", label: "panel-button-content"}} id={"songlist-7561052995"} onClick={this.ListBtnOnclick.bind(this, 7561052995)}>きいおん！</Button>
                            <Button classes={{root: "panel-button", label: "panel-button-content"}} id={"songlist-7450222115"} onClick={this.ListBtnOnclick.bind(this, 7450222115)}>Aqours</Button>
                            <Button classes={{root: "panel-button", label: "panel-button-content"}} id={"songlist-7448767732"} onClick={this.ListBtnOnclick.bind(this, 7448767732)}>μ′s</Button>
                            <Button classes={{root: "panel-button", label: "panel-button-content"}} id={"songlist-7447082410"} onClick={this.ListBtnOnclick.bind(this, 7447082410)}>钢琴</Button>
                            <Button classes={{root: "panel-button", label: "panel-button-content"}} id={"songlist-7429072758"} onClick={this.ListBtnOnclick.bind(this, 7429072758)}>まらしい</Button>
                            <Button classes={{root: "panel-button", label: "panel-button-content"}} id={"songlist-7428205990"} onClick={this.ListBtnOnclick.bind(this, 7428205990)}>VOCALOID</Button>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </>
        )
    }

    componentDidMount(){
        ReactDOM.render(
            <MusicListDisplay tid={this.tid}/>,
            document.getElementById("display-browser")
        )
    }

    ListBtnOnclick(id){
        if (id === this.currentSelectedBtnId){
            return
        }
        if (this.currentSelectedBtnId !== null)
        {
            let selectedBtn = document.getElementById("songlist-" + this.currentSelectedBtnId)
            selectedBtn.classList.remove("panel-button-selected")
        }
        
        let clickedBtn = document.getElementById("songlist-" + id)
        clickedBtn.classList.add("panel-button-selected")
        this.currentSelectedBtnId = id
        
        ReactDOM.unmountComponentAtNode(document.getElementById("display-browser"))
        ReactDOM.render(
            <MusicListDisplay tid={id}/>,
            document.getElementById("display-browser")
        )
        
    }

    RenderMusicListDisplay(tid){
        this.setState({
            tid:tid
        })        
    }
}

export default LeftPanel