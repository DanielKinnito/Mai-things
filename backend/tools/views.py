from django.shortcuts import render
from rest_framework import viewsets
from .models import Tool
from .serializers import ToolSerializer
from django.http import HttpResponse

class ToolViewSet(viewsets.ModelViewSet):
    queryset = Tool.objects.all()
    serializer_class = ToolSerializer

def home(request):
    return HttpResponse("Welcome to My AI Tools!")

# Create your views here.
