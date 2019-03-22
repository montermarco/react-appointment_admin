import React, { Component } from 'react';
import Header from './componentes/Header';
import AddAppointment from './componentes/AddAppointment';
import AppoinmentList from './componentes/AppoinmentList';

class App extends Component {

  state = {
    appointments: []
  }


  //"parsing" appointments from ls to an object or array
  componentDidMount(){
    console.log('Mounted')
    const appointmentsLs = localStorage.getItem('appointments');
    if(appointmentsLs){
      this.setState({
        appointments: JSON.parse(appointmentsLs)
      })
    }
  }

  //local storage can only store strings, that's why we use stringify
  componentDidUpdate(){
    console.log('the state changed')
    localStorage.setItem('appointments', JSON.stringify(this.state.appointments))
  }


  // user spread operator to make a copy of the state
  makeAppointment = (newAppointment) => {
    console.log('we have user submition from AddNewAppointment!!!')
    
    const appointments = [...this.state.appointments, newAppointment];
    this.setState({
      appointments
    })

    console.log(appointments)
  }

  deleteAppointment = id => {
    console.log(id)
    // get state copy
    const actualAppointments = [...this.state.appointments]
    
    // delete element from state
    const appointments = actualAppointments.filter(appointment =>appointment.id !== id );
    
    //update state
    this.setState({
      appointments
    })
  }


  render() {
    return (
      <div className="container">

        <Header title={"Vet appointment administrator"} />

        <div className="row">
          <div className="col-md-6">
           
            <AddAppointment makeAppointment={this.makeAppointment}/>
          
          </div>
          <div className="col-md-6">

            <AppoinmentList 
              appointments={this.state.appointments}
              deleteAppointment={this.deleteAppointment}/>

          </div>
        </div>
      

      </div>
    );
  }
}

export default App;
