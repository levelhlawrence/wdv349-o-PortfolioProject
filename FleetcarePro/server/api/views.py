from rest_framework.viewsets import ModelViewSet
from .models import VehicleProfile, Employee, Location, WorkOrder
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import VehicleProfileSerializer, LocationSerializer, EmployeeSerializer, WorkOrdersSerializer, UserSerializer


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

class CreateUserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = User
    permission_classes = [AllowAny]