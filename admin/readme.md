#### 1. Setup
Run this command to install packages/dependencies
```commandline
pip install -r requirements.txt
```
Run this command to migrate database
```commandline
py manage.py migrate
py manage.py createsuperuser
#### 2. How to run
In Windows:
```commandline
py manage.py runserver
```
In Linux/macOS
```commandline
python3 manage.py runserver
```