from django.core.management.base import BaseCommand
from octofit_tracker.models import Team
from bson import ObjectId

class Command(BaseCommand):
    help = 'Seed the database with two test teams and their members.'

    def handle(self, *args, **kwargs):
        # Define test teams
        test_teams = [
            {
                '_id': ObjectId(),
                'name': 'Team Rocket',
                'members': [
                    {'_id': str(ObjectId()), 'name': 'Jessie'},
                    {'_id': str(ObjectId()), 'name': 'James'},
                    {'_id': str(ObjectId()), 'name': 'Meowth'}
                ]
            },
            {
                '_id': ObjectId(),
                'name': 'Team Avengers',
                'members': [
                    {'_id': str(ObjectId()), 'name': 'Iron Man'},
                    {'_id': str(ObjectId()), 'name': 'Captain America'},
                    {'_id': str(ObjectId()), 'name': 'Thor'}
                ]
            }
        ]

        # Insert test teams into the database
        for team_data in test_teams:
            team = Team(
                _id=team_data['_id'],
                name=team_data['name'],
                members=team_data['members']
            )
            team.save()

        self.stdout.write(self.style.SUCCESS('Successfully seeded the database with test teams.'))
