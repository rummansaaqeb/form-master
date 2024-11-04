import useInputState from "../../hooks/useInputState";

const HookForm = () => {


    // const [name, handleNameChange] = useInputState('rojoni hooked');

    const emailState = useInputState('rojoni@shojoni.go')



    const handleSubmit = e => {
        console.log('form data', emailState.value);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                    <h5>Name</h5>
                    {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                    <input type="text" name="name" />
                    <br />
                    <h5>Email</h5>
                    <input {...emailState} type="email" name="email" id="" />
                    <br />
                    <h5>Password</h5>
                    <input type="password" name="password" />
                    <br />
                    <input type="submit" value="Submit" />
                    </form>
        </div>
    );
};

export default HookForm;