from flask import Flask,jsonify
from random import seed
from random import random
from flask_cors import CORS

app=Flask(__name__)
CORS(app)

@app.route('/',methods=['GET'])
def tgs():
    q=random()
    return jsonify(q)

if(__name__=='__main__'):
        app.run(debug=True)