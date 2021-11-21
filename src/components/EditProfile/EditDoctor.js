import "../Auth/auth.css";
import "./EditProfile.css";
import form from 'bootstrap';

function EditDoctor() {
    return (
        <div className="App">
        <section>
          <div class="container ">
              <div className="editbox">
                
              <form>
              <div className="row"> 
        <div className="col-sm-3 left">
    <label  class="form-label">Name</label>
    </div>
    <div className="col-sm-9 left">
    <input type="name" class="form-control" placeholder=" name"/>
    </div>
    </div>
    <div className="row"> 
        <div className="col-sm-3 left">
    <label  class="form-label">Phone</label>
    </div>
    <div className="col-sm-9 left">
    <input type="text" class="form-control" placeholder=" phone"/>
    </div>
    </div>
    <div className="row"> 
        <div className="col-sm-3 left">
    <label  class="form-label">Specialization</label>
    </div>
    <div className="col-sm-9 left">
    <input type="name" class="form-control" placeholder=" name"/>
    </div>
    </div>
    <div className="row"> 
        <div className="col-sm-3 left">
    <label  class="form-label">Qualification</label>
    </div>
    <div className="col-sm-9 left">
    <input type="name" class="form-control" placeholder=" name"/>
    </div>
    </div>
    <button type="submit" className="btn btn-primary buut">
                  Save
                </button>
   
    
</form>
            </div>
        
        </div>
      </section>
      </div>
    );
}
export default EditDoctor;