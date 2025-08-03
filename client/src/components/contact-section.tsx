import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Mail, Linkedin, Github, Clock, Rocket } from "lucide-react";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import AnimatedBorder from "@/components/ui/animated-border";
import GlassCard from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      subtitle: "amalalex95@gmail.com",
      colors: ["blue", "purple"] as const
    },
    {
      icon: Linkedin,
      title: "LinkedIn", 
      subtitle: "Professional Network",
      colors: ["purple", "green"] as const
    },
    {
      icon: Github,
      title: "GitHub",
      subtitle: "Code Repository", 
      colors: ["green", "pink"] as const
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 neon-text">
            Let's Connect
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-blue to-primary-purple mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your ideas into cutting-edge digital solutions? 
            Let's discuss your next project.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedBorder>
              <GlassCard>
                <h3 className="text-2xl font-bold text-primary-blue mb-6">
                  <Send className="inline mr-3" />
                  Send Message
                </h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Name</FormLabel>
                          <FormControl>
                            <Input 
                              {...field}
                              placeholder="Your Name"
                              className="bg-dark-secondary border-gray-600 focus:border-primary-blue focus:ring-primary-blue focus:ring-opacity-20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Email</FormLabel>
                          <FormControl>
                            <Input 
                              {...field}
                              type="email"
                              placeholder="your.email@example.com"
                              className="bg-dark-secondary border-gray-600 focus:border-primary-purple focus:ring-primary-purple focus:ring-opacity-20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Company (Optional)</FormLabel>
                          <FormControl>
                            <Input 
                              {...field}
                              placeholder="Your Company"
                              className="bg-dark-secondary border-gray-600 focus:border-primary-green focus:ring-primary-green focus:ring-opacity-20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field}
                              rows={5}
                              placeholder="Tell me about your project..."
                              className="bg-dark-secondary border-gray-600 focus:border-primary-pink focus:ring-primary-pink focus:ring-opacity-20 resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="w-full holo-border py-4 rounded-lg font-semibold bg-gradient-to-r from-primary-blue to-primary-purple hover:from-primary-purple hover:to-primary-green transition-all duration-300 transform hover:scale-105 border-0"
                    >
                      {contactMutation.isPending ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Rocket className="inline mr-2" size={20} />
                          Launch Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </GlassCard>
            </AnimatedBorder>
            
            {/* Contact Info */}
            <div className="space-y-8">
              {contactMethods.map((method) => (
                <AnimatedBorder key={method.title}>
                  <GlassCard>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-primary-${method.colors[0]} to-primary-${method.colors[1]} flex items-center justify-center mr-4`}>
                        <method.icon size={24} />
                      </div>
                      <div>
                        <h4 className={`font-semibold text-primary-${method.colors[0]}`}>
                          {method.title}
                        </h4>
                        <p className="text-gray-300">{method.subtitle}</p>
                      </div>
                    </div>
                  </GlassCard>
                </AnimatedBorder>
              ))}
              
              <AnimatedBorder>
                <GlassCard>
                  <h4 className="font-semibold text-primary-pink mb-4">
                    <Clock className="inline mr-2" />
                    Response Time
                  </h4>
                  <p className="text-gray-300">
                    I typically respond within 24 hours. For urgent projects, 
                    feel free to mention it in your message.
                  </p>
                </GlassCard>
              </AnimatedBorder>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
