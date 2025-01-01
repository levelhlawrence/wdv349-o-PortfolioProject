from rest_framework.viewsets import ModelViewSet
from .models import Bus, Employee, Location
from .serializers import BusSerializer, LocationSerializer, EmployeeSerializer


# Create your views here.
class BusViewSet(ModelViewSet):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer


class LocationViewSet(ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer


class EmployeeViewSet(ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
