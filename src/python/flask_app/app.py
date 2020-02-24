from flask import Flask, escape, request

app = Flask(__name__)

@app.route('/') # this is basic domain
def home():
    return "Hello"

app.run(port=5003)