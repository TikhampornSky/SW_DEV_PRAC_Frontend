import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

export default function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => { return state.auth });

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    }

    return (
        <header className="header">
            <div className="logo">
                <Link to='/'>Supoort Desk</Link>
            </div>
            <ul>
                {user ? (
                    <li>
                        <button className="btn" onClick={onLogout}> <FaSignOutAlt /> Logout</button>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to='/login'>
                                <FaSignInAlt /> Login
                            </Link>

                        </li>

                        <li>
                            <Link to='/register'>
                                <FaUser /> Register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </header>
    );
}