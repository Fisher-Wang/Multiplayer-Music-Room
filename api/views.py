from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomSerializer
from .models import Room

# Create your views here.
# Endpoints(location on the webserver where you can go to)

class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()  # what to view
    serializer_class = RoomSerializer  # how to view