from rest_framework import serializers
from .models import StudentProfile, TeacherProfile, FitnessActivity, Team

class StudentProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentProfile
        fields = '__all__'

class TeacherProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeacherProfile
        fields = '__all__'

class FitnessActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = FitnessActivity
        fields = '__all__'

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'