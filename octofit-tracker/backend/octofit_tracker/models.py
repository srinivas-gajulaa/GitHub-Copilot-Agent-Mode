from django.db import models
from django.contrib.auth.models import User

class StudentProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    age = models.IntegerField()
    grade = models.CharField(max_length=10)
    total_steps = models.PositiveIntegerField(default=0)
    total_minutes_exercised = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.user.username

class TeacherProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    subject = models.CharField(max_length=100)
    bio = models.TextField()

    def __str__(self):
        return self.user.username

class FitnessActivity(models.Model):
    ACTIVITY_CHOICES = [
        ('Running', 'Running'),
        ('Walking', 'Walking'),
        ('Cycling', 'Cycling'),
        ('Swimming', 'Swimming'),
        ('Yoga', 'Yoga'),
    ]

    student = models.ForeignKey(StudentProfile, on_delete=models.CASCADE)
    date = models.DateField()
    activity_type = models.CharField(max_length=50, choices=ACTIVITY_CHOICES)
    duration_minutes = models.PositiveIntegerField()
    steps = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.activity_type} by {self.student.user.username} on {self.date}"

class Team(models.Model):
    name = models.CharField(max_length=100)
    members = models.ManyToManyField(StudentProfile)
    goal_description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name