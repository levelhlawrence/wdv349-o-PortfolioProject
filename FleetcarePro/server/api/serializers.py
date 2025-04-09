from rest_framework import serializers
from .models import VehicleProfile, Location, Employee, WorkOrder


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
#
# class TokenSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Token
#         fields = '__all__'

