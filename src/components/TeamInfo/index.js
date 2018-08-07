import React, { Component } from 'react';

class TeamInfo extends Component {

    componentDidMount() {
        this.props.getTeamInfo(this.props.match.params.id);
    }
    render() {
        return (
            <div>
                {
                    console.log(props)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.teamInfo.team
    }
};
const mapDisPatchToProps = (dispatch) => {
    return {
        getTeamInfo(id) {
            const action = getTeam(id);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(TeamInfo);