import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Appointment extends Component {


    deleteAppointment = () => {
        this.props.deleteAppointment(this.props.info.id)
    }


    render() {

        const {petName, petOwnerName, date, hour, symptoms} = this.props.info;

        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{petName}</h3>
                    <p className="card-text"><span>Owner: </span>{petOwnerName}</p>
                    <p className="card-text"><span>Date: </span>{date}</p>
                    <p className="card-text"><span>Hour: </span>{hour}</p>
                    <p className="card-text"><span>Symptons: </span></p>
                    <p className="card-text">{symptoms}</p>

                    <button
                    onClick={this.deleteAppointment}
                    className="btn btn-danger"
                    >
                    Delete</button>
                </div>
            </div>
        );
    }
}

Appointment.propTypes = {
    info: PropTypes.shape({
        petName:PropTypes.string.isRequired,
        PetOwnerName:PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        hour: PropTypes.string.isRequired,
        symptons: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }),
    deleteAppointment:PropTypes.func.isRequired
}

export default Appointment;