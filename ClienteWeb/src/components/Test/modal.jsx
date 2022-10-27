import React from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



class Modal extends React.Component {
  state = {};
  render() {
    const MySwal = withReactContent(Swal)

MySwal.fire({
  title: <strong>Good job!</strong>,
  html: <i>You clicked the button!</i>,
  icon: 'success'
})


    return (
      <React.Fragment>
        <div class="page-content">
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  modal 1
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Hola! soy un titulo</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="btn-close"></button>
      </div>
      <div class="modal-body">
      Hola! yo soy el body
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                      <button type="button" class="btn btn-primary">Botón opcional</button>
      </div>
    </div>
  </div>
</div>

<br />
<br />
<br />


<div class="example">
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                modal 2
              </button>

              <div class="modal fade" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalCenterTitle">Hola! soy un titulo</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="btn-close"></button>
                    </div>
                    <div class="modal-body">
                      Hola! yo soy el body
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                      <button type="button" class="btn btn-primary">Botón opcional</button>
                    </div>
                  </div>
                </div>
              </div>
						</div>

<br />
<br />
<br />
<br />
<div class="dropdown">
	<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		Dropdown button
	</button>
	<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
		<a class="dropdown-item" href="#">Action</a>
		<a class="dropdown-item" href="#">Another action</a>
		<a class="dropdown-item" href="#">Something else here</a>
	</div>
</div>
</div>

<br />
<br />
<br />
<br />

<button onClick={()=>MySwal.fire()}>asdfasdf</button>

<br /><br />
<br />
<br />
<br />
<br />
<br />
<br />
<div id="wizard">
    <h1>First Step</h1>
    <div>First Content</div>

    <h1>Second Step</h1>
    <div>Second Content</div>
</div>

    </React.Fragment>
    
    );
   
  }
}

export default Modal;
