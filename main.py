from flask import Flask, render_template, url_for, request, redirect, jsonify, flash, session, escape
from decouple import config
import smtplib
app = Flask(__name__)
app.secret_key = config('PORTOFOLIO_SECRET_KEY')


@app.route('/')
def hello_world():
    return render_template('index-bootstrap.html')


@app.route('/contact', methods=["POST", "GET"])
def contact_me():
    email = config('PORTOFOLIO_EMAIL')
    password = config('PORTOFOLIO_EMAIL_PASS')
    if request.method == "POST":
        name = request.form.get('name')
        message = request.form.get('message')
        subject = request.form.get('subject')
        userEmail = request.form.get('email')
        with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
            smtp.ehlo()
            smtp.starttls()
            smtp.ehlo()
            smtp.login(email, password)
            sender = name
            body = message
            email_to_send = userEmail
            msg = f'''Subject: {subject}


                From: {email_to_send}
                Sender name: {sender}

                {body}'''
            smtp.sendmail(email, 'toma.mihai.sorin23@gmail.com', msg)
            flash('Awesome! I\'ll come back to you shortly!')
            return redirect(url_for('contact_me'))
    return render_template('contact-bootstrap.html')


@app.route('/landing_page_project')
def landing_page_project():
    return render_template('/html_projects/landing_page_project.html')


@app.route('/survey_project')
def survey_project():
    return render_template('/html_projects/survey_project.html')


@app.route('/tds_project')
def tds_project():
    return render_template('/html_projects/tds_project.html')


@app.route('/tribute_page')
def tribute_page():
    return render_template('/html_projects/tribute_page.html')


@app.route('/rock_paper_scissors')
def rock_paper_scissors():
    return render_template('/javascript_projects/rock_paper_scissors.html')


@app.route('/form_validator')
def form_validator():
    return render_template('/javascript_projects/form_validator.html')


@app.route('/exchange_rate')
def exchange_rate():
    return render_template('/javascript_projects/exchange_rate.html')


if __name__ == '__main__':
    app.debug = False
    app.run()
