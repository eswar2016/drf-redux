from django.db import models


class Todo(models.Model):
    text = models.CharField(max_length=300)
    marked = models.BooleanField(default=False)

    def __str__(self):
        return self.text

class Advertiser(models.Model):
    name = models.CharField(max_length=300)

    def __str__(self):
        return self.name