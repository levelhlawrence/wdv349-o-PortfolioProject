from django.contrib import admin
from .models import Location, VehicleProfile, Employee


# Customize Location admin
admin.site.register(Location)

admin.site.register(VehicleProfile)
# Customize Employee admin
admin.site.register(Employee)
