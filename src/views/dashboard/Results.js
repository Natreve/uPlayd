import { Button, Checkbox, Icon } from "@blueprintjs/core";
import React from "react";
import "./Results.css";

export default class Results extends React.Component {
    render() {
        return (
            <div>
                <div className="menu-bar">
                    <div>
                        <Button minimal={true} text="Import Data" active={true} />
                        <Button minimal={true} text="Change Columns" />
                        <Button minimal={true} text="Manage Diagrmas" />
                    </div>
                    <div className="menu-bar-right">
                        <Button minimal={true} text="Filter" icon="filter" disabled={true} />
                        <Button minimal={true} text="Sort" icon="sort" disabled={true} />
                        <Button minimal={true} text="Delete" icon="trash" />
                        <Button minimal={true} text="Edit" icon="edit" />
                        <Button minimal={true} text="Save Playlist" icon="archive" />
                    </div>
                </div>
                <ResultsTable />
            </div>
        );
    }
}


class ResultsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            models: [{
                goldStar: false,
                play: 1,
                qtr: 1,
                odk: 0,
                dn: 0,
                dist: 10,
                yarn: -40,
                hash: "M",
                playType: "Pass",
                gnls: 67,
                result: "Good",
                offForm: "TWINS",
                offPlay: "CHOICE",
                offStr: "R",
                motionDir: "",
                backfield: "STACK STRONG",
                eff: ""
            },
            {
                goldStar: true,
                play: 1,
                qtr: 1,
                odk: 0,
                dn: 0,
                dist: 10,
                yarn: -40,
                hash: "M",
                playType: "Pass",
                gnls: 67,
                result: "Good",
                offForm: "TWINS",
                offPlay: "CHOICE",
                offStr: "R",
                motionDir: "",
                backfield: "STACK STRONG",
                eff: ""
            },
            {
                highlighted: true,
                goldStar: false,
                play: 1,
                qtr: 1,
                odk: 0,
                dn: 0,
                dist: 10,
                yarn: -40,
                hash: "M",
                playType: "Pass",
                gnls: 67,
                result: "Good",
                offForm: "TWINS",
                offPlay: "CHOICE",
                offStr: "R",
                motionDir: "",
                backfield: "STACK STRONG",
                eff: ""
            }, {
                goldStar: false,
                play: 1,
                qtr: 1,
                odk: 0,
                dn: 0,
                dist: 10,
                yarn: -40,
                hash: "M",
                playType: "Pass",
                gnls: 67,
                result: "Good",
                offForm: "TWINS",
                offPlay: "CHOICE",
                offStr: "R",
                motionDir: "",
                backfield: "STACK STRONG",
                eff: ""
            }]
        };
    }

    render() {
        return (
            <div>
                <table className="results-table bp3-html-table bp3-html-table-striped bp3-table-tripped">
                    <thead>
                        <tr>
                            <td>
                                <Checkbox defaultIndeterminate={true} />
                            </td>
                            <td>
                                #PLAY
                            </td>
                            <td>
                                ODK
                            </td>
                            <td>
                                QTR
                            </td>
                            <td>
                                DN
                            </td>
                            <td>
                                DIST
                            </td>
                            <td>
                                YARD LN
                            </td>
                            <td>
                                HASH
                            </td>
                            <td>
                                PLAY TYPE
                            </td>
                            <td>
                                GN/LS
                            </td>
                            <td>
                                RESULT
                            </td>
                            <td>
                                OFF FORM
                            </td>
                            <td>
                                OFF PLAY
                            </td>
                            <td>
                                OFF STR
                            </td>
                            <td>
                                MOTION DIR
                            </td>
                            <td>
                                BACKFIELD
                            </td>
                            <td>
                                EFF
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.models.map(m => {
                            return <ResultsTableRow model={m} />
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

class ResultsTableRow extends React.Component {
    render() {
        return (
            <tr className={"results-table-row " + (this.props.model.highlighted ? "row-highlighted" : "")}>
                <td className="expander">
                    <Checkbox />
                    <Icon icon="caret-right" />
                </td>
                <td>
                    <Icon icon="star" className={this.props.model.goldStar ? 'gold-star' : 'gray-star'} /> {this.props.model.play}
                </td>
                <td>
                    {this.props.model.odk}
                </td>
                <td>
                    {this.props.model.qtr}
                </td>
                <td>
                    {this.props.model.dn}
                </td>
                <td>
                    {this.props.model.dst}
                </td>
                <td>
                    {this.props.model.yard}
                </td>
                <td>
                    {this.props.model.hash}
                </td>
                <td>
                    {this.props.model.playType}
                </td>
                <td>
                    {this.props.model.gnls}
                </td>
                <td>
                    {this.props.model.result}
                </td>
                <td>
                    {this.props.model.offForm}
                </td>
                <td>
                    {this.props.model.offPlay}
                </td>
                <td>
                    {this.props.model.offStr}
                </td>
                <td>
                    {this.props.model.motionDir}
                </td>
                <td>
                    {this.props.model.backfield}
                </td>
                <td>
                    {this.props.model.eff}
                </td>
            </tr>
        )
    }
}