package handler

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/smtp"
	"os"
	"strings"
)

// ContactRequest represents the incoming contact form data
type ContactRequest struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Subject string `json:"subject"`
	Message string `json:"message"`
}

// Response represents the API response
type Response struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
}

// Handler is the serverless function entry point for Vercel
func Handler(w http.ResponseWriter, r *http.Request) {
	// Set CORS headers
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Content-Type", "application/json")

	// Handle preflight requests
	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	// Only allow POST requests
	if r.Method != "POST" {
		w.WriteHeader(http.StatusMethodNotAllowed)
		json.NewEncoder(w).Encode(Response{
			Success: false,
			Message: "Method not allowed",
		})
		return
	}

	// Parse the request body
	var req ContactRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(Response{
			Success: false,
			Message: "Invalid request body",
		})
		return
	}

	// Validate required fields
	if strings.TrimSpace(req.Name) == "" ||
		strings.TrimSpace(req.Email) == "" ||
		strings.TrimSpace(req.Subject) == "" ||
		strings.TrimSpace(req.Message) == "" {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(Response{
			Success: false,
			Message: "All fields are required",
		})
		return
	}

	// Send email notification
	if err := sendEmail(req); err != nil {
		fmt.Printf("Error sending email: %v\n", err)
		// Still return success to user but log the error
		// In production, you might want to handle this differently
	}

	// Return success response
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(Response{
		Success: true,
		Message: "Message received successfully!",
	})
}

func sendEmail(req ContactRequest) error {
	// PLACEHOLDER: Configure your SMTP settings
	// You can use services like:
	// - Resend (resend.com) - Recommended for Vercel
	// - SendGrid
	// - Mailgun
	// - Gmail SMTP

	// Get credentials from environment variables
	smtpHost := os.Getenv("SMTP_HOST")     // e.g., "smtp.gmail.com"
	smtpPort := os.Getenv("SMTP_PORT")     // e.g., "587"
	smtpUser := os.Getenv("SMTP_USER")     // Your email
	smtpPass := os.Getenv("SMTP_PASSWORD") // Your app password
	toEmail := os.Getenv("CONTACT_EMAIL")  // Where to receive emails (asing508@asu.edu)

	// If SMTP is not configured, skip sending email
	if smtpHost == "" || smtpUser == "" || smtpPass == "" {
		fmt.Println("SMTP not configured, skipping email send")
		return nil
	}

	// Email content
	subject := fmt.Sprintf("Portfolio Contact: %s", req.Subject)
	body := fmt.Sprintf(`
New contact form submission from your portfolio:

Name: %s
Email: %s
Subject: %s

Message:
%s

---
This email was sent from your portfolio contact form.
`, req.Name, req.Email, req.Subject, req.Message)

	// Construct email message
	msg := []byte(fmt.Sprintf(
		"To: %s\r\nFrom: %s\r\nSubject: %s\r\n\r\n%s",
		toEmail, smtpUser, subject, body,
	))

	// Authentication
	auth := smtp.PlainAuth("", smtpUser, smtpPass, smtpHost)

	// Send email
	err := smtp.SendMail(
		smtpHost+":"+smtpPort,
		auth,
		smtpUser,
		[]string{toEmail},
		msg,
	)

	return err
}
