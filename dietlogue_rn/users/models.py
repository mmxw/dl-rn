from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    height = models.PositiveSmallIntegerField(blank=True, null=True)
    weight = models.FloatField(blank=True, null=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, blank=True, null=True)
    dob = models.DateField(max_length=8, blank=True, null=True)
    profile_image = models.CharField(max_length=500, blank=True, null=True)
