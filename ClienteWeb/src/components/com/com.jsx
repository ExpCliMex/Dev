import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/css/demo3/style.css";
import "../styles/fonts/feather-font/css/iconfont.css";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
//import "../styles/vendors/core/core.css";
//import "../styles/vendors/core/core.js";
//import "../styles/vendors/moment/moment.min.js";
//import "../styles/vendors/fullcalendar/main.min.css";
//import "../styles/vendors/fullcalendar/main.min.js";
//import "../styles/vendors/feather-icons/feather.min.js";
//import "../styles/js/template.js";
//import "../styles/js/fullcalendar.js";

class Com extends Component {
    state = {
        
    };

    

    render() {
    return (
        <div className='calendar'>
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        weekends={false}
        events={[
            {
                title: 'Cita',
                start: '2022-09-12T14:30:00',
                extendedProps: {
                  status: 'done'
                }
              },
              {
                title: 'Cirugía',
                start: '2022-09-13T07:00:00',
                backgroundColor: 'green',
                borderColor: 'green'
              }
        ]}
      />
      </div>
    );




    }
}
 
export default Com;