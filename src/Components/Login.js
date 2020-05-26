import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    } 

    //Gets the value of the email input and updates the state
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    //Gets the value of the email input and updates the state
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    //Will switch to the register component and unrender this component
    onClickRegister = (event) => {
        this.props.onRouteChange('registerInfo');
    }

    //checks if the email and password are valid if the are it will render the home screen
    onSubmitSignIn = () => {
        if(this.state.signInEmail === "Hello" && this.state.signInPassword === "bye"){
            console.log(this.state.signInEmail);
            console.log(this.state.signInPassword);
            this.props.onRouteChange('home');
    }
}

    render() {
        return(
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 bg-light-green center">
                <main className="pa4 black-80">
                    <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" name="email-address"  id="email-address"
                            onChange={this.onEmailChange}  //Everytime something is changed in the input it will call onEmailChange
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" name="password"  id="password"
                            onChange={this.onPasswordChange} //Everytime something is changed in the input it will call onPasswordChange
                            />
                        </div>
                    </fieldset>
                    <div className="">
                        <input 
                        onClick={this.onSubmitSignIn} //Calling a function when the button is pressed
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" value="Sign in"
                        />
                    </div>
                    <div className="">
                        <br/>
                        <legend className="fw2 italic mb2">Don't have an Account?</legend>
                        <input 
                        onClick={this.onClickRegister} //Calling a function when the button is pressed
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib " type="submit" value="Sign up"
                        />
                    </div>
                    </div>
                </main>
            </article>
            );
    }
}

export default Login;


