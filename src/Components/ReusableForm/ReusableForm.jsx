

const ReusableForm = ({formTitle, submitBtnText = 'Submit', handleSubmit, children}) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            passowrd: e.target.password.value
        }
        handleSubmit(data);
    }

    return (
        <div>
            <h2>{children}</h2>
            <form onSubmit={handleLocalSubmit} >
                <h5>Name</h5>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <input type="text" name="name" />
                <br />
                <h5>Email</h5>
                <input type="email" name="email" id="" />
                <br />
                <h5>Password</h5>
                <input type="password" name="password" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;