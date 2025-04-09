from rest_framework.viewsets import ModelViewSet
from .models import VehicleProfile, Employee, Location, WorkOrder
from .serializers import VehicleProfileSerializer, LocationSerializer, EmployeeSerializer, WorkOrdersSerializer


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

class WorkOrderViewSet(ModelViewSet):
    queryset = WorkOrder.objects.all()
    serializer_class = WorkOrdersSerializer