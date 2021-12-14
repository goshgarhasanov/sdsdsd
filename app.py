from flask import Flask,render_template,url_for,jsonify
import requests
app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return render_template('home.html')

@app.route('/api/countPeople')
def getCount():
    data=requests.get('http://api.open-notify.org/astros.json').json()
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=False)
