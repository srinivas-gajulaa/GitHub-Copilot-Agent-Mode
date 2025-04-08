from django.core.management.base import BaseCommand
from octofit_tracker.models import Team
from bson import ObjectId

class Command(BaseCommand):
    help = 'Add sample teams with members to the team collection'

    def handle(self, *args, **kwargs):
        # Define sample teams
        sample_teams = [
            {
                '_id': ObjectId(),
                'name': 'Team Alpha',
                'members': [
                    {'_id': ObjectId(), 'name': 'Alice'},
                    {'_id': ObjectId(), 'name': 'Bob'}
                ]
            },
            {
                '_id': ObjectId(),
                'name': 'Team Beta',
                'members': [
                    {'_id': ObjectId(), 'name': 'Charlie'},
                    {'_id': ObjectId(), 'name': 'Diana'}
                ]
            }
        ]

        # Insert sample teams into the database
        for team_data in sample_teams:
            team = Team(
                _id=team_data['_id'],
                name=team_data['name'],
                members=team_data['members']
            )
            team.save()

        self.stdout.write(self.style.SUCCESS('Sample teams added successfully.'))
