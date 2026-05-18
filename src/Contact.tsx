function Contact() {
  return (
    <section className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 rounded-lg outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="border p-2 rounded-lg outline-none"
        />

        <textarea
          placeholder="Your Message"
          className="border p-2 rounded-lg outline-none"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;