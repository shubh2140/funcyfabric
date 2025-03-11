"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <Select
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, subject: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="customer-service">
                    Customer Service
                  </SelectItem>
                  <SelectItem value="order-inquiry">Order Inquiry</SelectItem>
                  <SelectItem value="product-question">
                    Product Question
                  </SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="How can we help you?"
                rows={5}
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 mr-4 text-gray-600" />
              <div>
                <h3 className="font-medium mb-1">Our Location</h3>
                <p className="text-gray-600">
                  Bangalore, India
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-6 w-6 mr-4 text-gray-600" />
              <div>
                <h3 className="font-medium mb-1">Email Us</h3>
                <p className="text-gray-600">
                  Customer Service: support@funcyfabric.com
                  <br />
                  Wholesale Inquiries: support@funcyfabric.com
                  <br />
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-6 w-6 mr-4 text-gray-600" />
              <div>
                <h3 className="font-medium mb-1">Call Us</h3>
                <p className="text-gray-600">
                  Customer Service: +91 9902972151
                  <br />
                  Monday - Friday: 9am - 6pm EST
                  <br />
                  Saturday: 10am - 4pm EST
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-1">
                  What is your return policy?
                </h3>
                <p className="text-gray-600">
                  We accept returns within 30 days of delivery. Items must be
                  unworn, unwashed, and with original tags attached.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">
                  How long does shipping take?
                </h3>
                <p className="text-gray-600">
                  Standard shipping takes 3-5 business days. Express shipping
                  takes 1-2 business days.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">
                  Do you ship internationally?
                </h3>
                <p className="text-gray-600">
                  Yes, we ship to most countries worldwide. International
                  shipping typically takes 7-14 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
