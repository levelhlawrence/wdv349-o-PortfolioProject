from rest_framework.viewsets import ModelViewSet
from .models import VehicleProfile, Employee, Location
from .serializers import VehicleProfileSerializer, LocationSerializer, EmployeeSerializer


# Create your views here.
class VehicleProfileViewSet(ModelViewSet):
    queryset = VehicleProfile.objects.all()
    serializer_class = VehicleProfileSerializer


class LocationViewSet(ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer


class EmployeeViewSet(ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
