from django.db import models
from django.utils import timezone



# Token Model
# class Token(models.Model):
#     id = models.AutoField(primary_key=True)
#     token = models.CharField(max_length=255)
#     created_at = models.DateTimeField()
#     expires_at = models.DateTimeField()
#     is_used = models.BooleanField(default=False)

# Property model
class Location(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=10, null=True)
    state = models.CharField(max_length=10, null=True)
    zip = models.IntegerField(null=True)
    phone = models.CharField(max_length=10, null=True)
    fax = models.CharField(max_length=10, null=True)

    def __str__(self):
        return f'{self.name}'


# VehicleProfile model
class VehicleProfile(models.Model):
    veh_no = models.CharField(max_length=10, null=True)
    veh_make = models.CharField(null=True)
    body_model = models.CharField(null=True)
    fuel_type = models.CharField(null=True)
    vin_number = models.CharField(null=True)
    tag_no = models.CharField(null=True)
    body_year = models.CharField(null=True)
    current_location = models.ForeignKey(Location, on_delete=models.SET_NULL, related_name='buses', blank=True, null=True)
    next_ps_date = models.CharField(null=True)
    inservice_date = models.CharField(null=True)
    vehicle_class = models.CharField(null=True)
    month_1 = models.CharField(null=True)
    month_2 = models.CharField(null=True)
    month_3 = models.CharField(null=True)
    month_4 = models.CharField(null=True)
    month_5 = models.CharField(null=True)
    month_6 = models.CharField(null=True)
    month_7 = models.CharField(null=True)
    month_8 = models.CharField(null=True)
    month_9 = models.CharField(null=True)
    month_10 = models.CharField(null=True)
    month_11 = models.CharField(null=True)
    month_12 = models.CharField(null=True)
    month_13 = models.CharField(null=True)
    veh_model = models.CharField(null=True)
    chassis_year = models.CharField(null=True)
    orig_cost = models.CharField(null=True)
    cap = models.CharField(null=True)
    body_make = models.CharField(null=True)
    body_no = models.CharField(null=True)
    trans_serial_no = models.CharField(null=True)
    trans_manuf = models.CharField(null=True)
    trans_model = models.CharField(null=True)
    eng_type = models.CharField(null=True)
    eng_manuf = models.CharField(null=True)
    eng_model = models.CharField(null=True)
    eng_serial_no = models.CharField(null=True)
    last_in_shop = models.CharField(null=True)
    last_ps_date = models.CharField(null=True)
    next_oil_change = models.CharField(null=True)
    fuel_gal = models.CharField(null=True)
    last_fuel_mileage = models.CharField(null=True)
    ytd_fuel = models.CharField(null=True)
    current_mileage = models.CharField(null=True)
    sch_begin_mileage = models.CharField(null=True)
    labor_cost = models.CharField(null=True)
    parts_cost = models.CharField(null=True)
    other_cost = models.CharField(null=True)
    total_opr_cost = models.CharField(null=True)
    chassis_no = models.CharField(null=True)
    last_time_in = models.CharField(null=True)
    last_time_out = models.CharField(null=True)
    last_oil_change = models.CharField(null=True)
    status = models.CharField(null=True)
    gross_weight = models.CharField(null=True)
    gvw_front = models.CharField(null=True)
    tire_size = models.CharField(null=True)
    gvw_rear = models.CharField(null=True)
    wheel_base  = models.CharField(null=True)
    wheel_chair = models.CharField(null=True)
    assigned_shop = models.CharField(null=True)
    insp_group = models.CharField(null=True)
    bus_driver = models.CharField(null=True)
    status_date = models.CharField(null=True)
    trade_code = models.CharField(null=True)
    last_pm_mileage = models.CharField(null=True)
    next_pm_mileage = models.CharField(null=True)
    last_pm_date = models.CharField(null=True)
    next_pm_date = models.CharField(null=True)
    pm_month_1 = models.CharField(null=True)
    pm_month_2 = models.CharField(null=True)
    pm_month_3 = models.CharField(null=True)
    pm_class = models.CharField(null=True)

    def __str__(self):
         return f"{self.veh_no} | {self.veh_make} {self.veh_model}"

class Meta:
        db_table = 'vehicle_profile'
        managed = False


# Employee
class Employee(models.Model):
    id = models.AutoField(primary_key=True)
    EMPLOYEE_ROLES = [
        ('mechanic_1', 'Mechanic I'),
        ('mechanic_2', 'Mechanic II'),
        ('mechanic_3', 'Mechanic III'),
        ('dispatch', 'Dispatch'),
        ('supervisor', 'Supervisor'),
        ('it_team', 'IT Team'),
        ('manager', 'Manager'),
        ('admin', 'Administrator'),
        ('staff', 'Staff'),
    ]
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    role = models.CharField(max_length=20, choices=EMPLOYEE_ROLES)
    assigned_work_orders = models.ForeignKey(
        VehicleProfile, on_delete=models.SET_NULL, null=True, blank=True
    )
    location = models.ForeignKey(
        Location, on_delete=models.SET_NULL, null=True, blank=True, related_name='employees')
    email = models.EmailField(unique=True)
    # password = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15)
    date_hired = models.DateField()
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} : {self.role}"
    

# Work Orders
class WorkOrder(models.Model):
    custom_id = models.CharField(max_length=20, unique=True, editable=False)
    vehicle = models.ForeignKey('VehicleProfile', on_delete=models.CASCADE, related_name='work_orders')
    assigned_employee = models.ForeignKey('Employee', on_delete=models.SET_NULL, null=True, blank=True, related_name='work_orders')
    location = models.ForeignKey('Location', on_delete=models.SET_NULL, null=True, blank=True, related_name='work_orders')
    
    issue_description = models.TextField()
    notes = models.TextField(null=True, blank=True)
    labor_hours = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    parts_cost = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    total_cost = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    STATUS_CHOICES = [
        ('open', 'Open'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
        ('closed', 'Closed'),
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='open')

    def save(self, *args, **kwargs):
        if not self.custom_id:
            now = timezone.now()
            prefix = now.strftime("%Y-%m")
            count = WorkOrder.objects.filter(custom_id__startswith=prefix).count() + 1
            self.custom_id = f"{prefix}-{str(count).zfill(3)}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"WO {self.custom_id} - {self.vehicle}"
