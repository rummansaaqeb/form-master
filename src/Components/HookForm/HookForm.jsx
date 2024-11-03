import useInputState from "../../hooks/useInputState";


const HookForm = () => {

    // const [name, handleNameChange] = useInputState('')

    const emailState = useInputState('');

    const handleSubmit = e => {
        console.log('form data: ', emailState.value);
        e.preventDefault();
    }
    return (
        <div>
            <div id='first-form'>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit} >
                    <h5>Name</h5>
                    {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                    <br />
                    <h5>Email</h5>
                    <input {...emailState} type="email" name="email" id="" />
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
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default HookForm;