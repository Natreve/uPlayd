import React from "react";
import Layout from "components/layout"
import SEO from "components/seo"
import TeamHeader from "../TeamHeader";
import "./TeamManage.css"
import { Button, Checkbox } from "@blueprintjs/core";

export class AthleteRow extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    <Checkbox />
                </td>
                <td>
                    {this.props.no}
                </td>
                <td>
                    {this.props.first}
                </td>
                <td>
                    {this.props.last}
                </td>
                <td>
                    {this.props.role}
                </td>
                <td>
                    {this.props.gradYear}
                </td>
                <td>
                    {this.props.position}
                </td>
                <td>
                    {this.props.date}
                </td>
                <td>
                    {this.props.time}
                </td>
            </tr>
        );
    }
}

export class Atheletes extends React.Component {
    render() {
        let athletes = [];
        for (let index = 0; index < 50; index++) {
            athletes.push(
                <AthleteRow no={index + 1} first="Dummy" last="Name"
                    role="Dummy Role" gradYear="2023-SO" position="WR" date="2020-2021" time={index % 5 == 0 ? "00:35:00" : ""} />
            );
        }

        return (
            <div>
                <table className="athletes-table bp3-html-table bp3-html-table-striped bp3-table-tripped">
                    <thead>
                        <tr>
                            <td>
                                <Checkbox defaultIndeterminate={true} disabled={true} />
                            </td>
                            <td>
                                #
                            </td>
                            <td>
                                FIRST
                            </td>
                            <td>
                                LAST
                            </td>
                            <td>
                                ROLE
                            </td>
                            <td>
                                GRAD YEAR
                            </td>
                            <td>
                                POSITION
                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {athletes}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default class TeamManage extends React.Component {
    render() {
        return (
            <Layout>
                <SEO title="Home" />
                <div className="tm-wrapper">
                    <TeamHeader />
                    <div className="tm-content">
                        <div className="menu-bar">
                            <div>
                                <Button minimal={true} text="All Team" />
                                <Button minimal={true} text="Athletes" active={true} />
                                <Button minimal={true} text="Coaches" />
                                <Button minimal={true} text="Administrators" />
                            </div>
                            <div className="menu-bar-right">
                                <Button minimal={true} text="Filter" icon="filter" disabled={true} />
                                <Button minimal={true} text="Sort" icon="sort" disabled={true} />
                                <Button minimal={true} text="Message Atheletes" icon="envelope" />
                                <Button minimal={true} text="Export" icon="export" />
                                <Button minimal={true} text="Add Members" icon="add" className="btn-add-member"/>
                            </div>
                        </div>
                    </div>
                    <Atheletes />
                </div>
            </Layout>
        );
    }
}