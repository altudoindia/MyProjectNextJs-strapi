import Head from "next/head";
import React from "react";
import Layout from "../components/PageStructure/Container/Layout";
import Title from "../components/Elements/Title";

function login(props) {
    return (
        <Layout>
            <Head>
                <title>Login | </title>
            </Head>
            <>
                <section className="vh-100">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6 px-0 d-none d-sm-block">
                                <img src="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
                                    alt="Login image" className="w-100 vh-100" style={{ "object-fit": "cover", "object-position": "left" }} />
                            </div>
                            <div className="col-sm-6 text-black">

                                <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                                    <form style={{ "width": "23rem;" }} method="POST">

                                        <Title type="h3" className="fw-normal mb-3 pb-3" style={{ "letter-spacing": "1px;" }}>Log in</Title>
                                        <div class="form-floating mb-3">                                            
                                            <input type="email" class="form-control" id="loginemail" placeholder="Email Address" />
                                                <label for="loginemail">Email address</label>
                                        </div>
                                        <div class="form-floating">
                                            <input type="password" class="form-control" id="loginpassword" placeholder="Password" />
                                                <label for="loginpassword">Password</label>
                                        </div>

                                        <div className="pt-2 mb-4">
                                            <button className="btn btn-info btn-lg btn-block" type="button">Login</button>
                                        </div>

                                        <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                                        <p>Don't have an account? <a href="#!" className="link-info">Register here</a></p>

                                    </form>

                                </div>

                            </div>

                        </div>
                    </div>
                </section>
            </>

        </Layout>
    );
}

export default login;
