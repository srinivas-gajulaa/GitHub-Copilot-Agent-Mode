from rest_framework import viewsets
from .models import StudentProfile, TeacherProfile, FitnessActivity, Team
from .serializers import StudentProfileSerializer, TeacherProfileSerializer, FitnessActivitySerializer, TeamSerializer

class StudentProfileViewSet(viewsets.ModelViewSet):
    queryset = StudentProfile.objects.all()
    serializer_class = StudentProfileSerializer

class TeacherProfileViewSet(viewsets.ModelViewSet):
    queryset = TeacherProfile.objects.all()
    serializer_class = TeacherProfileSerializer

class FitnessActivityViewSet(viewsets.ModelViewSet):
    queryset = FitnessActivity.objects.all()
    serializer_class = FitnessActivitySerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer