import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    //Gets the email and updates its state
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    //Gets the password and updates its state
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    //Currently on redirects to the home screen
    // Needs to create a new user and password and store it in the sessison storage
    onSubmitRegister = (event) => {
        console.log(this.state.email);
        console.log(this.state.password);
        this.props.onRouteChange('home');
    }

    render() {
        return(
            <article className="br3 ba b--black-10 bg-light-green mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sign Up</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" name="email-address"  id="email-address"
                            onChange={this.onEmailChange} //will update the email
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" name="password"  id="password"
                            onChange={this.onPasswordChange}  //will update the password
                            />
                        </div>
                    </fieldset>
                    <div className="">
                        <input 
                        onClick={this.onSubmitRegister} //pasing as a function so it does not render automatically
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib " type="submit" value="Sign up"
                        />
                    </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;