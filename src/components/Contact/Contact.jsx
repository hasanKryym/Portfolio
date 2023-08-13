import { useRef, useState } from 'react';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import SendingLoader from '../SendingLoader/SendingLoader';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const [isLoading, setIsLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const flag = name && email && message;

    if (!flag)
      return toast.info('Please fill all the inputs', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });

    setIsLoading(true);

    emailjs
      .sendForm(
        'service_p5s2otk',
        'template_i48t9nc',
        form.current,
        'hWwspT7QcaH3KFGuI'
      )
      .then(
        (result) => {
          //   console.log(result);

          toast.success('email received thank you', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          setIsLoading(false);
          setInputs({ ...inputs, name: '', email: '', message: '' });
        },
        (error) => {
          console.log(error.text);
          toast.error('There was an error, please try again later', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          setInputs({ ...inputs, name: '', email: '', message: '' });
          setIsLoading(false);
        }
      );
  };
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ y: '2rem', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 2,
          type: 'spring',
        }}
        className="contact_container content_container"
      >
        <div class="card">
          <span class="title">Leave a Message</span>
          <form class="form" ref={form} onSubmit={sendEmail}>
            <div class="group">
              <input
                name="name"
                placeholder="‎"
                type="text"
                required=""
                value={name}
                onChange={(e) => onChange(e)}
              />
              <label for="name">Full Name</label>
            </div>
            <div class="group">
              <input
                placeholder="‎"
                type="email"
                id="email"
                name="email"
                required=""
                value={email}
                onChange={(e) => onChange(e)}
              />
              <label for="email">Email</label>
            </div>
            <div class="group">
              <textarea
                placeholder="‎"
                id="comment"
                name="message"
                rows="5"
                required=""
                value={message}
                onChange={(e) => onChange(e)}
              ></textarea>
              <label for="comment">Message</label>
            </div>
            <button type="submit">Submit</button>
            {isLoading && <SendingLoader />}
          </form>
        </div>
      </motion.div>
      <ToastContainer />
    </>
  );
};

export default Contact;
