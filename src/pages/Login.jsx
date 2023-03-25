import React, {useState} from "react";
import { FaSignInAlt } from "react-icons/fa";

export default function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const {email, password} = formData;

    const onChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Login
                </h1>

                <p>Please login to get support</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" name="email" value={email} onChange={onChange} placeholder="Enter Your Email" required />
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" id="password" name="password" value={password} onChange={onChange} placeholder="Enter Your Password" required />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
        </>
    );
}