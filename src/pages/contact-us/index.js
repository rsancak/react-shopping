import './style.scss'

function ContactUs() {
    return (
        <section className="contact_section mt-5">
            <div className="container container-bg">
                <div className="row">
                    <div className="col-md-12 col-lg-12 px-0">
                        <form action="#">
                            <div>
                                <input type="text" placeholder="Name" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div>
                                <input type="text" placeholder="Phone" />
                            </div>
                            <div>
                                <input type="text" className="message-box" placeholder="Message" />
                            </div>
                            <div className="d-flex ">
                                <button>
                                    SEND
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;