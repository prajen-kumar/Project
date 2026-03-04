from django.urls import path
from . import views

urlpatterns = [
    path('apply/', views.index, name='index'),
    path('', views.about, name='about'),
]