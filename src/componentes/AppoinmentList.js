import React, { Component } from 'react';
import Appointment from './Appointment';
import PropTypes from 'prop-types'


class AppoinmentList extends Component {

    render() {
        
        const appointments = this.props.appointments;
        const message = Object.keys(appointments).length === 0 ? "There are no appointments" : "Appointment list"

        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{message}</h2>

                    <div className="lista-citas">

                        {Object.keys(this.props.appointments).map(appointment => (
                            <Appointment
                                key={appointment}
                                info={this.props.appointments[appointment]} 
                                deleteAppointment={this.props.deleteAppointment}/>
                        ))}
                    
                    </div>

                </div>
            </div>
        );
    }
}


AppoinmentList.propTypes = { 
    appointments:PropTypes.array.isRequired,
    deleteAppointment:PropTypes.func.isRequired
}

export default AppoinmentList;