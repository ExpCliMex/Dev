import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/css/demo3/style.css";
import "../styles/fonts/feather-font/css/iconfont.css";

class Error500 extends React.Component {
    state = {  } 
    render() { 
        return (

            <div class="page-wrapper full-page">
			<div class="page-content d-flex align-items-center justify-content-center">

				<div class="row w-100 mx-0 auth-page">
					<div class="col-md-8 col-xl-6 mx-auto d-flex flex-column align-items-center">
						<img src="../../../assets/images/others/404.svg" class="img-fluid mb-2" alt="404"/>
						<h1 class="fw-bolder mb-22 mt-2 tx-80 text-muted">500</h1>
						<h4 class="mb-2">Internal server error</h4>
						<h6 class="text-muted mb-3 text-center">Parece que lo que estás buscando ha sido movido</h6>
						<a href="../../dashboard.html">Regresar al inicio</a>
					</div>
				</div>

			</div>
		</div>
			
            
        );
    }
}
 
export default Error500;












