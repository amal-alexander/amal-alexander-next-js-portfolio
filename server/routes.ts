import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Make sure environment variables are loaded

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request data
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);

      // Gmail SMTP transporter (App Password required)
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for port 465, false for 587
        auth: {
          user: process.env.MAIL_USER, // Your Gmail address
          pass: process.env.MAIL_PASS, // Your Gmail App Password
        },
      });

      // Test SMTP connection before sending
      await transporter.verify();
      console.log("✅ SMTP connection successful");

      // Send email
      await transporter.sendMail({
        from: `"${validatedData.name}" <${process.env.MAIL_USER}>`,
        replyTo: validatedData.email,
        to: process.env.MAIL_TO || process.env.MAIL_USER,
        subject: `New Contact Form Message from ${validatedData.name}`,
        text: validatedData.message,
      });

      res.json({
        success: true,
        message: "Message sent successfully!",
        data: message,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors,
        });
      } else {
        console.error("❌ Email send error:", error);
        res.status(500).json({
          success: false,
          message: "Failed to send message",
        });
      }
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json({ success: true, data: messages });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve messages",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
