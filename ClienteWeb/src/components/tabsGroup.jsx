import React, { Component } from 'react';

class TabsGroup extends Component {
    state = {  } 
    render() { 
        return (
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-line-tab">
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
          <label class="btn btn-outline-primary" for="btnradio1" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Búsqueda</label>
          <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
          <label class="btn btn-outline-primary" for="btnradio2" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">Dar de alta</label>
        </div>
  </div>
        );
    }
}
 
export default TabsGroup;