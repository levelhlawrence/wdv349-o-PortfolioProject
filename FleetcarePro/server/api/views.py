from rest_framework.viewsets import ModelViewSet
from .models import Bus
from .serializers import BusSerializer


# Create your views here.
class BusViewSet(ModelViewSet):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer
