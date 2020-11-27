import React from "react";
import Layout from "components/layout"
import SEO from "components/seo"
import "./TeamSchedule.css";

import TEMP_LOGO from "./temp_logo.svg";
import { Button, Icon, Tree } from "@blueprintjs/core";
import TeamHeader from "../TeamHeader";

class Sidebar extends React.Component {
    render() {

        let years = [];
        for (let year = 2020; year >= 2009; year--) {
            years.push({
                label: `${year} - ${year + 1}`,
                icon: "box",
                childNodes: [],
                isSelected: year == 2020
            })
        }

        return (
            <div className="ts-sidebar">
                <div className="ts-sidebar-seasons">
                    <div className="ts-sidebar-seasons-head">
                        <div>Seasons</div>
                        <Button icon="add" minimal={true} />
                    </div>
                    <Tree contents={years} className="ts-sidebar-years-list" />
                </div>
            </div>
        );
    }
}

class Team extends React.Component {
    render() {
        return (
            <div className={"team-row " + (this.props.selected ? "team-row-selected" : "")}>
                <img src={TEMP_LOGO} />
                <div>Sanger</div>
                <div>Satuday, Aug 8 at 10:00am</div>
                <div>W, 25 - 14</div>
            </div>
        );
    }
}

class Teams extends React.Component {
    render() {
        let teams = [];
        teams.push(<Team selected={true} />);
        for (let index = 0; index < 50; index++) {
            teams.push(<Team />);
        }
        return (
            <div className="ts-teams">
                <div className="ts-teams-actions">
                    <div className="ts-team-actions-year">
                        2020 - 2021
                    </div>
                    <div className="ts-team-actions-current">
                        <Icon icon="tick-circle" /> Current Session
                    </div>
                    <div className="ts-team-actions-buttons">
                        <Button text="Add Event" minimal={true} />
                    </div>
                </div>
                <div>
                    {teams}
                </div>
            </div>
        );
    }
}

export default class TeamSchedule extends React.Component {
    render() {
        return (
            <Layout>
                <SEO title="Home" />
                <div className="ts-wrapper">
                    <TeamHeader />
                    <div className="ts-content">
                        <Sidebar />
                        <Teams />
                    </div>
                </div>
            </Layout>
        );
    }
}