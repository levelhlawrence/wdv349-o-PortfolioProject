from django.shortcuts import render
from rest_framework import generics
from .models import Bus
from .serializers import BusSerializer

# Create your views here.
class BusListCreate(generics.ListCreateAPIView):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer