from django.db import models

class FoodItem(models.Model):
    name = models.CharField(max_length=100)
    quantity = models.IntegerField()
    location = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
