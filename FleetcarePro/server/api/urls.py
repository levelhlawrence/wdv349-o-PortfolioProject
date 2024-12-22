from django.urls import path
from . import views
urlpatterns = [
    path('', views.BusListCreate.as_view(), name='bus-list-create'),
]