import { useState } from "react";

const StatefulForm = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6){
            setError('Password Must Be Longer Than 6 Characters')
        }
        else if(email.includes('@') === false){
            setError('Email Must Contain @');
        }
        else if(name.includes(' ') === false){
            setError('Full Name Must Be Provided');
        }
        else{
            setError('');
            console.log(name);
            console.log(email);
            console.log(password);
        }
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }


    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleName = e => {
        setName(e.target.value);
    }


    return (
        <div>
            <div id='first-form'>
                <h2>Personal Info</h2>
                <form onSubmit={handleSubmit} >
                    <h5>Name</h5>
                    <input
                    value={name}
                    onChange={handleName}
                    type="text" name="name" />
                    <br />
                    <h5>Email</h5>
                    <input 
                    onChange={handleEmailChange}
                    type="email" name="email" id="" />
                    <br />
                    <h5>Password</h5>
                    <input
                    onChange={handlePassword}
                    required
                    type="password" name="password" />
                    <br />
                    <input type="submit" value="Submit" />
                    {
                        error && <p>{error}</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default StatefulForm;