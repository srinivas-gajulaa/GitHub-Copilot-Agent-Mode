from django.contrib import admin
from .models import Team

@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('name', 'member_count')

    def member_count(self, obj):
        return len(obj.members)

    member_count.short_description = 'Number of Members'