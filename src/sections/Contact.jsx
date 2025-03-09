import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name:'',
        email: '',
        message: '',
    })
    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: 'Stacy',
                    from_email: form.email,
                    to_email: import.meta.env.VITE_EMAILJS_RECEIVER_ID,
                    message: form.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setLoading(false);
             alert('Your message has been sent!')
            setForm({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong!')
        }
    }

// service_mo3vh9t
    return (
        <section className="c-space my-20" id="contact"
                 style={{ scrollMarginTop: "45px" }}>
            <div className="relative min-h-screen flex
            items-center justify-senter flex-col">
                <div className="contact-container">
                  <h3 className="head-text text-amber-700">Contact me</h3>
                    <p className="text-lg text-amber-700 mt-3">
                        If you're looking for an authentic UGC solution
                        that truly resonates with your audience, I'm here to help.
                        Let's collaborate to craft engaging content that elevates your
                        brand and drives meaningful connections. Reach out today, and let's
                        turn your vision into reality!
                    </p>
                    <form ref={formRef}
                          onSubmit={handleSubmit}
                    className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">
                                Your Name
                            </span>
                            <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="field-input"
                            placeholder="John Doe"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">
                                Email
                            </span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="johndoe@gmail.com"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">
                                Your message
                            </span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Hi, I'm interested in..."
                            />
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send my message"}
                            <img src="/assets/arrow-up.png"
                            alt="arrow-up"
                            className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
