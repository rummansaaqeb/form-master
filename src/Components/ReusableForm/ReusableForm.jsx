const ReusableForm = ({formTitle, handleSubmit, submitBtnText='Submit', children}) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }

    return (
        <div>
            <div id='first-form'>
                {children}
                <form onSubmit={handleLocalSubmit} >
                    <h5>Name</h5>
                    <input type="text" name="name" />
                    <br />
                    <h5>Email</h5>
                    <input type="email" name="email" id="" />
                    <br />
                    <h5>Password</h5>
                    <input type="password" name="password" />
                    <br />
                    <h5>Nationality</h5>
                    <input type="text" name="nationality" />
                    <br />
                    <h5>Gender</h5>
                    <input type="text" name="gender" />
                    <br />
                    <input type="submit" value={submitBtnText} />
                </form>
            </div>
        </div>
    );
};

export default ReusableForm;