#!/bin/bash
apt-get update -y
apt-get install git -y
apt-get install vim -y
apt-get install -y python python-setuptools python-dev build-essential python-pip python-mysqldb
pip install flask
pip install flask-mysql
git clone https://github.com/mmumshad/simple-webapp-flask.git
FLASK_APP=app.py flask run --host=0.0.0.0
chmod +x automation.sh

