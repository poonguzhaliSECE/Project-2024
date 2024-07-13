# generator/forms.py

from django import forms

class PasswordGeneratorForm(forms.Form):
    length = forms.IntegerField(label='Length', min_value=6, max_value=30, initial=12)
    include_uppercase = forms.BooleanField(label='Include Uppercase Letters', required=False, initial=True)
    include_numbers = forms.BooleanField(label='Include Numbers', required=False, initial=True)
    include_special = forms.BooleanField(label='Include Special Characters', required=False, initial=False)
