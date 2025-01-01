from django.db import models


# Property model
class Location(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.name}'

    def get_buses(self):
        return self.buses.all()


# Bus model
class Bus(models.Model):
    VEHICLE_STATUS = [
        ('in_service', 'In Service'),
        ('in_shop', 'In Shop'),
        ('sold', 'Sold'),
        ('hard_down', 'Hard Down'),
        ('decommissioned', 'Decommissioned'),
    ]
    vehicle = models.IntegerField(unique=True)
    location = models.ForeignKey(Location, on_delete=models.SET_NULL, null=True, blank=True, related_name='buses')
    vin = models.CharField(max_length=17, unique=True)
    current_mileage = models.IntegerField()
    under_warranty = models.BooleanField()
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    license_plate = models.CharField(max_length=20, unique=True)
    status = models.CharField(max_length=50, choices=VEHICLE_STATUS, default='in_service')
    warranty_expiration = models.DateField(null=True, blank=True)
    last_service_date = models.DateField(null=True, blank=True)
    next_service_due = models.DateField(null=True, blank=True)

    def __str__(self):
        return f'{self.vehicle}'


# Employee
class Employee(models.Model):
    EMPLOYEE_ROLES = [
        ('mechanic_1', 'Mechanic I'),
        ('mechanic_2', 'Mechanic II'),
        ('mechanic_3', 'Mechanic III'),
        ('dispatch', 'Dispatch'),
        ('supervisor', 'Supervisor'),
        ('manager', 'Manager'),
        ('admin', 'Administrator'),
    ]
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    role = models.CharField(max_length=20, choices=EMPLOYEE_ROLES)
    assigned_bus = models.ForeignKey(
        Bus, on_delete=models.SET_NULL, null=True, blank=True
    )
    location = models.ForeignKey(
        Location, on_delete=models.SET_NULL, null=True, blank=True, related_name='employees')
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15)
    date_hired = models.DateField()
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} -- {self.role}"

    def get_employees(self):
        return self.employees.all()
