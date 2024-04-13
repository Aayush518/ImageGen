from django.shortcuts import render    
from django.http import HttpResponse

# return index page
def home(request):
    return render(request, 'index.html',{})