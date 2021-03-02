from django.db import models

# Create your models here.
class Character(models.Model):
    num = models.IntegerField(default=0)
    name = models.CharField(max_length=100, default='')
    description = models.TextField(default='', max_length=400)

    def __str__(self):
        return self.name 