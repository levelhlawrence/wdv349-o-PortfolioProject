from django.db import models

# Create your models here.

class Bus(models.Model):
    vehicle = models.IntegerField()
    vin = models.CharField(max_length=17)
    current_mileage = models.FloatField()
    under_warranty = models.BooleanField()
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    license_plate = models.CharField(max_length=20)
    status = models.CharField(max_length=50, choices=[
        ('active', 'Active'),
        ('inactive', 'Inactive'),
        ('maintenance', 'In Maintenance'),
        ('decommissioned', 'Decommissioned')
    ])
    is_down = models.BooleanField(default=False)
    last_service_date = models.DateField(null=True, blank=True)
    next_service_due = models.DateField(null=True, blank=True)

    def __str__(self):
        return f'Bus #{self.id} {self.vehicle} {self.year}'