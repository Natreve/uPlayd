
import { Button } from "@blueprintjs/core";
import React from "react";
import "./TeamHeader.css";

import TEMP_LOGO from "./temp_logo.svg";

export default class TeamHeader extends React.Component {
    render() {
        return (
            <div className="team-header-wrapper">
                <div className="team-selector">
                    <img src={TEMP_LOGO} height={48} />
                    <div className="team-name">LW Football</div>
                    <Button icon="caret-down" minimal="true" />
                </div>
                <div className="teams-header-actions">
                    <Button rightIcon="caret-down" text="Video" minimal={true} disabled={true} />
                    <Button rightIcon="caret-down" text="Trade" minimal={true} disabled={true} />
                    <Button rightIcon="caret-down" text="Team" minimal={true} />
                </div>
            </div>
        );
    }
}