# generator/views.py

from django.shortcuts import render
import random
import string
from .forms import PasswordGeneratorForm

def generate_password(length, use_uppercase, use_numbers, use_special):
    characters = string.ascii_letters  # lowercase and uppercase letters
    if use_uppercase:
        characters += string.ascii_uppercase
    if use_numbers:
        characters += string.digits
    if use_special:
        characters += string.punctuation

    password = ''.join(random.choice(characters) for _ in range(length))
    return password

def password_generator_view(request):
    password = None
    if request.method == 'POST':
        form = PasswordGeneratorForm(request.POST)
        if form.is_valid():
            length = form.cleaned_data['length']
            use_uppercase = form.cleaned_data['include_uppercase']
            use_numbers = form.cleaned_data['include_numbers']
            use_special = form.cleaned_data['include_special']
            password = generate_password(length, use_uppercase, use_numbers, use_special)
    else:
        form = PasswordGeneratorForm()

    return render(request, 'generator/password_generator.html', {'form': form, 'password': password})
