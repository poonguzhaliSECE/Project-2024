from django.urls import path
from .views import add_food_view, food_list_view

urlpatterns = [
    path('add/', add_food_view, name='add_food'),
    path('list/', food_list_view, name='food_list'),
]
