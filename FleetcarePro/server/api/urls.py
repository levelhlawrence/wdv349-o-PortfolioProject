from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VehicleProfileViewSet, LocationViewSet, EmployeeViewSet, WorkOrderViewSet

router = DefaultRouter()

# api routes
router.register('vehicle', VehicleProfileViewSet)
router.register('location', LocationViewSet)
router.register('employee', EmployeeViewSet)
router.register('workorder', WorkOrderViewSet)


# urlpatterns

urlpatterns = [
    path('', include(router.urls)),
]
