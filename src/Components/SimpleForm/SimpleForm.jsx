import './SimpleForm.css';

const SimpleForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
        console.log(event.target.phone.value);
        console.log(event.target.nationality.value);
        console.log(event.target.gender.value);

    }

    const handleSubmit2 = event => {
        event.preventDefault();
        console.log(event.target.presentAddress.value);
        console.log(event.target.permanentAddress.value);
        console.log(event.target.nidNumber.value);
        console.log('Form Submitted');
    }

    return (
        <div>
            <div id='first-form'>
                <h2>Personal Info</h2>
                <form onSubmit={handleSubmit} >
                    <h5>Name</h5>
                    <input type="text" name="name" />
                    <br />
                    <h5>Email</h5>
                    <input type="email" name="email" id="" />
                    <br />
                    <h5>Phone</h5>
                    <input type="text" name="phone" />
                    <br />
                    <h5>Nationality</h5>
                    <input type="text" name="nationality" />
                    <br />
                    <h5>Gender</h5>
                    <input type="text" name="gender" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>

            <div>
                <h3>Required Information:</h3>
                <form onSubmit={handleSubmit2}>
                    <h5>Present Address</h5>
                    <input type="text" name="presentAddress" id="" />
                    <br />
                    <h5>Permanent Address</h5>
                    <input type="text" name="permanentAddress" id="" />
                    <br />
                    <h5>NID Number</h5>
                    <input type="text" name="nidNumber" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default SimpleForm;