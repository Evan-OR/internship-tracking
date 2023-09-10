import os
import mysql.connector
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS

load_dotenv()

# Access environment variables using os.environ
host = os.environ.get("HOST")
user = os.environ.get("USER")
password = os.environ.get("PASSWORD")
database = os.environ.get("DATABASE")

connection = mysql.connector.connect(
    host=host,
    user=user,
    password=password,
    database=database
)

cursor = connection.cursor(dictionary=True)

cursor.execute("SELECT * FROM application")

result = cursor.fetchall()

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

@app.route('/', methods=['GET'])
def hello():
    return "connection works bruv!", 200

@app.route('/apps', methods=['GET'])
def get_applications():
    cursor.execute("SELECT * FROM application")
    result = cursor.fetchall()
    return jsonify(result), 200

if __name__ == "__main__":
    app.run(debug=True)