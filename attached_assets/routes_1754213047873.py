from flask import render_template, request, jsonify, flash, redirect, url_for
from flask_mail import Message
from app import app, mail
import logging

logging.basicConfig(level=logging.DEBUG)

@app.route('/')
def index():
    """Homepage with hero section and animated intro"""
    return render_template('index.html')

@app.route('/about')
def about():
    """About section showcasing SEO expertise and achievements"""
    return render_template('about.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    """Contact page with professional contact form"""
    if request.method == 'POST':
        try:
            name = request.form.get('name')
            email = request.form.get('email')
            subject = request.form.get('subject')
            message = request.form.get('message')
            
            # Validate form data
            if not all([name, email, subject, message]):
                flash('All fields are required.', 'error')
                return render_template('contact.html')
            
            # Send email
            msg = Message(
                subject=f"Portfolio Contact: {subject}",
                recipients=[app.config.get('MAIL_DEFAULT_SENDER', 'your-email@example.com')],
                body=f"""
                New contact form submission:
                
                Name: {name}
                Email: {email}
                Subject: {subject}
                
                Message:
                {message}
                """
            )
            
            if app.config.get('MAIL_USERNAME'):
                mail.send(msg)
                flash('Thank you for your message! I will get back to you soon.', 'success')
            else:
                flash('Contact form configured successfully. Email service needs to be set up.', 'info')
                
        except Exception as e:
            logging.error(f"Error sending email: {e}")
            flash('There was an error sending your message. Please try again later.', 'error')
        
        return redirect(url_for('contact'))
    
    return render_template('contact.html')

@app.route('/tools')
def tools():
    """Tools section with embedded Streamlit tool showcase"""
    return render_template('tools.html')

@app.route('/api/health')
def api_health():
    """Health check endpoint for API"""
    return jsonify({'status': 'healthy', 'message': 'Flask API is running'})

@app.route('/api/contact', methods=['POST'])
def api_contact():
    """API endpoint for contact form submission"""
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        company = data.get('company', '')
        message = data.get('message')
        
        if not all([name, email, message]):
            return jsonify({'success': False, 'message': 'Name, email, and message are required.'}), 400
        
        # Send email
        subject_line = f"SEO Portfolio Contact from {name}"
        if company:
            subject_line += f" ({company})"
            
        msg = Message(
            subject=subject_line,
            recipients=[app.config.get('MAIL_DEFAULT_SENDER', 'your-email@example.com')],
            body=f"""
            New contact form submission from SEO Portfolio:
            
            Name: {name}
            Email: {email}
            Company: {company if company else 'Not specified'}
            
            Message:
            {message}
            """
        )
        
        if app.config.get('MAIL_USERNAME'):
            mail.send(msg)
            return jsonify({'success': True, 'message': 'Message sent successfully!'})
        else:
            return jsonify({'success': True, 'message': 'Contact form received. Email service needs configuration.'})
            
    except Exception as e:
        logging.error(f"API Error sending email: {e}")
        return jsonify({'success': False, 'message': 'Error sending message. Please try again.'}), 500
