import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
// import ReusableForm from './Components/ReusableForm/ReusableForm'
// import ReusableForm from './Components/ReusableForm/ReusableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StatefulForm from './Components/StatefulForm/StatefulForm'

function App() {

//   const handleSignUpSubmit = data => {
//     console.log('Sign Up Data', data);
// }

//   const handleUpdateProfile = data => {
//     console.log('Update Profile', data);
//   }

  return (
    <>
      <h1>Form Master</h1>

      <Grandpa></Grandpa>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign Up Right Now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} submitBtnText='Update' handleSubmit={handleUpdateProfile}>
        <div>
          <h2>Update Your Profile</h2>
          <p>Always Keep Your Profile Updated</p>
        </div>
      </ReusableForm> */}
      
    </>
  )
}

export default App
