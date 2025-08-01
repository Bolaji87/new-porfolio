import React from "react";
import IconButton from "@/app/_components/IconButton";
import SocialLinks from "./SocialLinks";
import { Container } from "./shared/Container";

function ContactMe() {
  return (
    <Container>
      <section className="py-12 pt-22 px-8 sm:px-12 md:px-14 lg:px-24  min-h-screen text-stone-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-8 text-stone-700 font-semibold text-lg">
            Have a project or question? Send me a message and let&rsquo;s chat!
          </p>

          <form
            action="https://formspree.io/f/yourFormID" // Replace with your Formspree or EmailJS endpoint
            method="POST"
            className="space-y-4 text-left mb-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2  text-stone-600 placeholder:text-stone-700 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border   placeholder:text-stone-600 text-stone-700 border-gray-300 rounded"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 text-stone-700  placeholder:text-stone-600 border border-gray-300 rounded"
            ></textarea>

            <IconButton>Send Message</IconButton>
          </form>
          <div className="flex justify-center sm:justify-start">
            <SocialLinks />
          </div>
        </div>
      </section>
    </Container>
  );
}

export default ContactMe;
