import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'valuedata.settings')
django.setup()

from valuedata.app.models import ContactMessage


def run():
    ContactMessage.objects.create(name='Demo', email='demo@example.com', message='Hello')
    print('Demo data created')

if __name__ == '__main__':
    run()
