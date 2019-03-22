import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types'


class AddAppointment extends Component {

    state = {
        petName: '',
        petOwnerName: '',
        date: '',
        hour:'',
        symptoms: '',
        error: false
    }

    handleFormSubmit = e => {
        e.preventDefault();
        const petName = this.state.petName;
        const petOwnerName = this.state.petOwnerName;
        const date = this.state.date;
        const hour = this.state.hour;
        const symptoms = this.state.symptoms;
       
        if (petName === '' ||  petOwnerName === '' || date === '' || hour === '' || symptoms === ''){
            this.setState({
                error:true
            })
        } else {
            // we assign all the form values to newAppointment    
            const newAppointment = { petName, petOwnerName, date, hour, symptoms, id: uuid()};
            
            //sends new appointment object to Fathewr component to update the state
            this.props.makeAppointment(newAppointment);

            //resets the form
            e.currentTarget.reset();

            //Remove error
            this.setState({
                error:false
            })
        }
       
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]:value
        })
    }

    render() {
        const missingField = this.state.error;
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Make an appointment</h2>  
                       
                    <form action="" onSubmit={this.handleFormSubmit}>

                        <div className = "form-group row">
                            <label htmlFor="" className="col-sm-4 col-lg-12 col-form-label">Pet name</label>
                                <div className = "col-sm-8 col-lg-10">
                                    <input 
                                        type = "text" 
                                        className = "form-control" 
                                        placeholder = "Pet name"
                                        name="petName" 
                                        value={this.state.petName}
                                        onChange={e => this.handleChange(e)}/>
                                </div>
                        </div>

                        <div className = "form-group row">
                            <label htmlFor="" className = "col-sm-4 col-lg-12 col-form-label">Pet's owner name</label>
                                <div className = "col-sm-8 col-lg-10">
                                    <input 
                                    type = "text" 
                                    className = "form-control" 
                                    placeholder = "Pet's owner id number"
                                    name="petOwnerName" 
                                    value={this.state.petOwnerName}
                                    onChange={e => this.handleChange(e)}/>                                         
                                </div>
                        </div>


                        <div className = "form-group row">
                            <label className = "col-sm-4 col-lg-12 col-form-label"> Date </label>
                                <div className = "col-sm-8 col-lg-4 mb-4 mb-lg-0">
                                    <input 
                                    type = "date" 
                                    className = "form-control"
                                    name="date" 
                                    value={this.state.date}
                                    onChange={e => this.handleChange(e)}/>
                                </div>                            

                            <label className = "col-sm-4 col-lg-2 col-form-label"> Hour </label>
                                <div className = "col-sm-8 col-lg-4">
                                    <input 
                                    type = "time" 
                                    className = "form-control"
                                    name="hour" 
                                    value={this.state.hour}
                                    onChange={e => this.handleChange(e)}/>
                                </div>
                        </div>

                        <div className = "form-group row">
                            <label className = "col-sm-4 col-lg-12 col-form-label"> Symptoms </label>
                                <div className = "col-sm-8 col-lg-10">
                                    <textarea 
                                    className = "form-control"
                                    name="symptoms" 
                                    value={this.state.symptoms}
                                    onChange={e => this.handleChange(e)}/>
                                </div>
                        </div>
                        <div className = "form-group row justify-content-center">
                            <div className = "col-sm-3">
                                <button type = "submit" className = "btn btn-info"> Make appointment </button>
                            </div>
                        </div>

                    </form>

                    { missingField ? <div className="alert alert-danger text-center">All fields are require</div> : ''}

               </div>
            </div>
        );
    }
}


AddAppointment.propTypes = { makeAppointment: PropTypes.func.isRequired }
export default AddAppointment;