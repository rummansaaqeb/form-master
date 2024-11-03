import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(()=>{
        nameRef.current.focus();
    },[])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }


    return (
        <div>
            <div id='first-form'>
                <h2>Personal Info</h2>
                <form onSubmit={handleSubmit} >
                    <h5>Name</h5>
                    <input
                    ref={nameRef}
                    type="text" name="name" />
                    <br />
                    <h5>Email</h5>
                    <input
                    ref={emailRef}
                    defaultValue={'name@company.com'}
                    type="email" name="email" id="" />
                    <br />
                    <h5>Password</h5>
                    <input
                    ref={passwordRef}
                    type="password" name="password" />
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

export default RefForm;