Level Lawrence
<br>
Analytics
<br>
WDV469-O

# Analytics Research

# **Localhost Analytics Implementation Plan for FleetCarePro**

## **1. Tracking Objectives**

Focusing on fleet maintenance KPIs during development phase:

### **Key Metrics to Track**

1. **Open Work Orders** - Total count of unresolved maintenance requests
2. **Longest Open Work Order** - Age (in days) of oldest unresolved ticket
3. **Repair Completion Time** - Average duration from ticket creation to resolution

## **2. Google Analytics 4 Implementation**

### **Localhost Setup**

```html
<!-- Add to <head> of your main HTML file -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  // Enable debug mode for localhost
  gtag("config", "G-XXXXXXXXXX", {
    debug_mode: true,
    transport_url: "https://www.google-analytics.com",
  });
</script>
```

### **Custom Event Tracking**

```javascript
// When work order is created:
gtag("event", "work_order_create", {
  work_order_id: "WO-12345",
  vehicle_id: "VH-67890",
  issue_type: "engine",
});

// When work order is resolved:
gtag("event", "work_order_resolve", {
  work_order_id: "WO-12345",
  duration_days: 3.5,
  technician: "john_doe",
});
```

## **3. Data Collection Strategy**

### **Custom Dashboard Setup**

1. **Real-Time Report**:
   - Open work orders (count of `work_order_create` minus `work_order_resolve` events)
2. **Exploration Report**:

   ```javascript
   // Calculate longest open work order
   gtag("event", "work_order_age", {
     work_order_id: "WO-12345",
     age_days: 7,
   });
   ```

3. **Average Repair Time**:
   - Create custom metric in GA4 for `duration_days`
   - Build report comparing average across vehicle types

## **4. Development Phase Tracking**

### **Mock Data Implementation**

```javascript
// Sample function to simulate work order flow
function simulateWorkOrder() {
  const issues = ["engine", "brakes", "electrical", "tires"];
  const randomIssue = issues[Math.floor(Math.random() * issues.length)];

  gtag("event", "work_order_create", {
    work_order_id: `WO-${Math.floor(Math.random() * 10000)}`,
    vehicle_id: `VH-${Math.floor(Math.random() * 100)}`,
    issue_type: randomIssue,
  });

  // Simulate resolution in 1-10 days
  setTimeout(() => {
    gtag("event", "work_order_resolve", {
      work_order_id: `WO-${Math.floor(Math.random() * 10000)}`,
      duration_days: Math.floor(Math.random() * 10) + 1,
      technician: "tech_" + ["A", "B", "C", "D"][Math.floor(Math.random() * 4)],
    });
  }, Math.random() * 5000);
}

// Run every 2-15 minutes
setInterval(simulateWorkOrder, (Math.random() * 13 + 2) * 60000);
```

## **5. Transition to Production**

### **Migration Checklist**

1. Update GA4 property to production environment
2. Remove debug mode from tracking code
3. Implement real work order system integration
4. Set up data retention policies (24 months recommended)

## **6. Sample Reports**

### **Work Order Dashboard**

| Metric           | Current Value | Trend      |
| ---------------- | ------------- | ---------- |
| Open Work Orders | 17            | ↑ 2%       |
| Longest Open     | 9 days        | WO-4821    |
| Avg. Repair Time | 3.2 days      | ↓ 0.5 days |

### **Maintenance Priority Alert**

```javascript
// Example alert for work orders >7 days old
if (workOrderAge > 7) {
  gtag("event", "priority_alert", {
    work_order_id: workOrderId,
    age_days: workOrderAge,
    issue_type: issueType,
  });
}
```
