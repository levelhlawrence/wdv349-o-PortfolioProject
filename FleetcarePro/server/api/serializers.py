from rest_framework import serializers
from .models import VehicleProfile, Location, Employee, WorkOrder
from .serializers import UserSerializer

class VehicleProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = VehicleProfile
        fields = '__all__'


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'

class WorkOrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkOrder
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSerializer
        fields = ['id', 'username', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
