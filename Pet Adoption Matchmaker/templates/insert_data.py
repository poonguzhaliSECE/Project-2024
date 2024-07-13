from pymongo import MongoClient
from bs4 import BeautifulSoup
import os

# MongoDB connection URI
MONGO_URI = "mongodb://localhost:27017"
client = MongoClient(MONGO_URI)
db = client['your_database_name']
collection = db['your_collection_name']

def insert_html_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
        soup = BeautifulSoup(content, 'html.parser')
        # Extract relevant data from the HTML
        data = {
            'file_name': os.path.basename(file_path),
            'content': content,
            'title': soup.title.string if soup.title else 'No title'
        }
        result = collection.insert_one(data)
        print(f'Inserted {file_path} with id {result.inserted_id}')

def insert_css_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
        data = {
            'file_name': os.path.basename(file_path),
            'content': content
        }
        result = collection.insert_one(data)
        print(f'Inserted {file_path} with id {result.inserted_id}')

def insert_js_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
        data = {
            'file_name': os.path.basename(file_path),
            'content': content
        }
        result = collection.insert_one(data)
        print(f'Inserted {file_path} with id {result.inserted_id}')

def main():
    folder_path = '/path/to/your/extracted/files'
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            file_path = os.path.join(root, file)
            if file.endswith('.html'):
                insert_html_file(file_path)
            elif file.endswith('.css'):
                insert_css_file(file_path)
            elif file.endswith('.js'):
                insert_js_file(file_path)

if _name_ == "_main_":
    main()
