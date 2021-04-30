from django.db import models
import string
import random

# Create your models here.
# Fat model and Thin views. (Put most of your logic on your models)
# That's what Django trying to tell us to do

def generate_unique_code():
    length = 6

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=code):
            break

    return code
    

class Room(models.Model):
    # unique=True: field value must be unique among all objects
    code = models.CharField(max_length=8, 
                            default=generate_unique_code, 
                            unique=True)
    host = models.CharField(max_length=50, unique=True)
    # null=False: must pass a value 
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    create_at = models.DateTimeField(auto_now_add=True)
