import json
from django.urls import reverse
from rest_framework.test import APIClient


def test_contact_submission(db):
    client = APIClient()
    payload = {'name': 'John Doe', 'email': 'john@example.com', 'message': 'Hi'}
    response = client.post(reverse('contact-list'), data=payload, format='json')
    assert response.status_code == 201
    data = response.json()
    assert data['name'] == payload['name']
    assert data['email'] == payload['email']
