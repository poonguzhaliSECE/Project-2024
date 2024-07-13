from django.contrib import admin
from django.urls import include, path
from django.shortcuts import redirect

urlpatterns = [
    path('admin/', admin.site.urls),
    path('food/', include('food.urls')),
    path('', lambda request: redirect('food_list')),
]
