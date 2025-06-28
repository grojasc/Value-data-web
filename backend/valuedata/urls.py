from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from valuedata.app.views import ContactViewSet

router = DefaultRouter()
router.register('contact', ContactViewSet, basename='contact')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
