from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BusViewSet, LocationViewSet, EmployeeViewSet

router = DefaultRouter()

# api routes
router.register('bus', BusViewSet)
router.register('location', LocationViewSet)
router.register('employee', EmployeeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
