from django.urls import path, include
from rest_framework import routers
from . import views
from .views import api_root

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'teams', views.TeamViewSet)
router.register(r'activities', views.ActivityViewSet)
router.register(r'leaderboards', views.LeaderboardViewSet)
router.register(r'workouts', views.WorkoutViewSet)

urlpatterns = [
    path('', api_root),              # Root endpoint
    path('api/', include(router.urls)),  # REST API routes
]
