from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BusViewSet

router = DefaultRouter()
router.register("bus", BusViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
