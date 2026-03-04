from django.shortcuts import render
from .forms import ContactForm
from .models import Form
from django.contrib import messages
from django.core.mail import EmailMessage

def index(request):
    """Handle form submission"""
    if request.method == 'POST':
        form = ContactForm(request.POST)
        
        if form.is_valid():
            first_name = form.cleaned_data['first_name']
            last_name = form.cleaned_data['last_name']
            email = form.cleaned_data['email']
            date = form.cleaned_data['date']
            occupation = form.cleaned_data['occupation']
            
            Form.objects.create(
                first_name=first_name,
                last_name=last_name,
                email=email,
                date=date,
                occupation=occupation
            )
            
            msg_body = f"A new job application was submitted.\nThank You {first_name}!"
            email_msg = EmailMessage(
                "Form Submission Confirmation",
                msg_body,
               to=[email],
               bcc=["kumar425879@gmail.com"], 
            )
            email_msg.send()
            
            messages.success(request, "Form Submitted Successfully!")
    
    return render(request, "index.html")

def about(request):
    """Render about page"""

    return render(request, "about.html")
