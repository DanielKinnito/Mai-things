from django.db import models

class Tool(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    tags = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='photos/')
    icon = models.ImageField(upload_to='icons/')

    def __str__(self):
        return self.name
