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
            my_mail="kumar425879@gmail.com"
            msg_body = f"Available date:{date}\nYour job application was submitted.\nThank You  {first_name} {last_name}!"
            email_msg = EmailMessage(
                "Job application Submission Confirmation",
                msg_body,
               to=[email],
               bcc=[my_mail],
                
            )
            msg_body=f"Name:{first_name},\n Date:{date},\n Occupation:{occupation}"
            em=EmailMessage(
                "INFO:-",
                msg_body,
                to=[my_mail],
            )
            email_msg.send()
            em.send()
            messages.success(request, "Form Submitted Successfully!")
    
    return render(request, "index.html")

def about(request):
    """Render about page"""
    return render(request, "about.html")
