from flask import Flask, render_template, url_for, request, redirect, jsonify, flash, session, escape
from decouple import config
import smtplib
import os.path
app = Flask(__name__)
app.secret_key = config('PORTOFOLIO_SECRET_KEY')


@app.route('/')
def hello_world():
    return render_template('index-bootstrap.html')



@app.route('/contact', methods=["GET"])
def show_contact_me():
    return render_template('contact-bootstrap.html')



@app.route('/contact', methods=["POST"])
def send_contact_me():
    email = config('PORTOFOLIO_EMAIL')
    password = config('PORTOFOLIO_EMAIL_PASS')
    sender = request.form.get('name')
    message = request.form.get('message')
    subject = request.form.get('subject')
    senderEmail = request.form.get('email')
    messageSent = format_email(subject,senderEmail, sender, message)
    send_email(email,password, messageSent)
    return redirect(url_for('show_contact_me'))


def format_email(subject, senderEmail, sender, message):
    msg = f'''Subject: {subject}

        From: {senderEmail}
        Sender name: {sender}

        {message}'''
    return msg    



def send_email(email, password, msg):
    with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.ehlo()
        smtp.login(email, password)
        smtp.sendmail(email, 'toma.mihai.sorin23@gmail.com', msg)
        flash('Awesome! I\'ll come back to you shortly!')


@app.route('/projects')
@app.route('/projects/<category>')
@app.route('/projects/<category>/<project>')
def project_page(category="none", project="none"):
    if(category == "none" or project == "none"):
        return "You are missing a category or project"

    if os.path.exists("./templates/{category}".format(category=category)):
        if os.path.exists("./templates/{category}/{project}.html".format(category=category, project=project)):
            return render_template('/{category}/{project}.html'.format(category=category,project=project))
        else:
            return "404 page"    
    else:
        return "404 page"           
    return "404 page"

if __name__ == '__main__':
    app.debug = True
    app.run()
