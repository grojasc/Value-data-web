from rest_framework import viewsets, serializers
from .models import ContactMessage

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'message', 'created']

class ContactViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all().order_by('-created')
    serializer_class = ContactSerializer
    http_method_names = ['post', 'get']
