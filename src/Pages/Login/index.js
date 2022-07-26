import React from 'react'
import './style.css'

export default function logins() {
    return (<>
        <div className='login-container'>
            <div className="login-main">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div className="signup">
                    <label for="chk" aria-hidden="true" className='login-sign-up'>Sign up</label>
                    <input type="text" name="txt" placeholder="User name" required="" />
                    <input type="email" name="email" placeholder="Email" required="" />
                    <input type="password" name="pswd" placeholder="Password" required="" />
                    <button>Sign up</button>
                </div>

                <div className="login">
                    <form>
                        <label for="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input type="password" name="pswd" placeholder="Password" required="" />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>

    </>
    )
}
