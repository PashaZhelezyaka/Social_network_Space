import React, {ChangeEvent} from "react";

type StatusProfileType = {
    status: string
    updateStatus: (status: string) => string
}

export class StatusProfile extends React.Component<StatusProfileType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activatedEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivatedEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate (prevProps:StatusProfileType) {
       if (prevProps.status !== this.props.status) {
           this.setState({
               status: this.props.status
           })
       }
    }

    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivatedEditMode}
                               value={this.state.status}/>
                    </div>
                    :
                    <div>
                        <span onDoubleClick={this.activatedEditMode}> {this.props.status || 'NO STATUS'}</span>
                    </div>}


            </div>
        )
    }
}