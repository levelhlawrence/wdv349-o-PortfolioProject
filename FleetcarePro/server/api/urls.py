from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VehicleProfileViewSet, LocationViewSet, EmployeeViewSet, WorkOrderViewSet, CreateUserViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = DefaultRouter()

# api routes
router.register('vehicle', VehicleProfileViewSet)
router.register('location', LocationViewSet)
router.register('employee', EmployeeViewSet)
router.register('workorder', WorkOrderViewSet)
router.register('createUser', CreateUserViewSet)
router.register('auth/token', TokenObtainPairView)


# urlpatterns

urlpatterns = [
    path('', include(router.urls)),
]
