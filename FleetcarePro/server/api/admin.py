from django.contrib import admin
from .models import Location, VehicleProfile, Employee, WorkOrder


# Customize Location admin
admin.site.register(Location)

admin.site.register(VehicleProfile)

# Customize Employee admin
admin.site.register(Employee)

# Customize WorkOrder admin
admin.site.register(WorkOrder)      