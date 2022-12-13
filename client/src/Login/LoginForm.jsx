// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { Redirect } from "react-router";
// import "./Login.css";

// const Login = (props) =>{

//     const[redirect,setRedirect]=useState();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");


//     function validateForm() {
//         return email.length > 0 && password.length > 0;
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//         if (!(username === '123456' && password === '123456')) {
//             return setError(true);
//         }
//         setRedirect("/");
//     }

//     return(
//         {redirect?<Redirect to={redirect}/>:null}
//         <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
//             <div className="Login">
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group size="lg" controlId="email">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     autoFocus
//                     type="text"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </Form.Group>
//                  <Form.Group size="lg" controlId="password">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </Form.Group>
//                 <Button block size="lg" type="submit" disabled={!validateForm()}>
//                   Login
//                 </Button>
//               </Form>
//             </div>
//         </div>
//     )
// }
// export default Login;
