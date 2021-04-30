from django.urls import path
from .views import RoomView, CreateRoomView

urlpatterns = [
    # path('home/', main),  # if the url is like '/home/...', send it over to main function in view.py
    # path('', main)  # whatever the url is, send it over to main function in view.py
    path('room', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view()),
]
