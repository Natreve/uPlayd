import { Tree } from "@blueprintjs/core";
import React from "react";
import "./Seasons.css";

export default class Seasons extends React.Component {
    render() {
        return (
            <div className="seasons-wrapper">
                <h3 className="seasons-header">2020 Seasons</h3>
                <Tree contents={[
                    {
                        label: "Sherman High School",
                        icon: "box",
                        isExpanded: true,
                        childNodes: [
                            {
                                label: "Oponnent Scout",
                                icon: "box"
                            },
                            {
                                label: "Game Footage",
                                icon: "box"
                            }
                        ]
                    }, {
                        label: "Plainview High School",
                        icon: "box",
                        childNodes: []
                    },
                    {
                        label: "Mineral Wells High S",
                        icon: "box",
                        childNodes: []
                    },
                    {
                        label: "Bridge High School",
                        icon: "box",
                        childNodes: []
                    },
                    {
                        label: "Celina High School",
                        icon: "box",
                        childNodes: []
                    },
                    {
                        label: "Argyle High School",
                        icon: "box",
                        childNodes: []
                    },
                    {
                        label: "Sherman High School",
                        icon: "box",
                        childNodes: []
                    }
                ]} />
            </div>
        );
    }
}