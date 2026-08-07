import {
  useAddPendingRecommendation,
  useUserdata,
} from "@/shared/components/firestore";
import { Button } from "@/shared/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  PlusCircle,
  Quote,
  Send,
  User,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

const Recommendations = () => {
  const { data: userData, isLoading, error } = useUserdata();
  const addPending = useAddPendingRecommendation();

  const recommendations = useMemo(() => {
    return [...(userData?.recommendations || [])].sort(
      (a, b) => (a.order ?? Infinity) - (b.order ?? Infinity),
    );
  }, [userData?.recommendations]);

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.userName || !formData.message || !formData.email) {
      alert("Please fill in all fields (Name, Email, and Message).");
      return;
    }

    setIsSubmitting(true);
    try {
      await addPending.mutateAsync(formData);
      const templateParams = {
        name: formData.userName,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSubmitStatus("success");
      setFormData({ userName: "", email: "", message: "" });
      setTimeout(() => {
        setSubmitStatus("idle");
        setIsFormOpen(false);
      }, 3000);
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading)
    return (
      <div className="flex h-48 items-center justify-center bg-background">
        <p className="animate-pulse text-xl font-semibold text-primary">
          Loading Recommendations...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex h-48 items-center justify-center bg-background">
        <p className="animate-pulse text-xl font-semibold text-destructive">
          Error loading data!
        </p>
      </div>
    );

  return (
    <section
      id="recommendations"
      className="px-6 md:px-12 py-20 bg-background/50 backdrop-blur-sm border-t border-border/20 relative"
    >
      <div className="max-w-[1536px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Recommendations
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)]"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            What others say about their experience working with me.
          </p>
        </motion.div>

        {/* Carousel of Recommendations */}
        <div className="relative w-full px-4 md:px-12 mb-12">
          {recommendations.length > 0 ? (
            <Carousel className="w-full">
              <CarouselContent className="-ml-6">
                {recommendations.map((rec, index) => (
                  <CarouselItem
                    key={rec.id || index}
                    className="pl-6 basis-full lg:basis-1/2"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="h-full group relative"
                    >
                      <div className="absolute -inset-0.5 bg-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                      <div className="relative h-[320px] bg-card text-card-foreground shadow-lg rounded-2xl p-8 border border-border/40 hover:border-primary/30 transition-all duration-300 flex flex-col">
                        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border/50">
                          <div className="bg-primary/10 p-2.5 rounded-full flex-shrink-0">
                            <User className="w-5 h-5 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-foreground truncate">
                              {rec.userName}
                            </h4>
                            {rec.email && (
                              <p className="text-xs text-muted-foreground truncate flex items-center gap-1">
                                <Mail className="w-3 h-3" /> {rec.email}
                              </p>
                            )}
                          </div>
                          <Quote className="ml-auto text-primary/20 w-8 h-8 flex-shrink-0" />
                        </div>
                        <div className="flex-grow overflow-y-auto custom-scrollbar pr-2">
                          <p className="text-lg leading-relaxed text-foreground/90 italic">
                            "{rec.message}"
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="md:flex -left-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="md:flex -right-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
            </Carousel>
          ) : (
            <div className="text-center py-20 bg-card/30 rounded-3xl border border-dashed border-border/50">
              <MessageSquare className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground italic text-lg">
                No recommendations yet. Be the first to leave one!
              </p>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <Button
            onClick={() => setIsFormOpen(true)}
            className="group relative px-8 py-7 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-2xl shadow-xl transition-all active:scale-[0.98] flex items-center gap-3 mx-auto overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <PlusCircle className="w-6 h-6 relative z-10" />
            <span className="text-lg relative z-10">
              Leave a Recommendation
            </span>
          </Button>
        </div>

        {/* Modal Overlay for Form */}
        <AnimatePresence>
          {isFormOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsFormOpen(false)}
                className="absolute inset-0 bg-background/80 backdrop-blur-md"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-xl bg-card border border-border/50 shadow-2xl rounded-3xl overflow-hidden"
              >
                <div className="absolute top-4 right-4 z-10">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsFormOpen(false)}
                    className="rounded-full hover:bg-primary/10 hover:text-primary"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                <div className="p-8 md:p-12">
                  <div className="mb-8 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      Write a Recommendation
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      Your feedback is highly appreciated!
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2 text-start">
                      <label className="text-sm font-semibold text-muted-foreground ml-1">
                        Your Name
                      </label>
                      <Input
                        placeholder="enter your name..."
                        value={formData.userName}
                        onChange={(e) =>
                          setFormData({ ...formData, userName: e.target.value })
                        }
                        className="bg-secondary/50 border-border/40 focus:border-primary/50 py-6 rounded-xl text-lg"
                        required
                      />
                    </div>

                    <div className="space-y-2 text-start">
                      <label className="text-sm font-semibold text-muted-foreground ml-1">
                        Your Email
                      </label>
                      <Input
                        type="email"
                        placeholder="enter your email..."
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-secondary/50 border-border/40 focus:border-primary/50 py-6 rounded-xl text-lg"
                        required
                      />
                    </div>

                    <div className="space-y-2 text-start">
                      <label className="text-sm font-semibold text-muted-foreground ml-1">
                        Recommendation Message
                      </label>
                      <Textarea
                        placeholder="Share your experience working with me..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="bg-secondary/50 border-border/40 focus:border-primary/50 rounded-xl h-40 resize-none pt-4 text-lg"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-8 text-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-2xl shadow-lg transition-all active:scale-[0.98] mt-4"
                    >
                      {isSubmitting ? "Sending..." : "Submit Recommendation"}
                    </Button>

                    <AnimatePresence>
                      {submitStatus === "success" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center gap-2 text-green-500 font-bold mt-4 bg-green-500/10 py-4 rounded-xl border border-green-500/20"
                        >
                          <PlusCircle className="w-5 h-5" />
                          Success! Sent for approval.
                        </motion.div>
                      )}
                      {submitStatus === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center gap-2 text-destructive font-bold mt-4 bg-destructive/10 py-4 rounded-xl border border-destructive/20"
                        >
                          <X className="w-5 h-5" />
                          Error. Please try again.
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Recommendations;
