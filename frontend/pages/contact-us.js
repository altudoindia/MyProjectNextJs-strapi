import React, { useState } from "react";
import Head from "next/head";
import Container from "../components/PageStructure/Container/Container";
import { fetcher, createContact } from "../lib/api";
import Layout from "../components/PageStructure/Container/Layout";
import Title from "../components/Elements/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faGear, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Description from "../components/Elements/Description"
import Link from "next/link";

const Contact = ({ contactpage }) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [msg, setMessage] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loader, setLoader] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoader(true);
        const formData = {
                   data : {
                    "FirstName": fname,
                    "LastName": lname,
                    "PhoneNumber": phone,
                    "Email": email,
                    "Message": msg,
                   }
        };
        try {            
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact/create`, {
                method: 'POST',
                body: formData
            });
            const resData = await response.json();
            // console.log(error);
            if( resData.data.error ){
                setError(true);
                setResponse(resData.data.error.message);
                console.log(resData.data.error);
            }else{
                setSuccess(true);
                setResponse("Your request it sent to our team. Team will get back to you.");
            }
        } catch (error) {
            setError(true);
            setResponse(error.message);
        }
        setLoader(false);
        return true;
    };
    const handleChange = (e) => {
        if (e.target.name == "phone") {
            setPhone(e.target.value);
        } else if (e.target.name == "email") {
            setEmail(e.target.value);
        } else if (e.target.name == "msg") {
            setMessage(e.target.value);
        } else if (e.target.name == "fname") {
            setFname(e.target.value);
        } else if (e.target.name == "lname") {
            setLname(e.target.value);
        }
    };

    return (
        <Layout>
            <Head>
                <title>Contact-us</title>
            </Head>

            <div className="contact-us">
                <Container>
                    <div className=" mb-5">
                        <div className={"mb-3 mt-5   text-center"}>
                            <Title>{contactpage.Title} </Title>
                        </div>


                        <div className="row">
                            <div className="col-md-6 offset-1">
                                <div className="mb-3 text-center">
                                    <Description >{contactpage.Description}</Description>
                                </div>
                                { error ?
                                    <p className="text-danger">{ response }</p>
                                :  null }
                                { success ?
                                    <p className="text-success">{ response }</p>
                                : null }
                                <form onSubmit={handleSubmit} >

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="fname" className="">
                                                    First Name
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    value={fname}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    id="fname"
                                                    name="fname"
                                                    aria-describedby="emailHelp"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="lname" className="">
                                                    Last Name
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    value={lname}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    id="lname"
                                                    name="lname"
                                                    aria-describedby="emailHelp"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="">
                                            Email Address
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={handleChange}
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            aria-describedby="emailHelp"
                                        />
                                        <div id="emailHelp" className="form-text"></div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="">
                                            Phone Number (Optional)

                                        </label>
                                        <input
                                            type="phone"
                                            value={phone}
                                            onChange={handleChange}
                                            className="form-control"
                                            name="phone"
                                            id="phone"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="msg">
                                            Message
                                            <span className="text-danger">*</span>
                                        </label>
                                        <textarea
                                            value={msg}
                                            onChange={handleChange}
                                            className="form-control"
                                            name="msg"
                                            id="msg"
                                        />
                                    </div>

                                    <div className=" ">
                                        <p>
                                            Yes, I would like to receive email communications from NVA
                                            Canada. I understand I can unsubscribe via links contained
                                            in the email(s) and/or by emailing privacy@nvacanada.ca.
                                        </p>
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Submit 
                                    </button>
                                    <span className="px-2">
                                        { loader ?
                                        <FontAwesomeIcon icon={faSpinner}  rotation={90} />
                                        : null }
                                    </span>
                                </form>
                            </div>
                            <div className="col-md-4 offset-1">
                                { contactpage.ContactPhone ?
                                <div className="d-flex">
                                    <FontAwesomeIcon className="icon" icon={faPhone} />
                                    <p className="px-2">
                                        <Link href={"tel:" + contactpage.ContactPhone}>
                                            {contactpage.ContactPhone}
                                        </Link>
                                    </p>
                                </div>
                                : null }
                                { contactpage.ContactEmail ?
                                    <div className="d-flex">
                                        <FontAwesomeIcon className="icon" icon={faEnvelope} />
                                        <p className="px-2">
                                            <Link href={"mailto:" + contactpage.ContactEmail}>
                                            {contactpage.ContactEmail}
                                            </Link>
                                        </p>
                                    </div>
                                    : null 
                                }
                                <br />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    );
};

export default Contact;

export async function getStaticProps() {
    const contactResponse = await fetcher(`contact-us?populate=*`);
    return {
        props: {
            contactpage: contactResponse.data.attributes,
        },
    };
}
