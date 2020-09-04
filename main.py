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


@app.route('/python', methods=["GET", "POST"])
def python_projects():
    return "This are my python projects"


@app.route('/front')
def front_projects():
    return render_template('front_projects.html')


@app.route('/javascript')
def javascript_projects():
    return render_template('javascript_projects.html')


@app.route('/full_stack')
def full_stack_projects():
    return "This are my Full stack projects"


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


def main():
    app.run(debug=True)


if __name__ == '__main__':
    main()
