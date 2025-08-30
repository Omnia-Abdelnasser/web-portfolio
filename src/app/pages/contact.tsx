import contactimg from "../images/see-CUiBe9gY.png";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Button } from "@/shared/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/shared/components/firebase";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async () => {
    if (!email || !message) {
      setStatus("error");
      return;
    }
    setSending(true);

    try {
      await addDoc(collection(db, "messages"), {
        email,
        message,
        date: new Date().toISOString(),
      });

      setStatus("success");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section id="contact" className=" bg-secondary  ">
        <h1 className="text-3xl font-semibold text-[#25c1dd] w-fit mx-auto md:mb-10 ">
          Contact Me
        </h1>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
              className="flex justify-center"
            >
              <img
                src={contactimg}
                loading="lazy"
                alt="Contact Illustration"
                width={700}
                height={700}
                className="w-150 md:block hidden object-cover"
              />
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.99, ease: "easeOut" }}
              className="w-full h-full max-w-xl mx-auto px-8 py-10 border border-[#006a6a] 
            rounded-2xl shadow-lg bg-white dark:bg-[#1e1e1e] space-y-6"
            >
              <h2 className="text-xl font-semibold text-[#25c1dd] text-center">
                Get in Touch
              </h2>

              <Input
                type="email"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <Textarea
                placeholder="Type your message here."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />

              <Button
                className="w-full py-4 text-lg bg-[#25c1dd] text-white font-semibold rounded-full 
              hover:bg-white hover:text-[#006a6a] border-2 border-transparent 
              hover:border-[#006a6a] transition-all duration-300"
                onClick={handleSubmit}
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Message"}
              </Button>

              {status === "success" && (
                <p className="text-green-500 text-center">✅ Message sent!</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center">
                  ❌ Please fill fields or try again.
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
