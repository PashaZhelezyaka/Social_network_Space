import React from "react";

type StatusProfileType = {
    status: string
}

export class StatusProfile extends React.Component<StatusProfileType> {
    state = {
        editMode: false
    }

    activatedEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivatedEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input autoFocus={true} onBlur={this.deactivatedEditMode.bind(this)}
                               value={this.props.status}/>
                    </div>
                    :
                    <div>
                        <span onDoubleClick={this.activatedEditMode.bind(this)}> {this.props.status}</span>
                    </div>}


            </div>
        )
    }
}