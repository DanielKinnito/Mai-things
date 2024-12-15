from django.shortcuts import render
from rest_framework import viewsets
from .models import Tool
from .serializers import ToolSerializer
from django.http import HttpResponse
from ratelimit.decorators import ratelimit

class ToolViewSet(viewsets.ModelViewSet):
    queryset = Tool.objects.all()
    serializer_class = ToolSerializer

def home(request):
    return HttpResponse("Welcome to My AI Tools!")

@ratelimit(key='ip', rate='5/m', method='POST', block=True)
def add_tool(request):
    # Your view logic here
    pass
# Create your views here.
