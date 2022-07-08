from django.urls import re_path
from ReportManager import views

urlpatterns=[
    re_path(r'^macchinario$', views.MacchinarioApi),
    re_path(r'^macchinario/([0-9]+)$', views.MacchinarioApi),
    
    re_path(r'^report$', views.ReportApi),
    re_path(r'^report/([0-9]+)$', views.ReportApi),

    re_path(r'^sellers$', views.SellersApi),
    re_path(r'^sellers/([0-9]+)$', views.SellersApi),

    re_path(r'^enduser$', views.UserApi),
    re_path(r'^enduser/([0-9]+)$', views.UserApi),

    re_path(r'^tecnico$', views.TecnicoApi),
    re_path(r'^tecnico/([0-9]+)$', views.TecnicoApi),

    re_path(r'^componente$', views.CompoApi),
    re_path(r'^componente/([0-9]+)$', views.CompoApi),
]
