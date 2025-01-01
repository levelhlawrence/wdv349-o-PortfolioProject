from django.contrib import admin
from .models import Location, Bus, Employee


# Customize Location admin
@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'buses_count')
    readonly_fields = ('get_buses',)
    search_fields = ('name', 'address')
    list_filter = ('address',)

    def buses_count(self, obj):
        return obj.buses.count()

    buses_count.short_description = 'Number of Buses'

    def get_buses(self, obj):
        return "\n".join(
            [f"bus: {bus.vehicle} status: {bus.status} vin: {bus.vin} mileage: {bus.current_mileage}" for bus in
             obj.buses.all()])

    get_buses.short_description = 'Buses at this Location'


# Customize Bus admin
@admin.register(Bus)
class BusAdmin(admin.ModelAdmin):
    list_display = ('vehicle', 'vin', 'location', 'status', 'last_service_date')
    search_fields = ('vin', 'license_plate', 'make', 'model')
    list_filter = ('status', 'location')


# Customize Employee admin
admin.site.register(Employee)
