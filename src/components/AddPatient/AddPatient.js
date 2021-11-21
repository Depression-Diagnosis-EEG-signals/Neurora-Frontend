import "../Auth/auth.css";
import "../EditProfile/EditProfile.css";

function AddPatient() {
    return (
        <div className="App">
        <section>
          <div class="container ">
              <div className="editbox">
                
              <form>
              <div className="row"> 
        <div className="col-sm-3 left">
    <label  class="form-label">Patient Name</label>
    </div>
    <div className="col-sm-9 left">
    <input type="name" class="form-control" placeholder="Patient name"/>
    </div>
    </div>
    <div className="row"> 
        <div className="col-sm-3 left">
    <label  class="form-label">Patient ID</label>
    </div>
    <div className="col-sm-9 left">
    <input type="text" class="form-control" placeholder="Patient ID"/>
    </div>
    </div>
  
    
    <button type="submit" className="btn btn-primary buut">
                  Add Patient
                </button>
   
    
</form>
            </div>
        
        </div>
      </section>
      </div>
    );
}
export default AddPatient;