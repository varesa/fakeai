from flask import Flask
from flask import request

app = Flask(__name__)

FILE = "state"


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route("/post", methods=["POST"])
def post():
    with open(FILE, 'wb') as f:
        f.write(request.get_data())
    return "Ok"


@app.route("/get")
def get():
    with open(FILE, 'r') as f:
        return f.read()


if __name__ == '__main__':
    app.run(host="0.0.0.0")
