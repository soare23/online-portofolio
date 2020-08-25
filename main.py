from flask import Flask, render_template, url_for, request, redirect, jsonify, flash, session, escape
app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/contact', methods=["POST", "GET"])
def contact_me():
    if request.method == "POST":
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')
        print(name)
        print(email)
        print(message)
    return render_template('contact.html')


def main():
    app.run(debug=True)


if __name__ == '__main__':
    main()
