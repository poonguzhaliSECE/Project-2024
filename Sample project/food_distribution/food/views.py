from django.shortcuts import render, redirect
from .models import FoodItem
from .forms import FoodItemForm

def add_food_view(request):
    if request.method == 'POST':
        form = FoodItemForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('food_list')
    else:
        form = FoodItemForm()
    return render(request, 'food/add_food.html', {'form': form})

def food_list_view(request):
    food_items = FoodItem.objects.all()
    return render(request, 'food/food_list.html', {'food_items': food_items})
